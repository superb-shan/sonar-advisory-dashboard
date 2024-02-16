import { createContext, useContext, useEffect, useState } from "react";
const DataContext = createContext();

export function DataContextProvider(props) {


    return(
        <DataContext.Provider value={{}}>
            {props.children}
        </DataContext.Provider>
    );
}

export const useDataContext = () => useContext(DataContext);