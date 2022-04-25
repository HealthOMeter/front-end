export const hasStringNumber = (string) => {
    const hasNumber = /\d/;
    return hasNumber.test(string);
};