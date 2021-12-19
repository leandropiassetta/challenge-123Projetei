const initialState = {
  buscarNovoUsuario: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'buscarUsuario') {
    return {
      buscarNovoUsuario: true,
    };
  }

  return state;
};

export default reducer;
