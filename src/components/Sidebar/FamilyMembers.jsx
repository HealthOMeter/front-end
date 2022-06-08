import { useState } from "react";
import { WrapperFamily } from "./Sidebar.styles";

const FamilyMembers = ({ members }) => {
  const FAMILY_PLACEHOLDER = [
    {
      name: "Dagmara",
      relation: "sister",
      icon: "https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_960_720.jpg",
    },
    {
      name: "Krzysiek",
      relation: "father",
      icon: "https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg",
    },
    {
      name: "Aniela",
      relation: "grandmother",
      icon: "",
    },
  ];

  members = FAMILY_PLACEHOLDER;

  return (
    <>
      {members.map((member) => {
        return <WrapperFamily>{member.name}</WrapperFamily>;
      })}
      <WrapperFamily>+ Add new </WrapperFamily>
    </>
  );
};

export default FamilyMembers;
