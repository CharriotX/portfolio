import React from 'react'
import styled from 'styled-components';

type PhotoPropsType = {
    src: string,
    width?: string,
    height?: string
}

export const Photo = (props: PhotoPropsType) => {
  return (
    
    <StyledPhoto src={props.src} width={props.width} height={props.height}></StyledPhoto>
  )
}

const StyledPhoto = styled.img<PhotoPropsType>`
  width: ${props => props.width || '548px'};
  height: ${props => props.width || '390px'};;
  object-fit: cover;
  border-radius: 24px;
`;
