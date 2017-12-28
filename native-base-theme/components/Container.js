import { Platform, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
export default () => {
  const theme = {
    flex: 1,
    backgroundColor: 'white',
    height: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20,
  };

  return theme;
};
