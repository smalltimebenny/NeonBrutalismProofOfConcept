import Article from "./components/Article";
import Body from "./components/Body";
import Headsup from "./components/Headsup";
import Sider from "./components/Sider";
import MainContent from "./components/MainContent";
import NeonLight from "./components/NeonLight";
import VerticalNeonLight from "./components/VerticalNeonLight";

function App() {
  return (
    <div class="bg-gradient-to-r from-black to-blue-800">
      <Body />
      <Headsup/>
      <NeonLight />
      <Sider />
      <VerticalNeonLight />
    </div>
  );
}

export default App;
