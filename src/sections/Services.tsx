import Card from "../components/Card";
import Flex from "../components/Flex";
import { SectionTitle } from "../components/SectionTitle";
import laravel from "../assets/logos/laravel.png";
import vue from "../assets/logos/vuejs.png";
import react from "../assets/logos/react.svg";
import ai from "../assets/logos/ai.png";
import figma from "../assets/logos/figma.png";
import node from "../assets/logos/nodejs.png";
import { yearAgo } from "../helpers";

type Service = {
  title: string;
  note: string;
  description: string;
  logos: string[];
};

const services: Service[] = [
  {
    title: "Backend Laravel & Node.js",
    note: `Je développe avec Laravel depuis plus de ${yearAgo(2022)} ans et avec Node.js depuis plus de ${yearAgo(2023)} ans`,
    description: `Je développe des applications PHP depuis plus de ${yearAgo(
      2020,
    )} ans et je maitrise son framework moderne Laravel.`,
    logos: [laravel, node],
  },
  {
    title: "Frontend VueJs & React",
    note: "Je suis à l'aise avec VueJs et ReactJs",
    description:
      "Si vous avez besoin de développer une application dynamique, reactive, j’ai des bonnes compétences en VuesJs et React.",
    logos: [vue, react],
  },
  {
    title: "AI & Design UI/UX",
    note: "Je suis passionné par le design UI/UX et l’IA",
    description:
      "Je conçois des interfaces modernes, minimalistes et centrées sur l’utilisateur. J’intègre l’IA pour simplifier les tâches répétitives et améliorer la qualité du code.",
    logos: [ai, figma],
  },
];

export default function Services() {
  return (
    <section id="services" className="space-section">
      <SectionTitle className="md-hidden ">
        Qu’est ce que je peux <br /> faire pour vous ?
      </SectionTitle>
      <div className="section_container services_container top-space">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard(service: Service) {
  return (
    <Card padding="1.2em" hasHover>
      <Flex direction="column">
        <Flex>
          {service.logos.map((logo, index) => (
            <div className="service_img" key={index}>
              <img src={logo} width="100%" />
            </div>
          ))}
        </Flex>
        <h3 className="unbounded">{service.title}</h3>
        <p className="service_note">{service.note}</p>
        <p>{service.description}</p>
      </Flex>
    </Card>
  );
}
