import { ToggleOverviewProps } from "@/types";
import { create } from "zustand";

const useToggleCoinOverview = create<ToggleOverviewProps>((set) => ({
  isOverviewOpen: false,
  selectedCoinId: null,
  setIsOverviewOpen: (isOpen) => set({ isOverviewOpen: isOpen }),
  setSelectedCoinId: (id) => set({ selectedCoinId: id }),
}));

export default useToggleCoinOverview;
