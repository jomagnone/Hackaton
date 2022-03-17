import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ListCourses from './pages/ListCourses';
import DetailCourse from './pages/DetailCourse';
import MyLearning from './pages/MyLearning';
import Admin from './pages/Admin';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <header><NavBar /></header>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/courses" element = {<ListCourses />} />
          <Route path = "/course/:idCourse" element = {<DetailCourse />} /> 
          <Route path = "/myLearning" element = {<MyLearning />} /> 
          <Route path = "/admin" element = {<Admin />} /> 
    
        </Routes>
        <footer><Footer /></footer>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

