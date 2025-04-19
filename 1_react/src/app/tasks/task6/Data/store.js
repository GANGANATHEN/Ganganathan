import { create } from 'zustand';

export const useStore = create((set) => ({
  sharedState: null,
  setSharedState: (newState) => set({ sharedState: newState }),
}));
