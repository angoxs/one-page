import { styled } from "../../stitches.config";

export const Frame = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 0,
  paddingBottom: 0,
  width: "100%",
  margin: "0 auto",

  bp2: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export const Column = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: 900,
  width: "100%",
  margin: "0 auto",
  background: "#84cffe",
  borderRadius: 24,
  padding: 80,
  textAlign: "center",

  bp2: {
    padding: "40px 20px",
  },
});

export const Title = styled("h1", {
  fontSize: 38,
  fontWeight: 600,
  marginTop: 20,
  marginBottom: 40,

  bp2: {
    fontSize: 30,
  },
});

export const Description = styled("p", {
  color: "#419df0",
  fontWeight: 500,
  fontSize: 20,

  bp2: {
    fontSize: 18,
  },
});

export const Button = styled("button", {
  height: 50,
  width: 200,
  fontSize: 14,
  fontWeight: 500,
  cursor: "pointer",
  borderRadius: 8,
  background: "#f8a2d6",
  color: "white",
  border: "none",
  boxShadow: "0px 20px 40px rgba(248, 162, 214, 0.25)",

  ":hover": {
    color: "#f8a2d6",
    background: "white",
    boxShadow: "0px 20px 40px rgba(248, 162, 214, 0.35)",
  },

  bp2: {
    width: "100%",
  },
});
