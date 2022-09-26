import {lazy, Suspense} from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import MainLayout from './components/MainLayout/MainLayout';
import Home from './modules/Home/pages/Home';
import Categories from './modules/Categories/pages/Categories';
import './overwrite.css'
import './main.scss'
import JobDetail from './modules/JobDetail/pages/JobDetail';
function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='categories/:job' element={<Categories/>}/>
            <Route path='detail/:id/:name' element={<JobDetail/>} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
