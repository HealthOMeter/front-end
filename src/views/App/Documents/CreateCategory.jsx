import Modal from "../../../components/Modal/Modal";
import closeIcon from "../../../assets/icons/close.svg";
import { AddFileForm } from "./AddFile.styles";
import TextInput from "../../../components/Inputs/TextInput";
import { categoriesAutocomplete } from "./categoriesAutocomplete.data";
import { addCategories } from "../../../api/categories.api";
import { useState } from "react";
import { Subheader } from "../../../styles/typography/headers.styles";
import PrimaryButton from "../../../components/PrimaryBtn/PrimaryButton";

const CreateCategory = ({ closeModal }) => {
  const [category, setCategory] = useState("");
  const userId = process.env.REACT_APP_TEST_USER;

  const closeWindowHandler = () => {
    setCategory("");
    closeModal(false);
  };

  const handleCreateCategory = ()=> {
      addCategories(userId, category)
      .then((res)=> console.log(res));
  };

  return (
    <Modal>
      <div className="header">
        <Subheader>Create Category</Subheader>
        <img
          onClick={closeWindowHandler}
          className="close-icon"
          src={closeIcon}
          alt="Close icon"
        />
      </div>
      <AddFileForm>
        <TextInput
            label="Category name"
            list="categories-list"
            name="category"
        />
        <datalist id="categories-list">
            {categoriesAutocomplete.map((el)=> {
                return <option key={el} value={el} />
            })}
        </datalist>
      </AddFileForm>
      <div className="bottom-btns">
        <PrimaryButton
            disabled={category === false}
            event={handleCreateCategory}>
                Create
        </PrimaryButton>
      </div>
    </Modal>
  );
};

export default CreateCategory;
