import React from "react";
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg1.svg'
import Icon3 from '../../images/svg-5.svg'

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServiceIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServiceIcon src={Icon1} />
            <ServicesH2>Many means to one goal</ServicesH2>
            <ServicesP>
              Lorem amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServiceIcon src={Icon2} />
            <ServicesH2>Flexibility</ServicesH2>
            <ServicesP>
              Lorem ipsum dolor sit amet,adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServiceIcon src={Icon3} />
            <ServicesH2>Protect what matters</ServicesH2>
            <ServicesP>
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </ServicesP>
          </ServicesCard>
          
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
