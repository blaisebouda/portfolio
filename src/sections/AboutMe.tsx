import Flex from "../components/Flex";

import profileImg from "/profile.jpg";

const AboutMe = () => {
  return (
    <section id="philosophy" className="space-section">
      <div className="section_container about_container">
        <Flex direction="column">
          <h1 className="section-title unbounded"> Qui suis-je ?</h1>
          <img
            style={{ borderRadius: "1rem" }}
            src={profileImg}
            alt="profile"
          />
          <div className="love_bage">I ❤️ clean code</div>
        </Flex>
        <Flex direction="column" className="about_text">
          <p>
            {" "}
            Développeur <span className="text-gray">FullStack</span>, spécialisé
            en Laravel, React, Vue.js et UI/UX design, avec une approche où
            l’élégance du code rencontre la simplicité d’une bonne expérience
            utilisateur.
          </p>
          <p>
            {" "}
            <span className="text-gray"> Ce qui me motive : </span> Créer des
            solutions qui résolvent de vrais problèmes, qui font gagner du
            temps, qui améliorent le quotidien des clients… et qui témoignent
            d’un travail sérieux et soigné.
          </p>
          <p>
            {" "}
            Chaque projet est pour moi l’occasion de livrer non seulement du
            code, mais une expérience, un gain en performance, une solution
            fiable et évolutive.{" "}
          </p>
          <p>
            {" "}
            <span className="text-gray">Ma philosophie</span> : “Toujours coder
            comme si quelqu’un d’autre allait lire, maintenir et développer ce
            projet après moi.”
          </p>
          <p>
            {" "}
            Aujourd’hui, je continue de grandir, de me former, de partager. Je
            suis convaincu que la technologie n’est pas juste du code : c’est un
            moyen d’aider, de transformer, d’apporter de la valeur.
          </p>
        </Flex>
      </div>
    </section>
  );
};

export default AboutMe;
