type Action = {
  typename: string;
  payload: object;
};

type State = { discount: number };
const offerListReducer = (state: State, action: Action) => {
  console.log(action.typename);
  switch (action.typename) {
    case "ADD_OFFER":
      return { ...state, discount: ++state.discount };
    default:
      return state;
  }
};

export default offerListReducer;
