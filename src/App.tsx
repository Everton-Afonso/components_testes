import "./App.css";
import Drawer from "./components/Drawer";
import IconClose from "./components/Drawer/components/Wrapper/IconClose";

function App() {
  return (
    <div className="teste">
      <Drawer iconDrawer={<IconClose />} titleWrapper="Menu">
        <div>Everton</div>
      </Drawer>
    </div>
  );
}

export default App;
