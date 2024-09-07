"use client"

import { FC } from "react";
import TaskCard from "../card/TaskCard";
import './styles.css';
import { useStore } from "@/app/ui/store/TaskStore";

const TaskBody: FC = () => {

    const { tasks } = useStore();

    return (
        <div className="flex flex-column align-items-center  min-vh-100 p-5" style={{ backgroundImage: "url('/assets/images/grid.jpg')", backgroundSize: 'cover' }}>
            <div className="d-flex flex-column gap-4 align-items-center text-center max-w-75">
                <h1 className="display-1 fw-semibold text-dark custom-text-shadow">
                    OrganizaYa
                </h1>
                <p className="text-secondary fs-5">
                    Descubre una nueva forma de gestionar tus tareas diarias con nuestra aplicación intuitiva y eficiente.
                </p>
            </div>

            <div className="row gap-4 g-lg-0 gx-lg-3 flex-grow-1 justify-content-center">
                {tasks.map((task)=> (
                    <div className="col" key={task.id}>
                        <TaskCard {...task} />
                    </div>
                ))}
            </div>


        </div>
    );
}

export default TaskBody;