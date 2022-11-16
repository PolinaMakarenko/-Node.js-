import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../views/Main/Main';
import CreatePage from '../views/CreatePage/CreatePage';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} /> 
          <Route path="/createLink" element={< CreatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
