import { styled } from "../../stitches.config";

export const Frame = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 150,
  paddingBottom: 150,

  bp2: {
    paddingTop: 90,
    paddingBottom: 90,
  },
});

export const Column = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100%",
  marginBottom: 120,

  bp2: {
    marginBottom: 100,
  },
});

export const Row = styled("section", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gridGap: 80,

  bp2: {
    gridTemplateColumns: "1fr",
    gridGap: 40,
  },
});

export const Title = styled("h1", {
  fontSize: 54,
  marginTop: 20,
  marginBottom: 20,

  bp2: {
    fontSize: 44,
    marginTop: 10,
    marginBottom: 0,
  },
});

export const Description = styled("p", {
  fontSize: 20,
  maxWidth: 400,

  bp2: {
    fontSize: 18,
    marginTop: 20,
  },
});

export const Company = styled("span", {
  color: "#838793",
  fontSize: 22,
});

export const Text = styled("h2", {
  color: "white",
  fontSize: 38,
  fontWeight: 600,
  margin: 0,
  marginBottom: 20,

  bp2: {
    fontSize: 34,
    marginTop: 20,
    marginBottom: 20,
  },
});

export const SubText = styled("p", {
  fontSize: 20,
  maxWidth: 400,

  bp2: {
    fontSize: 16,
  },
});

export const TitleFrame = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  textAlign: "left",
});

export const ImageFrame = styled("div", {
  border: "1px solid #1e253b",
  borderRadius: 24,

  img: {
    width: "100%",
  },
});
