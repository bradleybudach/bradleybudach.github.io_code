import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './components/HomePage'
import Project1 from './components/project_pages/Project1';
import LevelProject from "./components/project_pages/Level_Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <div>ERROR</div>
  },
  {
    path: '/Project1',
    element: <Project1/>,
  },
  {
    path: 'LevelProject',
    element: <LevelProject/>,
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
