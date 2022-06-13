import { Dropdown, DropdownItem } from "./Documents.styles";
import { MediumP } from "../../../styles/typography/text.styles";

const DropdownOptions = ({ options, position }) => {
    return (
        <Dropdown position={position}>
            {
                options.map((option) => {
                    return (
                        <DropdownItem key={option.name}>
                            <img src={option.icon} alt="#" /><MediumP>{option.name}</MediumP>
                        </DropdownItem>
                    )
                })
            }
        </Dropdown>
    )
};

export default DropdownOptions;