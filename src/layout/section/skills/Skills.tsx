import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../../../components/flexContainer/FlexContainer'
import { Skill } from '../../../components/skill/Skill'

export const Skills = () => {
  return (
    <StyledSkills>
        <h2></h2>
        <FlexContainer>
            <Skill></Skill>
        </FlexContainer>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
    
`