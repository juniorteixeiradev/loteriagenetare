export default function Styles(){
    const styles = {
        containerMain: "lg:mt-0 w-[100vw] h-[100vh] lg:h-[100vh] flex flex-col justify-center items-center gap-4 text-white bg-[#2E2D4D]",
        h2: "text-2xl font-bold font-sans",
        containerNumeros: "flex flex-row justify-center items-center gap-3 w-full flex-wrap h-[auto] overflow-[auto]",
        numeros: "w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-full  bg-slate-600 flex justify-center items-center hover:bg-slate-400",
        input: "rounded-lg text-gray-950 text-center h-10",
        btn: "bg-[#C6FF00] border-2 solid border-gray-200 rounded-md text-gray-950 w-24 h-8 hover:bg-slate-100 mb-6"
    }
    return {
        styles
    }
}