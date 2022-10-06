import { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Home from "./modules/Home/pages/Home";
import Categories from "./modules/Categories/pages/Categories";
import "./overwrite.css";
import "./main.scss";
import JobDetail from "./modules/JobDetail/pages/JobDetail";
import Auth from "./components/Auth/Auth";
import Login from "./modules/Authentication/pages/Login";
import Register from "./modules/Authentication/pages/Register";
import TypeJob from "./modules/TypeJob/pages/TypeJob";
import Profile from "./modules/Profile/pages/Profile";
// const UserLayout = lazy(() => import("./modules/AdminUser/UserLayout"));
function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="categories/:job" element={<Categories />} />
          <Route path="detail/:id/:name" element={<JobDetail />} />
          <Route path="typejob/:job" element={<TypeJob/>}/>
          <Route path="profile" element={<Profile/>} />
        </Route>
        

        <Route path="/" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
