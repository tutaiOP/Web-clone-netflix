import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import HomePage from "./pages/HomePage"
import { Toaster } from "react-hot-toast"
import { useAuth } from "./store/useAuth"
import { useEffect } from "react"
function App() {
   const { user, checkAuth } = useAuth();
   useEffect(() => {
      checkAuth();
   }, [checkAuth])
   console.log(user);
   return (
      <>
         <Routes>
            <Route
               path="/login" element={!user ? <Login /> : <Navigate to={"/"} />}

            />
            <Route
               path="/register" element={!user ? <Register /> : <Navigate to={"/"} />}
            />
            <Route
               path="/" element={user ? <HomePage /> : <Navigate to={"/login"} />}
            />
         </Routes>
         <Toaster
            position="top-right"
            reverseOrder={false}
         />


      </>
   )
}

export default App
