import "./esfera.css";
const Esfera = () => {
  return (
    <div className="esfera-container">
      <div className="tanque-esfera">
        <div className="fill"></div>

        <ul className="metrics">
          <li>70 gl</li>
          <li>60 gl</li>
          <li>50 gl</li>
          <li>40 gl</li>
          <li>30 gl</li>
          <li>20 gl</li>
          <li>10 gl</li>
          <li>0 gl</li>
        </ul>
      </div>
      <div className="ancla"></div>
      <div className="ancla right"></div>
      <div className="ancla small"></div>
      <div className="ancla small right"></div>
      <div className="base"></div>
    </div>
  );
};

export default Esfera;
