import { styled } from "../../../stitches.config";

const Frame = styled("div", {
  padding: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export default function Client(props) {
  return (
    <Frame>
      <img src={props.logo} />
    </Frame>
  );
}
