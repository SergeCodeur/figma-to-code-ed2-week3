"use client";
import logo from "@/assets/images/logo.svg";
import useSidebarLogic from "@/hooks/use-sidebar-logic";
import Image from "next/image";
import SidebarLinks from "./sidebar-links";
import UserProfile from "./user-profile";

const Sidebar = () => {
  const { isSidebarOpen, sidebarRef } = useSidebarLogic();

  return (
    <>
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen
            ? "max-lg:-translate-x-[0%]"
            : "max-lg:-translate-x-full"
        } max-lg:fixed z-[11] bg-background flex flex-col items-center justify-between w-[240px] h-full py-4 px-3.5 border-r border-tokena-gray dark:border-border transition-transform duration-300 overflow-y-auto overflow-x-hidden`}
      >
        <div className="space-y-9">
          <Image
            src={logo}
            alt="logo"
            priority
            width={212}
            height={60}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
          <div className="space-y-5">
            <span className="text-sm font-medium text-tokena-dark-gray block">
              Menu
            </span>
            <nav>
              <SidebarLinks />
            </nav>
          </div>
        </div>
        <UserProfile />
      </div>
      {isSidebarOpen && <div className="fixed inset-0 bg-black/25 z-10"></div>}
    </>
  );
};

export default Sidebar;
