import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/atoms/sidebar";
import { HomeIcon, PersonIcon, GearIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof Sidebar> = {
  title: "Atoms/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
          A responsive sidebar component that supports:
          - Multiple variants (sidebar, floating, inset)
          - Collapsible modes (offcanvas, icon, none)
          - Mobile responsiveness (auto-collapses below 768px)
          - Keyboard shortcuts:
            * Cmd/Ctrl + B: Toggle sidebar
            * ESC: Close sidebar (mobile only)
            * Cmd/Ctrl + Arrow Keys: Navigate sections
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <SidebarProvider defaultOpen>
        <Story />
      </SidebarProvider>
    ),
  ],
  argTypes: {
    side: {
      control: "radio",
      options: ["left", "right"],
      defaultValue: "left",
    },
    variant: {
      control: "select",
      options: ["sidebar", "floating", "inset"],
      defaultValue: "sidebar",
    },
    collapsible: {
      control: "select",
      options: ["offcanvas", "icon", "none"],
      defaultValue: "offcanvas",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

const InteractiveSidebar = ({
  side,
  variant,
  collapsible,
}: {
  side: "left" | "right";
  variant: "sidebar" | "floating" | "inset";
  collapsible: "offcanvas" | "icon" | "none";
}) => {
  const [activeSection, setActiveSection] = useState("home");
  const { setOpen, open } = useSidebar();
  const isMobile = window.innerWidth < 768;

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Toggle sidebar
      if ((e.metaKey || e.ctrlKey) && e.key === "b") {
        e.preventDefault();
        setOpen(!open);
      }
      // Close sidebar on ESC key (mobile only)
      if (e.key === "Escape" && isMobile) {
        e.preventDefault();
        setOpen(false);
      }
      // Navigation
      if ((e.metaKey || e.ctrlKey) && e.key === "ArrowRight") {
        e.preventDefault();
        const sections = ["home", "profile", "settings"];
        const currentIndex = sections.indexOf(activeSection);
        const nextIndex = (currentIndex + 1) % sections.length;
        setActiveSection(sections[nextIndex]);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "ArrowLeft") {
        e.preventDefault();
        const sections = ["home", "profile", "settings"];
        const currentIndex = sections.indexOf(activeSection);
        const prevIndex =
          currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
        setActiveSection(sections[prevIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [activeSection, setOpen, open, isMobile]);

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold">Home Dashboard</h1>
            <p className="mt-4">Welcome to your dashboard!</p>
          </div>
        );
      case "profile":
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold">User Profile</h1>
            <div className="mt-4">
              <p>Name: John Doe</p>
              <p>Email: john@example.com</p>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold">Settings</h1>
            <div className="mt-4">
              <label className="block mb-2">
                <input type="checkbox" className="mr-2" />
                Dark Mode
              </label>
              <label className="block mb-2">
                <input type="checkbox" className="mr-2" />
                Notifications
              </label>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar side={side} variant={variant} collapsible={collapsible}>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Home (Cmd/Ctrl + ←/→)"
                isActive={activeSection === "home"}
                onClick={() => setActiveSection("home")}
              >
                <HomeIcon />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Profile (Cmd/Ctrl + ←/→)"
                isActive={activeSection === "profile"}
                onClick={() => setActiveSection("profile")}
              >
                <PersonIcon />
                <span>Profile</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Settings (Cmd/Ctrl + ←/→)"
                isActive={activeSection === "settings"}
                onClick={() => setActiveSection("settings")}
              >
                <GearIcon />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <main className="flex-1">{renderContent()}</main>
    </div>
  );
};

const Template: Story = {
  render: (args) => (
    <SidebarProvider defaultOpen>
      <InteractiveSidebar
        side={args.side ?? "left"}
        variant={args.variant ?? "sidebar"}
        collapsible={args.collapsible ?? "offcanvas"}
      />
    </SidebarProvider>
  ),
};

export const Interactive: Story = {
  ...Template,
  args: {
    side: "left",
    variant: "sidebar",
    collapsible: "offcanvas",
  },
  parameters: {
    docs: {
      description: {
        story: `
This example shows all interactive features:
- Click on menu items to change content
- Use keyboard shortcuts to navigate
- Toggle sidebar visibility
- Responsive layout with mobile support
        `,
      },
    },
  },
};

export const Default: Story = {
  ...Template,
  args: {
    side: "left",
    variant: "sidebar",
    collapsible: "offcanvas",
  },
};

export const Floating: Story = {
  ...Template,
  args: {
    variant: "floating",
    collapsible: "icon",
  },
};

export const Inset: Story = {
  ...Template,
  args: {
    variant: "inset",
    collapsible: "none",
  },
};
