import { Frame, Row, Description, Social, Terms, Rights } from "./style";
import Link from "next/link";

const terms = "Terms & Conditions";
const policy = "Privacy Policy";
const rights = " All Rights Reserved";

export default function Footer() {
  return (
    <Frame>
      <Row>
        <Social>
          <Link href="/">
            <img src="/icons/facebook.svg" />
          </Link>
          <img src="/icons/twitter.svg" />
          <img src="/icons/instagram.svg" />
          <img src="/icons/in.svg" />
        </Social>
        <Terms>
          <Description>{terms}</Description>
          <Description>{policy}</Description>
        </Terms>
        <Rights>
          <Description>
            {new Date().getFullYear()}
            {rights}
          </Description>
        </Rights>
      </Row>
    </Frame>
  );
}
