import dashboardIcon from '../assets/icons/dashboard.svg';
import docsIcon from '../assets/icons/documents.svg';
import familyIcon from '../assets/icons/family.svg';
import calendarIcon from '../assets/icons/calendar.svg';

export const sidebarItems = [
    {
        title: 'Dashboard',
        icon: dashboardIcon,
        url: '/app/dashboard',
        dropdownItems: [],
    },
    {
        title: 'Documents',
        icon: docsIcon,
        url: '/app/documents',
        dropdownItems: [],
    },
    {
        title: 'Family',
        icon: familyIcon,
        url: '/app/family',
         dropdownItems: [
        {
            title: 'Add new',
            icon: '+',
        },
    ],
    },
    {
        title: 'Calendar',
        icon: calendarIcon,
        url: '/app/calendar',
        dropdownItems: [],
    }
];