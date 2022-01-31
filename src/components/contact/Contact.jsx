import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";


const Contact = () => {


  return (
    <div className="c">

      <h1 className="c-title">buy in cheapest prices</h1>
      <div className="c-info">
        <div className="c-info-item">
          <img src={Phone} alt="" className="c-icon" />
          +1 11117487
        </div>
        <div className="c-info-item">
          <img className="c-icon" src={Email} alt="" />
          contact@example.com
        </div>
        <div className="c-info-item">
          <img className="c-icon" src={Address} alt="" />
          18  street example
        </div>
        <p className="">
          <b>What’s your idea ?</b> Always available clothes
          in cheapest prices

        </p>
      </div>
    </div>
  );
};

export default Contact;
