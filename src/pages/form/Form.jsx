import React from 'react';
import styles from './Form.module.css';
import QRCode from "qrcode";
// import axios from "axios";

const userdata = {
  name: "",
  email: "",
  whatsapp: "",
  company: "",
};

const Form = (props) => {
  const [isActive, setActive] = React.useState(false);
  const [data, setData] = React.useState(userdata);
  const [img, setImg] = React.useState("");

  const changeHanlder = (input, value) => {
    setData((prevData) => {
      return {
        ...prevData,
        [input]: value,
      };
    });
  };

  // React.useEffect(() => {
  //   QRCode.toDataURL(JSON.stringify(data))
  //     .then((res) => setImg(res))
  //     .catch((err) => console.log(err));
  // }, [isActive]);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(data);
    const qrdata = JSON.stringify(data);
    QRCode.toDataURL(qrdata)
    .then((res) => setImg(res))
    .catch((err) => console.log(err));
    setActive((current) => !current);
    // try{
    //   const res = await axios.post("http://localhost:5000/api/user", data);
    //   console.log(res);
    // }catch(err){
    //   console.log(err);
    // }
    setData(userdata);
  };

  const backhandle = () => {
    setActive((current) => !current);
  };
  return (
    <div className={`${styles.wrapper} ${isActive ? styles.active : ""}`}>
      <span className={styles.bgAnimate}></span>
      <span className={styles.bgAnimate2}></span>
      <div className={`${styles.formBox} ${styles.login}`}>
        <h2 className={`${styles.title} ${styles.animation1}`}>
          Fill The Details
        </h2>
        <form action="" onSubmit={handleClick}>
          <div className={`${styles.inputBox} ${styles.animation1}`}>
            <input
              type="text"
              value={data.name}
              id="name"
              onChange={(e) => changeHanlder("name", e.target.value)}
              required
            />
            <label htmlFor="">Name</label>
            <i className="bx bxs-user"></i>
          </div>
          <div className={`${styles.inputBox} ${styles.animation2}`}>
            <input
              type="email"
              value={data.email}
              id="email"
              onChange={(e) => changeHanlder("email", e.target.value)}
              required
            />
            <label htmlFor="">Email</label>
            <i className="bx bxs-envelope"></i>
          </div>
          <div className={`${styles.inputBox} ${styles.animation3}`}>
            <input
              type="number"
              value={data.whatsapp}
              id="whatsapp"
              required
              onChange={(e) => changeHanlder("whatsapp", e.target.value)}
            />
            <label htmlFor="">Whatsapp</label>
            <i className="bx bxl-whatsapp"></i>
          </div>
          <div className={`${styles.inputBox} ${styles.animation4}`}>
            <input
              type="mail"
              value={data.company}
              id="company"
              required
              onChange={(e) => changeHanlder("company", e.target.value)}
            />
            <label htmlFor="">Company</label>
            <i className="bx bxs-buildings"></i>
          </div>
          <button
            className={`${styles.btn} ${styles.animation5}`}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div className={`${styles.infoText} ${styles.login}`}>
        <h2>Generate Your QR Code!</h2>
      </div>

      {/* download section */}
      <div className={`${styles.formBox} ${styles.register}`}>
        <h2 className={`${styles.title} ${styles.animation1}`}>{data.name}</h2>
        <div className={`${styles.imageContainer} ${styles.animation2}`}>
          <img src={img} className={styles.imgBackground} alt="" />
        </div>
        <a href={img} download>
          <button
            className={`${styles.btn} ${styles.animation3}`}
            type="submit"
          >
            Download
          </button>
        </a>
        <button
          className={`${styles.btn} ${styles.animation4}`}
          onClick={backhandle}
        >
          <i className="bx bx-arrow-back"></i> <h4>Back</h4>
        </button>
      </div>
      <div className={`${styles.infoText} ${styles.register}`}>
        <h3>Get ready for an amazing event experience!</h3>
      </div>
    </div>
  );
};

export default Form;