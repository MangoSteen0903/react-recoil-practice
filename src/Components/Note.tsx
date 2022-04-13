import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Categories, categoryList, toDoState } from "../atoms";
import PageSection from "./Page";
import { useEffect, useState } from "react";
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Note() {
  const setCategoryList = useSetRecoilState(categoryList);
  useEffect(() => {
    setCategoryList((categoryList) => {
      const categories = Object.keys(Categories);
      return categories;
    });
  }, []);
  const [currentCategory, setcurCategory] = useState("To Do");

  return (
    <Wrapper>
      <PageSection boardId={Categories["To Do"]} />
    </Wrapper>
  );
}

export default Note;
