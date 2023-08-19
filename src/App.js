import './App.css';
import CharectorList from './pages/CharectorList';
import CharectorDetail from './pages/CharectorDetail';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
         <Routes>
            <Route path="/"  element={<CharectorList />} />
            <Route path="/detail/:id"  element={<CharectorDetail />} />
            <Route path='/search' element = {<Search />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
