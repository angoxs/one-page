import { styled } from "../../../stitches.config";
import Benefit from "./Benefit";

const Frame = styled("div", {
  padding: "40px 44px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  border: "1px solid #1e253b",
  borderRadius: 15,
  background: "#1e253b",

  ":nth-child(2)": {
    background: "#3b97ec",
    marginBottom: 100,

    bp2: {
      marginBottom: 0,
    },
  },
});

const Title = styled("h4", {
  color: "white",
  fontSize: 54,
  fontWeight: 800,
  margin: 0,
  marginTop: 30,
  marginBottom: 20,

  span: {
    color: "rgba(255,255,255,0.1)",
  },
});

const Description = styled("p", {
  fontSize: 20,
  color: "rgba(255, 255, 255, 0.6)",
});

const Divider = styled("div", {
  height: 3,
  width: "100%",
  background: "rgba(255,255,255,0.1)",
  marginBottom: 30,
});

const Row = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const Button = styled("button", {
  height: 60,
  width: 220,
  fontSize: 14,
  fontWeight: 500,
  cursor: "pointer",
  borderRadius: 8,
  background: "#f8a2d6",
  color: "white",
  border: "none",
  boxShadow: "0px 20px 40px rgba(248, 162, 214, 0.25)",
  marginTop: 30,

  ":nth-child(2)": {
    background: "#84cffe",
  },

  ":hover": {
    background: "white",
    color: "#f8a2d6",
    boxShadow: "0px 20px 40px rgba(248, 162, 214, 0.35)",
  },

  bp2: {
    width: "100%",
  },
});

export default function Price(props) {
  return (
    <Frame>
      <Description>{props.description}</Description>
      <Title>
        <span>$</span>
        {props.title}
      </Title>
      <Divider />
      <Benefit icon="/icons/tick.svg" title="7,000,000+ Events" />
      <Benefit icon="/icons/tick.svg" title="4 Custom Domains" />
      <Benefit icon="/icons/tick.svg" title="Dedicated Support Agent" />
      <Benefit icon="/icons/tick.svg" title="12 Months Data History" />
      <Benefit icon="/icons/tick.svg" title="1 Dedicated SSL" />
      <Button>Get Started &rarr;</Button>
    </Frame>
  );
}
