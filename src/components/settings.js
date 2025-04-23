import settings from "./images/settings.jpg";
export default function Settings() {
  return (
    <div>
      <img style={style} src={settings} alt="settings" />
    </div>
  );
}

const style = {
  width: `250px`,
  height: `210px`,
  borderRadius: `3%`,
};
