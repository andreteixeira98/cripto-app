import { useEffect, useState } from "react"
import { decrypter, encrypter } from "../../algorithm";
import { TextArea } from "../textAArea";
import styles from './styles.module.css';



interface DecryptedProps{
  msg:string;
  setMsg:(msg:string)=>void;
  isToEncrypt:boolean;
}
export function DecryptedMSG(props:DecryptedProps){
  const [msgt, setMsgT] = useState('');
  useEffect(()=>{

    
    if(!props.isToEncrypt){
      setMsgT(decrypter(props.msg)+"")
    }else{
      setMsgT(props.msg)
    }
    
  },[props.msg,props.isToEncrypt,props]);
  return(
    <div className={styles.Container}>
      <h2>Decrypted message</h2>
      <TextArea msg={msgt} setMsg={setMsgT} />
    </div>
  )
}