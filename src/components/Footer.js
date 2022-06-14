import { Button, Container } from "react-bootstrap";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ConfirmationNumberSharpIcon from "@mui/icons-material/ConfirmationNumberSharp";
import ForwardToInboxSharpIcon from "@mui/icons-material/ForwardToInboxSharp";
import React from "react";

const Footer = () => {
  return (
    <Container className="Footer">
      <div className="listyourshow">
        <h3>List your Show</h3>
        <p>
          List Your Show,event,activity or a great experience?Partner with us
        </p>
        <Button variant="danger">Contact Us!</Button>
      </div>
      <div className="customer">
        <div className="box">
          <SupportAgentIcon fontSize="large" />
          24/7 CUSTOMER SUPPORT
        </div>
        <div className="box">
          <ConfirmationNumberSharpIcon fontSize="large" />
          RE-CONFIRM TICKET
        </div>
        <div className="box">
          <ForwardToInboxSharpIcon fontSize="large" />
          SUBSCRIBE TO NEWSLETTER
        </div>
      </div>
    </Container>
  );
};

export default Footer;
