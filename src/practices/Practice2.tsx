export const Practice2 = () =>{
    const getTotalFee = (num: number) =>{
        // 引数はnumber型です
        const total = num * 1.1;
        return total
    };

    const onClickPractice = () => {
        console.log(getTotalFee(1000));
    };

    return(
        <div>
            <p>練習問題2:返却値型の指定</p>
            <button onClick={onClickPractice}>練習問題2を実行</button>
        </div>
    )
}