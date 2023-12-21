import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './components/HomePage'
import Project1 from './components/project_pages/Project1';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <div>ERROR</div>
  },
  {
    path: '/Project1',
    element: <Project1/>,
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
