import { useEffect } from "react";

export default function App() {

    useEffect(() => {
        document.title = "ERNURVYNX";
    }, []);

    return (

        <>

            <div className="background"></div>

            <div className="stars"></div>

            <header className="hero">

                <div className="overlay"></div>

                <h1 className="logo">
                    ERNURVYNX
                </h1>

                <p className="subtitle">

                    AI • Websites • Apps • Design

                </p>

                <button className="btn">

                    ENTER ERNURVERSE

                </button>

            </header>

        </>

    );

}
