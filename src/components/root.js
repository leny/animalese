/* leny/animalese
 *
 * /src/components/root.js - Root Component
 *
 * coded by leny@BeCode
 * started at 15/05/2020
 */

/* eslint-disable react/button-has-type */

import React, {useState, useCallback} from "react";

const AUDIO_PATH = "assets/audio";

const wait = ms => new Promise(res => setTimeout(res, ms));

const letters = Object.fromEntries(
    "abcdefghijklmnopqrstuvwxyz"
        .split("")
        .map(letter => [letter, new Audio(`${AUDIO_PATH}/${letter}.mp3`)]),
);

const Root = () => {
    const [text, setText] = useState("");

    const handleSubmit = useCallback(
        async e => {
            e.preventDefault();

            await text
                .toLowerCase()
                .split("")
                .reduce(async (prev, letter) => {
                    await prev;

                    letters[letter] && letters[letter].play();

                    return wait(letters[letter] ? 33 : 75);
                }, Promise.resolve(true));
        },
        [text],
    );

    return (
        <form action={"#"} onSubmit={handleSubmit}>
            <input
                type={"text"}
                placeholder={"Tapez quelque chose…"}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button type={"submit"}>{"Parler en animalese"}</button>
        </form>
    );
};

export default Root;
