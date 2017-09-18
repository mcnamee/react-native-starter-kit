/**
 * Tabbar Icon
 *
    <TabIcon icon={'search'} selected={false} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import { AppColors } from '@theme/';

/* Component ==================================================================== */
const TabIcon = ({ icon, selected, type }) => (
  <Icon
    type={type}
    name={icon}
    size={26}
    color={selected ? AppColors.tabbar.iconSelected : AppColors.tabbar.iconDefault}
  />
);

TabIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  type: PropTypes.string
};
TabIcon.defaultProps = { icon: 'search', selected: false, type: null };

/* Export Component ==================================================================== */
export default TabIcon;
