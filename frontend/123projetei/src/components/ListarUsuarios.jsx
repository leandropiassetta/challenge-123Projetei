import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import EditarForms from '../components/EditarForms';
import axiosApi from '../api/request';
function ListarUsuarios({ usuarios, atualizando }) {

  const dispatch = useDispatch();

  const [idDeEdicao, setIdDeEdicao] = useState('');

  function editarUsuario(indice) {
    const { id } = usuarios[indice];

    setIdDeEdicao(id);
    dispatch({ type:'edicao', atualizando:true });
  }

  async function excluirUsuario(indice) {
    const { id } = usuarios[indice];
    await axiosApi.delete(`/usuarios/${id}`);

    await axiosApi.get('/usuarios')
    .then((usuario) => dispatch({ type: 'buscarUsuarios', usuarios: usuario.data }));
  }

  return(
    <div>
      <table>
        <thead>
          <tr>
          <th>id</th>
          <th>CPF</th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Email</th>
          <th>Data de Nascimento</th>
          <th>EDITAR</th>
          <th>EXCLUIR</th>
          </tr>
        </thead>
        <tbody>
        { usuarios.map((infoUsuario, indice) => (
          <tr key={ indice }>
          { Object.values(infoUsuario).map((dadosUsuario, i) => (
            <td key={ i }>{dadosUsuario}</td>)) }
          <td><button onClick={() => editarUsuario(indice) }>EDITAR</button></td>
          <td><button onClick={() => excluirUsuario(indice) }>EXCLUIR</button></td>
          </tr>)) }
        </tbody>
      </table>
      {atualizando ? <EditarForms idDeEdicao={ idDeEdicao } /> : <></>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { atualizando: state.atualizando }
}

export default connect(mapStateToProps)(ListarUsuarios);