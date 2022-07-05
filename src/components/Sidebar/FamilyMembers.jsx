import { useEffect, useState } from "react";
import { WrapperFamily } from "./Sidebar.styles";
import SidebarInput from "../Inputs/SidebarInput";
import icon from "../../assets/icons/familyMember.svg";
import { useHistory } from "react-router-dom";
import { addFamilyMember } from "../../api/familyMembers.api";

const FamilyMembers = ({ members }) => {
  const [newMember, setNewMember] = useState(false);
  const pathname = useHistory().location.pathname;
  const [selected, setSelected] = useState("");
  const userId = process.env.REACT_APP_TEST_USER;
  const [familyMember, setFamilyMember] = useState({
    name: "",
    icon: "",
    familyLink: "",
    docs: [],
    categories: [],
    medicalVisits: []
  });

  useEffect(() => {
    if (familyMember.name.length > 0) {
      addFamilyMember(userId, familyMember)
        .then((res) => {
          setSelected(members[0]?.name ?? "addNew");
          setNewMember(false);
        });
    }
  }, [familyMember]);

  const addNew = () => {
    setNewMember(true);
    setSelected("addNew");
  };

  const clickOnMemberHandler = (selectedName) => {
    setSelected(selectedName);
  };

  console.log("membeeers", members);

  return (
    <>
      {members.length > 0 && members.map((member, idx) => {
        return (
          <WrapperFamily
            onClick={() => clickOnMemberHandler(member.name)}
            selected={member.name === selected} key={member.name + idx}
            to="#">
            <img src={icon} alt="#" />{member.name}
          </WrapperFamily>
        )
      })}
      {newMember && <WrapperFamily selected={selected === "addNew"} to="#" onClick={addNew}>
        <img src={icon} alt="#" />
        <SidebarInput familyMember={familyMember} setNewMember={setFamilyMember} />
      </WrapperFamily>}
      <WrapperFamily to="#" onClick={addNew}>+ Add new </WrapperFamily>
    </>
  );
};

export default FamilyMembers;
