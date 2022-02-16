import "./App.css";
import Profile from "./profile/Profile";
import myImage from "./alok.jpg";
function App() {
  return (
    <div className="container">
      <div className="main">
        <Profile
          fullName="Ayomide Benjamin Ayansiji"
          bio="I am a Software Engineer and i love programming"
          profession="Frontend Developer"
        >
          {myImage}
        </Profile>
      </div>
    </div>
  );
}

export default App;
