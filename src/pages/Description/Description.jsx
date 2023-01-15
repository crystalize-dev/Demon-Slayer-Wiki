import React, {useContext, useState} from 'react';
import cl from "./Description.module.css"
import Icon from "../../components/icon/icon";
import classNames from "classnames";
import {ThemeContext} from "../../components/context/themeContext";
import logo from "../../img/logo.png"

const Description = () => {
    const [fullscreen, setFullScreen] = useState(false)
    const {theme, switchTheme} = useContext(ThemeContext)

    const goFullScreen = () => {
        if (theme !== "dark") switchTheme();
        if (fullscreen && theme === "dark") switchTheme();

        setFullScreen(!fullscreen);
    }
    return (
        <>
            <div className={fullscreen ? classNames(cl.videoWrapper, cl.fullScreen) : cl.videoWrapper}>
                <iframe src="https://www.youtube.com/embed/VQGCKyvzIM4?start=6"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen className={cl.video}></iframe>
                <div className={cl.fullScreenButton}>
                    <Icon onClick={() => goFullScreen()}>{fullscreen ? "fullscreen_exit" : "fullscreen"}</Icon>
                </div>
            </div>

            <div className={cl.descriptionWrapper}>
                <img src={logo} alt={"logo"}/>
                <hr/>
                <p>
                    The story takes place in Taishō era Japan, where a secret society, known as the Demon Slayer Corps,
                    has been waging a secret war against demons for centuries. The demons are former humans who were
                    turned into demons by Muzan Kibutsuji injecting them with his own blood, and they feed on humans and
                    possess supernatural abilities such as super strength, powers that demons can obtain called "Blood
                    Demon Art", and regeneration. Demons can only be killed if they are decapitated with weapons crafted
                    from an alloy known as Nichirin, injected with poison extracted from wisteria flowers, or exposed to
                    sunlight. The Demon Slayers, on the other hand, are entirely human; however, they employ special
                    elemental breathing techniques, known as "Breathing Styles", which grant them superhuman strength
                    and increased resistance, helping them fight against demons. The strongest Demon Slayers are known
                    as the Hashira, and gain this rank through either killing a member of the Twelve Kizuki (the twelve
                    strongest demons under Muzan) or killing fifty demons after ranking up multiple times.
                </p>
                <hr/>
            </div>
        </>
    );
};

export default Description;