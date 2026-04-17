import { useState } from "react";
import "./sectionList.css";

export default function SectionList() {
  const [active, setActive] = useState(false);

  const sections = [
    { name: "reglas" },
    { name: "destacamentos" },
    { name: "estratagemas" },
    { name: "unidades" },
  ];

  const toggleList = () => {
    setActive((prev) => !prev);
  };

  return (
    <section className="container">
      <div className="sectionListImageCont" onClick={toggleList}>
        <img
          className="sectionListImage"
          src="/assets/icos/sectionList.png"
          alt="sections"
        />
      </div>
      <div className={`sectionListContainer ${active ? "active" : ""}`}>
        <ul className="sectionList">
          {sections.map((section, index) => (
            <li className="sectionListItem" key={index}>
              <a href={`#${section.name}`}>{section.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
