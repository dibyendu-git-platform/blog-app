import { createBrowserRouter } from 'react-router'
import App from '../App'
import OtpPage from '../pages/OtpPage'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import AllPosts from '../pages/AllPost'
import AddPost from '../pages/AddPost'
import EditPost from '../pages/EditPost'
import Post from '../pages/Post'
import AuthLayout from '../components/AuthLayout'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: (
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                ),
            },
            {
                path: "/signup",
                element: (
                    <AuthLayout authentication={false}>
                        <Signup />
                    </AuthLayout>
                ),
            },
            {
                path: "/all-posts",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <AllPosts />
                    </AuthLayout>
                ),
            },
            {
                path: "/add-post",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <AddPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/edit-post/:slug",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <EditPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/post/:slug",
                element: <Post />,
            },
            {
                path: "/otp-page",
                element: <OtpPage />
            }
        ]
    }
]);

export default router;