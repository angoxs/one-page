import { styled } from "../../../../stitches.config";

const Icon = styled("img", {
  width: 24,
  height: 24,
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

  bp2: {
    fontSize: 15,
  },
});

export default function Benefit(props) {
  return (
    <Frame>
      <Icon src={props.icon} />
      <Title>{props.title}</Title>
    </Frame>
  );
}
