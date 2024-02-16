"use client"
import Content from "./Content";
import { DataContextProvider } from './context/DataContext';

export default function  Home() {
    
    return (
        
        <DataContextProvider>
            <Content />
        </DataContextProvider>

    );
}