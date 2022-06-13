export function monthNumberToString(number) {
    let result;
    switch (number) {
        case 0:
            result = "Jan";
            break;
        case 1:
            result = "Feb";
            break;
        case 2:
            result = "Mar";
            break;
        case 3:
            result = "Apr";
            break;
        case 4:
            result = "May";
            break;
        case 5:
            result = "Jun";
            break;
        case 6:
            result = "Jul";
            break;
        case 7:
            result = "Aug";
            break;
        case 8:
            result = "Sept";
            break;
        case 9:
            result = "Oct";
            break;
        case 10:
            result = "Nov";
            break;
        case 11:
            result = "Dec";
            break;
        default:
            break;
    }

    return result;
}