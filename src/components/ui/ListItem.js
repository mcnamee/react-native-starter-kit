/**
 * List Items
 *
     <ListItem title={'Hello World'} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
import { ListItem } from 'react-native-elements';

// Consts and Libs
import { AppColors, AppStyles } from '@theme/';

/* Component ==================================================================== */
class CustomListItem extends Component {
  static propTypes = {
    containerStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({}),
    ]),
    titleStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({}),
    ]),
  }

  static defaultProps = {
    containerStyle: [],
    titleStyle: [],
  }

  listItemProps = () => {
    // Defaults
    const props = {
      title: 'Coming Soon...',
      chevronColor: AppColors.textPrimary,
      underlayColor: AppColors.border,
      ...this.props,
      containerStyle: [{
        backgroundColor: AppColors.listItemBackground,
        borderTopColor: AppColors.border,
        borderBottomColor: AppColors.border,
      }],
      titleStyle: [AppStyles.baseText],
    };

    if (this.props.containerStyle) {
      props.containerStyle.push(this.props.containerStyle);
    }

    if (this.props.titleStyle) {
      props.titleStyle.push(this.props.titleStyle);
    }

    return props;
  }

  render = () => <ListItem {...this.listItemProps()} />;
}

/* Export Component ==================================================================== */
export default CustomListItem;
