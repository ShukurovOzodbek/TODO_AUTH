import './App.css';
import Context from './Context';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todo from './components/Todo/Todo';

function App() {
  return (
    <Context>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />}/>
            <Route path={'/todo'} element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Context>
  );
}

export default App;
