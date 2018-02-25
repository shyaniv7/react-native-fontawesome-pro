import React from "react";
import PropTypes from "prop-types";

import { Svg, Path } from "react-native-svg";
import fontawesome from "@fortawesome/fontawesome";
import { prefixTypes } from "./config";

const DEFAULT_ICON = "question-circle";

const Icon = ( { name, size, color, type } ) => {

  const prefix = prefixTypes[type];
  let icon = fontawesome.findIconDefinition( { prefix, iconName: name } );

  if ( !icon ) {
    icon = fontawesome.findIconDefinition( { prefix, iconName: DEFAULT_ICON } );
  }

  const iconData = icon.icon;
  const path = iconData[4];
  const viewBox = [ 0, 0, iconData[0], iconData[1] ].join( " " );

  return (
    <Svg
      height={size} version="1.1" viewBox={viewBox} width={size} x="0" y="0"
    >
      <Path
        d={path}
        fill={color}
      />
    </Svg>
  )
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  type: PropTypes.oneOf( Object.keys( prefixTypes ) )
};

Icon.defaultProps = {
  name: "",
  size: 20,
  color: "black",
  type: "regular"
};

export default Icon;
