import {
  CommissionsContainer,
  TextContainer,
  ImageContainer,
  Container,
  ContactFormContainer,
} from "../styles.js/Commissions.styled";

import ContactForm from "./ContactForm";

const Commissions = (props) => {
  return (
    <CommissionsContainer>
      <Container>
        <ContactFormContainer>
          <ImageContainer
            src={props.paintings.acrylicpainting5}
            alt={"logo"}
          />
          <ContactForm />
        </ContactFormContainer>
        <TextContainer>
          <h1> Commissions </h1>
          <p>
            To commission an animal portrait, please use the form below. In the
            message section, describe your desired portrait and attach an image.{" "}
          </p>
          <p>
            Once all the required information is received, I will get in touch
            with you to talk about the details of your custom painting, and the
            acrylic, oil or graphite portrait will be completed and shipped
            within three to four weeks. Progress photos can be sent on request
            while the painting gets completed.
          </p>
          <p>I look forward to working with you.</p>
          <ImageContainer src={props.paintings.commissions2} alt={"logo"} />
        </TextContainer>
      </Container>
    </CommissionsContainer>
  );
};

export default Commissions;
