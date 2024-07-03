import React, { useState } from "react";
import cl from "./reviewModal.module.css";
import classNames from "classnames";
import TextareaAutosize from "react-textarea-autosize";
import logo from "../../img/logo.png";
import Icon from "../icon/icon";
import MyInput from "../input/MyInput";
import MyInputRange from "../inputRange/MyInputRange";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";

const ReviewModal = ({ modal, setModal, setReviews, reviews }) => {
    const [text, setText] = useState("");
    const [name, setName] = useState("");
    const [rate, setRate] = useState(2);

    const addReview = (e) => {
        e.preventDefault();

        const today = new Date();
        const dateString = today.toDateString().slice(4).split(" ");
        const date = `${dateString[1]} ${dateString[0]} ${dateString[2]}`;

        setReviews([
            ...reviews,
            {
                id: reviews.length + 1,
                name,
                text,
                date,
                rate,
            },
        ]);
        setModal(false);
        setText("");
        setName("");
        setRate(2);
    };

    const checkForEnter = (e) => {
        const code = e.keyCode || e.which;
        const activeEl = document.activeElement.id;

        if (code === 13 && e.ctrlKey && activeEl === "text_area") {
            setText(text + "\n");
        } else if (code === 13 && activeEl === "text_area") {
            const trimmedText = text.trim();

            if (trimmedText !== "") {
                addReview(e);
            }
            e.preventDefault();
        }
    };

    return (
        <div
            className={modal ? cl.wrapper : classNames(cl.wrapper, cl.hide)}
            onMouseDown={() => setModal(false)}
        >
            <form
                className={cl.window}
                onMouseDown={(e) => e.stopPropagation()}
                onSubmit={addReview}
            >
                <div className={cl.header}>
                    <div>
                        <img src={logo} alt="logo" />
                        <p>Demon slayer Wiki review</p>
                    </div>

                    <div>
                        <ThemeSwitcher />
                        <Icon onClick={() => setModal(false)}>close</Icon>
                    </div>
                </div>

                <div className={cl.inputsArea}>
                    <MyInput
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <div className={cl.submitArea}>
                        <MyInputRange rate={rate} setRate={setRate} />
                        <button type="submit">SUBMIT</button>
                    </div>

                    <TextareaAutosize
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter review..."
                        onKeyDown={checkForEnter}
                        id="text_area"
                        autoFocus
                        required
                    />
                </div>
            </form>
        </div>
    );
};

export default ReviewModal;
