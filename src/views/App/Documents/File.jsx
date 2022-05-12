import fileIcon from "../../../assets/svg/uploadFileIcon.svg";
import { FileWrapper } from "./AddFile.styles";
import { P, TinyP } from "../../../styles/typography/text.styles";

const File = ({ setFiles, file }) => {

    const removeFileHandler = ()=> {
        setFiles({});
    };

    return (
        <FileWrapper>
            <img src={fileIcon} />
            <div>
                <P className="file-name-txt">{file.name}</P>
                <TinyP className="file-size-txt">{file.size}</TinyP>
            </div>
            <svg className="remove-file-icon" onClick={removeFileHandler} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15.5" fill="white" stroke="#EEEEEE" />
                <path d="M10.3434 11.7574C9.95285 11.3668 9.95285 10.7337 10.3434 10.3431C10.7339 9.95262 11.3671 9.95262 11.7576 10.3431L21.6571 20.2426C22.0476 20.6332 22.0476 21.2663 21.6571 21.6569C21.2666 22.0474 20.6334 22.0474 20.2429 21.6569L10.3434 11.7574Z" fill="#A9A9A9" />
                <path d="M11.7576 21.6569C11.3671 22.0474 10.7339 22.0474 10.3434 21.6569C9.95285 21.2663 9.95285 20.6332 10.3434 20.2426L20.2429 10.3431C20.6334 9.95262 21.2666 9.95262 21.6571 10.3431C22.0476 10.7337 22.0476 11.3668 21.6571 11.7574L11.7576 21.6569Z" fill="#A9A9A9" />
            </svg>
        </FileWrapper>
    );
};

export default File;