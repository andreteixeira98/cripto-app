import { useEffect, useState } from "react";
import { TextArea } from "../textAArea";
import {encrypter,decrypter} from '../../algorithm/index';
import styles from './styles.module.css';

interface EncryptedProps{
  msg:string;
  setMsg:(msg:string)=>void;
  isToEncrypt:boolean;
}
export function EncryptedMSG({msg,isToEncrypt,setMsg}:EncryptedProps){
  const [msgt, setMsgT] = useState('');
  useEffect(()=>{

    
    if(isToEncrypt){
      setMsgT(encrypter(msg)+"")
    }else{
      setMsgT(msg);
    }
    
    
    
  },[msg,isToEncrypt, setMsg ]);

  return(
    <div className={styles.Container}>
      <h2>Encrypted Message</h2>
      <TextArea msg={msgt} setMsg={setMsgT}/>
    </div>
  )
}