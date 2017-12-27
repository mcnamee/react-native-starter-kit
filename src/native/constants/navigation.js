import Colors from './colors';

export default {
  navbarProps: {
    navigationBarStyle: { backgroundColor: 'white' },
    titleStyle: { color: 'black', alignSelf: 'center' },
    backButtonTintColor: 'black',
  },

  tabProps: {
    swipeEnabled: false,
    activeBackgroundColor: 'rgba(255,255,255,0.1)',
    inactiveBackgroundColor: Colors.brand.primary,
    tabBarStyle: { backgroundColor: Colors.brand.primary },
  },

  icons: {
    type: 'simple-line-icon',
    color: 'white',
  },
};
