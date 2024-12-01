"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldErrors } from "react-hook-form";
import * as z from "zod";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../../atoms/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../atoms/form";
import { Input } from "../../atoms/input";
import { useToast } from "../../shadcn-hooks/use-toast";
import { PasswordStrength } from "@/utils/auth/password-strength";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../atoms/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../atoms/tabs";
import { 
  signInWithCredentialsAction, 
  signInWithMagicLinkAction, 
  registerAction 
} from "@/actions/auth-actions";
//=============================================================================
// VALIDATION SCHEMAS
//=============================================================================
/** Schema for password validation with specific requirements */
const passwordSchema = z.string()
  .min(12, { message: "Password must be at least 12 characters long." })
  .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
  .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
  .regex(/[0-9]/, { message: "Password must contain at least one number." })
  .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character." })
  .max(128, { message: "Password cannot exceed 128 characters." });

/** Schema for email validation */
const emailSchema = z.string()
  .email({ message: "Please enter a valid email address." })
  .min(5, { message: "Email must be at least 5 characters long." })
  .max(254, { message: "Email cannot exceed 254 characters." })
  .toLowerCase();

/** Combined schemas for different form types */
const schemas = {
  login: z.object({
    email: emailSchema,
    password: passwordSchema,
  }),
  magicLink: z.object({
    email: emailSchema,
  }),
  register: z.object({
    name: z.string()
      .min(2, { message: "Name must be at least 2 characters." })
      .max(100, { message: "Name cannot exceed 100 characters." })
      .regex(/^[a-zA-Z\s-']+$/, { 
        message: "Name can only contain letters, spaces, hyphens, and apostrophes." 
      }),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  }),
};

//=============================================================================
// TYPE DEFINITIONS
//=============================================================================
type LoginFormValues = z.infer<typeof schemas.login>;
type MagicLinkFormValues = z.infer<typeof schemas.magicLink>;
type RegisterFormValues = z.infer<typeof schemas.register>;

//=============================================================================
// MAIN COMPONENT
//=============================================================================
/**
 * AuthForm Component
 * Handles user authentication with multiple methods:
 * - Password-based login
 * - Magic link login
 * - New user registration
 */
