import { useState } from "react"
// interface randomProps{
//     qtd: number
//     arr?: number[]
// }

export default function useFunctions (){
    
    const [numeros, setNumeros] = useState<any>([]);
    function generateNum(quantidade:number, arr:number[] = []):any{

        let qtd = +quantidade || 6;

        if((qtd < 6) || (qtd > 60) ){
            
            throw "Quantidade de numeros deve estar entre 6 e 60"
        } 
        //Condição de parada quando o tamanho do array for igual a quantidade passada 
        //garante o preenhcimento do array
        
        if(arr.length === qtd){
            return setNumeros(arr.sort((a,b) => a - b))
        }

        const nums = Math.floor((Math.random() * 60) + 1);

        if(!arr.includes(nums)){
            return generateNum(qtd, [...arr, nums])
            
        } else {
            generateNum(qtd, arr)
        }
        

        // if((qtd < 6) && (qtd > 60) ){
            
        //     throw "Quantidade de numeros deve estar entre 1 e 60"
        // } 
        // else {
        //     const arr:any = [];
        
        // let nums = 0;
        
        // while(arr.length < qtd){
        //     nums = parseInt(String(Math.random() * (max - min) + min));
            
        //     if(!arr.includes(nums)){
        //         arr.push(nums);
        //     }
        //     //Esta Condição serve para que nao gere numeros repetido
        // }
        // arr.sort((a:any, b:any) => a - b);
        // setNumeros(arr);
            
        // }
}

    return {
        generateNum,numeros
    }
}

