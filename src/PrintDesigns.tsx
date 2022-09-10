import styled from "styled-components";
import Logo from "../src/assets/logo.png";
import ArrowWhite from '../src/assets/arrow.png'
import Image1 from "../src/assets/PrintDesign_1.png";
import Image2 from "../src/assets/PrintDesign_2.png";
import { MouseParallax } from "react-just-parallax";
import "../src/index.css";

export const PrintDesign = () => {
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
        <MouseParallax enableOnTouchDevice strength={0.02} shouldResetPosition>
          <div
            style={{
              top: "-80px",
              left: "40px",
              position: "absolute",
              zIndex: 4,
            }}
          >
            <img src={Image1} width={800} height={450} alt="Illustration 1" />
          </div>
        </MouseParallax>
        <Title
          style={{
            zIndex: 1,
            position: "fixed",
            textAlign: "center",
            width: "100%",
          }}
        >
          Print Designs
        </Title>
        <MouseParallax enableOnTouchDevice strength={0.04}>
        <div
            style={{
              top: "-130px",
              right: "100px",
              position: "absolute",
              zIndex: 3,
            }}
          >
   
            <img src={Image2} width={680} height={600} alt="Illustration 2" />
          </div>
        </MouseParallax>
        
        {/* <MouseParallax enableOnTouchDevice strength={0.02}>
          <div
            style={{
              top: "80px",
              right: "260px",
              position: "absolute",
              zIndex: 1,
            }}
          >
            <img src={Image3} width={320} height={380} alt="Illustration 1" />
          </div>
        </MouseParallax> */}
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
            Discover<img src={ArrowWhite} width={30} height={15} alt="Arrow"/>
          </DiscoverButton>
        </Linked>
      </List>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: #8BD3B9;
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
  background: #41615F;
  font-family: "Outfit", sans-serif;
  font-size: 18px;
  gap:10px;
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
