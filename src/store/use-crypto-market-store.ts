import { CryptoMarketState } from "@/types";
import { create } from "zustand";

const useCryptoMarketStore = create<CryptoMarketState>((set) => ({
  cryptoMarketData: [],
  setCryptoMarketData: (cryptoMarketData) => set({ cryptoMarketData }),
}));

export default useCryptoMarketStore;
