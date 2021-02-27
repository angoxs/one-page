import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { Frame, Title, Description, Company, Column } from "./style";
import Fade from "react-reveal/Fade";

const company = "MAXUP";
const title = "How does it work?";
const description =
  " Our landing page template works on all devices, so clone and get building!";

export default function Introduction() {
  return (
    <Frame>
      <Column>
        <Fade>
          <Company>{company}</Company>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Fade>
      </Column>
      <Fade up>
        <Row1 />
        <Row2 />
        <Row3 />
      </Fade>
    </Frame>
  );
}
