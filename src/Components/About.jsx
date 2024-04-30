import Title from "./Title.jsx";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <div id="about">
      <Fade fraction={0.85} triggerOnce direction="up">
        <Title heading={"Nice to meet you -"} />
        <p>
          I'm a passionate web developer with a lifelong obsession for good
          design.
        </p>
        <h3>Skills and Technologies I specialize in:</h3>
        <ul className="mb-10">
          <li>
            <span className="underline">Front-end Development:</span> HTML, CSS,
            JavaScript, React.js, Bootstrap, Tailwind CSS
          </li>
          <li>
            <span className="underline">Back-end Development:</span> Node.js,
            Express
          </li>
          <li>
            <span className="underline">Database:</span> MongoDB, PostgreSQL
          </li>
          <li>
            <span className="underline">Tools:</span> Figma, Git, Visual Studio
            Code, NPM
          </li>
        </ul>

        <h3>Journey into Web Development</h3>
        <p>
          Driven by a passion for creativity and problem-solving, I ventured
          into the world of web development in January 2023 with Dr. Angela Yu's
          Complete Web Development Bootcamp. Since then, I've continued my
          education with more courses to learn deeper about development and
          design tools such as React.js and Figma, and buliding projects for
          local companies and clubs in my network.
        </p>

        <h3>Work Philosophy</h3>
        <p>
          My diverse background has contributed to a unique perspective on
          problem-solving and creativity.
          <br />I believe in the power of continuous learning and collaboration,
          and that great design is visually appealing, intuitive, and
          user-centric.
        </p>

        <h3>Academic Background </h3>
        <p>
          I hold a Bachelor's degree in Exercise Science, where I where I honed
          my skills in research and analysis. Following my curiosity, I then
          immersed myself in a classical education in cello and philosophy,
          exploring the profound connections between music and thought. Through
          coursework and hands-on experience, I developed a keen understanding
          of human behavior and interaction.
        </p>

        <h3>Looking Ahead</h3>
        <p>
          As I continue to deepen my knowledge of design principles and hone my
          developer skills, I'm actively searching for my first Junior Web
          Developer role. I'm eager to immerse myself in a collaborative
          environment where I can learn from experienced professionals and
          contribute my passion for design and development to meaningful
          projects.
        </p>
      </Fade>
    </div>
  );
}
