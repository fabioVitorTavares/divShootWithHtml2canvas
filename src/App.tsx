import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import IMG from "./img/Captura de ecrã de 2023-07-23 23-36-46.png";

function App() {
  const refDiv = useRef<HTMLDivElement>(null);
  const [srcImg, setSrcImg] = useState("");

  async function generateImage() {
    if (refDiv.current) {
      const img = await html2canvas(refDiv.current);
      setSrcImg(img.toDataURL());
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0009",
        }}
        ref={refDiv}
      >
        <h1>ok teste</h1>
        <img src={IMG} alt="img" />
      </div>
      <button
        onClick={generateImage}
        style={{
          width: 300,
          height: 50,
        }}
      >
        Gerar IMG
      </button>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid ",
        }}
      >
        <img src={srcImg} width={"100%"} alt="img" />
      </div>
    </div>
  );
}

export default App;
