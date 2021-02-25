import { Frame, Row, Title, Button } from "./style";

const title = "MaxUp";
const buttonText = "Purchase $19";

export default function Navigation() {
  return (
    <Frame>
      <Row>
        <Title>{title}</Title>
        <Button>{buttonText}</Button>
      </Row>
    </Frame>
  );
}
