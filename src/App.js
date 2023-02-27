import "./App.css";
import { Parallax } from "react-parallax";
import Par1 from "../src/images/parallax1.jpg";
import Par2 from "../src/images/parallax2.jpg";
import Par3 from "../src/images/parallax3.webp";

function App() {
  return (
    <div className="App">
      <Parallax strength={600} bgImage={Par1}>
        <div className="content">
          <div className="text-content">Normal Parallax</div>
        </div>
      </Parallax>
      <Parallax strength={300} blur={{min: -15, max: 15}} bgImage={Par3}>
        <div className="content">
          <div className="text-content">Blur Parallax</div>
        </div>
      </Parallax>
      <Parallax strength={-600} bgImage={Par2}>
        <div className="content">
          <div className="text-content">Reverse Parallax</div>
        </div>
      </Parallax>
      <div className="content"></div>
    </div>
  );
}

export default App;
