import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
const Browse = ()=>{
    // create a approuter for providing path

    const appRouter  = createBrowserRouter(
        [
            {
            path: '/',
            element: <Login />
        },
            {
                path: '/browse',
                element: <Browse />
            },
        ]
    )
    return(
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}
export default Browse;