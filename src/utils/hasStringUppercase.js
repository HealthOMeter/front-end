export const hasStringUppercase = (string) => {
    let containsUppercase = false;
    for (let letter of string) {
        if (letter === letter.toUpperCase() && letter !== letter.toLowerCase()) {
            containsUppercase = true;
            break;
        };
    };
    return containsUppercase;
};