import { useState } from "react"

export default function Word({word}){

    const [isShow, setIsShow] = useState(false); 
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow(){
        setIsShow(!isShow)
    }

    function toggleDone(){
        setIsDone(!isDone)
    }

    return <>
                     <tr className={isDone ? "off" : ""}>
                        <td><input type = "checkbox" checked={word.isDone} onChange={toggleDone}></input></td>
                        <td>{word.eng}</td>
                        <td>{isShow && word.kor}</td>
                        <td>{word.kor}</td>
                        <td>
                            <button onClick={toggleShow}>
                                뜻{isShow ? '숨기기' : "보기"}
                            
                            </button>
                            <button class="btn_del">삭제</button>
                        </td>
                    </tr>
    </>
}