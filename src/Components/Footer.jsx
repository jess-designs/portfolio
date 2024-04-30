import smiley from "../smiley.png";
import Title from "./Title";
import email from "../email.png";
import linkedin from "../linkedin.png";
import insta from "../insta.png";
import { Fade } from "react-awesome-reveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div id="contact">
        <Fade triggerOnce fraction={1}>
          <Title heading={"Let's Chat -"} />
        </Fade>
        <div className="flex flex-col gap-4">
          <Fade cascade fraction={1} duration={500} direction="up" triggerOnce>
            <p>
              If you'd like to work together,{" "}
              <a
                href="mailto: jess.zwicky@gmail.com"
                className="underlineOnHover font-bold"
              >
                shoot me a message!
              </a>
            </p>
            <p>
              Let's connect on{" "}
              <a
                className="underlineOnHover font-bold"
                href="https://www.linkedin.com/in/jess-designs"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p>
              See more projects & follow along with my continuing education on{" "}
              <a
                className="underlineOnHover font-bold"
                href="https://www.instagram.com/webdevbyjess/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </p>
            <p className="inline-flex">
              Thanks for stopping by{" "}
              <img className="h-5 ml-2" src={smiley} alt="smiley icon" />
            </p>
          </Fade>
        </div>
      </div>
      <p className="text-center mt dev text-gray-800 mb-5">
        &copy; Jessica Zwicky {currentYear}
        <a href="mailto: jess.zwicky@gmail.com">
          <img className="inline-flex ml-3 h-8" alt="email" src={email} />
        </a>
        <a
          href="https://www.instagram.com/webdevbyjess/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="inline-flex ml-4 h-7" alt="instagram" src={insta} />
        </a>
        <a
          href="https://www.linkedin.com/in/jess-designs"
          target="_blank"
          rel="noreferrer"
        >
          <img className="inline-flex ml-3" alt="linked in" src={linkedin} />
        </a>
      </p>
    </>
  );
}
