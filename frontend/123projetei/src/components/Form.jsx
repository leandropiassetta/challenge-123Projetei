import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axiosApi from '../api/request';
import './Form.css';

function Forms() {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [nascimento, setNascimento] = useState('');
  
  const dispatch = useDispatch();


  function digitarNome({target}) {
    setNome(target.value);
  }

  function digitarCpf({target}) {
    setCpf(target.value);
  }

  function digitarTelefone({target}) {
    setTelefone(target.value);
  }

  function digitarEmail({target}) {
    setEmail(target.value);
  }

  function digitarNascimento({target}) {
    setNascimento(target.value);
  }

  async function cadastrarUsuario() {
    await axiosApi.post('/usuarios', { nome, cpf, telefone, email, dataDeNascimento: nascimento })
    .catch(erro => alert(erro.response.data.message));

    await axiosApi.get('/usuarios')
    .then((usuario) => dispatch({ type: 'buscarUsuarios', usuarios: usuario.data }))
  }

  return(
    
    <div >
    <form className='form' action="">
      Preencha o Formulário de cadastro:
      <label htmlFor="nome">
        Nome:
        <input 
          placeholder="Digite seu nome" 
          id="nome" 
          type="text"
          value= { nome } 
          name="nome" 
          onChange={ digitarNome } />
      </label>
      <label htmlFor="cpf">
        CPF:
        <input 
          placeholder="Digite seu CPF" 
          id="cpf" type="text" 
          value= { cpf } 
          name="cpf" 
          onChange={ digitarCpf } />
      </label>
      <label htmlFor="tel">
        Telefone:
        <input 
          placeholder="Digite seu Telefone" 
          id="tel" 
          type="text" 
          value={ telefone } 
          name="telefone" 
          onChange={ digitarTelefone } />
      </label>
      <label htmlFor="email">
        Email:
        <input 
          placeholder="Digite seu e-mail" 
          id="email" 
          type="text" 
          value={ email } 
          name="email" 
          onChange={ digitarEmail } />
      </label>
      <label htmlFor="nasc">
        Data de nascimento:
        <input 
          placeholder="Digite sua data de nascimento" 
          id="nasc" 
          type="text" 
          value={ nascimento } 
          name="dataDeNascimento" 
          onChange={ digitarNascimento } />
      </label>
      <button type="button" onClick={ cadastrarUsuario } >Cadastrar Usuário</button>
    </form>
    </div>
  );
}

export default Forms;