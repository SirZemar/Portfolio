import React from "react";
import { Button, Type } from "../../common/Button";
import { pageWrapper as Wrapper } from "../../common/pageWrapper";
import { Container } from "./Contacts.styles";
import Layout, { placement, position } from "../../common/Layout";

const Contacts: React.FC = () => (
    <Wrapper>
        <Layout>
            <Container position={position.left} placement={placement.center}>
                <h1>Contact me!</h1>
                <form action="https://formsubmit.co/855c3d45315da611a54590525e95b997" method="POST">
                    <input type="hidden" name="_subject" value="New submission!" ></input>
                    <input type="email" name="email" placeholder="Email Address" autoComplete="off" required></input>
                    <input type="text" name="name" placeholder="Name" autoComplete="off" required></input>
                    <textarea name="message" placeholder="Write your message" required></textarea>
                    <input type="hidden" name="_autoresponse" value="Thank you for contacting me!"></input>
                    <input type="hidden" name="_next" value="https://sage-cendol-c74a7f.netlify.app/contacts"></input>
                    <input type="hidden" name="_captcha" value="true"></input>
                    <button type="submit">Send</button>
                    {/* <Button type={Type.SUBMIT}>Send</Button> */}
                </form>
            </Container>
        </Layout>
    </Wrapper>
)

export default Contacts;
