import {FiSearch} from 'react-icons/fi';
import { useState } from 'react';
 import "./style.css";
import api from "./services/api"

 function   App() {

  const [input, setIput] = useState('')
const [cep, setCep] = useState ({});

async function handleSearch(){


  if(input === ''){
    alert("Preencha com o cep ")
    return;
  }

 try{
  const response = await api.get(`${input}/json`)
  setCep(response.data)
  setIput("");
 }
 catch{
   alert("Opa deu erro")
   setIput("")
 }

}

  return (

    <div className="conteiner">
     <h1 className="title"> Buscador de CEP</h1>

    < div className="conteinerInput"> 
     <input 
     type="text"
     placeholder="Digite seu cep..." 
     value={input}
     onChange={(e) => setIput(e.target.value)} 
     />

     <button className="buttonSearch" onClick={handleSearch}> 
      <FiSearch size={25} color="#fff" /> 
     </button> 

     </div>
 
{Object.keys(cep).length > 0 && (
<main className='main'>
<h2> CEP: {cep.cep} </h2> 

<span> {cep.logradouro} </span>
<span> Complemento: {cep.complemento}  </span>
<span> {cep.bairro}  </span>
<span> {cep.localidade}/{cep.uf} </span>

</main>

)}


     </div>
  );
}

export default App;