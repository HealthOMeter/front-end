import { useEffect, useState } from "react";
import { getCategories } from "../../../api/categories.api";
import { InputLabel, InputText, InputDropdown } from "../../../styles/typography/inputs.styles"
import { AddFileForm } from "./AddFile.styles";
import { stringDateToISO } from "../../../utils/stringDateToISO";

const Step2 = ({ setForm, form }) => {

    const [categories, setCategories] = useState(["all"]);

    useEffect(() => {
        getCategories(process.env.REACT_APP_TEST_USER)
            .then((res) => {
                const data = res.data;
                if (data !== undefined && data?.length > 0) {
                    setCategories(["all", ...data]);
                } else {
                    setCategories(["all"]);
                };
            })
    }, []);

    return (
        <AddFileForm id="fileForm">
            <InputLabel>
                Name
                <InputText
                    name="name"
                    placeholder="ex. RTG left knee"
                    type="text"
                    onInput={(e) => setForm({ ...form, "name": e.target.value })}
                />
            </InputLabel>
            <InputLabel>
                Category
                <InputDropdown
                    onChange={(e) => setForm({ ...form, "category": e.target.value })}
                    name="category"
                >
                    <option disabled>Select a category: </option>
                    {
                        categories.length > 0
                        &&
                        categories.map((el) => {
                            return <option key={el} value={el} name={el}>{el}</option>
                        })
                    }
                </InputDropdown>
            </InputLabel>
            <InputLabel>
                Date
                <InputText
                    onChange={(e) => setForm({ ...form, "date": stringDateToISO(e.target.value) })}
                    name="date" type="date"
                />
            </InputLabel>
            <InputLabel>
                Result
                <InputDropdown
                    onChange={(e) => setForm({ ...form, "status": Number(e.target.value) })}
                    name="status"
                >
                    <option value="0">Normal</option>
                    <option value="1">Abnormal</option>
                    <option value="2">To check</option>
                </InputDropdown>
            </InputLabel>
        </AddFileForm>
    );
};

export default Step2;