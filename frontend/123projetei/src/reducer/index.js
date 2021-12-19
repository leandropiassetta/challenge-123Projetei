const initialState = {
  usuarios: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === 'buscarUsuarios') {
    return {
      usuarios: action.usuarios,
    };
  }

  if (action.type === 'pararBuscaDeUsuario') {
    return {};
  }

  return state;
};

export default reducer;
