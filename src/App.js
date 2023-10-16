import {FiSearch} from 'react-icons/fi';
 import "./style.css";
 function   App() {
  return (
    <div className="conteiner">
     <h1 className="title"> Buscador de CEP</h1>

    < div className="conteinerInput"> 
     <input 
     type="text"
     placeholder="Digite seu cep..." />

     <button className="buttonSearch">
      <FiSearch size={25} color="#fff" /> 
     </button> 

     </div>
 <main className='main'>
  <h2> CEP:79003222</h2> 
  <span> Rua Antonio Pires Barbosa  </span>
<span> Complemento: Algum lugar </span>
<span> Vila Rosa </span>
<span> Campo Grande </span>
  </main>



     </div>
  );
}

export default App;