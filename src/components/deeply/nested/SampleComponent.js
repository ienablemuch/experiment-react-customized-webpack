import React from "react";

// import { randomizer } from "../../../shared/randomizer";

import { randomizer } from "love/randomizer";

export function SampleComponent() {
    const a = randomizer();

    return (
        <>
            <strong>I am strong {a}</strong>
        </>
    );
}
