import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [nome, setNome] = useState();
  const [senha, setSenha] = useState();
  const [desautorizado, setDesautorizado ] = useState(true);
  const navegacao = useNavigate()

  useEffect(() => {
    loginIsValid();
  }, [loginIsValid]);
  
    function handleNome({target}) {
      setNome(target.value);
    }

    function handleSenha({target}) {
      setSenha(target.value);
    }

    function handleClick() {
      navegacao('/home');
    }

    function loginIsValid() {
      if(nome === 'admin' && senha === 'admin') {
        setDesautorizado(false);
      } else {
        setDesautorizado(true);
      }
    }

  return (
    <div>
      <input type="text" onChange= { handleNome } />
      <input type="text" onChange= { handleSenha }/>
      <button disabled={desautorizado} onClick={ handleClick }>ENTRAR</button>
    </div>
  );

}

export default Login;