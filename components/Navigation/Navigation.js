import { Frame, Row, Title, Button } from "./style";

const title = "MaxUp";
const buttonText = "Purchase $19";

export default function Navigation() {
  return (
    <Frame>
      <Row>
        <Title>{title}</Title>
        <script src="https://gumroad.com/js/gumroad.js"></script>
        <Button href="https://gum.co/dzIAIv" target="_blank">
          {buttonText}
        </Button>
      </Row>
    </Frame>
  );
}
