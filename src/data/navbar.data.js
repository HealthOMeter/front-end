export const navItems = [
    {
        title: 'About',
        url: '/app',
        isBtn: false,
        visibleOn: ['/', '/signup', '/login']
    },
    {
        title: 'Log in',
        url: '/login',
        isBtn: false,
        visibleOn: ['/', '/signup']
    },
    {
        title: 'Sign up',
        url: '/signup',
        isBtn: true,
        visibleOn: ['/', '/login']
    }
];
