import variable from './../variables/platform';

export default (variables = variable) => {
  const cardTheme = {
    '.transparent': {
      shadowColor: null,
      shadowOffset: null,
      shadowOpacity: null,
      shadowRadius: null,
      elevation: null,
    },
    marginVertical: 5,
    marginHorizontal: 2,
    flex: 1,
    borderWidth: 0,
    borderRadius: 8,
    borderColor: variables.cardBorderColor,
    flexWrap: 'nowrap',
    backgroundColor: variables.cardDefaultBg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 3,
  };

  return cardTheme;
};
