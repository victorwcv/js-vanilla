import Button from "../../components/buton/Button";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="main-container">
        <h1>Evolución de Inventarios de las Esferas</h1>
        <div className="buttons-container">
          <Button link="./3105" text="Esfera 3105" />
          <Button link="./13105" text="Esfera 13105" />
          <Button link="./23105" text="Esfera 23105" />
        </div>
      </div>
    </div>
  );
};

export default Home;
