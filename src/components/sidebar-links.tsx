"use client";
import { ChevronDown } from "@/assets/icons";
import { SidebarLink } from "@/constants/data";
import { SidebarLinkProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const SidebarLinks: React.FC = () => {
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([]);
  const router = usePathname();

  const toggleSubMenu = (label: string) => {
    setOpenSubMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const renderLinks = (links: SidebarLinkProps[]) => {
    return links.map((link, index) => (
      <li key={index}>
        <Link
          onClick={() => link.subLinks && toggleSubMenu(link.label)}
          className={`flex items-center gap-1.5 px-2 py-3 rounded-xl border border-transparent ${
            router === link.href
              ? "bg-tokena-blue dark:bg-tokena-blue/70 dark:border-tokena-blue border text-tokena-white font-semibold"
              : "font-medium text-tokena-dark"
          }`}
          href={link.href}
        >
          <link.icon className="w-[18px] h-[18px]" />
          <span className="block text-xs">{link.label}</span>
          {link.subLinks && (
            <ChevronDown
              style={{
                marginLeft: "auto",
                transform: openSubMenus.includes(link.label)
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            />
          )}
        </Link>
        {link.subLinks && (
          <ul
            className={`pl-4 overflow-hidden transition-max-height duration-300 ease-in-out ${
              openSubMenus.includes(link.label) ? "max-h-40" : "max-h-0"
            }`}
          >
            {renderLinks(link.subLinks)}
          </ul>
        )}
      </li>
    ));
  };

  return <ul>{renderLinks(SidebarLink)}</ul>;
};

export default SidebarLinks;
