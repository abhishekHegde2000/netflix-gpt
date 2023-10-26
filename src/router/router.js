import { createBrowserRouter, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import App from '../App';
import Home from '../pages/Home';
import Browse from '../pages/Browse';
import Search from '../pages/Search';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from "../pages/Profile";
import { PAGE } from "./routes";
import TvShows from "../pages/TvShows";
import Spinner from "../components/Spinner";
import Movies from "../pages/Movies";
import Latest from "../pages/Latest";
import Watch from "../pages/Watch";
import About from "../pages/About";

const RouteType = ({ children, type }) => {
  const isLogged = useSelector((store) => store.authenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (type === 'private' && !isLogged) {
      navigate(PAGE.SIGNIN);
    } else if (type === 'public' && isLogged) {
      navigate(PAGE.BROWSE);
    }
    return () => {

    }
  }, [isLogged, navigate, type]);

  if (isLogged === null) return <Spinner />

  return <>{children}</>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RouteType type="public"><Home /></RouteType>,
      },
      {
        path: "/browse",
        element: <RouteType type="private"><Browse /></RouteType>,
      },
      {
        path: "/tv-shows",
        element: <RouteType type="private"><TvShows /></RouteType>,
      },
      {
        path: "/latest",
        element: <RouteType type="private"><Latest /></RouteType>,
      },
      {
        path: "/movies",
        element: <RouteType type="private"><Movies /></RouteType>,
      },
      {
        path: "/search",
        element: <RouteType type="private"><Search /></RouteType>,
      },
      {
        path: "/movie-assistant",
        element: <RouteType type="private"><Search /></RouteType>
      },
      {
        path: "/watch/:contentId",
        element: <RouteType type="private"><Watch /></RouteType>
      },
      {
        path: "/login",
        element: <RouteType type="public"><SignIn /></RouteType>,
      },
      {
        path: "/signup",
        element: <RouteType type="public"><SignUp /></RouteType>,
      },
      {
        path: '/profile',
        element: <RouteType type="private"><Profile /></RouteType>
      },
      {
        path: '/about',
        element: <RouteType type="global"><About /></RouteType>
      }
    ]
  }
]);


export default router;
