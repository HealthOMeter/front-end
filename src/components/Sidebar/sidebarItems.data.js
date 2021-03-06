import dashboard from '../../assets/icons/dashboard.svg';
import documents from '../../assets/icons/documents.svg';
import family from '../../assets/icons/family.svg';
import calendar from '../../assets/icons/calendar.svg';

export const defaultItems = [
    {
        title: 'SIDEBAR.DASHBOARD',
        icon: dashboard,
        url: '/dashboard',
        dropdownItems: [],
    },
    {
        title: 'SIDEBAR.DOCUMENTS',
        icon: documents,
        url: '/documents',
        dropdownItems: [],
    },
    {
        title: 'SIDEBAR.FAMILY',
        icon: family,
        dropdownItems: [
            {
                title: 'SIDEBAR.ADD_NEW',
                icon: '+',
            },
        ],
    },
    {
        title: 'SIDEBAR.CALENDAR',
        icon: calendar,
        url: '/calendar',
        dropdownItems: [],
    },
];
