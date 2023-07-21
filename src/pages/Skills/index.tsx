import React from "react";
// Components
import { Wrapper } from "../../common/Wrapper";
import Graph from "./Graph";
import Text from "../../common/Text";
import Layout, { position, placement } from "../../common/Layout";
import { useLocation } from "react-router-dom";

const Skills: React.FC = () => {
  console.log(useLocation().pathname);
  return (
    <Wrapper>
      <Layout>
        <Text position={position.left} placement={placement.center}>
          <h1>Skills</h1>
          <p>
            I have a versatile skill set that includes Angular, React,
            JavaScript, HTML, CSS, SCSS, Git, Node.js, MySQL, and C. These
            technologies enable me to develop dynamic and visually appealing web
            applications. With expertise in front-end frameworks and languages,
            I create responsive and engaging user interfaces and build robust
            and scalable server-side applications.
          </p>
          <p>
            I am proficient in version control and collaboration using Git and I
            am comfortable working with APIs and integrating third-party
            services.In addictiuon, my knowledge of programming principles in C
            from school 42 enhances my problem-solving skills. I am passionate
            about leveraging these skills to create innovative web solutions.
          </p>
        </Text>
        <Graph
          position={position.right}
          placement={placement.withAuto(placement.center, true)}
        />
      </Layout>
    </Wrapper>
  );
};

export default Skills;
