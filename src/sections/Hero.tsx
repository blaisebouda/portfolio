import Flex from "../components/Flex";
import profileImg from "/profile.jpg";
import Reveal from "../components/Reveal";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <header>
        <div></div>
        <Flex center>
          <a className="btn-link" href="#contributions">
            Contributions
          </a>
          <a href="#call-to-action" className="cta-btn">
            Me contacter
          </a>
        </Flex>
      </header>

      <div className="hero_container">
        <Flex direction="column">
          <Reveal>
            <p className="unbounded text-gray">Welcome 👋 je suis</p>
          </Reveal>
          <h1 className="unbounded">Blaise Bouda</h1>
          <p className="desc text-lg">
            Développeur FullStack <span>+5 ans</span> d’expérience et avec{" "}
            <span>+10</span> projects livrés.
          </p>
        </Flex>
        <div className="igmx">
          <img src={profileImg} alt="profile" width="200" />
        </div>
      </div>
    </div>
  );
}
