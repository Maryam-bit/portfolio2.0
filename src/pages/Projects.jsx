import React, { useState } from "react";
import user from "../assets/js/data/user";
import { FilterButtons } from "../components/FilterButtons";
import { CardTopImage } from "../components/cards/cardTopImage/CardTopImage";

const Projects = () => {
  const projectCategories = [
    ...new Set(user.projects.map((Val) => Val.category)),
  ];
  const [category, setCategory] = useState(user.projects);

  const filterCategory = (category) => {
    if (category === "All") {
      setCategory(user.projects);
      return;
    }
    const selectedCategory = user.projects.filter((val) => {
      return val.category === category;
    });
    setCategory(selectedCategory);
  };
  return (
    <div className="projects">
      <h1 className="app-heading1 text-center">Projects</h1>
        <FilterButtons
          filterCategory={filterCategory}
          projectCategories={projectCategories}
        />
      <div className="grids content-child">
        {category.map((project, index) => (
          <div className="grid-3" key={index}>
            <CardTopImage data={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
