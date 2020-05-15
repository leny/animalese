/* leny/animalese
 *
 * /src/components/root.js - Root Component
 *
 * coded by leny@BeCode
 * started at 15/05/2020
 */

/* eslint-disable react/button-has-type */

import React, {useState, useCallback} from "react";

// const AUDIO_PATH = "assets/audio";

const Root = () => {
    const [text, setText] = useState("");

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();

            console.warn("Animalese:", text);
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
