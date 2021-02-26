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

const title = "Super easy to customize.";
const description =
  "Crystal clear class naming and build quality makes this super easy to update and customize for your brand. Oh, we also include figma files!";

export default function Introduction() {
  return (
    <Frame>
      <Column>
        <Company>MAXUP</Company>
        <Title>How does it work?</Title>
        <Description>
          Our landing page template works on all devices, so clone and get
          building!
        </Description>
      </Column>
      <Row>
        <ImageFrame>
          <img src="/copyright.svg" />
        </ImageFrame>
        <TitleFrame>
          <Text>{title}</Text>
          <SubText>{description}</SubText>
        </TitleFrame>
      </Row>
    </Frame>
  );
}
