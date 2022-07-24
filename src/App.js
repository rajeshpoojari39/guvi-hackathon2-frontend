import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTheater from "./components/AddTheater";
import Homepage from "./components/Homepage";
import Movies from "./components/Movies";
import BookTicket from "./components/BookTicket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        {/* <Route path='addTheater' element={<AddTheater />} /> */}
        <Route path='movies' element={<Movies />} />
        <Route path='bookTicket' element={<BookTicket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
