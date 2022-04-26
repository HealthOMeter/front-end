import React from "react";

const Visits = ({ visits }) => {
    console.log(visits);
    return (
        <>
            {
                visits.length == 0
                    ?
                    <>
                        <p>You don't have any regular visits yet</p>
                        <a>Create a visit</a>
                    </>
                    :
                    "ok"
            }
        </>
    )
}

export default Visits;