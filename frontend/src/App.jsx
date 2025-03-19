import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import HomePage from "./pages/HomePage"
function App() {
 
  return (
    <>
     <Routes>
        <Route
           path="/login" element={<Login/>}
         
        />
        <Route
            path="/register" element={<Register/>}
        />
         <Route
            path="/" element={<HomePage/>}
        />
     </Routes>
    </>
  )
}

export default App
