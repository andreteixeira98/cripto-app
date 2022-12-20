import { useState } from "react"; 
import { EncryptedMSG } from "./components/encryptedmsg";
import { DecryptedMSG } from "./components/decryptedmsg";

import {TbSwitchHorizontal} from 'react-icons/tb';

import styles  from "../styles/Home.module.css";

export default function Home() {
  const [isToEncrypt, setIsToEncrypt] = useState(true);
  const [msg, setMSG] = useState('');

  function switchMode(){
    
    setIsToEncrypt(!isToEncrypt);
  }
  return (
    <div className={styles.container}>
      <main className={isToEncrypt? "encryptedInFront" : " decryptedInFront"}>
     
        <DecryptedMSG msg={msg} setMsg={setMSG}  isToEncrypt={isToEncrypt}/>
        
        <button
          onClick={switchMode}
        >
          <TbSwitchHorizontal height={30} width={30}/>
        </button>
        
        <EncryptedMSG msg={msg} setMsg={setMSG} isToEncrypt={isToEncrypt}/>
      </main>
    </div>
  )
}
