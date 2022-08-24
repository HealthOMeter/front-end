import React, { useEffect, useState, Fragment } from "react";
import { getCategories } from "../../../api/categories.api";
import {
  DocumentsWrapper,
  Categories,
  CategoryBtn,
  DocumentsBox,
  FilesListHead,
  FilesListTitle,
  FilesTable,
  DocumentRow,
  Toolbar,
} from "./Documents.styles";
import editIcon from "../../../assets/svg/editCat.svg";
import separator from "../../../assets/svg/separator.svg";
import { H4 } from "../../../styles/typography/headers.styles";
import SearchInput from "../../../components/Inputs/SearchInput";
import { NoContentTxt } from "../../../styles/typography/text.styles";
import { getFiles } from "../../../api/files.api";
import favIcon from "../../../assets/svg/fav.svg";
import FilterDropdown from "../../../components/Inputs/FilterDropdown";
import { elements } from "./dropdown.data";
import PrimaryButton from "../../../components/PrimaryBtn/PrimaryButton";
import AddFile from "./AddFile";
import CreateCategory from "./CreateCategory";
import IconButton from "../../../components/Buttons/IconButton";
import trashIcon from "../../../assets/svg/trash.svg";
import moveCategory from "../../../assets/svg/moveCategory.svg";
import DeleteDocsPopup from "./DeleteDocsPopup";
import DropdownOptions from "./DropdownOptions";
import { options } from "./options.data";
import { useLocation } from "react-router-dom";
import Modal from "../../../components/Modal/Modal";
import { isoDateFormat } from "../../../utils/isoDateFormat";

