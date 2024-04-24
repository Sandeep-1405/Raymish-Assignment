import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import CreateEvent from './Components/CreateEvent/CreateEvent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/add-event' Component={CreateEvent} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
