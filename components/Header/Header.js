import { Frame, Column, Title, Description, Button } from "./style";
import Fade from "react-reveal/Fade";

const title = "Landing Template for Startups";
const description =
  "Our landing page template is equipped with high-tech and perfect for all sorts of technology businesses. Built by the Weppa team.";
const buttonText = "Pricing and Plans";

export default function Header() {
  return (
    <Fade>
      <Frame>
        <Column>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Button>{buttonText}</Button>
        </Column>
        <img src="/images/maxup.png" width="100%" />
      </Frame>
    </Fade>
  );
}
