import React from "react";
import '../styles/ErrorPage.css';
import HoverButton from "./HoverButton";

const ErrorPage = () => {
    return (
        <div className="error-page-container">
            <h1>Error 404 - Page Not Found</h1>
            <HoverButton text={'Back To Home'} link={'/'} navigate={true} width={180} style={{margin: 20, marginTop: 60}}/>
        </div>
    );
};

export default ErrorPage;