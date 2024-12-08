import React from 'react'
import styled from 'styled-components'
import { Photo } from '../../../components/photo/Photo'

type WorksCardPropsType = {
    imageSrc: string
}


export const WorksCard = (props: WorksCardPropsType) => {
  return (
    <StyledCard>
        <Photo src={props.imageSrc} width='545px' height='350px'></Photo>
    </StyledCard>
  )
}

const StyledCard = styled.div`
    img {
        margin: 13px;
    }
`
