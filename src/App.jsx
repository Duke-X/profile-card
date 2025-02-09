import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import QRCode from "react-qr-code";
import background from "./assets/cool-background.svg";
import "./App.css";

function App() {
  const [profile, setProfile] = useState([]);

  const profileComponents = profile.map((pro) => (
    <ProfileCard
      image={pro.image}
      designation={pro.designation}
      company={pro.company}
      resumeLink={pro.resumeLink}
      linkedin={pro.linkedin}
      insta={pro.insta}
      github={pro.github}
      spotify={pro.spotify}
      portfolio={pro.portfolio}
    />
  ));

  function createProfile() {
    setProfile([
      {
        image: "/v.jpg",
        designation: "Web Developer",
        company: "Ex-Ralson",
        resumeLink: `https://docs.google.com/viewer?url=${window.location.origin}/VadishChhatwal.pdf`,
        linkedin: "https://www.linkedin.com/in/vadish-chhatwal-31b868249/",
        insta: "https://www.instagram.com/vadish_chhatwal_/",
        github: "https://github.com/Duke-X",
        spotify:
          "https://open.spotify.com/user/31uip4gai3yxjocaraaymaltyxnm?trackId=52HEmNCNvewyByx7xofF0T",
        portfolio: "https://vadishchhatwal.com",
      },
    ]);
  }

  return (
    <div>
      <button onClick={createProfile}>Create Profile</button>
      <div>
        <div
          className="app-container"
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundImage: `url(${background})`,
          }}
        >
          {profile.map((pro, index) => (
          <ProfileCard key={index} {...pro} />
        ))}
        </div>
      </div>
    </div>
  );
}

function ProfileCard({
  image,
  designation,
  company,
  resumeLink,
  linkedin,
  insta,
  github,
  spotify,
  portfolio,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="profile-card" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        
        {/* FRONT SIDE OF CARD */}
        <div
          className="card-front"
          style={{
            width: "400px",
            height: "500px",
            borderRadius: "5px",
            backgroundColor: "#30336b",
            right : "35px"
          }}
        >
          <img
            src={image}
            alt=""
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50px",
              marginTop: "30px",
            }}
          />
          <div
            style={{
              color: "white",
              fontSize: "25px",
              fontFamily: "monospace",
            }}
          >
            {designation}
          </div>
          <div
            style={{
              marginBottom: "50px",
              fontSize: "17px",
              fontFamily: "monospace",
            }}
          >
            {company}
          </div>
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            <button
              className="button-style"
              style={{
                marginBottom: "100px",
                padding: "10px 30px",
                borderRadius: "10px",
                backgroundColor: "white",
                color: "#30336b",
                fontFamily: "monospace",
              }}
            >
              Resume
            </button>
          </a>
          <div style={{ marginRight: "25px" }}>
            <a
              href={linkedin}
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FaLinkedin
                className="linkedin"
                style={{ fontSize: "50px", marginLeft: "40px" }}
              />
            </a>
            <a
              href={insta}
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FaInstagram
                className="insta"
                style={{ fontSize: "50px", marginLeft: "40px" }}
              />
            </a>
            <a
              href={github}
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FaGithub
                className="github"
                style={{ fontSize: "50px", marginLeft: "40px" }}
              />
            </a>
            <a
              href={spotify}
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FaSpotify
                className="spotify"
                style={{ fontSize: "50px", marginLeft: "40px" }}
              />
            </a>
          </div>
        </div>
        {/* //BACK SIDE OF CARD */}
        <div className="card-back">
          <h3
            style={{
              color: "white",
              fontSize: "25px",
              fontFamily: "monospace",
            }}
          >
            Scan to Visit Portfolio
          </h3>
          <QRCode
            value={portfolio}
            size={250}
            bgColor="black"
            fgColor="white"
          />
          <br />
          <div style={{fontFamily : "monospace"}}>Or</div>
          <a href={portfolio} target="_blank" rel="noopener noreferrer">
            <button className="visit-button">Visit Portfolio</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
