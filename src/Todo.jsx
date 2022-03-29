type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
//   あってもなくても良いpropsは?をつける
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed = false } = props;
//   typeを?にするときは初期値を設定
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark}${title}(ユーザー:${userId})`}</p>;
};
