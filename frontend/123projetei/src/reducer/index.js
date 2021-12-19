const initialState = {
  usuarios: [],
  atualizando: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'buscarUsuarios') {
    return {
      ...state,
      usuarios: action.usuarios,
    };
  }

  if (action.type === 'edicao') {
    return {
      ...state,
      atualizando: action.atualizando,
    };
  }

  return state;
};

export default reducer;
