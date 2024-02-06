import {Outlet, Navigate} from "react-router-dom";

const RootLayout = () => {
    const user = true;

    return user ? <Outlet /> : <Navigate to="/sign-in" />

}

export default RootLayout