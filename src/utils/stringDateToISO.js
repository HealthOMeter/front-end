export const stringDateToISO = (date)=> {
    const dateObj = new Date(date);
    return dateObj.toISOString();
};