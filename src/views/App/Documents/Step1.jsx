import { Link } from "react-router-dom";
import { DragDropWrapper } from "./DragDropSpace.styles";
import uploadIcon from "../../../assets/svg/uploadFile.svg";
import { NoContentTxt, SmallP } from "../../../styles/typography/text.styles";
import File from "./File";

const Step1 = ({ setFiles, files }) => {

    const onDropHandler = (e) => {
        e.preventDefault();
        setFiles([e.dataTransfer.files[0]]);
    };

    console.log(files);

    return (
        <>
            {
                files.length > 0
                    ?
                    <File setFiles={setFiles} file={files[0]} />
                    :
                    <>
                        <DragDropWrapper
                            htmlFor="file"
                            onDragOver={(e) => {
                                e.preventDefault();
                            }}
                            onDrop={(e) => onDropHandler(e)}
                            onDragStart={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <input name="file" type="file" id="file" />
                            <img src={uploadIcon} alt="Upload file" />
                            <div>
                                <NoContentTxt>Drag and drop here</NoContentTxt>
                                <NoContentTxt>or</NoContentTxt>
                                <Link to="/create">Browse files</Link>
                            </div>
                            <SmallP>Accepted file types: jpg, png, PDF, doc, docx, xml</SmallP>
                        </DragDropWrapper>
                    </>
            }
        </>
    );
};

export default Step1;