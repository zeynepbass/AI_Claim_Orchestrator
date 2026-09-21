import { create } from "zustand";

export const useClaimStore = create((set) => ({
  selectedNode: null,
  isAiSheetOpen: false,

  openExplanation: (node) => set({ selectedNode: node, isAiSheetOpen: true }),
  setIsAiSheetOpen: (value) => set({ isAiSheetOpen: value }),
}));
