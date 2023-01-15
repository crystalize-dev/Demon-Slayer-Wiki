import React from 'react';
import cl from "./Header.module.css"
import Link from "../link/Link";
import classNames from 'classnames';

import logo from "../../img/logo.png"
import Icon from "../icon/icon";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";

const Header = ({header, setHeader}) => {

    return (
        <header className={header ? classNames(cl.header, cl.show) : classNames(cl.header, cl.hide)} onClick={(e) => e.stopPropagation()}>
            <Link to="/">Description</Link>
            <Link to="Characters">Characters</Link>

            <div className={cl.roundWrapper}>
                <img src={logo} alt="logo" draggable={false}/>

                <div className={header ? classNames(cl.expander) : classNames(cl.expander, cl.rotate)} onClick={() => setHeader(!header)}>
                    <Icon>expand_less</Icon>
                </div>
            </div>

            <Link to="Quotes">Quotes</Link>
            <Link to="About">About me</Link>

            <ThemeSwitcher/>
        </header>
    );
};

export default Header;