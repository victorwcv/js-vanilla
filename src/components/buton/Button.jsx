import { Link } from "react-router-dom";

const Button = ({ link, text, bgcolor }) => {
  return (
    <>
      <Link
        to={link}
        style={{
          color: "white",
          textDecoration: "none",
          backgroundColor: bgcolor || "#145979",
          fontSize: "24px",
          padding: "15px 30px",
          borderRadius: "10px",
          width: "250px",
          textAlign: "center",
          margin: "5px",
        }}
      >
        {text}
      </Link>
    </>
  );
};

export default Button;
