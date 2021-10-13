import React from "react";
import styled from "styled-components";
import ButtonComponent from "../common/ButtonComponent";
import palette from "../../libs/styles/palette";
import { BsPlusLg } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import PostContext from "../../context/PostContext";

const StyledButton = styled(ButtonComponent)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${palette.cyan[5]};
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  &:hover {
    background-color: ${palette.cyan[4]};
  }
`;

const StyledIcon = styled(BsPlusLg)`
  font-size: 2rem;
  vertical-align: bottom;
`;

function WriteButton() {
  const history = useHistory();
  const { postInfo, setPostInfo } = useContext(PostContext);

  return (
    <StyledButton
      onClick={() => {
        setPostInfo({
          ...postInfo,
          originalPostId: "6162ad248b169692c62d526d",
        });
        history.push("/write");
      }}
    >
      <StyledIcon />
    </StyledButton>
  );
}

export default WriteButton;
