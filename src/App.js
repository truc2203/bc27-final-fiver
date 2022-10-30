import { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Spin } from 'antd';
import MainLayout from "./components/MainLayout/MainLayout";
import "./overwrite.css";
import "./main.scss";
import Home from './modules/Home/pages/Home.jsx'
const Categories = lazy(() => import("./modules/Categories/pages/Categories"));
const JobDetail = lazy(() => import("./modules/JobDetail/pages/JobDetail")) ;
const Auth = lazy(() => import("./components/Auth/Auth")) ;
const Login =  lazy(() => import("./modules/Authentication/pages/Login")) ;
const Register = lazy(() => import("./modules/Authentication/pages/Register")) ;
const TypeJob = lazy(() => import   ("./modules/TypeJob/pages/TypeJob")) 
const Profile = lazy(() =>import   ("./modules/Profile/pages/Profile") ) ;
const Admin = lazy(() => import   ("./components/Admin/Admin")) ;
const EditUser = lazy(() => import   ("./modules/UserAdmin/pages/EditUser")) ;
const AddUser = lazy(() =>  import   ("./modules/UserAdmin/pages/AddUser"));
const UserAdmin= lazy(() => import   ("./modules/UserAdmin/UserAdmin")) ;
const JobsAdmin = lazy(() => import   ("./modules/JobAdmin/JobsAdmin")) ;
const TypeJobAdmin = lazy(() => import   ("./modules/JobAdmin/page/TypeJobAdmin")) ;
const EditTypeJob= lazy(() =>  import   ("./modules/JobAdmin/page/EditTypeJob"));
const EditSubTypeJob = lazy(() =>  import   ("./modules/JobAdmin/page/EditSubTypeJob"));
const CreateJob= lazy(() => import   ("./modules/Profile/pages/CreateJob")) ;
const EditJob = lazy(() => import   ("./modules/Profile/pages/EditJob")) ;
const EditGallary = lazy(() => import   ("./modules/Profile/pages/EditGallary")) ;
const Settings = lazy(() => import   ("./modules/Profile/component/Settings")) ;
const ChangeAvatarSubType = lazy(() => import   ("./modules/JobAdmin/page/ChangeAvatarSubType")) ;
const AddSubTypeJob = lazy(() => import   ("./modules/JobAdmin/page/AddSubTypeJob")) ;


function App() {
  return (
    <Suspense fallback={<div className="example"><Spin/></div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="categories/:job" element={<Categories />} />
          <Route path="detail/:id/:name" element={<JobDetail />} />
          <Route path="typejob/:job" element={<TypeJob />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="profile/createJob" element={<CreateJob />} />
          <Route path="profile/editJob/:id" element={<EditJob />} />
          <Route path="profile/editGallary/:id" element={<EditGallary />} />
          <Route path="profile/account/:name" element={<Settings />} />

        </Route>
        <Route path="/" element={<Admin />}>
          <Route path="user" element={<UserAdmin />}/>
          <Route path="user/edit/:id" element={<EditUser/>} />
          <Route path="user/add" element={<AddUser/>} />
          <Route path='jobs' element={<JobsAdmin/>} />
          <Route path="jobs/typejob" element={<TypeJobAdmin/>} />
          <Route path="jobs/typejob/addsubtype/:id" element={<AddSubTypeJob/>} />
          <Route path="jobs/typejob/edittype/:id" element={<EditTypeJob/>} />
          <Route path="jobs/typejob/editsubtype/:id" element={<EditSubTypeJob/>} />
          <Route path="jobs/typejob/avatar/:id" element={<ChangeAvatarSubType/>} />

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
