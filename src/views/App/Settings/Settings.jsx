import { useState } from "react";
import { SettingsWrapper, Content, Sidebar, Wrapper } from "./Settings.styles";
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
        {tabs.map((tab) => {
          return (
            <Wrapper
              onClick={() => setCurrentTab(tab.name)}
              key={tab.name}
              activeLink={currentTab == tab.name}
            >
              <div>
                <img src={tab.icon} /> {tab.name}
              </div>
            </Wrapper>
          );
        })}
      </Sidebar>
      <Content>
        {tabs.map((tab) => {
          if (tab.name === currentTab) {
            return <tab.content content={tab} />;
          }
        })}
      </Content>
    </SettingsWrapper>
  );
};

export default Settings;
