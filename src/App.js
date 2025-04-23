import Wheel from "./components/wheel";
import Display from "./components/display";
import { useState } from "react";

const menuItems = ["Cover Flow", "Music", "Games", "Settings"];
const music = ["All Songs", "Artists", "Albums"];

function App() {
  const [selectedId, setSelectedId] = useState(0);
  const [activeView, setActiveView] = useState("Main"); // Track current view
  const [selectedMenu, setSelectedMenu] = useState(false);
  const [menuHistory, setMenuHistory] = useState([]);
  const [menu, setMenu] = useState(true); // Start with menu shown
  const Items = selectedMenu ? music : menuItems;

  function handleDown() {
    setSelectedId((prev) => (prev >= Items.length - 1 ? 0 : prev + 1));
  }

  function handleUp() {
    setSelectedId((prev) => (prev <= 0 ? Items.length - 1 : prev - 1));
  }

  function handleClick() {
    const selected = Items[selectedId];
    setActiveView(selected); // Set the active view

    if (selected === "Music") {
      setMenuHistory((prev) => [...prev, { isSubmenu: false, }]);
      setSelectedMenu(true); // Show music submenu
      setSelectedId(0);
    } else if (selectedMenu) {
      setMenuHistory((prev) => [...prev, { isSubmenu: true,  }]);
      setMenu(false);
    } else {
      setMenuHistory((prev) => [...prev, { isSubmenu: false }]);
      setMenu(false); // Hide menu to show the selected component
    }

    return selected;
  }

  function handleMenuClick() {
    if (menuHistory.length > 0) {
      const lastmenu = menuHistory[menuHistory.length - 1];
      setMenuHistory((prev) => prev.slice(0, -1));
      console.log(lastmenu);
      setSelectedMenu(lastmenu.isSubmenu);
      setActiveView(lastmenu.view);
      setMenu(true);
    } else {
      setMenu(true); // Show main menu
      setSelectedMenu(false); // Reset to main menu items
      setActiveView("Main");
    }
  }

  return (
    <div className="ipod">
      <Display
        selectedId={selectedId}
        Items={Items}
        menu={menu}
        activeView={activeView}
        handleClick={handleClick}
      />
      <Wheel
        handleDown={handleDown}
        handleUp={handleUp}
        handleClick={handleClick}
        handleMenuClick={handleMenuClick}
      />
    </div>
  );
}

export default App;
