import { createBrowserRouter } from "react-router-dom"
import Register from "../pages/auth/Register"
import HomeScreen from "../pages/screen/home/HomeScreen"
import ErrorScreen from "../error/error2/Error"
import SignInScreen from "../pages/auth/SigninScreen"
import PrivateRoute from "./privateRoute"
import Layout from "../components/common/Layout"
import TestScreen from "../pages/screen/test/TestScreen"
import TestScreen2 from "../pages/screen/test/TestScreen2"
import ErrorImport from "../error/error/ErrorImport"
import ResponseScreen from "../pages/auth/ResponseScreen"
import ProfileScreen from "../pages/screen/profile/ProfileScreen"
import SettingScreen from "../pages/screen/settings/SettingScreen"

export const mainRoute = createBrowserRouter([
    {
        path: "register",
        element: <Register />
    },
    {
        path: "/sign-in",
        element: <SignInScreen />
    },
    {
        path: "/",
        element: <PrivateRoute>
            <Layout />
        </PrivateRoute>,
        children: [
            {
                index: true,
                element: <HomeScreen />
            },
            {
                index: true,
                path: "test",
                element: <TestScreen />
            },
            {
                index: true,
                path: "setting",
                element: <SettingScreen />
            },

            {
                index: true,
                path: "profile",
                element: <ProfileScreen />
            },

        ]


    },
    {
        path: "/response",
        element: <ResponseScreen />
    },
    {
        path: "*",
        element: <ErrorScreen />
    },
])