//ROUTER
import { Routes, Route } from "react-router-dom";
//STYLES
import "./bootstrap.min.css";
import { Container } from "react-bootstrap";
//PAGES
import HomePage from "./Pages/HomePage";
import TodoPage from "./Pages/TodoPage";
import UpdatePage from "./Pages/UpdatePage";
//COMPONENTS
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Header />
    <Container>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="todos" element={<TodoPage />} />
        <Route path="update/:id" element={<UpdatePage />} />
      </Routes>
    </Container>
    </div>
  );
}

export default App;
