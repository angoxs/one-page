import { styled } from "../../stitches.config";

export const Frame = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 150,
  paddingBottom: 150,

  bp2: {
    paddingTop: 80,
    paddingBottom: 80,
  },
});

export const Column = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  maxWidth: 1000,
  textAlign: "center",
});

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  alignItems: "center",
  justifyContent: "stretch",
  width: "100%",
  gridGap: 20,

  bp2: {
    gridTemplateColumns: "1fr 1fr",
    justifyContent: "center",
    alignItems: "center",
  },
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
    fontSize: 16,
  },
});

export const Image = styled("img", {
  objectFit: "cover",
  width: "100%",
  marginTop: 80,
  marginBottom: 80,
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

  bp2: {
    width: "100%",
  },
});
