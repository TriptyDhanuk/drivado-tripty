import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import OperationMode from "../OperationMode/OperationMode";
import Footer from "../Footer/Footer";

export default function Home(){

    return(
        <>
        <Navbar/>
        <Banner/>
        <Services/>
        <OperationMode/>
        <Footer/>
        </>
    )
}