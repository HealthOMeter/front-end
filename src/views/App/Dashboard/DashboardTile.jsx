import { DashboardBox, DashboardBoxTitle } from './Dashboard.styles';

const DashboardTile = ({ title, icon, children }) => {
    return (
        <DashboardBox>
            <DashboardBoxTitle><img src={icon} alt="icon"/> {title}</DashboardBoxTitle>
            {children}
        </DashboardBox>
    );
};

export default DashboardTile;
