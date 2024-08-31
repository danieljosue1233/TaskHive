import {create} from 'zustand';

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
    tags: [
        { name: 'Personal', colorClass: 'text-success' },
        { name: 'Work', colorClass: 'text-warning' },
        { name: 'Social', colorClass: 'text-primary' },
        { name: 'Important', colorClass: 'text-danger' },
    ],
}));

