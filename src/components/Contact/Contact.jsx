import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.container}>
      <div className={classes.upper_div}>
        <div className={classes.info_div}>
          <h6>Newslleter</h6>
          <p>Get news about articles and updates in your inbox.</p>
        </div>
        <form className={classes.form}>
          <input type="text" placeholder="NAME" required />
          <input type="email" placeholder="EMAIL" required />
          <input type="text" placeholder="MESSAGE" />
          <button className={classes.send_btn}>SEND</button>
        </form>
      </div>
      <div className={classes.title_div}>
        <h1 className={classes.title}>GET</h1>
        <h2 className={classes.title}>IN TOUCH</h2>
      </div>
    </div>
  );
};

export default Contact;
