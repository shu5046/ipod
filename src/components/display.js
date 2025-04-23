import Menu from "./menu";
import Coverflow from "./coverflow";
import Settings from "./settings";
import Games from "./games";
import Music from "./music";
// import Music from "./music"; // Make sure you have a Music component

export default function Display({ selectedId, Items, menu, activeView, handleClick }) {
  function renderComponent() {
    switch (activeView) {
      case "Cover Flow":
        return <Coverflow />;
    //   case "Music":
    //     return <Music />;
      case "Games":
        return <Games />;
      case "Settings":
        return <Settings />;
      case "All Songs":
        return <Music/>
      default:
        return null;
    }
  }

  return (
    <div className="display">
      {menu ? (
        <Menu selectedId={selectedId} Items={Items} />
      ) : (
        renderComponent()
      )}
    </div>
  );
}