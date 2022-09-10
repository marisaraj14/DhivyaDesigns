import styled from "styled-components";
import Logo from "../src/assets/logo.png";
import ArrowWhite from "../src/assets/arrow.png";
import Image1 from "../src/assets/Branding_2.png";
import Image2 from "../src/assets/Branding_1.png";
import Image3 from "../src/assets/Branding_3.png";
import { MouseParallax } from "react-just-parallax";
import "../src/index.css";

export const Branding = () => {
  return (
    <Container>
      <FlexContainer>
        <img src={Logo} alt="Logo" width={120} height={80} />
        <i
          className="fa fa-bars"
          style={{ color: "rgb(255,255,255,0.4)", fontSize: "30px" }}
        ></i>
      </FlexContainer>
      <div>
      <MouseParallax enableOnTouchDevice strength={0.04}>
          <div style={{ top: "-100px", left: "140px", position: "absolute" , zIndex:2}}>
            <img src={Image2} width={600} height={500} alt="Illustration 2" />
          </div>
        </MouseParallax>
        <MouseParallax enableOnTouchDevice strength={0.02} shouldResetPosition>
          <div
            style={{
              top: "50px",
              left: "200px",
              position: "absolute",
              zIndex: 5,
            }}
          >
            <img src={Image1} width={400} height={400} alt="Illustration 1" />
          </div>
        </MouseParallax>
        
        <Title
          style={{
            zIndex: 2,
            marginTop:"50px",
            position: "fixed",
            textAlign: "center",
            width: "100%",
            lineHeight:"140px"
          }}
        >
          Branding and <br/>Marketing
        </Title>
        <MouseParallax enableOnTouchDevice strength={0.02}>
          <div
            style={{
              top: "50px",
              right: "80px",
              position: "absolute",
              zIndex: 1,
            }}
          >
            <img src={Image3} width={540} height={530} alt="Illustration 1" />
          </div>
        </MouseParallax>
      </div>
      <List
        style={{
          display: "flex",
          gap: "30px",
          position: "relative",
          top: "350px",
          listStyle: "none",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Linked>Illustrations</Linked>
        <Linked>UI Designs</Linked>
        <Linked>Print Designs</Linked>
        <Linked>Branding and Marketing</Linked>
        <Linked>3D Models</Linked>
        <Linked>
          <DiscoverButton>
            Discover
            <img src={ArrowWhite} width={30} height={15} />
          </DiscoverButton>
        </Linked>
      </List>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: #f97777;
  height: 100vh;
  width: 100vw;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 39px 76px 39px 43px;
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 140px;
  top: 140px;
  font-family: "Outfit", sans-serif;
  text-align: center;
  color: #ffffff;
`;

const DiscoverButton = styled.button`
  padding-left: 45px;
  padding-right: 45px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: none;
  border-radius: 50px;
  background: #3e2521;
  font-family: "Outfit", sans-serif;
  font-size: 18px;
  gap: 10px;
  display: flex;
  align-items: center;
  color: white;
`;
const Linked = styled.li`
  font-family: "Outfit", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
`;

const List = styled.ol`
  display: inline;
`;
