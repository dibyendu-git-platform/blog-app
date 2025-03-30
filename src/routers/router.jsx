import { createBrowserRouter } from 'react-router'
import App from '../App'
import OtpPage from '../pages/OtpPage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/otp-page",
                element: <OtpPage />
            }
        ]
    }
]);

export default router;