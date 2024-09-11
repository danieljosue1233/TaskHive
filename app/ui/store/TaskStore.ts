import { create } from "zustand";
import { persist } from "zustand/middleware";

type Task = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    isFavorite: boolean;
};

type StoreState = {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (id: number) => void;
    toggleFavorite: (id: number) => void; 
};

export const useTaskStore = create<StoreState>()(
    persist(
        (set) => ({
            tasks: [],
            addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
            removeTask: (id) =>
                set((state) => ({
                    tasks: state.tasks.filter((task) => task.id !== id),
                })),
            toggleFavorite: (id) => set((state) => 
                ({tasks: state.tasks.map(task => task.id === id? 
                {...task, isFavorite: !task.isFavorite}: task)}))
        }),
        {
            name: "task-storage",
        }
    )
);
