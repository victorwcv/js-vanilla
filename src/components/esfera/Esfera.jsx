import "./esfera.css";
const Esfera = () => {
  return (
    <div className="esfera-container">
      <div className="tanque-esfera">
        {/* <div className="fill"></div> */}
        <svg className="onda" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q11,51 20,50 T40,50 Q51,51 60,50 T80,50 Q91,51 100,50 T120,50 Q131,51 140,50 T160,50 V100 H0 Z" />
        </svg>
        <ul className="metrics">
          <li>100 gl</li>
          <li>90 gl</li>
          <li>80 gl</li>
          <li>70 gl</li>
          <li>60 gl</li>
          <li>50 gl</li>
          <li>40 gl</li>
          <li>30 gl</li>
          <li>20 gl</li>
          <li>10 gl</li>
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
