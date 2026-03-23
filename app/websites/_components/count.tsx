//count pins component

import { create } from 'zustand';

interface PinnedWebsite {
  slug: string;
  title: string;
}

interface CountState {
  pins: PinnedWebsite[];
  addPin: (website: PinnedWebsite) => void;
  removePin: (slug: string) => void;
  isPinned: (slug: string) => boolean;
  getCount: () => number;
}

export const useCountStore = create<CountState>((set, get) => ({
  pins: [],
  addPin: (website: PinnedWebsite) =>
    set((state) => {
   
      if (!state.pins.some((p) => p.slug === website.slug)) {
        return { pins: [...state.pins, website] };
      }
      return state;
    }),
  removePin: (slug: string) =>
    set((state) => ({
      pins: state.pins.filter((p) => p.slug !== slug),
    })),
  isPinned: (slug: string) => {
    return get().pins.some((p) => p.slug === slug);
  },
  getCount: () => {
    return get().pins.length;
  },
}));
