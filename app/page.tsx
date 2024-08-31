import Sidebar from './Components/sibedar/Sibedar';
import TaskBody from './Components/taskBody/TaskBody';
import './styles.css'

const Home = () => {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className='task-body-container'>
        <TaskBody />
      </div>

    </div>
  );
}

export default Home;
