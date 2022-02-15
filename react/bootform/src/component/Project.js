import display from "../imageInSrc.jpg";
import trailer from "../trailer_hd.mp4";
export default function Project() {
  const style = {
    border: "solid 1px black",
    "max-width": "100vw",
  };
  return (
    <div>
      <div style={style}>
        <h1 class="title red">Ayomide Benjamin Ayansiji</h1>
        <br />
        <img src={display} className="firstImage" alt="logo" />
        <br />
        <img src="/imageInPublic.jpg" className="secondImage" alt="images" />
      </div>
      <video width="320" height="240" controls>
        <source src={trailer} type="video/mp4" />
      </video>
    </div>
  );
}
