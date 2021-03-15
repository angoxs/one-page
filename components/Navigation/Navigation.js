import { Frame, Row, Title, Button } from "./style";

const title = "MaxUp";
const buttonText = "Get it for FREE";

export default function Navigation() {
  return (
    <Frame>
      <Row>
        <Title>{title}</Title>
        <Button href="https://github.com/anyelos/one-page" target="_blank">
          {buttonText}
        </Button>
      </Row>
    </Frame>
  );
}
