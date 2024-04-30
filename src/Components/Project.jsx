import { useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function Project({ title, description, href, link, code }) {
  const [isExpanded, setIsExpanded] = useState(false);
  function expandProject() {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  }

  return (
    <div className="project">
      <div className="flex justify-between">
        <h3 className="uppercase cursor-pointer" onClick={expandProject}>
          {title}
        </h3>
        <h4
          className={`arrow ${isExpanded ? "rotate" : ""} cursor-pointer`}
          onClick={expandProject}
        >
          V
        </h4>
      </div>
      {isExpanded && (
        <div className="flex flex-col gap-4">
          <Fade
            fraction={0.85}
            cascade
            duration={500}
            direction="up"
            triggerOnce
          >
            <p>
              <a target="_blank" href={href} rel="noreferrer">
                Visit:{" "}
                <span className="font-bold underlineOnHover">{link}</span>
              </a>
            </p>
            <p>Description: {description}</p>
            <p>
              Code:{" "}
              <a
                target="_blank"
                href={code}
                rel="noreferrer"
                className="font-bold underlineOnHover"
              >
                {code}
              </a>
            </p>
          </Fade>
        </div>
      )}
    </div>
  );
}
