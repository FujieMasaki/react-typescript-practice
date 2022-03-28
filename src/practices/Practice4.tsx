export const Practice4= () =>{
    const getTotalFee = (num) =>{
        // 引数はnumber型です
        const total = num * 1.1;
        return total
    };

    const onClickPractice = () => {
        let total: number = 0;
        // 代入するのでlet
        // 変数にも: number と型をつける
        total = getTotalFee(1000)
        console.log(total);
    };

    return(
        <div>
            <p>練習問題4:変数の型の指定</p>
            <button onClick={onClickPractice}>練習問題を4実行</button>
        </div>
    )
}