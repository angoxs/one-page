import { Frame, Column, Title, Description, Button } from "./style";

const title = "Start your free trial today!";
const description = "READY TO START?";
const buttonText = "Get Started";

export default function CTA() {
  return (
    <Frame>
      <Column>
        <Description>{description}</Description>
        <Title>{title}</Title>
        <Button>{buttonText} &rarr;</Button>
      </Column>
    </Frame>
  );
}
