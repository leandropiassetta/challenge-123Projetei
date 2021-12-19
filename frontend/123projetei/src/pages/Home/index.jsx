import { useCallback, useState, useEffect } from 'react';
import ListarUsuarios  from '../../components/ListarUsuarios';
import Forms from '../../components/Form';
import axiosApi from '../../api/request';
import { connect } from 'react-redux';
function Home() {

  const [usuarios, setUsuarios] = useState([]);

  const listarUsuarios = useCallback(
    () => {
      axiosApi.get('/usuarios')
      .then((usuario) => setUsuarios(usuario.data))
      .catch((error) => `Ocorreu um erro chamado: ${error}`);
    }, [usuarios]);
    
    useEffect(() => {
      listarUsuarios();
    }, []);

    return(
      <div>
        <Forms />
        <ListarUsuarios usuarios={ usuarios } />
      </div>
    )
}

export default Home;