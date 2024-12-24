"use client"

import { useRouter } from "next/navigation"
import { Calendar, Mail, UserPlus, User, LayoutDashboard, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items with context-specific icons.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Inbox Requests",
    url: "/dashboard/inbox",
    icon: Mail,
  },
  {
    title: "Sent Requests",
    url: "/dashboard/sent-requests",
    icon: Calendar,
  },
  {
    title: "Ask Referral",
    url: "/dashboard/ask-referral",
    icon: UserPlus,
  },
  {
    title: "Update Profile",
    url: "/dashboard/profile",
    icon: User,
  },
]

export function AppSidebar() {
  const router = useRouter()

  const handleLogout = () => {
    // Add your logout logic here
    // For example:
    // await signOut()
    router.push("/sign-in")
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-xl font-bold px-4 py-2">Refer Me</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}

