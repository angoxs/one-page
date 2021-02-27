import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import {
  Frame,
  Row,
  Title,
  Description,
  TitleFrame,
  ImageFrame,
  Company,
  Column,
  Text,
  SubText,
} from "./style";
import Fade from "react-reveal/Fade";

const title = "Super easy to customize.";
const description =
  "Crystal clear class naming and build quality makes this super easy to update and customize for your brand. Oh, we also include figma files!";

export default function Introduction() {
  return (
    <Frame>
      <Column>
        <Fade>
          <Company>MAXUP</Company>
          <Title>How does it work?</Title>
          <Description>
            Our landing page template works on all devices, so clone and get
            building!
          </Description>
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
