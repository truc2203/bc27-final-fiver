import {lazy, Suspense} from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import MainLayout from './components/MainLayout/MainLayout';
import Home from './modules/Home/pages/Home';
import './overwrite.css'
import './main.scss'
function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
