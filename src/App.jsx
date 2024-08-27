import React from 'react'
import Home from './component/page/Home'
import About from './component/page/About'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './component/layer/RootLayout';
import Error from './component/layer/Error';
import Service from './component/page/Service';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index path='/home' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/service' element={<Service />}></Route>
      <Route path='/*' element={<Error />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App