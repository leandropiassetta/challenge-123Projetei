import { useCallback, useState, useEffect } from 'react';
import ListarUsuarios  from '../../components/ListarUsuarios';
import Forms from '../../components/Form';
import axiosApi from '../../api/request';
import { connect, useDispatch } from 'react-redux';
function Home({ usuarios }) {
  const dispatch = useDispatch();
  
  const listarUsuarios = useCallback(

    () => {
      axiosApi.get('/usuarios')
      .then((usuario) => dispatch({ type: 'buscarUsuarios', usuarios: usuario.data }))
      .catch((error) => `Ocorreu um erro chamado: ${error}`);
    }, []);
    
    useEffect(() => {
      listarUsuarios();
    }, []);

    return(
      <div>
        <Forms />
        <ListarUsuarios usuarios={ usuarios } />
      </div>
    );
}

const mapStateToProps = (state) => {
return { usuarios: state.usuarios };
}

export default connect(mapStateToProps)(Home);