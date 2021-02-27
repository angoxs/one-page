import { styled } from "../../stitches.config";

export const Frame = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 120,
  paddingBottom: 120,
  width: "100%",
  margin: "0 auto",

  bp2: {
    paddingTop: 90,
    paddingBottom: 90,
  },
});

export const Row = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  background: "#84cffe",
  padding: 40,
  borderRadius: 24,

  bp2: {
    padding: "40px 20px",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
});

export const Column = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",

  bp2: {
    alignItems: "center",
  },
});

export const Title = styled("h1", {
  fontSize: 38,
  fontWeight: 600,
  marginTop: 10,

  bp2: {
    fontSize: 30,
    marginBottom: 30,
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
