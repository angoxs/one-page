import {
  Frame,
  Column,
  Grid,
  Title,
  Description,
  Image,
  Button,
} from "./style";
import Fade from "react-reveal/Fade";
import Client from "./Client";

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
        <Image src="/images/maxup.png" />
        <Grid>
          <Client logo="/logos/01.svg" />
          <Client logo="/logos/02.svg" />
          <Client logo="/logos/03.svg" />
          <Client logo="/logos/04.svg" />
          <Client logo="/logos/05.svg" />
        </Grid>
      </Frame>
    </Fade>
  );
}
