import React from 'react'
import { SkillCard } from './SkillCard'

import project1Image from "../../../accets/images/project1.webp";
import project2Image from "../../../accets/images/project2.webp";
import project3Image from "../../../accets/images/project3.webp";

export const SkillCards = () => {
  return (
    <div>
        <SkillCard
          srcImage={project1Image}
          techName="UX/ ui design"
          textTitle="Research, Design, Prototype, and Animation"
        ></SkillCard>
        <SkillCard
          srcImage={project2Image}
          techName="Front end development"
          textTitle="Implement UX design into live and user friendly "
        ></SkillCard>
        <SkillCard
          srcImage={project3Image}
          techName="Responsive design"
          textTitle="I build landing pages and responsive websites and web App"
        ></SkillCard>
    </div>
  )
}
