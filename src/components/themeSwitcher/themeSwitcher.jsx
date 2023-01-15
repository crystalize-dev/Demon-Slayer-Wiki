import React, {useContext} from 'react';
import cl from "./themeSwitcher.module.css"
import classNames from "classnames";
import {ThemeContext} from "../context/themeContext";
import Icon from "../icon/icon";


const ThemeSwitcher = ({...props}) => {
    const {theme, switchTheme} = useContext(ThemeContext)

    return (
        <div {...props} className={classNames(cl.wrapper, props.className)}>
            <Icon className={theme === "light" ? cl.hide : null}
                  onClick={() => switchTheme()}>dark_mode</Icon>

            <Icon className={theme === "dark" ? cl.hide : null}
                  onClick={() => switchTheme()}>light_mode</Icon>
        </div>
    );
};

export default ThemeSwitcher;