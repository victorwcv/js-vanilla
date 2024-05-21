import Button from "../../components/buton/Button";
import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <img
          src="bg_spheres.webp"
          alt="bg-spheres"
          className="background"
        />
      <div className="main-container">
        <h1>Evolución de Inventarios: Esferas y Condensadores</h1>
        <div className="buttons-container">
          <Button link="./esferas" text="Esferas" />
          <Button link="./condensadores" text="Condensadores" />
        </div>
      </div>
    </div>
  );
};

export default Home;
