import { DashboardBox } from './Dashboard.styles';

const DashboardTile = ({ title }) => {
    return (
        <DashboardBox>
            <h2>{title}</h2>
        </DashboardBox>
    );
};

export default DashboardTile;
