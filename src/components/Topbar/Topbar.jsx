import classes from "./Topbar.module.css";
import truckIcon from "../../assets/icons/truck.svg";
import fbIcon from "../../assets/icons/fb.svg";
import inIcon from "../../assets/icons/in.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import instaIcon from "../../assets/icons/insta.svg";

const Topbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left_div}>
        <img className={classes.icon} src={truckIcon} alt="truckIcon" />
        <p>Free Delivery</p>
        <p>|</p>
        <p>Return Policy</p>
      </div>
      <div className={classes.right_div}>
        <p>Login</p>
        <p className={classes.follow_us}>Follow US</p>
        <img src={fbIcon} alt="fbIcon" />
        <img src={inIcon} alt="inIcon" />
        <img src={twitterIcon} alt="twitterIcon" />
        <img src={instaIcon} alt="instaIcon" />
      </div>
    </div>
  );
};

export default Topbar;
