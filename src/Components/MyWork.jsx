import Project from "./Project";
import Title from "./Title.jsx";
import { Fade } from "react-awesome-reveal";

export default function MyWork() {
  return (
    <div id="projects">
      <Fade fraction={0.85} triggerOnce>
        <Title className="mt-10" heading={"My Work -"} />
        <Project
          title={"dive animals"}
          description={
            "Dive Animals is a local scuba dive club in La Jolla, CA. Their website from 2011 needed an update and was bulit using HTML, CSS, Bootstrap, and Embedded JavaScript."
          }
          href={"https://dasc.onrender.com"}
          link={"DASC.onrender.com"}
          code={"https://github.com/jess-designs/DASC"}
        />
        <Project
          title={"Space Pics"}
          description={
            "Like a 365-day calendar, this website fetches a new photo and description updated daily from NASA's API. Built with HTML, CSS, JS, Axios, and Express."
          }
          href={"https://space-pics.onrender.com/"}
          link={"space-pics.onrender.com"}
          code={"https://github.com/jess-designs/spacePics"}
        />
        <Project
          title={"Portfolio"}
          description={
            "This website you're currently browsing was built using HTML, CSS, TailwindCSS, and ReactJS."
          }
          href={"https://jessica-zwicky.com/"}
          link={"Currently browsing"}
        />
      </Fade>
    </div>
  );
}
