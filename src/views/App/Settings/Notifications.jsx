import { BiggerP, SmallP } from "../../../styles/typography/text.styles";
import NotifRow from "./NotifRow";

const Notifications = ({ content })=> {

    const NOTIF_CONFIG = [
        {
            name: "Product updates",
            subText: "Information about change of the plateform's version, minor improvements, augmentations or failure corrections",
            isChecked: false
        },
        {
            name: "Doctor appointments",
            subText: "Notification about incoming appointments for you or your family members. 1 week and 1 day before.",
            isChecked: true
        },
        {
            name: "Memory",
            subText: "Get the information, when you are close to fill in all of your storage",
            isChecked: false
        }
    ]

    return (
        <div className="notif">
        <div className="header">
          <BiggerP>
            <img className="icon" src={content.icon} /> {content.name}
          </BiggerP>
          <SmallP>{content.subText}</SmallP>
        </div>
        <div className="content">
            {
                NOTIF_CONFIG.map((el)=> {
                    return <NotifRow {...el} />
                })
            }
        </div>
      </div>
    )
}

export default Notifications;
