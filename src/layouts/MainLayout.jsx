import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
    let movieList = []

    const [favs, setFavs] = useState(movieList);

    useEffect(() => {
        setFavs(movieList);
    }, []);

    return (
        <div className='px-6 md:container md:mx-auto md:px-20 lg:px-6'>
            <Header />
            <Outlet context={[favs, setFavs]} />
        </div>
    );
}

export default MainLayout;