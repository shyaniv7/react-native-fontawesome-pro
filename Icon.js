import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native"
import { Svg, Path } from "react-native-svg";
import fontawesome from "@fortawesome/fontawesome";
import { prefixTypes } from "./config";

const DEFAULT_ICON = "question-circle";

const Icon = ( { name, size, color, type, containerStyle, iconStyle, onPress } ) => {

  const prefix = prefixTypes[type];
  let icon = fontawesome.findIconDefinition( { prefix, iconName: name } );

  if ( !icon ) {
    icon = fontawesome.findIconDefinition( { prefix, iconName: DEFAULT_ICON } );
  }

  const iconData = icon.icon;
  const path = iconData[4];
  const viewBox = [ 0, 0, iconData[0], iconData[1] ].join( " " );

  const iconContent = (
    <View style={containerStyle}>
      <Svg
        height={size}
        version="1.1"
        viewBox={viewBox}
        width={size}
        x="0"
        y="0"
        style={iconStyle}
      >
        <Path
          d={path}
          fill={color}
        />
      </Svg>
    </View>
  );

  if ( onPress ) {
    return (
      <TouchableOpacity onPress={onPress}>
        {iconContent}
      </TouchableOpacity>
    );
  }

  return iconContent;
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  onPress: PropTypes.func,
  type: PropTypes.oneOf( Object.keys( prefixTypes ) ),
  iconStyle: PropTypes.oneOfType( [
    PropTypes.object,
    PropTypes.number
  ] ),
  containerStyle: PropTypes.oneOfType( [
    PropTypes.object,
    PropTypes.number
  ] )
};

Icon.defaultProps = {
  name: "",
  size: 20,
  color: "black",
  type: "regular",
  containerStyle: {},
  iconStyle: {},
  onPress: null
};

export default Icon;
