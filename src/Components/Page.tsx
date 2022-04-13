import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atoms";
import CategoryList from "./CategoryList";

const PageWrapper = styled.div`
  width: 600px;
  height: 800px;
  background-color: ${(props) => props.theme.NoteColor};
  box-shadow: 4px 4px 0px 4px #614124;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const Page = styled.div`
  width: 80%;
  height: 90%;
  background-color: ${(props) => props.theme.PageColor};
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Form = styled.form`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  input {
    width: 100%;
    height: 30px;
    font-size: 13px;
    border-bottom: 1px solid ${(props) => props.theme.textColor};
  }
`;
const ToDoLineWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ToDoLine = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
`;
interface FormInterface {
  text: string;
}
interface NoteInterface {
  boardId: string;
}
function PageSection({ boardId }: NoteInterface) {
  const { register, setValue, handleSubmit } = useForm<FormInterface>();
  const [toDos, setToDo] = useRecoilState(toDoState);
  const onValid = ({ text }: FormInterface) => {
    const newToDo = {
      id: Date.now(),
      text,
    };
    setToDo((oldToDo) => {
      return { ...oldToDo, ["To Do"]: [...oldToDo["To Do"], newToDo] };
    });
    setValue("text", "");
  };
  const toDo = toDos[boardId];
  return (
    <PageWrapper>
      <CategoryList />
      <Page>
        <Form onSubmit={handleSubmit(onValid)}>
          <input
            {...register("text", { required: true })}
            type="text"
            placeholder={`Please Write text that you want on your '${boardId}'`}
          />
        </Form>
        <ToDoLineWrapper>
          {toDo.map((item, index) => (
            <ToDoLine key={index}>
              <span>- {item.text}</span>
            </ToDoLine>
          ))}
        </ToDoLineWrapper>
      </Page>
    </PageWrapper>
  );
}

export default PageSection;
