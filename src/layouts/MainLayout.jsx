import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
    return (
        <div className='px-6 md:container md:mx-auto md:px-20 lg:px-6'>
            <Header />
            <Outlet />
        </div>
    );
}

export default MainLayout;