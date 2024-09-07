'use client'

import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "@/app/validations/TaskSchema";
import './styles.css';
import { useStore } from "@/app/ui/store/TaskStore";

type Inputs = {
  title: string;
  description: string;
}

const AddTaskModal: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({ 
    defaultValues:{title: "", description: ""},
    resolver: zodResolver(taskSchema),
  });

  const addTask = useStore((state) => state.addTask);

  const onSubmit:SubmitHandler<Inputs> = (data, event) => {
    event?.preventDefault();
    const newTask = {
      id: Date.now(),
      title: data.title,
      subtitle: new Date().toLocaleDateString(),
      description: data.description,
      isFavorite: false,
    };
    addTask(newTask);
    console.log(data);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary btn-lg custom-btn-shadow"
        data-bs-toggle="modal"
        data-bs-target="#addTaskModal"
      >
        Incorporate New Task
      </button>

      <div className="modal fade" id="addTaskModal" tabIndex={-1} aria-labelledby="addTaskModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered custom-modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addTaskModalLabel">Add Task</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input
                    type="text"
                    className={`form-control ${errors.title ? 'is-invalid' : '' }`}
                    id="title"
                    {...register('title')}
                  />
                  {errors.title?.message && <div className="invalid-feedback">{errors.title?.message}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                    id="description"
                    rows={3}
                    {...register('description')}
                  ></textarea>
                  {errors.description?.message && <div className="invalid-feedback">{errors.description?.message}</div>}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
                  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
