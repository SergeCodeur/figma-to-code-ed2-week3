import {
  Bell,
  Chart,
  CreditCard,
  HeadPhone,
  Home,
  Invoice,
  News,
  Reports,
  Settings,
  Wallet,
} from "@/assets/icons";
import { BalanceCardProps, SidebarLinkProps } from "@/types";

export const SidebarLink: SidebarLinkProps[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "News",
    href: "/dashboard/news",
    icon: News,
  },
  {
    label: "Activities",
    href: "#",
    icon: Chart,
  },
  {
    label: "Card",
    href: "#",
    icon: CreditCard,
  },
  {
    label: "Reports",
    href: "#",
    icon: Reports,
    subLinks: [
      {
        label: "Report 1",
        href: "#",
        icon: Reports,
      },
    ],
  },
  {
    label: "Notifications",
    href: "#",
    icon: Bell,
  },
  {
    label: "Billing",
    href: "#",
    icon: Wallet,
  },
  {
    label: "Invoice",
    href: "#",
    icon: Invoice,
  },
  {
    label: "Help center",
    href: "#",
    icon: HeadPhone,
  },
  {
    label: "Settings",
    href: "#",
    icon: Settings,
  },
];

export const BalanceData: BalanceCardProps[] = [
  {
    title: "Balance",
    amount: "$63,755,200",
  },
];
