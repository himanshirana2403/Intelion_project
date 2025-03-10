import React ,{useEffect} from "react";
import { Container, Button, Grid } from "@mui/material";
import "./Hero.css";
import heroImage from "../assets/hero-image.jpg"; // Update path if needed
import "aos/dist/aos.css"; // Import AOS for animations
import AOS from "aos";


const Hero = () => {
   useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
    <div className="hero-section">
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={4}>
          {/* Left Side: Text Content */}
          <Grid item xs={12} md={6} className="hero-text">
            <h1 data-aos="fade-up">Innovative IT Solutions & SaaS for Business Growth</h1>
            <p>Empower your business with cutting-edge SaaS solutions and IT services that drive efficiency, security, and scalability.</p>
            <div className="hero-buttons">
              <Button data-aos="fade-down" variant="contained" color="error" className="btn-red">
              Get Started
              </Button>
              <Button data-aos="fade-up" variant="contained" color="inherit" className="btn-black">
                ExploreServices
              </Button>
            </div>
          </Grid>

          {/* Right Side: Image */}
          <Grid item xs={12} md={6} className="hero-image-container">
            <div className="image-bubble">
              <img data-aos="fade-down" src={heroImage} alt="Team" className="hero-image" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
