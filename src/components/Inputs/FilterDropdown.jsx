import { FilterDropdownText } from "./Inputs.styles";
import separator from "../../assets/svg/separator.svg";

const FilterDropdown = ({ elements, event, label = "Filter by"}) => {
    return (
        <FilterDropdownText>
            <span>{label}: <img src={separator} /></span>
            <select onChange={(e)=> {
                if (event) event(e);
            }}>
                {
                    elements.map((el) => {
                        return <option key={el}>{el}</option>
                    })
                }
            </select>
            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.75 0.199804L5.5 3.6998L9.25 0.199804L10.75 0.899804L5.5 5.7998L0.25 0.899804L1.75 0.199804Z" fill="#A5A6A7" />
            </svg>

        </FilterDropdownText>
    )
};

export default FilterDropdown;
