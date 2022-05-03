import React, { useEffect, useState, Fragment } from 'react';
import { getCategories } from '../../../api/categories.api';
import {
    DocumentsWrapper,
    Categories,
    CategoryBtn,
    DocumentsBox,
    FilesListHead,
    FilesListTitle,
    FilesTable,
    DocumentRow,
    Toolbar
} from './Documents.styles';
import editIcon from "../../../assets/svg/editCat.svg";
import separator from "../../../assets/svg/separator.svg";
import { H4 } from '../../../styles/typography/headers.styles';
import SearchInput from "../../../components/Inputs/SearchInput";
import { NoContentTxt } from "../../../styles/typography/text.styles";
import { getFiles } from '../../../api/files.api';
import favIcon from "../../../assets/svg/fav.svg";
import FilterDropdown from '../../../components/Inputs/FilterDropdown';
import { elements } from "./dropdown.data";
import PrimaryButton from "../../../components/PrimaryBtn/PrimaryButton";
import AddFile from './AddFile';

const Documents = () => {

    const [docs, setDocs] = useState([]);
    const [activeCategory, setActiveCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [toggleAddFile, setToggleAddFile] = useState(false);

    if (categories.length > 0 && activeCategory === "") {
        setActiveCategory(categories[0]);
    };

    useEffect(() => {
        const userId = '626696f9b03b65dc75bdfe82';
        getFiles(userId)
            .then((res) => {
                if (res !== undefined && res.length > 0) {
                    setDocs(res)
                } else {
                    setDocs([]);
                };
            })
    }, []);

    useEffect(() => {
        getCategories('626696f9b03b65dc75bdfe82')
            .then((res) => {
                if (res !== undefined && res?.length > 0) {
                    setCategories(res);
                } else {
                    setCategories([]);
                };
            })
    }, []);
    return (
        <DocumentsWrapper>
            {toggleAddFile && <AddFile setToggler={setToggleAddFile}/>}
            <Categories>
                {
                    categories.length > 0
                    &&
                    categories.map((el) => {
                        const isActive = el === activeCategory;
                        return <Fragment key={el}>
                            <CategoryBtn
                                onClick={() => setActiveCategory(el)}
                                className={isActive ? "active" : null}
                                active={isActive}
                                key={el}
                            >
                                {el}
                                {isActive && <img className="edit-icon" src={editIcon} alt="Edit category" />}
                            </CategoryBtn>
                            <img src={separator} /></Fragment>

                    })
                }
                <CategoryBtn active>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0625 15.0584V10.0292M10.0625 10.0292V5M10.0625 10.0292H15.125M10.0625 10.0292H5" stroke="#264071" strokeWidth="2" />
                    </svg>
                </CategoryBtn>
            </Categories>
            <DocumentsBox>
                <H4>My files</H4>
                <Toolbar className="documents-toolbox">
                    <SearchInput placeholder="Search by name or date" />
                    <FilterDropdown elements={elements} />
                    <PrimaryButton event={() => setToggleAddFile(true)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0625 15.0584V10.0292M10.0625 10.0292V5M10.0625 10.0292H15.125M10.0625 10.0292H5" stroke="#fff" strokeWidth="2" />
                        </svg>Add file
                    </PrimaryButton>
                </Toolbar>
                <FilesListHead>
                    <FilesListTitle>Name</FilesListTitle>
                    <FilesListTitle>Date</FilesListTitle>
                    <FilesListTitle>Status</FilesListTitle>
                    <FilesListTitle>Format</FilesListTitle>
                </FilesListHead>
                <FilesTable>
                    {
                        docs.length == 0
                            ?
                            <NoContentTxt>
                                Add your first file {`${activeCategory.length > 0 ? "in " + activeCategory : ""}`}
                            </NoContentTxt>
                            :
                            docs.map((el) => {
                                return <DocumentRow className="document" key={el.id}>
                                    <img src={favIcon} alt="Favorite" />
                                    <input type="checkbox" />
                                    <p className="name">{el.name}</p>
                                    <p className="date">{el.date}</p>
                                    <p className="status">• {el.status}</p>
                                    <p className="format">{el.format}</p>
                                </DocumentRow>
                            })
                    }
                </FilesTable>
            </DocumentsBox>
        </DocumentsWrapper>
    );
}

export default Documents;
