import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPages from "../pages/PostIdPages";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

export const publicRoutes = [
    {path: '/login', element: <Login/>, exact: true},

]

export const privateRoutes = [
    {path: '/about', element: <About/>, exact: true},
    {path: '/posts', element: <Posts/>, exact: true},
    {path: '/posts/:id', element: <PostIdPages/>, exact: true},
    {path: '*', element: <NotFound/>, exact: true},
]
