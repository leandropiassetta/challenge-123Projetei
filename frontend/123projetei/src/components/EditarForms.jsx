import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axiosApi from '../api/request';

function EditarForms({ idDeEdicao }) {

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
    await axiosApi.put(`/usuarios/${idDeEdicao}`, { nome, cpf, telefone, email, dataDeNascimento: nascimento });

    await axiosApi.get('/usuarios')
    .then((usuario) => dispatch({ type: 'buscarUsuarios', usuarios: usuario.data }));

    dispatch({ type:'edicao', atualizando: false });
  }

  return(
    <form action="">
      Preencha o Formulário de edição:
      <label htmlFor="nome">
        Nome:
        <input id="nome" type="text" value= { nome } name="nome" onChange={ digitarNome } />
      </label>
      <label htmlFor="cpf">
        CPF:
        <input id="cpf" type="text" value= { cpf } name="cpf" onChange={ digitarCpf } />
      </label>
      <label htmlFor="tel">
        Telefone:
        <input id="tel" type="text" value={ telefone } name="telefone" onChange={ digitarTelefone } />
      </label>
      <label htmlFor="email">
        Email:
        <input id="email" type="text" value={ email } name="email" onChange={ digitarEmail } />
      </label>
      <label htmlFor="nasc">
        Data de nascimento:
        <input id="nasc" type="text" value={ nascimento } name="dataDeNascimento" onChange={ digitarNascimento } />
      </label>
      <button type="button" onClick={ cadastrarUsuario } >Editar Usuário</button>
    </form>
  );
}

export default EditarForms;