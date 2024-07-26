import React from "react";
import Ilse from "../Assets/ilse.png";
import Kayleen from "../Assets/kayleen.png";
import Diana from "../Assets/diana.png";

const Work = () => {
  const workInfoData = [
    
    {
      image: Kayleen,
      title: "Kayleen Helms",
      text: "Dr. Helms has a B.Sc. in civil engineering and a M.S. and Ph.D. in aerospace engineering. She works in Intel’s division of ATTD, where she has been in multiple groups supporting manufacturing, design, and quality & reliability (Q&R) for 12 years.  ",
    },
    {
      image: Ilse,
      title: "Ilse Nava-Medina",
      text: " Co-founder of Gel Matter and a research associate at the Advanced Science Research Center at City University of New York. Nava-Medina's postdoctoral research on synthetic mucus inspired her to found Gel Matter, whose mission is to commercialize sustainable synthetic mucus hydrogels. Nava-Medina holds a Ph.D. in materials science and engineering and a B.S. in chemistry.",
    },
    {
      image: Diana,
      title: "Diana Sepulveda Camarena",
      text: "Dr. Sepulveda has a B.Sc. and Ph.D. in chemistry, and works as R&D manager at Westlake Chemical. Her technical expertise includes epoxy resins, organic chemistry, computational chemistry, and others. Remarkably, she has experience working in the beauty department of Procter & Gamble and the coatings division of BASF.  ",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Employees</p>
        {/* <h1 className="primary-heading">How It Works</h1> */}
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
