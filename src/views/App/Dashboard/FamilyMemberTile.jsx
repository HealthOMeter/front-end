import { MemberTile } from "./Dashboard.styles";
import { Pbold, P } from "../../../styles/typography/text.styles";
import Avatar from "../../../components/Avatar/Avatar";

const FamilyMemberTile = ({ familyMember })=> {
    return (
        <MemberTile>
            <Avatar img={familyMember.icon} />
            <Pbold>
                {familyMember.name}
            </Pbold>
            <P>
                {familyMember.familyLink}
            </P>
        </MemberTile>
    )
};

export default FamilyMemberTile;
