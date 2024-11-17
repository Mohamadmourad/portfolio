import HomePage from "./Pages/HomePage";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Resume from "./Pages/Resume";
import AllProjects from "./Pages/AllProjects";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<HomePage />}/>
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<AllProjects />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
