import React from "react";
import Card from "./Card";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";

export default function Team() {
  const data = [
    {
      image: super1,
      name: "card",
      //name: "Imad",
      role: "The visionary",
    },
    {
      image: super2,
      name: "card",
      //name: "Shini",
      role: "The Architect",
    },
    {
      image: super3,
      name: "card",
      //name: "UltraPog",
      role: "The Artist",
    },
    {
      image: super4,
      name: "card",
      //name: "Mexican",
      role: "The Architect",
    },

  ];
  return (
    <div className="team" id="team">
      <div className="title-container">
        <h2 className="title">MEET THE</h2>
        <h2 className="title2">TEAM</h2>
      </div>
      <div className="cards">
        {data.map(({ image, name, role }, index) => (
          <Card
            image={image}
            series={name}
            title={role}
            key={index}
          />
        ))}
      </div>
    </div>
    // <Grid container spacing={3} justifyContent="center">
    //   <Grid item xs={12} sm={6} md={3}>
    //     <Tilt>
    //       <img src={super1} alt="super1" />
    //     </Tilt>
    //     <div className="card-content">
    //       <div className="card-heading">
    //         <h3 className="card-series">Imad</h3>
    //       </div>
    //       <div className="card-details">
    //         <p className="card-title">The visionary</p>
    //       </div>
    //     </div>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={3}>
    //     <Tilt>
    //       <img src={super1} alt="super1" />
    //     </Tilt>
    //     <div className="card-content">
    //       <div className="card-heading">
    //         <h3 className="card-series">Imad</h3>
    //       </div>
    //       <div className="card-details">
    //         <p className="card-title">The visionary</p>
    //       </div>
    //     </div>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={3}>
    //     <Tilt>
    //       <img src={super1} alt="super1" />
    //     </Tilt>
    //     <div className="card-content">
    //       <div className="card-heading">
    //         <h3 className="card-series">Imad</h3>
    //       </div>
    //       <div className="card-details">
    //         <p className="card-title">The visionary</p>
    //       </div>
    //     </div>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={3}>
    //     <Tilt>
    //       <img src={super1} alt="super1" />
    //     </Tilt>
    //     <div className="card-content">
    //       <div className="card-heading">
    //         <h3 className="card-series">Imad</h3>
    //       </div>
    //       <div className="card-details">
    //         <p className="card-title">The visionary</p>
    //       </div>
    //     </div>
    //   </Grid>
    // </Grid>
  );
}
