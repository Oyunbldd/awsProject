import React, { useContext, useState } from "react";
import { Context } from "../provider/authContext";
import TextInput from "../components/textInput";
import Button from "../components/button";
export const Verification = () => {
  const { verifyUser } = useContext(Context);
  const [code, setCode] = useState("");  const check=async()=>{
    try{
        await verifyUser(code);
    }catch(e){
        alert(e);
    }
  }
  return (
    <div>
      <div>verify your email</div>
      <TextInput
        type="text"
        placeholder="code"
        maxLength={6}
        value={code}
        onChange={(e: any) => setCode(e.target.value)}
      />
      <Button onClick={()=>{check()}}>Submit</Button>
    </div>
  );
};
