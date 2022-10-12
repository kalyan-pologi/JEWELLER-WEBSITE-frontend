
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserDashboard from "./pages/UserDashboard";
import CategoryComponent from "./components/CategoryComponent";
import CardComponent from "./components/CardComponent";
import PrivateRoutes from './pages/PrivateRoutes';
import Favorite from './components/Favorite';

function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <ToastContainer autoClose={1000} />
       <Routes>
         <Route exact path="/" element={<UserDashboard />} />
         <Route exact path="/login" element={<Login />} />
         <Route exact path="/sign-up" element={<SignUp />} />
         <Route exact path="/category" element={<CategoryComponent />} />
         <Route exact path="/products" element={<CardComponent />} />
         {/* <Route exact path="/:category/:product_id" element={<CardComponent />}/> */}
         {/* <Route exact path="/login" element={<Login />}>
            <Route exact path="/" element={<UserDashboard />} />
          </Route> */}
          <Route element={<PrivateRoutes/>}>
              <Route exact path='/favorite' element={<Favorite /> }/>
          </Route>
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;
