import { create } from "zustand";

export const useClaimStore = create((set) => ({
  selectedNode: null,
  aiExplanation: "",
  isAiSheetOpen: false,

  setSelectedNode: (node) => set({ selectedNode: node }),
  setAiExplanation: (text) => set({ aiExplanation: text }),
  setIsAiSheetOpen: (value) => set({ isAiSheetOpen: value }),
}));