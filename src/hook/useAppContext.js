import { useContext } from "react";
import { AppContext } from "../CompreContext/AppContext";
export default function useAppContext(){
    const context = useContext(AppContext)
    if(context === undefined){
    throw new Error("Fora de contexto...");
    }
    return context
}