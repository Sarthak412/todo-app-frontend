import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddTask from './components/AddTask';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar logo="To-do App" link_1="About" />

        <Routes>
          <Route path='/' element={<TaskList/>} />
          <Route path='/createTodo' element={ <AddTask/> } />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
