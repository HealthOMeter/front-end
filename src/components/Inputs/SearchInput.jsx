import { Text, SearchInputWrapper } from './Inputs.styles';

const SearchInput = ({ placeholder = "", event }) => {
    return (
        <SearchInputWrapper onChange={(e) => {
            if (event) event(e);
        }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.33329 2.33341C4.57187 2.33341 2.33329 4.57199 2.33329 7.33342C2.33329 10.0948 4.57187 12.3334 7.33329 12.3334C10.0947 12.3334 12.3333 10.0948 12.3333 7.33342C12.3333 4.57199 10.0947 2.33341 7.33329 2.33341ZM0.666626 7.33342C0.666626 3.65152 3.65139 0.666748 7.33329 0.666748C11.0152 0.666748 14 3.65152 14 7.33342C14 8.87401 13.4774 10.2925 12.5998 11.4215L17.0892 15.9108C17.4147 16.2363 17.4147 16.7639 17.0892 17.0893C16.7638 17.4148 16.2361 17.4148 15.9107 17.0893L11.4213 12.6C10.2924 13.4775 8.87389 14.0001 7.33329 14.0001C3.65139 14.0001 0.666626 11.0153 0.666626 7.33342Z" fill="#64748B" />
            </svg>
            <Text placeholder={placeholder} type="search" />
        </SearchInputWrapper>
    );
};

export default SearchInput;
