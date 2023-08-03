import React, { useRef } from "react";
import { Container, ProgressBar } from "./Graph.styles";
// Types
import { LayoutProps } from "../../../common/Layout";
import { motion } from "framer-motion";

interface Props extends LayoutProps {}

const skills = [
  { name: "HTML", width: "75%" },
  { name: "CSS", width: "85%" },
  { name: "JavaScript", width: "85%" },
  { name: "React", width: "65%" },
  { name: "Angular", width: "70%" },
  { name: "Firebase", width: "55%" },
  { name: "AWS", width: "45%" },
  { name: "Node.js", width: "65%" },
];

const Graph: React.FC<Props> = () => {
  const alternate = useRef(false);
  const delay = useRef(0);

  return (
    <Container>
      <ul>
        {skills.map((skill, index) => (
          <li key={skill.name}>
            <p>{skill.name}</p>
            <div className="bar-container">
              <ProgressBar
                as={motion.div}
                skill={skill}
                alternate={(alternate.current = !alternate.current)}
                initial={{ width: "0%" }}
                animate={{
                  width: skill.width,
                  transition: { duration: 0.5, delay: index * 0.1 },
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Graph;