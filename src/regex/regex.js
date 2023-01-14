//regext recomendado por la w3c
 const regex_email=new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);

//acepatamos caracteres almenos una vez, que no sean salto de linea, de  la a-z, A-Z,0-9,caracteres especiales @*$#, y no acepamos =+-/_ ni saltos de linea, ni espacio en blanco, min 6 max 12
const regex_password=new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$#*])(?!.*[ +-/_=]).{6,12}$/)

//validamos solamente numeros, le damos una longitud de 10 dígitos
const regex_phone=new RegExp(/^[0-9](\d{9})(?!.*[ +/_=-])$/)

export {regex_email,regex_password,regex_phone}

