import { useState } from "react";

//imutabilidade
 //usuarios= [ 'giulianno', 'gabriel', 'gabriel' ]
 //usuarios.push('gabriel') pode causar erro no valor original da variavel
 //por isso usamos o spread operator
 // novoUsuarios = [ ...usuarios, 'zanetti' ]

export function Counter(){

    const [count, setCount] = useState(0)

    function increment(){
        setCount(count + 1);
    }
    function decrement(){
        setCount(count - 1);
    }

    return(
        <div>
            <h2>
                
            {count}
            </h2>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}