export default function AuthForm() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState({
    credentials: false,
    magicLink: false,
    register: false,
  });

  //=============================================================================
  // FORM INITIALIZATION
  //=============================================================================
  const forms = {
    login: useForm<LoginFormValues>({
      resolver: zodResolver(schemas.login),
      defaultValues: { email: "", password: "" },
    }),
    magicLink: useForm<MagicLinkFormValues>({
      resolver: zodResolver(schemas.magicLink),
      defaultValues: { email: "" },
    }),
    register: useForm<RegisterFormValues>({
      resolver: zodResolver(schemas.register),
      defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
    }),
  };

  //=============================================================================
  // ERROR HANDLING
  //=============================================================================
  /**
   * Generic error handler for form submissions
   * Displays validation errors in a toast notification
   */
  const handleFormError = (errors: FieldErrors<any>, title: string) => {
    const errorMessages = Object.values(errors)
      .map((error) => error?.message ?? "Unknown error")
      .join("\n");

    toast({
      title,
      description: errorMessages,
      variant: "destructive",
    });
  };

  //=============================================================================
  // FORM SUBMISSION HANDLERS
  //=============================================================================
  const handleSubmit = {
    /** Handles credential-based sign in submission */
    signInWithCredentials: async (values: LoginFormValues) => {
      setIsLoading(prev => ({ ...prev, credentials: true }));
      try {
        toast({
          title: "Authenticating",
          description: "Please wait while we verify your credentials...",
        });
        await signInWithCredentialsAction(values);
        toast({
          title: "Login Successful",
          description: "Welcome back!",
        });
        router.refresh()
      } catch (error) {
        toast({
          title: "Login Failed",
          description: error instanceof Error ? error.message : "An unexpected error occurred",
          variant: "destructive",
        });
      } finally {
        setIsLoading(prev => ({ ...prev, credentials: false }));
      }
    },
    /** Handles magic link sign in submission */
    signInWithMagicLink: async (values: MagicLinkFormValues) => {
      setIsLoading(prev => ({ ...prev, magicLink: true }));
      try {
        toast({
          title: "Sending Magic Link",
          description: "Please wait while we prepare your login link...",
        });
        await signInWithMagicLinkAction(values);
        toast({
          title: "Magic Link Sent",
          description: `A login link has been sent to ${values.email}`,
        });
      } catch (error) {
        toast({
          title: "Magic Link Failed",
          description: error instanceof Error ? error.message : "Failed to send magic link",
          variant: "destructive",
        });
      } finally {
        setIsLoading(prev => ({ ...prev, magicLink: false }));
      }
    },
    /** Handles new user registration submission */
    register: async (values: RegisterFormValues) => {
      setIsLoading(prev => ({ ...prev, register: true }));
      try {
        toast({
          title: "Creating Account",
          description: "Please wait while we set up your account...",
        });
        await registerAction(values);
        toast({
          title: "Account Created",
          description: `Welcome, ${values.name}! Your account has been created.`,
        });
      } catch (error) {
        toast({
          title: "Registration Failed",
          description: error instanceof Error ? error.message : "Failed to create account",
          variant: "destructive",
        });
      } finally {
        setIsLoading(prev => ({ ...prev, register: false }));
      }
    },
  };

  //=============================================================================
  // RENDER METHODS
  //=============================================================================
  /** Renders the login form with password and magic link tabs */
  const renderLoginForm = () => (
    <Tabs defaultValue="password" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="magic-link">Magic Link</TabsTrigger>
      </TabsList>
      <TabsContent value="password">
        <Form {...forms.login}>
          <form
            onSubmit={forms.login.handleSubmit(
              handleSubmit.signInWithCredentials,
              (errors) => handleFormError(errors, "Login Error")
            )}
            className="space-y-8"
          >
            <FormField
              control={forms.login.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={forms.login.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      {...field}
                    />
                  </FormControl>
                  {field.value && (
                    <div className="space-y-2">
                      <PasswordStrength password={field.value} />
                    </div>
                  )}
                  <FormMessage />
                  <Button
                    type="button"
                    variant="link"
                    className="px-0 text-sm text-muted-foreground hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push('/forgot-password');
                    }}
                  >
                    Forgot your password?
                  </Button>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading.credentials}>
              {isLoading.credentials ? "Logging in..." : "Login with Password"}
            </Button>
          </form>
        </Form>
      </TabsContent>
      <TabsContent value="magic-link">
        <Form {...forms.magicLink}>
          <form
            onSubmit={forms.magicLink.handleSubmit(
              handleSubmit.signInWithMagicLink,
              (errors) => handleFormError(errors, "Magic Link Error")
            )}
            className="space-y-8"
          >
            <FormField
              control={forms.magicLink.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading.magicLink}>
              {isLoading.magicLink ? "Sending..." : "Send Magic Link"}
            </Button>
          </form>
        </Form>
      </TabsContent>
    </Tabs>
  );

  /** Renders the registration form */
  const renderRegistrationForm = () => (
    <Form {...forms.register}>
      <form
        onSubmit={forms.register.handleSubmit(
          handleSubmit.register,
          (errors) => handleFormError(errors, "Registration Error")
        )}
        className="space-y-4"
      >
        <FormField
          control={forms.register.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={forms.register.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={forms.register.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="••••••••"
                  {...field}
                />
              </FormControl>
              {field.value && (
                <div className="space-y-2">
                  <PasswordStrength password={field.value} showRules />
                </div>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={forms.register.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="••••••••"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              {field.value && forms.register.getValues("password") === field.value && (
                <p className="text-sm text-green-600">Passwords match!</p>
              )}
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading.register}>
          {isLoading.register ? "Creating Account..." : "Create Account"}
        </Button>
      </form>
    </Form>
  );

  //=============================================================================
  // MAIN RENDER
  //=============================================================================
  return (
    <Card className="w-full h-full rounded-lg shadow-lg">
      <CardHeader className="space-y-1">
        {!isLogin && (
          <Button
            variant="ghost"
            className="w-fit p-0 mb-2"
            onClick={() => setIsLogin(true)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Login
          </Button>
        )}
        <CardTitle className="text-2xl font-semibold">
          {isLogin ? "Login" : "Create Account"}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500">
          {isLogin
            ? "Enter your credentials to access your account."
            : "Fill in your details to create a new account."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLogin ? renderLoginForm() : renderRegistrationForm()}
      </CardContent>
      <CardFooter className="flex justify-center">
        {isLogin && (
          <Button
            variant="link"
            onClick={() => setIsLogin(false)}
            className="text-sm text-primary hover:underline"
          >
            Need an account?
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
