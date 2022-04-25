import Dashboard from "./Dashboard/Dashboard.jsx";
import Documents from "./Documents/Documents.jsx";
import Family from "./Family/Family.jsx";
import Calendar from "./Calendar/Calendar.jsx";

export const elements = [
  {
    path: "/app/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/app/documents",
    element: <Documents />,
  },
  {
    path: "/app/family",
    element: <Family />,
  },
  {
    path: "/app/calendar",
    element: <Calendar />,
  },
];
