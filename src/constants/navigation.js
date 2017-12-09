import Colors from './colors';

export default {
  navbarProps: {
    navigationBarStyle: { backgroundColor: Colors.brand.primary },
    titleStyle: { color: 'white', alignSelf: 'center' },
  },

  tabProps: {
    activeBackgroundColor: 'transparent',
    inactiveBackgroundColor: '#fff',
  },

  icons: {
    type: 'simple-line-icon',
    color: Colors.brand.primary,
  },
};
