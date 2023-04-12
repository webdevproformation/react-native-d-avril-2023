import { createContext } from "react"

export const SelectionContext = createContext();

export function SelectionContextProvider(props){

    const selection = []

    return <SelectionContext.Provider value={selection}>
        {props.children}
    </SelectionContext.Provider>

}