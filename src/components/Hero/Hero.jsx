import classes from "./Hero.module.css";
import starIcon from "../../assets/icons/bigStar.svg";
import spiralIcon from "../../assets/icons/spiral.svg";
import boyIcon from "../../assets/boy.png";
import arrowIcon from "../../assets/icons/arrow.svg";

const Hero = () => {
  return (
    <main className={classes.container}>
      <div className={classes.left_div}>
        <div className={classes.text}>
          <p>Fresh</p>
          <p className={classes.hollow_text}>2022</p>
          <p className={classes.filled_text}>Look</p>
        </div>
        <div className={classes.line_star}>
          <div className={classes.line} />
          <img className={classes.starIcon} src={starIcon} alt="star" />
        </div>
        <div className={classes.see_div}>
          <p>See more</p>
          <img src={arrowIcon} alt="arrow" />
        </div>
      </div>
      <div className={classes.right_div}>
        <img className={classes.spiral} src={spiralIcon} alt="spiralIcon" />
        <img className={classes.boy} src={boyIcon} alt="boyIcon" />
        <div className={classes.orange_rect} />
        <div className={classes.unknown_text}>
          <p>OREGON JACKET</p>
          <p>$124</p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
