import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import HomePage from "./pages/HomePage"
import { Toaster } from "react-hot-toast"
import { useAuth } from "./store/useAuth"
import { useEffect } from "react"
import GenresPage from "./pages/GenresPage"
import SearchPage from "./pages/SearchPage"
import Header from "./components/Header"
import WatchPage from "./pages/WatchPage"
import LatestPage from "./pages/LatestPage"
function App() {
   const { user, checkAuth } = useAuth();
   useEffect(() => {
      checkAuth();
   }, [checkAuth])

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
            <Route
               path="/genre" element={user ? <GenresPage /> : <Navigate to={"/login"} />}
            />
            <Route
               path="/search" element={user ? <SearchPage /> : <Navigate to={"/login"} />}
            />
            <Route
               path="/watch/:id" element={user ? <WatchPage /> : <Navigate to={"/login"} />}
            />
            <Route
               path="/latest" element={user ? <LatestPage /> : <Navigate to={"/login"} />}
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
