import React, { useState } from "react";

const MiHook = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>El contador es : {count}</p>
            <button onClick={() => setCount(count +1)} className="btn btn-warning">Incrementar contador con Hook</button>
        </div>
    );
};

export default MiHook;