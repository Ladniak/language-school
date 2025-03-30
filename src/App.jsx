import { Route, Routes } from "react-router-dom"

import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import TeachersPage from "./pages/TeachersPage/TeachersPage"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/teachers' element={<TeachersPage />} />
      </Routes>
    </>
  )
}

export default App
