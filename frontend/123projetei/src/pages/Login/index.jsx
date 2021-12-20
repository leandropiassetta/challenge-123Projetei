import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
function Login() {
  const [nome, setNome] = useState();
  const [senha, setSenha] = useState();
  const [desautorizado, setDesautorizado ] = useState(true);
  const navegacao = useNavigate()

  useEffect(() => {
    validarLogin();
  }, [validarLogin]);
  
    function digitarNome({target}) {
      setNome(target.value);
    }

    function digitarSenha({target}) {
      setSenha(target.value);
    }

    function Clicar() {
      navegacao('/home');
    }

    function validarLogin() {
      if(nome === 'admin' && senha === 'admin') {
        setDesautorizado(false);
      } else {
        setDesautorizado(true);
      }
    }

  return (
      <div className="login">
        <h1>Faça seu Login</h1>
        <input type="text" placeholder='Digite seu nome' onChange= { digitarNome } />
        <input type="text" placeholder='Digite sua senha' onChange= { digitarSenha }/>
        <button id="btn" disabled={desautorizado} onClick={ Clicar }>ENTRAR</button>
      </div>
  );

}

export default Login;