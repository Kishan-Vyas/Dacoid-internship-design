import InfoPage from "./pages/InfoPage";

import {createBrowserRouter, RouterProvider } from "react-router-dom"
import SigninPage from "./pages/SigninPage";
import RegisterPage from "./pages/RegisterPage";
import GoalPage from "./pages/GoalPage";
import HomePage from "./pages/HomePage";
import SchedulePage from "./pages/SchedulePage";


const App = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <InfoPage /> ,
    },{
      path: "/signin",
      element: <SigninPage /> ,
    },{
      path: "/register",
      element: <RegisterPage /> ,
    }
    ,{
      path: "/goal",
      element: <GoalPage /> ,
    }
    ,{
      path: "/home",
      element: <HomePage /> ,
    }
    ,{
      path: "/schedule",
      element: <SchedulePage /> ,
    }
  ]);
  return (
    <div className="h-screen w-screen p-4 sm:max-w-[640px] sm:m-auto sm:border-8 border-gray-300 sm:p-4 rounded-2xl">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
