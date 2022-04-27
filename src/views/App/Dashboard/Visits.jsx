import React from "react";
import { Link } from "react-router-dom";
import { NoContentTxt } from "../../../styles/typography/text.styles";
import { NoContentTxtWrapper } from "./Dashboard.styles";

const Visits = ({ visits }) => {
    return (
        <>
            {
                visits.length === 0
                    ?
                    <NoContentTxtWrapper>
                        <NoContentTxt>You don't have any regular visits yet</NoContentTxt>
                        <Link to="/create">Create a visit</Link>
                    </NoContentTxtWrapper>
                    :
                    "ok"
            }
        </>
    )
}

export default Visits;