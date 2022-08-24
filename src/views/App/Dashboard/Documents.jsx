import SecondaryButton from "../../../components/SecondaryBtn/SecondaryBtn";
import { DocumentsTableHead, DocumentRow, NoContentTxtWrapper } from "./Dashboard.styles.js";
import placeholder from "../../../assets/svg/jpgIcon.svg";
import { NoContentTxt } from "../../../styles/typography/text.styles";
import { useEffect, useState, useCallback } from "react";
import Loader from "../../../components/Loader/Loader";
import { isoDateFormat } from "../../../utils/isoDateFormat";

const Documents = ({ docs }) => {
    const [docsNode, setDocsNode] = useState("");
    const [showDocs, setShowDocs] = useState(false);
    const [croppedDocs, setCroppedDocs] = useState(docs);

    useEffect(()=> {
        setCroppedDocs(docs);
    }, [docs]);

    const docsContainerRef = useCallback((docsRef) => {
        setDocsNode(docsRef);
    });
    //TODO: refactor
    useEffect(() => {
        const BOX_HEIGHT = 167;
        console.log(docsNode);
        let allowedChildrenHeight = 0;
        let numberOfChildrenAllowed = 0;
        if (docsNode !== "" && docsNode !== null) {
            const children = docsNode.childNodes;

            for (let i = 0; i < children.length; i++) {
                if ((BOX_HEIGHT > allowedChildrenHeight) && (BOX_HEIGHT > (allowedChildrenHeight + children[i].clientHeight))) {
                    allowedChildrenHeight = allowedChildrenHeight + children[i].clientHeight;
                    numberOfChildrenAllowed += 1;
                    console.log("allowed height", allowedChildrenHeight); console.log(docsNode);
                    console.log("allowed kids no", numberOfChildrenAllowed);
                } else break;
            };
        }

        const cropped = [...croppedDocs];
        cropped.splice(numberOfChildrenAllowed-1);
        setCroppedDocs(cropped);
        setShowDocs(true);
    }, [docsNode]);

    return (
        <div className="documents-content">
            {
                croppedDocs.length === 0
                    ?
                    <NoContentTxtWrapper>
                        <NoContentTxt>Your file’s record is empty</NoContentTxt>
                    </NoContentTxtWrapper>
                    :
                    <>
                        {!showDocs && <Loader />}
                        <div ref={docsContainerRef} style={{ visibility: showDocs ? "visible" : "hidden" }}>
                            <DocumentsTableHead>
                                <p>Name</p>
                                <p>Category</p>
                                <p>Date</p>
                            </DocumentsTableHead>
                            {
                                croppedDocs.map((doc, idx) => {
                                    return <DocumentRow darkBgr={idx % 2 === 0 ? true : false} key={doc.id} id={doc.id}>
                                        <img src={placeholder} alt="Icon" />
                                        <p className="doc-name">{doc.name}</p>
                                        <p className="doc-category">{doc.category}</p>
                                        <p className="doc-date">{isoDateFormat(doc.date)}</p>
                                    </DocumentRow>
                                })
                            }
                        </div>
                    </>

            }
            <SecondaryButton>See more</SecondaryButton>
        </div>
    );
};

export default Documents;