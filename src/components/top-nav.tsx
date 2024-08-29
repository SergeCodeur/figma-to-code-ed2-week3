"use client";
import { AddWallet, Menu } from "@/assets/icons";
import useSidebarStore from "@/store/use-sidebar-store";
import { Button } from "./ui/button";
import CurrencySelector from "./ui/currency-selector";
import { ThemeToggleIcon } from "./ui/theme-toggle-btn";

const TopNav = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  return (
    <div className="w-full flex items-center justify-between px-6 py-3 border-b border-border sticky top-0 z-[9] bg-background">
      <div className="flex items-center gap-1.5 lg:gap-2">
        <Button
          size="icon-xs"
          variant="icon-button"
          className="lg:hidden"
          onClick={toggleSidebar}
        >
          <Menu />
        </Button>
        <div className="w-[175px]">
          <h2 className="text-tokena-dark dark:text-tokena-light-gray text-sm font-semibold">
            Dashboard
          </h2>
          <h3 className="text-tokena-dark-gray dark:text-tokena-gray text-xs font-medium">
            Welcome back, John Doe
          </h3>
        </div>
        <Button className="max-lg:hidden">
          <AddWallet />
          <span className="block">Connect wallet</span>
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <CurrencySelector />
        <ThemeToggleIcon />
      </div>
    </div>
  );
};

export default TopNav;
