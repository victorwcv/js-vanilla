import { Link } from "react-router-dom";

const Button = ({ link, text, bgcolor }) => {


  return (
    <div style={{
      backgroundColor: bgcolor ||'#145979',
      fontSize: "24px",
      padding: "10px 30px",
      borderRadius: "10px",
      width: "250px",
      textAlign: "center",
      margin: "5px"
    }}>
      <Link to={link} style={{color: 'white', textDecoration: 'none'}}> {text} </Link>
    </div>
  );
};

export default Button;
