import { useState } from "react";
import { SettingsWrapper, Sidebar, Content } from "./Settings.styles";
import { tabs } from "./tabs.data";
import Avatar from "../../../components/Avatar/Avatar";

const Settings = () => {
  const [currentTab, setCurrentTab] = useState("Personal");
  return (
    <SettingsWrapper>
      <Sidebar>
        <span>
          <Avatar /> Username
        </span>
        <ul>
          {tabs.map((tab) => {
            return (
              <li onClick={() => setCurrentTab(tab.name)}>
                <img src={tab.icon} /> {tab.name}
              </li>
            );
          })}
        </ul>
      </Sidebar>
      <Content>
            {tabs.map((tab) => {
                if (tab.name === currentTab) {
                    return <tab.content content={tab} />
                }
            })}
      </Content>
    </SettingsWrapper>
  );
};

export default Settings;
