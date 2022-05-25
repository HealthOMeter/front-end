import Personal from "./Personal";
import Family from "./Family";
import Notifications from "./Notifications";
import Security from "./Security";

import personalIcon from "../../../assets/icons/profile.svg";
import familyIcon from "../../../assets/icons/documents.svg";
import notifIcon from "../../../assets/icons/notification.svg";
import securityIcon from "../../../assets/icons/security.svg";


export const tabs = [
    {
        name: "Personal",
        icon: personalIcon,
        subText: "Tell us about yourself",
        content: Personal
    },
    {
        name: "Family members",
        icon: familyIcon,
        subText: "Tell us about your family members",
        content: Family
    },
    {
        name: "Notifications",
        icon: notifIcon,
        subText: "Choose the notifications you want to receive from us",
        content: Notifications
    },
    {
        name: "Security",
        icon: securityIcon,
        subText: "Change password",
        content: Security
    }
];
