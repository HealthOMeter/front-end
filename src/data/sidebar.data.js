import dashboardIcon from '../assets/icons/dashboard.svg';
import docsIcon from '../assets/icons/documents.svg';
import familyIcon from '../assets/icons/family.svg';
import calendarIcon from '../assets/icons/calendar.svg';

export const sidebarItems = [
    {
        title: 'Dashboard',
        icon: dashboardIcon,
        url: '/app/dashboard',
        extra: false,
    },
    {
        title: 'Documents',
        icon: docsIcon,
        url: '/app/documents',
        extra: false,
    },
    {
        title: 'Family',
        icon: familyIcon,
        url: '/app/family',
        extra: true,
    },
    {
        title: 'Calendar',
        icon: calendarIcon,
        url: '/app/calendar',
        extra: false,
    }
];