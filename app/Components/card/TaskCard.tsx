import { FC } from 'react';
import TaskDropdown from '../dropdown/TaskDropdown';
import { useStore } from '@/app/ui/store/TaskStore';
import './styles.css';


type TaskCardProps = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    isFavorite: boolean;
}


const TaskCard: FC<TaskCardProps> = ({id, title, subtitle, description, isFavorite}) => {

    const removeTask = useStore((state) => state.removeTask);
    const toggleFavorite = useStore((state) => state.toggleFavorite);

    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                <p className="card-text">{description}</p>
                <div className="d-flex gap-2  mt-3">
                    <button  className={`btn btn-link p-0 btn-icon star ${isFavorite ? 'text-warning' : ''}`}
                        aria-label="Star Task"
                        onClick={() => toggleFavorite(id)}
                    >
                        <i className={`bi ${isFavorite ? 'bi-star-fill' : 'bi-star'}`}></i>
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
