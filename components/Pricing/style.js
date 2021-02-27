import { styled } from "../../stitches.config";

export const Frame = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 50,
  paddingBottom: 0,
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
  textAlign: "center",
  flex: 1,
  width: "100%",
  marginBottom: 60,

  bp2: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  alignItems: "center",
  justifyContent: "stretch",
  width: "100%",
  gridGap: 40,

  bp2: {
    gridTemplateColumns: "1fr",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const Title = styled("h1", {
  fontSize: 60,

  bp2: {
    fontSize: 44,
  },
});

export const Company = styled("p", {
  fontSize: 20,
  maxWidth: 400,
  marginBottom: 8,

  bp2: {
    fontSize: 16,
    marginTop: 20,
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
