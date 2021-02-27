import { styled } from "../../../../stitches.config";

const Description = styled("p", {
  fontSize: 20,
  color: "rgba(255, 255, 255, 0.6)",
});

const Icon = styled("img", {
  width: 24,
  height: 24,
});

const Divider = styled("div", {
  height: 3,
  width: "100%",
  background: "rgba(255,255,255,0.1)",
  marginBottom: 30,
});

const Frame = styled("div", {
  display: "flex",
  alignItems: "center",
  marginBottom: 20,
});

const Title = styled("p", {
  fontSize: 16,
  color: "white",
  marginLeft: 15,
});

export default function Benefit(props) {
  return (
    <Frame>
      <Icon src={props.icon} />
      <Title>{props.title}</Title>
    </Frame>
  );
}
