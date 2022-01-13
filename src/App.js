import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "./components/BookList";
import fantasyBooks from "./fantasyBooks.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import Registration from "./components/Registration";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav></MyNav>{" "}
        <Routes>
         
           <Route path="/" element={<BookList books={fantasyBooks} />}></Route> 
           <Route path="/Registration" element={<Registration />}></Route> 
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
