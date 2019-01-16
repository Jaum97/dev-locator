export const Types = {
  ADD_REQUEST: 'devs/ADD_REQUEST',
  ADD_SUCCESS: 'devs/ADD_SUCCESS',
  ADD_FAILURE: 'devs/ADD_FAILURE',
};

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function devs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export const Creators = {
  addDevRequest: dev => ({
    type: Types.ADD_REQUEST,
    payload: { dev },
  }),

  addDevSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addDevFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
