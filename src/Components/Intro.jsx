import profile from "../profile.png";
import { TypeAnimation } from "react-type-animation";
import Icons from "./Icons";

export default function Intro() {
  return (
    <div id="intro" className="h-screen sm:pt-0">
      <div className="flex intro fade-in">
        <h1 className="inline-block text-center italic uppercase mx-auto md:mt-24">
          I'm
          <img
            className="profile inline-block md w-4 md:w-[15vw] ml-[4vw] mb-[3.5vw] animate__animated"
            src={profile}
            alt="web developer"
          />
          <br />
          Jess
        </h1>
      </div>
      <TypeAnimation
        sequence={["a Full-Stack Web Developer"]}
        speed={30}
        className={"developer"}
        wrapper="p"
      />
      <Icons />
    </div>
  );
}
