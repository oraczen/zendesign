"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/atoms/dropdown-menu";
import logo from "@/public/images/logo/logo-with-name.png";
import { signOutAction } from "@/actions/auth-actions";

export default function TopNavbar() {
    const[user_session, setUserSession] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch("/api/private-routes/user/get-user-session");
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              const result = await response.json();
              setUserSession(result);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
        
          fetchData();
      
    }, []);
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src={logo}
            alt="Oraczen AI Logo"
            priority
          />
          <span className="sr-only">Oraczen AI</span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild aria-label="User menu">
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="User Avatar"
              />
              <AvatarFallback>{user_session?.data?.session?.user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {user_session && user_session.data && user_session.data.session ? (
              <DropdownMenuItem className="hover:cursor-pointer">
                {user_session.data.session.user.email}
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem className="hover:cursor-pointer">
                No user session available
              </DropdownMenuItem>
            )}
            <DropdownMenuItem className="hover:cursor-pointer" onSelect={() => console.log("Profile clicked")}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:cursor-pointer" onSelect={() => console.log("Settings clicked")}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:cursor-pointer" onSelect={() => signOutAction()}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
