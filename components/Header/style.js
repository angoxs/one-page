import { styled } from "../../stitches.config";

export const Frame = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",

  bp2: {
    padding: "0 20px",
  },
});

export const Column = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  maxWidth: 800,
  textAlign: "center",
});

export const Title = styled("h1", {
  fontSize: 64,

  bp2: {
    fontSize: 44,
  },
});

export const Description = styled("p", {
  fontSize: 20,
  marginTop: 20,
  marginBottom: 40,

  bp2: {
    fontSize: 18,
  },
});

export const Button = styled("button", {
  height: 60,
  width: 220,
  fontSize: 14,
  fontWeight: 500,
  cursor: "pointer",
  borderRadius: 8,
  background: "#0059f7",
  color: "white",
  border: "none",
  boxShadow: "0px 20px 40px rgba(0, 89, 247, 0.25)",

  ":hover": {
    background: "#004ED9",
    boxShadow: "0px 20px 40px rgba(0, 89, 247, 0.35)",
  },
});
