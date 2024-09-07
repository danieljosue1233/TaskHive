import { create } from "zustand";
import { persist } from "zustand/middleware";

type Task = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
};

type StoreState = {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (id: number) => void;
};

export const useStore = create<StoreState>()(
    persist(
        (set) => ({
            tasks: [],
            addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
            removeTask: (id) =>
                set((state) => ({
                    tasks: state.tasks.filter((task) => task.id !== id),
                })),
        }),
        {
            name: "task-storage",
        }
    )
);
