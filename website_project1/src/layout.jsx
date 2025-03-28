import React from "react";
import { Outlet } from "react-router";
import Header from "./assets/components/header/header";
import Footer from "./assets/components/footer/footer";
function Layout (){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout