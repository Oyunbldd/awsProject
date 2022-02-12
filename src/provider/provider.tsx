import React from "react";
interface UserContextInterface{
    name:string;
}
const UserCtx=React.createContext<UserContextInterface | null>(null);

const sampleUserContext:UserContextInterface={
    name:'testing',
}
export const UserProvider=()=>{
    return <UserCtx.Provider value={sampleUserContext}>...</UserCtx.Provider>
}