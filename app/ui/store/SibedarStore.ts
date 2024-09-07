import {create} from 'zustand';
import { tags } from '../../data'

type Tag = {
    name: string;
    colorClass: string;
};

type StoreState = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    tags: Tag[];
};

export const useStore = create<StoreState>((set) => ({
    activeTab: '',
    setActiveTab: (tab) => set({ activeTab: tab }),
    tags: tags
}));

