import { FC } from 'react';
import TaskDropdown from '../dropdown/TaskDropdown';
import './styles.css';


const TaskCard: FC = () => {

    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">Backup Files EOD</h5>
                <h6 className="card-subtitle mb-2 text-muted">17 April</h6>
                <p className="card-text">Maecenas condimentum neque mollis, egestas leo ut, gravida.</p>
                <div className="d-flex gap-2  mt-3">
                    <button className="btn btn-link p-0 btn-icon star">
                        <i className="bi bi-star"></i>
                    </button>
                    <button className="btn btn-link p-0 btn-icon trash">
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
