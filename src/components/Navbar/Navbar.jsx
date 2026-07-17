import "./Navbar.css";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {

    const [open, setOpen] = useState(false);

    const [scroll, setScroll] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setScroll(window.scrollY > 50);

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <header className={scroll ? "navbar active" : "navbar"}>

            <div className="navbar-container">

                <div className="logo">

                    ERNURVYNX

                </div>

                <nav className={open ? "nav active" : "nav"}>

                    <a href="#home">Home</a>

                    <a href="#services">Services</a>

                    <a href="#portfolio">Portfolio</a>

                    <a href="#ai">AI</a>

                    <a href="#contact">Contact</a>

                </nav>

                <button

                    className="menu"

                    onClick={() => setOpen(!open)}

                >

                    {

                        open ?

                        <X size={28}/> :

                        <Menu size={28}/>

                    }

                </button>

            </div>

        </header>

    );

}
