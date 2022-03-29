import { VFC } from "react";
// FC = functionコンポーネント

type Props = {
    color: string;
    fontSize: string;
};

export const Text: VFC<Props> = (props) => {
    const { color, fontSize } = props;
    // FCは内部的にchildrenを受け取れる
    return <p style={{color, fontSize}}>テキストです</p>;
};