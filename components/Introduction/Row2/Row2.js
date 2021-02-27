import { styled } from "../../../stitches.config";

const Frame = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gridGap: 80,
  marginTop: 120,
  marginBottom: 120,

  bp2: {
    display: "flex",
    flexDirection: "column-reverse",
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
  marginBottom: 40,

  img: {
    width: "100%",
  },
});

const title = "Totally free and cloneable.";
const description =
  "Our mission is to support all creators, from all backgrounds. If our free content helps you in anyway, please considering following and sharing to help support us.  ";

export default function Row2() {
  return (
    <Frame>
      <TitleFrame>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleFrame>
      <ImageFrame>
        <img src="/images/elements-02.png" />
      </ImageFrame>
    </Frame>
  );
}
