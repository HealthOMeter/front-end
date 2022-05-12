import { Link } from "react-router-dom";
import { DragDropWrapper } from "./DragDropSpace.styles";
import uploadIcon from "../../../assets/svg/uploadFile.svg";
import { NoContentTxt, SmallP } from "../../../styles/typography/text.styles";

const DragDropSpace = () => {

    return (
        <DragDropWrapper htmlFor="file">
            <input name="file" type="file" id="file" />
            <img src={uploadIcon} alt="Upload file" />
            <div>
                <NoContentTxt>Drag and drop here</NoContentTxt>
                <NoContentTxt>or</NoContentTxt>
                <Link to="/create">Browse files</Link>
            </div>
            <SmallP>Accepted file types: jpg, png, PDF, doc, docx, xml</SmallP>
        </DragDropWrapper>
    );
};

export default DragDropSpace;