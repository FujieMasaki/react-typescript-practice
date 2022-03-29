import { VFC } from "react";
import { TodoType } from "./types/todos";

export const Todo: VFC<Omit<TodoType, "id">> =
(props) => {
  const { title, userId, completed = false } = props;
//   typeを?にするときは初期値を設定
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark}${title}(ユーザー:${userId})`}</p>;
};
