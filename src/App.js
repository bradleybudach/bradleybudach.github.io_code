import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './components/HomePage'
import VoicePhotos_Project from './components/project_pages/VoicePhotos_Project';
import LevelProject from "./components/project_pages/Level_Project";
import JavaCalculator_Project from "./components/project_pages/JavaCalculator_Project";
import WetlandCodeInterpreter_Project from "./components/project_pages/WetlandCodeInterpreter_Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <div>ERROR</div>
  },
  {
    path: '/VoicePhotosProject',
    element: <VoicePhotos_Project/>,
  },
  {
    path: '/LevelProject',
    element: <LevelProject/>,
  },
  {
    path: '/JavaCalculatorProject',
    element: <JavaCalculator_Project/>,
  },
  {
    path: '/WetlandCodeInterpreterProject',
    element: <WetlandCodeInterpreter_Project/>,
  },
]);

function App() {
  return (
  <RouterProvider router={router}/>
  );
}

export default App;
