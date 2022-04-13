import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryList, currentCategory } from "../atoms";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  height: 90%;
  align-items: flex-end;
`;

const BookMarker = styled.div<BookMarkerInterface>`
  width: 70px;
  height: 40px;
  background-color: ${(props) => props.theme.PageColor};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${(props) => (props.isClicked ? "black" : props.theme.PageColor)};
`;
interface BookMarkerInterface {
  boardId: string;
  isClicked?: boolean;
}
function CategoryList() {
  const [categories, setCategories] = useRecoilState(categoryList);
  const [isClicked, setClick] = useState(false);
  const [currentTarget, setCurrentCategory] = useRecoilState(currentCategory);
  const onListClick = (boardId: string) => {
    setCurrentCategory((prev) => {
      return boardId;
    });
    setClick((prev) => !prev);
  };
  return (
    <Wrapper>
      {categories.map((item, index) => (
        <BookMarker
          onClick={() => onListClick(item)}
          boardId={item}
          isClicked={isClicked}
        >
          <span>{item}</span>
        </BookMarker>
      ))}
    </Wrapper>
  );
}

export default CategoryList;