const Documents = () => {
  const location = useLocation();
  const [displayedDocs, setDisplayedDocs] = useState([]);
  const [docs, setDocs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [selectedDocs, setSelectedDocs] = useState([]);
  const [distance, setDistance] = useState({
    left: 0,
    top: 0
  });

  const [searchValue, setSearchValue] = useState("");

  const [toggleAddFile, setToggleAddFile] = useState(false);
  const [toggleCategoryModal, setToggleCategoryModal] = useState(false);
  const [toggleDelDocsModal, setToggleDelDocsModal] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [showFreeSpaceInfo, setShowFreeSpaceInfo] = useState(false);

  if (categories.length > 0 && activeCategory === "") {
    setActiveCategory(categories[0]);
  }

  const setStatus = (status)=> {
    switch (status) {
      case 0:
        return "Normal";
      case 1:
        return "Abnormal";
      case 2:
        return "To check";
      default:
        return "";
    }
  };

  useEffect(() => {
    if (location.state?.freeSpace) {
      setShowFreeSpaceInfo(true);
    } else setShowFreeSpaceInfo(false);
  }, []);

  useEffect(() => {
    getFiles(process.env.REACT_APP_TEST_USER, activeCategory).then((res) => {
      const data = res.data;
        if (data !== undefined && data.length > 0) {
          setDocs(data);
          setDisplayedDocs(data);
        } else {
          setDocs([]);
          setDisplayedDocs([]);
        }
    });
  }, [toggleAddFile, activeCategory]);

  useEffect(() => {
    getCategories(process.env.REACT_APP_TEST_USER).then((res) => {
      const data = res.data;
      if (data !== undefined && data?.length > 0) {
        setCategories(data);
      } else {
        setCategories([""]);
      }
    });
  }, [toggleCategoryModal]);

  useEffect(() => {
    if (docs.length > 0) {
      const filteredDocs = docs.filter((el) => {
        return el.name.startsWith(searchValue) || el.date.includes(searchValue)
      });
      setDisplayedDocs(filteredDocs);
      if (searchValue === "") setDisplayedDocs(docs);
    }
  }, [searchValue]);

  //TODO: check data model
  const selectDocument = (isChecked, docId) => {
    if (isChecked) {
      setSelectedDocs([...selectedDocs, docId])
    }
  }

  const openDocument = (e, path) => {
    if (e.currentTarget != e.target) return;
    else window.open(path, "_blank");
  };

  const onSearchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      {showFreeSpaceInfo && <Modal situation="adaptHeight">
        <p>You need to delete some documents to free some space!</p>
        <PrimaryButton event={() => setShowFreeSpaceInfo(false)}>OK</PrimaryButton>
      </Modal>}

      <DocumentsWrapper>
        {toggleAddFile && <AddFile closeAddFile={setToggleAddFile} />}
        {toggleCategoryModal && (
          <CreateCategory closeModal={() => setToggleCategoryModal(false)} />
        )}

        {toggleDelDocsModal && <DeleteDocsPopup closeModal={() => setToggleDelDocsModal(false)} docsToDelete={selectedDocs} />}

        <Categories>
          {categories.length > 0 &&
            categories.map((el) => {
              const isActive = el === activeCategory;
              return (
                <Fragment key={el}>
                  <CategoryBtn
                    onClick={(e) => {
                      setIsDropdownVisible(false);
                      setActiveCategory(el);

                    }}
                    className={isActive ? "active" : null}
                    active={isActive}
                    key={el}
                  >
                    {el}
                    {isActive && (
                      <img
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsDropdownVisible(true);
                          setDistance({
                            left: e.clientX - 60,
                            top: e.clientY + 20
                          });
                        }}
                        className="edit-icon"
                        src={editIcon}
                        alt="Edit category"
                      />
                    )}
                  </CategoryBtn>
                  <img src={separator} />
                  {isDropdownVisible && activeCategory === el && <DropdownOptions position={distance} options={options} />}
                </Fragment>
              );
            })}
          <CategoryBtn onClick={() => setToggleCategoryModal(true)} active>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0625 15.0584V10.0292M10.0625 10.0292V5M10.0625 10.0292H15.125M10.0625 10.0292H5"
                stroke="#264071"
                strokeWidth="2"
              />
            </svg>
          </CategoryBtn>
        </Categories>
        <DocumentsBox>
          <H4>My files</H4>
          <Toolbar className="documents-toolbox">
            <SearchInput event={(e) => onSearchHandler(e)} placeholder="Search by name or date" />
            <FilterDropdown elements={elements} />
            {selectedDocs.length > 0 ? (
              <>
                <IconButton event={() => setToggleDelDocsModal(true)} icon={trashIcon} text="Delete" type="button" typeName="primary" />
                <IconButton
                  icon={moveCategory}
                  text="Move to different category"
                />
              </>
            )
              : (
                <>
                  <div></div>
                  <div></div>
                </>
              )
            }

            <PrimaryButton event={() => setToggleAddFile(true)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0625 15.0584V10.0292M10.0625 10.0292V5M10.0625 10.0292H15.125M10.0625 10.0292H5"
                  stroke="#fff"
                  strokeWidth="2"
                />
              </svg>
              Add file
            </PrimaryButton>
          </Toolbar>
          <FilesListHead>
            <FilesListTitle>Name</FilesListTitle>
            <FilesListTitle>Date</FilesListTitle>
            <FilesListTitle>Status</FilesListTitle>
            <FilesListTitle>Format</FilesListTitle>
          </FilesListHead>
          <FilesTable>
            {displayedDocs.length == 0 ? (
              <NoContentTxt>
                Add your first file{" "}
                {`${activeCategory.length > 0 ? "in " + activeCategory : ""}`}
              </NoContentTxt>
            ) : (
              displayedDocs.map((el) => {
                return (
                  <DocumentRow onClick={(e) => openDocument(e, el.path)} id={el.id} className="document" key={el.id}>
                    <img src={favIcon} alt="Favorite" />
                    <input onClick={(e) => selectDocument(e.target.checked, el.id)} type="checkbox" />
                    <p className="name">{el.name}</p>
                    <p className="date">{isoDateFormat(el.date)}</p>
                    <p className="status">• {setStatus(el.status)}</p>
                    <p className="format">{el.format}</p>
                  </DocumentRow>
                );
              })
            )}
          </FilesTable>
        </DocumentsBox>
      </DocumentsWrapper>
    </>
  );
};

export default Documents;
