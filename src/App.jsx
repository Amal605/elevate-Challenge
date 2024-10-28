import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout'
import Home from './Components/Home';
import Categories from './Components/Categories';
import NotFound from './Components/NotFound';
import '@fortawesome/fontawesome-free'

function App() {
  let route = createBrowserRouter([{
    path:'/',element:<Layout></Layout>,children:[
      {index:true, element:<Home></Home>},
      {path:'/categories',element:<Categories></Categories>},
      {path:'*',element:<NotFound></NotFound>},
    ]}])

  return (
    <>
    <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
