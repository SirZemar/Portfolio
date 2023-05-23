import React from "react";
import { pageWrapper as Wrapper } from "../../common/pageWrapper";
import Layout, { placement, position } from "../../common/Layout";
// Components
import { Map } from "./Info.styles";
import { Contact } from "./Info.styles";
// import { Button, Type } from "../../common/Button";
const Info: React.FC = () => (
    <Wrapper>
        <Layout>
            <Contact position={position.left} placement={placement.withAuto(placement.center, true)}>
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

            </Contact>
            <Map position={position.right} placement={placement.withAuto(placement.center, true)}>
                <h1>Where I'm at!</h1>
                <button className="box-sign plus">+</button>
                <button className="box-sign minus">-</button>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48059.753045791454!2d-8.62195365!3d41.162142949999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465abc4e153c1%3A0xa648d95640b114bc!2sPorto!5e0!3m2!1spt-PT!2spt!4v1684860762925!5m2!1spt-PT!2spt" loading="lazy"></iframe> */}
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58760.55743489346!2d-8.62195365!3d41.162142949999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-PT!2spt!4v1684862220856!5m2!1spt-PT!2spt" loading="lazy" ></iframe> */}
                <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-8.676195144653322%2C41.124754290455535%2C-8.566331863403322%2C41.18188396008707&amp;layer=mapnik"></iframe>
            </Map>
        </Layout>
    </Wrapper>
)

export default Info;
