import React from 'react';
import cl from "./Header.module.css"
import Link from "../link/Link";
import classNames from 'classnames';

import logo from "../../img/logo.png"
import Icon from "../icon/icon";

const Header = ({header, setHeader, onClick}) => {
    return (
        <header className={header ? classNames(cl.header, cl.show) : classNames(cl.header, cl.hide)} onClick={onClick}>
            <Link>Home</Link>
            <Link>Credits</Link>
            <div className={cl.roundWrapper}>
                <img src={logo} alt="logo" draggable={false}/>

                <div className={header ? classNames(cl.expander) : classNames(cl.expander, cl.rotate)} onClick={() => setHeader(!header)}>
                    <Icon>expand_less</Icon>
                </div>
            </div>
            <Link>About</Link>
            <Link>My profile</Link>
        </header>
    );
};

export default Header;