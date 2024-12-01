import React from "react"
import LoginForm from "../molecules/auth/auth-form"
import Image from "next/image"
import Link from "next/link"
import AuthForm from "@/components/molecules/auth/auth-form"


export default function LandingPage() {
  return (
    <div className="relative h-screen w-full bg-gray-50">
      <Image
        src="/images/landing-bg/landing-bg-lg-2x.png"
        alt="Background"
        fill
        className=" object-cover xl:object-contain"
        quality={100}
        priority
      />
      <div className="relative z-10 container mx-auto px-4 py-4 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div className="max-w-lg mx-auto lg:mx-0 lg:h-[600px] flex flex-col justify-start">
            <div className="mb-8">
              <Image
                src="/images/logo/logo-with-name.png"
                alt="Oraczen AI Logo"
                width={150}
                height={40}
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>
            <div className="hidden lg:block space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Zen AI Platform
              </h1>
              <p className="text-lg text-gray-600">
                Your Enterprise AI Journey Starts Here
              </p>
              <div>
                <a
                  href="https://oraczen.ai"
                  className="inline-block bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg max-w-md mx-auto lg:mx-0 w-full overflow-hidden lg:mt-0">
            <AuthForm />
          </div>
        </div>
      </div>
    </div>
  );
}
