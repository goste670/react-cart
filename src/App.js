import React from "react";
import PropTypes from "prop-types"; 
import "./App.css";
import image1 from "./img/dad.jpg";
import image2 from "./img/mom.jpg";
import image3 from "./img/sis.jpg";

const Carte = ({ image, message, sousMessage }) => {
  const styleCarte = {
    backgroundImage: `url(${image})`,
    border: "3px solid black",
    padding: "100px",
    margin: "60px",
    borderRadius: "5px",
    color: "red",
    textAlign: "center",
    width: "300px",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
  };

  const styleSousMessage = {
    color: "blue",
    fontWeight: "bold",
  };

  return (
    <div style={styleCarte}>
      <p>{message}</p>
      <h6 style={styleSousMessage}>{sousMessage}</h6>
    </div>
  );
};

Carte.propTypes = {
  image: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  sousMessage: PropTypes.string.isRequired,
};

const Navbar = () => {
  const styleNavbar = {
    backgroundColor: "#333",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const styleNavItem = {
    color: "white",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={styleNavbar}>
      <div>
        <a href="#" style={styleNavItem}>
          Accueil
        </a>
        <a href="#" style={styleNavItem}>
          Produits
        </a>
        <a href="#" style={styleNavItem}>
          Services
        </a>
      </div>
      <div>
        <a href="#" style={styleNavItem}>
          Mon Compte
        </a>
      </div>
    </div>
  );
};

const App = () => {
  const messages = ["Your DaD", "Your MoM", "Your SiS"];
  const sousMessages = ["Is dead", "married to gost", "Future Gitarist"];



  return (
    <div>
      <Navbar />
      <div className="App">

        {messages.map((message, index) => (
          <Carte
            key={index}
            image={index === 0 ? image1 : index === 1 ? image2 : image3}
            message={message}
            sousMessage={sousMessages[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
