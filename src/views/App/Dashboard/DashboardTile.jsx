import { DashboardBox } from './Dashboard.styles';
import { H4 } from '../../../styles/typography/headers.styles';

const DashboardTile = ({ title, icon, children }) => {
    return (
        <DashboardBox>
            <H4><img src={icon} alt="icon"/> {title}</H4>
            {children}
        </DashboardBox>
    );
};

export default DashboardTile;
