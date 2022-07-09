
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import DocumentList from './components/DocumentList';
import "bootstrap/dist/css/bootstrap.min.css";
import FileUpload from './components/FileUpload';


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Documents
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/upload"} className="nav-link">
              Upload
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<DocumentList/>} />
          <Route exact path="/upload" element={<FileUpload/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
