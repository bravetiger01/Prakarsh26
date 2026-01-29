import FrameOne from "../components/FrameOne";
import FrameTwo from "../components/FrameTwo";
import FrameThree from "../components/FrameThree";

export default function Home() {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <FrameOne />
      <FrameTwo />
      <FrameThree />     
    </div>
  );
}