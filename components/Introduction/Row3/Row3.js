import { styled } from "../../../stitches.config";

const Frame = styled("div", {
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

const Title = styled("h4", {
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

const Description = styled("p", {
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

const title = "High quality build from the maxup crew.";
const description =
  "We strive to provide the best free and premium content for all react creators. We've used best practises to ensure a high quality production level build.";

export default function Row3() {
  return (
    <Frame>
      <ImageFrame>
        <img src="/images/elements-03.png" />
      </ImageFrame>
      <TitleFrame>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleFrame>
    </Frame>
  );
}
