import song1 from "./songs/Starboy.mp3";
import img1 from "./images/starboy.jpg";
export default function Music() {
  return (
    <div className="all-songs">
      <div className="thumbnail">
        <img style={style} src={img1} alt="starboy" />
      </div>
      <audio  src={song1} controls></audio>
    </div>
  );
}

const style = {
    width: `120px`,
    height: `120px`,
    borderRadius: `3%`,
    marginTop:`10px`
}