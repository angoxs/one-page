import { styled } from "../../stitches.config";

export const Frame = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const Row = styled("section", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  background: "#1e253b",
  paddingTop: 60,
  paddingBottom: 60,
  paddingLeft: 90,
  paddingRight: 90,
  textAlign: "center",

  bp2: {
    flexDirection: "column",
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
  },
});

export const Description = styled("p", {
  color: "rgba(255, 255, 255, 0.6)",
  fontWeight: 400,
  fontSize: 14,
  cursor: "pointer",

  bp2: {
    fontSize: 13,
  },

  ":hover": {
    color: "white",
  },
});

export const Social = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  alignItems: "center",
  justifyContent: "center",
  gridGap: 30,

  img: {
    cursor: "pointer",
  },
});

export const Terms = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  justifyContent: "center",
  gridGap: 10,

  bp2: {
    marginTop: 30,
    marginBottom: 30,
  },
});

export const Rights = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
