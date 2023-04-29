import React from 'react';
import cl from "./Header.module.css"
import Link from "../link/Link";
import classNames from 'classnames';
import Icon from "../icon/icon";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";


const Header = ({header, setHeader}) => {

    return (
        <header className={header ? classNames(cl.header, cl.show) : classNames(cl.header, cl.hide)}
                onClick={(e) => e.stopPropagation()}>
            <div className={cl.container}>
                <Link to="/" >Description</Link>
                <Link to="Characters">Characters</Link>

                <h1>DEMON SLAYER</h1>
                <div className={header ? classNames(cl.expander) : classNames(cl.expander, cl.rotate)}
                     onClick={() => setHeader(!header)}>
                    <Icon>expand_less</Icon>
                </div>

                <Link to="Reviews">Reviews</Link>
                <Link to="About" >About me</Link>

                <ThemeSwitcher/>
            </div>
        </header>
    );
};

export default Header;