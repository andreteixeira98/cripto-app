
function encrypter(msg:string){
     
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
    return newMessage;
  
  }

}

function decrypter(msg:string){
     
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
   return newMessage;
  
  }


 
}

export {encrypter, decrypter}