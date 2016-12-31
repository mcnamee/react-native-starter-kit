# Google Analytics

The app routing runs through React Native Router Flux. We've applied a middleware to Redux to track each screen view, and send the data to Google Analytics.

You could also extend the `/src/lib/analytics.js` middleware to include other tracking codes too.

## Usage

### Step 1. Google Analytics tracking code

Setup your Google Analytics account and simply paste the tracking code to into the `gaTrackingId` variable in `/src/constants/config.js`

FYI you can have separate tracking codes for debug (to test tracking when your developing in debug mode) and production.

### Step 2. Screen Name/Description

When setting up new scene to navigate to in `/src/navigation/index.js`, simply add the prop `analyticsDesc` to your scene. The value of this prop will be sent to Google Analytics, prefixed to the `title` prop (if that exists).

I usually like to send the `{Component Name}`: `{Description of Screen}` - `{Navbar Title}`. That way I can filter down to the data I need within Analytics.
