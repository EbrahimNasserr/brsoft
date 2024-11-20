import React from "react";
import { projects } from "../../../Data"; // Adjust the import path as necessary
import Image from "next/image";
import Section2 from "./_components/Section2";
import Section1 from "./_components/Section1";
import Section3 from "./_components/Section3";
import Section5 from "./_components/Section5";
import Section4 from "./_components/Section4";

const ProductDetails = ({ params }) => {
  const projectId = parseInt(params.id); // Convert id to an integer
  const project = projects.find((p) => p.id === projectId); // Find the project by id

  if (!project) {
    return <div>Project not found</div>; // Handle case when project is not found
  }

  return (
    <main>
      <Section1 />
      <Section2 src={project.src} />
      <Section3 />
      <Section4 />
      <Section5 title={project.title} desc={project.description} />
    </main>
  );
};

export default ProductDetails;
