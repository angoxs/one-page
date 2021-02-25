import { styled } from "../../stitches.config";

export const Frame = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "space-between",
  justifyContent: "space-between",
  paddingTop: 40,
  paddingBottom: 40,
  paddingRight: 90,
  paddingLeft: 90,
  borderBottom: "1px solid #1e253b",

  bp2: {
    padding: 20,
  },
});

export const Row = styled("section", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

export const Title = styled("h1", {
  fontSize: 22,

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
  background: "white",
  color: "black",
  border: "none",

  ":hover": {
    color: "#004ed9",
  },

  bp2: {
    width: 160,
  },
});
