import { useState } from "react";
import Card from "../components/Card";
import Flex from "../components/Flex";
import { SectionTitle } from "../components/SectionTitle";
import RightArrow from "../components/icons/RightArrow";
import { contributions, type Contribution } from "./contribution";
import Modal from "../components/Modal";
import ChevronLeft from "../components/icons/ChevronLeft";

export default function Contributions() {
  const [open, setOpen] = useState(false);
  const [contribution, setContribution] = useState<Contribution | null>(null);

  const onShow = (contribution: Contribution) => {
    setOpen(true);
    setContribution(contribution);
  };

  return (
    <>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <main id="modal">
          <div className="show_contenair">
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer la fenêtre"
              className="btn-link"
              style={{ paddingBottom: "1rem" }}
            >
              <ChevronLeft />
              <span>Revenir en arrière</span>
            </button>
            {contribution && (
              <Show contribution={contribution} onShow={onShow} />
            )}
          </div>
        </main>
      </Modal>

      <section id="contributions" className="space-section">
        <SectionTitle>
          Explorez mes top <br /> contributions
        </SectionTitle>
        <div className="section_container contributions_container top-space">
          {contributions.map((contribution, index) => (
            <ContributionCard
              key={index}
              contribution={contribution}
              onShow={onShow}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function ContributionCard({
  contribution,
  onShow,
}: {
  contribution: Contribution;
  onShow: (contribution: Contribution) => void;
}) {
  return (
    <Card padding="1.2rem" hasHover>
      <Flex gap="1.2rem" direction="column">
        <img src={contribution.cover} alt="screenshot" />
        <Flex between>
          <h3 className="unbounded">{contribution.title}</h3>
          <span style={{ fontSize: ".9rem" }} className="text-gray">
            {contribution.year}{" "}
          </span>
        </Flex>

        <Flex gap=".5rem" direction="column">
          <p>{contribution.short_description}</p>
          <Technologies technologies={contribution.technologies} />
        </Flex>
        <button onClick={() => onShow(contribution)} className="btn-link rigth">
          Voir le projet
          <RightArrow />
        </button>
      </Flex>
    </Card>
  );
}

function Technologies({ technologies }: { technologies: string[] }) {
  return (
    <Flex gap=".5rem" wrap>
      {technologies.map((technology, index) => (
        <div className="techology" key={index}>
          {technology}
        </div>
      ))}
    </Flex>
  );
}

function Show({
  contribution,
  onShow,
}: {
  contribution: Contribution;
  onShow: (contribution: Contribution) => void;
}) {
  const desc = contribution.description;

  return (
    <div className="show_contenair">
      <Flex gap="3em" direction="column">
        <img src={contribution.cover} alt="" />
        <Flex direction="column">
          <div className="title">
            <h3 className="unbounded">{contribution.title}</h3>
            {desc.visit_link && (
              <a href={desc.visit_link} target="_blank" className="btn-link">
                Visiter le site
                <RightArrow />
              </a>
            )}
          </div>
          <p>{desc.more_desc}</p>
          {desc.context && (
            <p>
              <span className="text-gray">Contexte : </span>
              {desc.context}
            </p>
          )}
        </Flex>
        <Flex gap=".5rem" direction="column">
          <h3 className="unbounded">Mes contributions</h3>
          <ul>
            {desc.contributions.map((contribution, index) => (
              <li key={index}> {contribution}</li>
            ))}
          </ul>
        </Flex>
        <Flex gap=".5rem" direction="column">
          <h3 className="unbounded">Technologies utilisées</h3>
          <ul>
            {desc.technologies.map((technologie, index) => (
              <li key={index}> {technologie}</li>
            ))}
          </ul>
        </Flex>
      </Flex>
      <div className="nav">
        <NavigationContribution contribution={contribution} onShow={onShow} />
      </div>
    </div>
  );
}

function NavigationContribution({
  contribution,
  onShow,
}: {
  contribution: Contribution;
  onShow: (contribution: Contribution) => void;
}) {
  const next = contributions.find((c) => c.id === contribution.id + 1);
  const prev = contributions.find((c) => c.id === contribution.id - 1);

  return (
    <Flex wrap between>
      {prev && (
        <Flex direction="column" gap=".2rem">
          <a href="#modal" className="btn-link" onClick={() => onShow(prev)}>
            Projet précédent
          </a>
          <h4 className="unbounded">{prev.title}</h4>
        </Flex>
      )}
      {next && (
        <Flex direction="column" gap=".2rem">
          <a href="#modal" className="btn-link" onClick={() => onShow(next)}>
            Projet suivant
          </a>
          <h4 className="unbounded">{next.title}</h4>
        </Flex>
      )}
    </Flex>
  );
}
