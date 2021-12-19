import { useCallback, useState, useEffect } from 'react';
import axiosApi from '../../api/request';
function Home() {

  const [usuarios, setUsuarios] = useState([]);

  const listarUsuarios = useCallback(
    () => {
      axiosApi.get('/usuarios')
      .then((usuario) => setUsuarios(usuario.data))
      .catch((error) => `Ocorreu um erro chamado: ${error}`);
    }, []);
    
    useEffect(() => {
      listarUsuarios();
    }, [listarUsuarios, usuarios]);

    return(
      <div>
        oi
      </div>
    )
}

export default Home;