"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, Lock, ScanEye, Settings, Shield, Users ,Bot } from "lucide-react"
import { cn } from "@/lib/utils"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/atoms/accordion"
import { ScrollArea } from "@/components/atoms/scroll-area"

// Types
type AgentItem = {
  title: string
  url: string
  agentIcon: React.ComponentType<{ className?: string }>
}

type MenuItem = {
  title: string
  url: string
  icon: React.ComponentType<{ className?: string }>
}

// Menu items
const agentItems: AgentItem[] = [
  { title: "Agent 1", url: "/agents/1", agentIcon: Users },
  { title: "Agent 2", url: "/agents/2", agentIcon: Users },
  { title: "Agent 3", url: "/agents/3", agentIcon: Users },
]

const items: MenuItem[] = [
  {
    title: "Operatezen",
    url: "/operatezen",
    icon: ScanEye,
  },
  {
    title: "Securezen",
    url: "/securezen",
    icon: Shield,
  },
  {
    title: "Admin",
    url: "#",
    icon: Lock,
  },
  {
    title: "Docs",
    url: "#",
    icon: FileText,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="agents" className="border-none">
                    <AccordionTrigger 
                      className={cn(
                        "flex items-center justify-start pl-2 py-2 transition-colors ",
                        pathname.startsWith('/agents') 
                          ? "text-primary" 
                          : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      <Bot className="h-4 w-4 mr-2" />
                 
                      <span>Agentzen</span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pb-0">
                      <ScrollArea className="h-[200px]">
                        <div className="space-y-0.5">
                          {agentItems.map((agent) => (
                            <Link
                              key={agent.title}
                              href={agent.url}
                              className={cn(
                                "flex items-center gap-2 px-2 py-1.5 rounded-md transition-all duration-200 ease-in-out",
                                pathname === agent.url
                                  ? "text-primary font-medium bg-primary/10 shadow-sm translate-x-1"
                                  : "text-muted-foreground hover:text-primary hover:bg-primary/5 hover:translate-x-1"
                              )}
                            >
                              <agent.agentIcon className={cn(
                                "h-4 w-4 transition-transform duration-200",
                                pathname === agent.url 
                                  ? "scale-110" 
                                  : "group-hover:scale-110"
                              )} />
                              <span>{agent.title}</span>
                            </Link>
                          ))}
                        </div>
                      </ScrollArea>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </SidebarMenuItem>

              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={cn(
                        "flex items-center gap-2 px-2 py-1.5 rounded-md transition-all duration-200 ease-in-out",
                        pathname === item.url
                          ? "text-primary font-medium bg-primary/10 shadow-sm translate-x-1"
                          : "text-muted-foreground hover:text-primary hover:bg-primary/5 hover:translate-x-1"
                      )}
                    >
                      <item.icon className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        pathname === item.url 
                          ? "scale-110" 
                          : "group-hover:scale-110"
                      )} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
