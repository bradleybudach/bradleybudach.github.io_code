import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, ScrollRestoration, Outlet, useLocation } from "react-router-dom";
import HomePage from './components/HomePage'
import VoicePhotos_Project from './components/project_pages/VoicePhotos_Project';
import LevelProject from "./components/project_pages/Level_Project";
import JavaCalculator_Project from "./components/project_pages/JavaCalculator_Project";
import WetlandCodeInterpreter_Project from "./components/project_pages/WetlandCodeInterpreter_Project";
import ImageColorizationAI_Project from "./components/project_pages/ImageColorizationAI_Project";
import FruitGame_Project from "./components/project_pages/FruitGame_Project";
import ProjectTracking_Project from "./components/project_pages/ProjectTracking_Project";
import Portfolio_Project from "./components/project_pages/Portfolio_Project";
import ErrorPage from "./components/ErrorPage";
import { trackPageView } from "./components/anylitics";
import { createContext, useEffect, useState } from "react";

export const ShowMoreProjectsContext = createContext(null);

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

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
    <Route path={'/ImageColorizationAIProject'} element={<ImageColorizationAI_Project/>}/>
    <Route path={'/FruitGameProject'} element={<FruitGame_Project/>}/>
    <Route path={'/ProjectTrackingProject'} element={<ProjectTracking_Project/>}/>
    <Route path={'/PortfolioProject'} element={<Portfolio_Project/>}/>
    <Route path={'*'} element={<ErrorPage/>}/>
  </Route>
));

function App() {
  const [showMoreProjects, setShowMoreProjects] = useState(4);

  return (
    <ShowMoreProjectsContext.Provider value={[showMoreProjects, setShowMoreProjects]}>
      <RouterProvider router={router}/>
    </ShowMoreProjectsContext.Provider>
  );
}

export default App;
