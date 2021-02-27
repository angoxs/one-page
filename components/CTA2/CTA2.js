import { Frame, Row, Column, Title, Description, Button } from "./style";

const title = "Start your free trial today!";
const description = "READY TO START?";
const buttonText = "Get Started";

export default function CTA2() {
  return (
    <Frame>
      <Row>
        <Column>
          <Description>{description}</Description>
          <Title>{title}</Title>
        </Column>

        <Button>{buttonText} &rarr;</Button>
      </Row>
    </Frame>
  );
}
