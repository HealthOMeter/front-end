import React, { useEffect, useState } from 'react';
import { getDashboard } from '../../../api/dashboard.api';
import { DashboardStructure } from './Dashboard.styles';
import DashboardTile from './DashboardTile';
import visitsIcon from "../../../assets/svg/visitsIcon.svg";
import spaceIcon from "../../../assets/svg/spaceIcon.svg";
import docsIcon from "../../../assets/svg/docsIcon.svg";
import familyIcon from "../../../assets/svg/familyIcon.svg";
import Visits from './Visits';
import FreeSpace from './FreeSpace';
import Family from './Family';
import Documents from "./Documents";

const Dashboard = () => {

    const [visits, setVisits] = useState([]);
    const [takenSpace, setTakenSpace] = useState(null);
    const [docs, setDocs] = useState([]);
    const [family, setFamily] = useState([]);

    useEffect(async ()=> {
        await getDashboard(process.env.REACT_APP_TEST_USER)
        .then((res)=> {
            const data = res.data;
            setVisits(data.regularVisits);
            setTakenSpace(data.takenSpace);
            setDocs(data.documents);
            setFamily(data.family);
            localStorage.setItem("name", data.userName);
        });

    }, []);

    return (
        <DashboardStructure>
            <DashboardTile icon={visitsIcon} title='Regular visits'>
                <Visits visits={visits} />
            </DashboardTile>
            <DashboardTile icon={spaceIcon} title="Available space">
                <FreeSpace takenSpace={takenSpace}/>
            </DashboardTile>
            <DashboardTile icon={docsIcon} title="Documents">
                <Documents docs={docs} />
            </DashboardTile>
            <DashboardTile icon={familyIcon} title="Family">
                <Family family={family}/>
            </DashboardTile>
        </DashboardStructure>
    );
};

export default Dashboard;
