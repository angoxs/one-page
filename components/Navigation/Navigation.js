import { Frame, Column, Title, Description, Button } from "./style";
import Fade from "react-reveal/Fade";

const title = "MaxUp";
const buttonText = "Purchase $19";

export default function Navigation() {
  return (
    <Fade>
      <Frame>
        <Column>
          <Title>{title}</Title>
          <Button>{buttonText}</Button>
        </Column>
      </Frame>
    </Fade>
  );
}
