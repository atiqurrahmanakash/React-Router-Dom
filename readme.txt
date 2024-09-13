╰─ npm create vite@latest
npm i react-router-dom

// React Router dom........
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index path='/' element={<Home />}></Route>
      <Route index path='/home' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/service' element={<Service />}></Route>
    <Route path='*' element={<Error />}/>
    </Route>
  )
);

//Router Provider.....
<RouterProvider router={router} />












