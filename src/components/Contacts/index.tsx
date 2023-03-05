import React from "react";
import { pageWrapper as Wrapper } from "../../common/pageWrapper";
import { Container } from "./Contacts.styles";

const Contacts: React.FC = () => (
    <Wrapper>
        <Container>
            <h1>Contacts</h1>
            <form action="https://formsubmit.co/855c3d45315da611a54590525e95b997" method="POST">
                <input type="hidden" name="_subject" value="New submission!"></input>
                <input type="email" name="email" placeholder="Email Address"></input>
                <input type="text" name="name" required placeholder="Name"></input>
                <textarea name="message" placeholder="Write your message"></textarea>
                <input type="hidden" name="_autoresponse" value="Thank you for contacting me!"></input>
                {/* <input type="hidden" name="_next" value="https://localhost:3000/contacts"></input> */}
                <button type="submit">Send</button>
            </form>
        </Container>
    </Wrapper>
)

export default Contacts;
