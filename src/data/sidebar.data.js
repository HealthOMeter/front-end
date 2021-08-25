import dashboardIcon from '../assets/icons/dashboard.svg';
import docsIcon from '../assets/icons/documents.svg';
import familyIcon from '../assets/icons/family.svg';
import calendarIcon from '../assets/icons/calendar.svg';

export const sidebarItems = [
    {
        title: 'Dashboard',
        icon: dashboardIcon,
        url: '/dashboard',
        extra: false,
    },
    {
        title: 'Documents',
        icon: docsIcon,
        url: '/documents',
        extra: false,
    },
    {
        title: 'Family',
        icon: familyIcon,
        url: '/family',
        extra: true,
    },
    {
        title: 'Calendar',
        icon: calendarIcon,
        url: '/calendar',
        extra: false,
    }
];