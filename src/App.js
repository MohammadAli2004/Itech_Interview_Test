import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import logo from './assets/image3.jpeg'
import Home from './pages';
import Blog from './pages/blog';
import BlogPost from './pages/blogPost';
function App() {




  return (
    <div className='my-app'>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blog/:id' element={<BlogPost/>} />
       </Routes>
    </div>
  );
}

export default App;
