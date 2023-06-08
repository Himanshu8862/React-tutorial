import Navbar from './MyComponents/Navbar';
import Home from './MyComponents/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './MyComponents/Create';
import BlogDetails from './MyComponents/BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/blogs/:id" element={<BlogDetails />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
