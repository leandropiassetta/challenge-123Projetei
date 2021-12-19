function ListarUsuarios({ usuarios }) {
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
          </tr>)) }
        </tbody>
      </table>
    </div>
  );
}

export default ListarUsuarios;