import React from "react";
import styled from "styled-components";

type PhotoPropsType = {
  src: string;
  width?: string;
  height?: string;
  borderRadius?: string;
};

export const Photo = (props: PhotoPropsType) => {
  return (
    <StyledPhoto
      src={props.src}
      width={props.width}
      height={props.height}
      borderRadius={props.borderRadius}
    ></StyledPhoto>
  );
};

const StyledPhoto = styled.img<PhotoPropsType>`
  border-radius: ${(props) => props.borderRadius || "24px"};
  width: ${(props) => props.width || "548px"};
  height: ${(props) => props.height || "390px"};
  object-fit: cover;
`;
