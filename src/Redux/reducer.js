import { MUNIS, PLUS } from "./actionTypes";

const init = {
  count: 0,
  isShow: true,
};

export const reducer = (state = init, action) => {
  switch (action.type) {
    case PLUS:
      return {
        ...state,
        count: state.count + 1,
      };
      case MUNIS:
      
      return {
        ...state,
        count: state.count - 1 ,
      
    }
    return state;
    default:
      return state;
  }
};
