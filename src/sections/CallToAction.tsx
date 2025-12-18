import Flex from "../components/Flex";
import arrow from "../assets/arrow.svg";
import Reveal from "../components/Reveal";

export default function CallToAction() {
  return (
    <section id="call-to-action" className="space-section">
      <Reveal>
        <div className="call_to_action">
          <Flex direction="column" gap="2rem">
            <div>
              <h1>Voulez-vous un talent ?</h1>
              <p style={{ paddingTop: ".5rem" }} className="text-gray">
                Je suis disponible pour une mission freelance ou un contrat
                CDD/CDI.
              </p>
            </div>
            <div className="cta_btn">
              <a href="mailto:blaisebouda05@gmail.com" className="cta-btn">
                Discutons ensemble
              </a>
              <span className="arrow">
                <img src={arrow} width={60} height={75} alt="arrow" />
              </span>
            </div>
          </Flex>
        </div>
      </Reveal>
    </section>
  );
}
