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
import Feature from "./Feature";

const title = "Features";
const description =
  "Our landing page template works on all devices, so you only have to set.";

export default function Features() {
  return (
    <Fade>
      <Frame>
        <Column>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Column>
        <Grid>
          <Feature
            icon="/icons/category.svg"
            title="Dashboard"
            description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts for previewing layouts and visual mockups."
          />
          <Feature
            icon="/icons/chat.svg"
            title="Comment"
            description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts for previewing layouts and visual mockups."
          />
          <Feature
            icon="/icons/activity.svg"
            title="Tailored Comments"
            description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts for previewing layouts and visual mockups."
          />
          <Feature
            icon="/icons/add-user.svg"
            title="Statistic"
            description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts for previewing layouts and visual mockups."
          />
          <Feature
            icon="/icons/swap.svg"
            title="Profiles"
            description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts for previewing layouts and visual mockups."
          />
          <Feature
            icon="/icons/folder.svg"
            title="Folders"
            description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts for previewing layouts and visual mockups."
          />
        </Grid>
      </Frame>
    </Fade>
  );
}
