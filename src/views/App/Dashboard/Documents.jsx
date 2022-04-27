import SecondaryButton from "../../../components/SecondaryBtn/SecondaryBtn";
import { DocumentsTableHead, DocumentRow, NoContentTxtWrapper } from "./Dashboard.styles.js";
import placeholder from "../../../assets/svg/jpgIcon.svg";
import { NoContentTxt } from "../../../styles/typography/text.styles";

const Documents = ({ docs }) => {
    console.log(docs);
    return (
        <>
            {
                docs.length === 0
                    ?
                    <NoContentTxtWrapper>
                        <NoContentTxt>Your file’s record is empty</NoContentTxt>
                    </NoContentTxtWrapper>
                    :
                    <div>
                        <DocumentsTableHead>
                            <p>Name</p>
                            <p>Category</p>
                            <p>Date</p>
                        </DocumentsTableHead>
                        {
                            docs.map((doc, idx) => {
                                return <DocumentRow darkBgr={idx%2===0 ? true : false} key={doc.id} id={doc.id}>
                                    <img src={placeholder} alt="Icon"/> 
                                    <p className="doc-name">{doc.name}</p>
                                    <p className="doc-category">{doc.category}</p>
                                    <p className="doc-date">{doc.date}</p>
                                </DocumentRow>
                            })
                        }
                    </div>
            }
            <SecondaryButton>See more</SecondaryButton>
        </>
    );
};

export default Documents;