import colors from './colors';
import member from './member';
import recipes from './recipes';

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default {
  rehydrated,
  colors,
  member,
  recipes,
};
