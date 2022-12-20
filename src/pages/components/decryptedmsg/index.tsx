import { useState } from "react"
import { TextArea } from "../textAArea";
import styles from './styles.module.css';



interface DecryptedProps{
  msg:string;
  setMsg:(msg:string)=>void;
  isToEncrypt:boolean;
}
export function DecryptedMSG(props:DecryptedProps){
 
  return(
    <div className={styles.Container}>
      <h2>Decrypted message</h2>
      <TextArea msg={props.msg} setMsg={props.setMsg} />
    </div>
  )
}