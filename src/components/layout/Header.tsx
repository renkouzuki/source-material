"use client";

import Link from "next/link";
import LanguageSwitcher from "../common/LanguageSwitcher";
import Avatar from "../common/Avatar";
import {
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarLink,
  SidebarFooter,
  Header,
  HeaderBrand,
  HeaderNav,
  HeaderNavItems,
  HeaderNavItem,
  HeaderActions,
} from "../common/ComposableHeader";

export default function AppHeader({ data, locale }) {
  return (
    <SidebarProvider position="right" overlay={true}>
      <Header reverseMobile={true}>
        <SidebarTrigger className="md:hidden" />

        <HeaderBrand>
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-600 to-indigo-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              SEO Kit
            </h1>
          </Link>
        </HeaderBrand>

        <HeaderNav>
          <HeaderNavItems>
            {data.map((item) => (
              <HeaderNavItem key={item.id} href={item.url}>
                {item.lang[0].vi}
              </HeaderNavItem>
            ))}
          </HeaderNavItems>

          <HeaderActions>
            <LanguageSwitcher locale={locale} />
            <Avatar showDropdown src="/avatar.jpg" />
          </HeaderActions>
        </HeaderNav>
      </Header>

      <Sidebar>
        <SidebarHeader>
          <Avatar src="/avatar.jpg" />
          <div>
            <h2 className="text-sm font-bold text-gray-800">John Doe</h2>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </SidebarHeader>

        <SidebarContent>
          {data.map((item) => (
            <SidebarLink key={item.id} href={item.url}>
              {item.lang[0].vi}
            </SidebarLink>
          ))}
        </SidebarContent>

        <SidebarFooter>
          <div className="space-y-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-2 mb-3">
              Language
            </div>
            <LanguageSwitcher locale={locale} inSidebar />
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}