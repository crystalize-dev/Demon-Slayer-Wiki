import React from "react";
import cl from "./Header.module.css";
import Link from "../link/Link";
import classNames from "classnames";
import Icon from "../icon/icon";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";
import { useNavigate } from "react-router-dom";

const Header = ({ header, setHeader }) => {
    const navigate = useNavigate();

    const handleHeaderClick = (e) => {
        e.stopPropagation();
    };

    const toggleHeader = () => {
        setHeader(!header);
    };

    const headerClasses = classNames(cl.header, {
        [cl.show]: header,
        [cl.hide]: !header,
    });

    const expanderClasses = classNames(cl.expander, {
        [cl.rotate]: !header,
    });

    return (
        <header className={headerClasses} onClick={handleHeaderClick}>
            <div className={cl.container}>
                <Link to="/">Description</Link>
                <Link to="Characters">Characters</Link>

                <h1 onClick={() => navigate("/")}>DEMON SLAYER</h1>

                <div className={expanderClasses} onClick={toggleHeader}>
                    <Icon>expand_less</Icon>
                </div>

                <Link to="Reviews">Reviews</Link>
                <Link to="About">About me</Link>

                <ThemeSwitcher />
            </div>
        </header>
    );
};

export default Header;
