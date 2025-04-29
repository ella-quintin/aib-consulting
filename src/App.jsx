import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing";
import AboutUs from "./pages/about";
import Services from "./pages/services";
import ContactUs from "./pages/contact";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/our-services", element: <Services /> },
    { path: "/contact-us", element: <ContactUs /> },
  ])
 
  return (
    <>
      <RouterProvider router={router}>
        </RouterProvider>
    </>
  )
}

export default App
