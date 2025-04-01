import { Route, Routes } from "react-router-dom"
import { useDispatch } from "react-redux";
import { refreshOp } from "./redux/auth/operations";
import { useEffect } from "react";

import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import TeachersPage from "./pages/TeachersPage/TeachersPage"
import FavouritePage from "./pages/FavouritePage/FavouritePage";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshOp());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/teachers' element={<TeachersPage />} />
        <Route path="/favourites" element={<FavouritePage />} />
      </Routes>
    </>
  )
}

export default App
