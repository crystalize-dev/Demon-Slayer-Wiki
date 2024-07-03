import { useEffect, useState } from "react";
import { ThemeContext } from "./context/themeContext";

import "./App.css";

import AppRouter from "./router/AppRouter";

function App() {
    const [theme, setTheme] = useState("dark");
    const [header, setHeader] = useState(true);
    const root = document.getElementById("root");

    const switchTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    };
    useEffect(() => {
        if (localStorage.getItem("theme"))
            setTheme(localStorage.getItem("theme"));
    }, []);

    useEffect(() => {
        root.setAttribute("data-theme", theme);
    }, [theme, root]);

    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            <div className="wrapper" onClick={() => setHeader(false)}>
                <AppRouter header={header} setHeader={setHeader} />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
