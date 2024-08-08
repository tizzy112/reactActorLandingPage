import React from "react";
import styled from "styled-components";
const FooterContainer = styled.div`
  background-color: #333;
  color: #fff;
  width: 100vw;
  height: 80px;
  overflow: none;

  .footerH3 {
    text-align: center;
    padding-top: 20px;
  }
  .footerP {
    margin: 0 10px 10px 10px;
  }
`;
const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <h3 className="footerH3">tizzy@ActorReactApp</h3>
        <p>
          <p className="footerP"> &#169; tizzy Group. All Rights Reserved.</p>
        </p>
      </FooterContainer>
    </div>
  );
};

export default Footer;
