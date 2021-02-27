import { Frame, Column, Grid, Title, Company, Image, Button } from "./style";
import Fade from "react-reveal/Fade";
import Price from "./Price";

const title = "Our Pricing";
const company = "MAXUP";

export default function Pricing() {
  return (
    <Fade>
      <Frame id="pricing">
        <Column>
          <Company>{company}</Company>
          <Title>{title}</Title>
        </Column>
        <Grid>
          <Price icon="/icons/tick.svg" title="0" description="FREE" />
          <Price icon="/icons/tick.svg" title="19" description="BASIC" />
          <Price icon="/icons/tick.svg" title="59" description="PREMIUM" />
        </Grid>
      </Frame>
    </Fade>
  );
}
