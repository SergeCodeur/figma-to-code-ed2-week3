"use client";

import { Moon, Sun } from "@/assets/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./button";

const ThemeToggleIcon = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button size="icon-xs" variant="icon-button">
        <Moon />
      </Button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      size="icon-xs"
      variant="icon-button"
      onClick={toggleTheme}
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
};

export { ThemeToggleIcon };
