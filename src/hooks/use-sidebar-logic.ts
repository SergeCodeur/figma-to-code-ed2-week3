import useSidebarStore from "@/store/use-sidebar-store";
import useClickOutside from "./use-outside-click";

const useSidebarLogic = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const sidebarRef = useClickOutside(toggleSidebar, isSidebarOpen);

  return { isSidebarOpen, sidebarRef };
};

export default useSidebarLogic;
