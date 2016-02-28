/**
 * List Row
 *
    <ListRow 
      title={title}
      image={entry.entry_image}
      onPress={()=>{alert('Go To Entry View')}} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';
 
/* ==============================
  Initialise App
  =============================== */
  // React Plugins
  var React = require('react-native');

  // App Globals
  var AppStyles = require('../styles.ios');
  var AppConfig = require('../config.ios');

  var {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
  } = React;

/* ==============================
  View
  =============================== */
  var listRow = React.createClass({
    /**
      * When user clicks Row
      */
    onPress: function() {
      if(this.props.onPress) this.props.onPress(this.props.index);
    },

    /**
      * RENDER
      */
    render: function(){
      var self = this;

      if(self.props.image) {
        return (
          <TouchableOpacity 
            style={[styles.listRow, self.props.image ? styles.imageBackground : null]} 
            onPress={self.onPress} activeOpacity={0.7}>
            <Image source={{uri: self.props.image}} style={[styles.imageBackground_image]}>
              <Text style={[AppStyles.baseText, styles.listRow_text, styles.listRowImage_text]}>{self.props.title.toUpperCase()}</Text>
            </Image>
          </TouchableOpacity>
        )
      } else {
        return (
          <TouchableOpacity style={[styles.listRow]} onPress={self.onPress} activeOpacity={0.7}>
            <View style={styles.listRowInner}>
              <Text style={[AppStyles.baseText, styles.listRow_text]}>{self.props.title.toUpperCase()}</Text>
            </View>
          </TouchableOpacity>
        )
      }
    },

  });

/* ==============================
  Styles
  =============================== */
  var styles = StyleSheet.create({
    listRow: {
      left: 0,
      right: 0,
    },
    listRowInner: {
      paddingVertical: 20,
      borderBottomWidth: 1,
      borderBottomColor: AppConfig.borderColor,
    },
    listRow_text: {
      color: AppConfig.textColor,
      textAlign: 'center',
      fontWeight: '500',
      backgroundColor: 'transparent',
    },
    listRowImage_text: {
      color: "#FFF",
    },

    // With Image
    imageBackground: {
      backgroundColor: "#333",
    },
    imageBackground_image: {
      height: AppConfig.windowHeight / 4,
      width: AppConfig.windowWidth,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 1,
    }
  });

/* ==============================
  Done!
  =============================== */
  module.exports = listRow;
  module.exports.details = {
    title: 'listRow'
  };