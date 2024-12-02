import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/atoms/input";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/atoms/form";

const meta: Meta<typeof Form> = {
  title: "Atoms/Form",
  component: Form,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Form>;

const renderForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });
  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormDescription>Enter your full name</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input {...field} type="email" />
            </FormControl>
            <FormDescription>Enter your email</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
};

export const Default: Story = {
  render: renderForm,
};
