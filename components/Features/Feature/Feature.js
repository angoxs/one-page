import { styled } from "../../../stitches.config";

const Frame = styled("div", {
  padding: 40,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  border: "1px solid #1e253b",
  borderRadius: 15,
  cursor: "pointer",

  ":hover": {
    background: "#1e253b",
  },
});

const Title = styled("h4", {
  color: "white",
  fontSize: 25,
  fontWeight: 600,
  margin: 0,
  marginTop: 30,
  marginBottom: 20,
});

const Description = styled("p", {
  fontSize: 17,
  color: "#ccd2e9",
});

const Icon = styled("img", {
  width: 44,
  height: 44,
});

export default function Feature(props) {
  return (
    <Frame>
      <Icon src={props.icon} />
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Frame>
  );
}
