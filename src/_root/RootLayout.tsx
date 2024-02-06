import {Outlet, Navigate} from "react-router-dom";

const RootLayout = () => {
    const isAuthenticated = false;

    return (
        <>
            {isAuthenticated ?
                (<Navigate to={"/"}/>):
                (<>
                    <section>
                        <Outlet/>
                    </section>
                </>)}
        </>
    )
}

export default RootLayout