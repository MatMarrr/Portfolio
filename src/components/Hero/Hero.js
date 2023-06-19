import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there <br /> I'm Mateusz Marek
      </SectionTitle>
      <SectionText>
        A full-stack web developer willing to learn new technologies and gain
        further experience
      </SectionText>
      <Button
        onClick={() =>
          (window.location.href = "mailto:mateuszrmarek@gmail.com")
        }
      >
        Contact me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
