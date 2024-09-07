import { FC } from 'react';
import TaskDropdown from '../dropdown/TaskDropdown';
import './styles.css';
import { useStore } from '@/app/ui/store/TaskStore';


type TaskCardProps = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
}


const TaskCard: FC<TaskCardProps> = ({id, title, subtitle, description}) => {

    const removeTask = useStore((state) => state.removeTask);

    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                <p className="card-text">{description}</p>
                <div className="d-flex gap-2  mt-3">
                    <button className="btn btn-link p-0 btn-icon star">
                        <i className="bi bi-star"></i>
                    </button>
                    <button className="btn btn-link p-0 btn-icon trash" onClick={() => removeTask(id)}>
                        <i className="bi bi-trash"></i>
                    </button>

                    <div className="ms-auto">
                        <TaskDropdown />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default TaskCard;
