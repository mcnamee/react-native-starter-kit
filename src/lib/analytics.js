/**
 * Custom Redux Middleware to track Redux Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';

// Consts and Libs
import { AppConfig } from '@constants/';

// Google Analytics
const GoogleAnalytics = new GoogleAnalyticsTracker(AppConfig.gaTrackingId);

const track = store => next => (action) => {
  // Track each screen view to Redux
  // - Requires that each Scene in RNRF have a 'analyticsDesc' prop
  switch (action.type) {
    case 'REACT_NATIVE_ROUTER_FLUX_FOCUS' :
      if (action && action.scene && action.scene.analyticsDesc) {
        try {
          const screenName = (action.scene.title)
            ? `${action.scene.analyticsDesc} - ${action.scene.title}`
            : action.scene.analyticsDesc;

          // Send to Google Analytics
          GoogleAnalytics.trackScreenView(screenName);
        } catch (err) {
          console.log(store);
          console.log(err);
        }
      }
      break;

    default :
  }
  return next(action);
};

export default track;
