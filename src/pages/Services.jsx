import React from "react";
import user from "../assets/js/data/user";
import { CardTagsBottom } from "../components/cards/cardTagsBottom/CardTagsBottom";

const Services = () => {
  return (
    <div className="services">
      <h1 className="app-heading1 text-center">Services</h1>
      <div className="grids content-child">
        {user.services.map((service, index) => (
          <div className="grid-2" key={index}>
            <CardTagsBottom data={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
