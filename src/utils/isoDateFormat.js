import { monthNumberToString } from "./monthNumberToString";

export function isoDateFormat(isoFormat) {
    const date = new Date(isoFormat);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${day} ${monthNumberToString(month)} ${year}`;
}