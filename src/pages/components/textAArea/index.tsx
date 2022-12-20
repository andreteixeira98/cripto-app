import styles from './styles.module.css';


interface TextAreaProps{
  msg:string;
  setMsg:(msg:string)=>void;
}
export function TextArea({msg,setMsg}:TextAreaProps){


  return(
    <textarea 
      className={styles.container}
      value={msg}
      onChange={e => setMsg(e.target.value)}
      />

  )
}