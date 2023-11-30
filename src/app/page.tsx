"use client"
import { useEffect, useRef } from "react"
import { animated, useSpring } from "@react-spring/web";
import useFunctions from "./loteria/functions/useFunctions";
import Styles from "./loteria/styles/styles";
import { Icone } from "./loteria/styles/icons";
import Link from "next/link";
import Head from "next/head";
export default function Loteria(){

    const ref = useRef<any>();
    const { generateNum, numeros } = useFunctions();
    const { styles } = Styles();


    const springs = useSpring({
        from:{
            scale:0.5
        }, 
        to:{
            scale:1
        }, 
        reset:true
    });
    
    function renderNumbers(){
        
        return (
            <div className={styles.containerNumeros} id="containernumeros">
                {numeros?.map((item:number, i:number)=>{
                    return(
                        <animated.div key={i}
                        style={springs}
                        className={styles.numeros}
                        >{item}</animated.div >
                    )
                })}
            </div>
        )
    }

    

    

    return (
    <>
    
    <div className={styles.containerMain}>
        <>
        <img src="/assets/iconmain.svg" width="300px" height="auto"/>
        </>
        <h2 className={styles.h2}>Gerador de Numeros da Sorte</h2>
        <div>
            {renderNumbers()}
        </div>

        <label> Digite quantos numeros você quer gerar </label>
        <input
            id="numero" 
            className={styles.input}
            type="text"
            ref={ref} 
            />
        <button
            type="submit"
            className={styles.btn}
            onClick={() => generateNum(ref?.current?.value)}
        >
        Gerar
        </button>
        <p className=" text-center">Ressaltamos que nos não fornecemos nenhum palpite ou informação para jogos <br />
        Os números gerados aqui são gerados de forma aleatória!
        </p>
        
        
        <p className="">Desenvolvido por:
            <Link href="https://www.linkedin.com/in/junior-teixeiradev/" target="_blank" className=" font-extrabold"> Junior Teixeira </Link>
        </p>
    </div>

    </>
    )
}