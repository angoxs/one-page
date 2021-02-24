import { styled } from "../../stitches.config";

export const Frame = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Column = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  maxWidth: 800,
  textAlign: "center",
  flex: "wrap",
  gap: 30,
});

export const Title = styled("h1", {
  fontSize: 64,
});

export const Description = styled("p", {
  fontSize: 20,
});

export const Button = styled("button", {
  height: 60,
  width: 220,
  fontSize: 14,
  fontWeight: 500,
  cursor: "pointer",
  border: "5px solid rgba(255, 255, 255, 0.5)",
  borderRadius: 8,
});
