import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ListCourses from './pages/ListCourses';
import DetailCourse from './pages/DetailCourse';
import MyAprendizaje from './pages/MyAprendizaje';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <header><NavBar /></header>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/curses/" element = {<ListCourses />} />
          <Route path = "/curse/:idCourse" element = {<DetailCourse />} /> 
          <Route path = "/myAprendizaje" element = {<MyAprendizaje />} /> 
        </Routes>
        <footer><Footer /></footer>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

