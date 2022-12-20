import { useEffect, useState } from "react";
import { TextArea } from "../textAArea";
import styles from './styles.module.css';

interface EncryptedProps{
  msg:string;
  setMsg:(msg:string)=>void;
  isToEncrypt:boolean;
}
export function EncryptedMSG({msg}:EncryptedProps){
  const [msgt, setMsgT] = useState('');


 
  useEffect(()=>{

    function encrypter(){
      let newMessage = '';
      const INCREMENT = 2;
      for(var i=0; i<msg.length;i++){
        let simbolAscii = msg.charAt(i).charCodeAt(0);
        let var_temp = simbolAscii+ INCREMENT;

        console.log('s:'+simbolAscii+' vt:'+var_temp);

        if(var_temp%122 > 0 && (var_temp%122)!==var_temp){
          const temp = 96+(var_temp%122);
          console.log("t:",temp)
          const cc = String.fromCharCode(temp);
          newMessage+= cc;
          console.log('cc:',cc);
        }else{
          newMessage+=String.fromCharCode(var_temp);
        }
        setMsgT(newMessage);
       
      }
      
    }
    encrypter();
  },[msg]);

  return(
    <div className={styles.Container}>
      <h2>Encrypted Message</h2>
      <TextArea msg={msgt} setMsg={setMsgT}/>
    </div>
  )
}