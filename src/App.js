import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, ScrollRestoration, Outlet } from "react-router-dom";
import HomePage from './components/HomePage'
import VoicePhotos_Project from './components/project_pages/VoicePhotos_Project';
import LevelProject from "./components/project_pages/Level_Project";
import JavaCalculator_Project from "./components/project_pages/JavaCalculator_Project";
import WetlandCodeInterpreter_Project from "./components/project_pages/WetlandCodeInterpreter_Project";

const Layout = () => {
  return (<>
      <ScrollRestoration
      getKey={(location) => {
        return location.pathname;
      }}/>
      <Outlet/>
    </>
  );
};

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path={'/'} element={<HomePage/>} errorElement={<div>ERROR</div>}/>
    <Route path={'/VoicePhotosProject'} element={<VoicePhotos_Project/>}/>
    <Route path={'/LevelProject'} element={<LevelProject/>}/>
    <Route path={'/JavaCalculatorProject'} element={<JavaCalculator_Project/>}/>
    <Route path={'/WetlandCodeInterpreterProject'} element={<WetlandCodeInterpreter_Project/>}/>
  </Route>
));

function App() {
  return (
  <RouterProvider router={router}/>
  );
}

export default App;
