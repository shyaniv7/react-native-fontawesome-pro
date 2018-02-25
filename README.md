# react-native-fontawesome-pro
Easily use your FontAwesome Pro icons in React-Native


# Installation

`npm install react-native-fontawesome-pro --save`

or

`yarn add react-native-fontawesome-pro`


# Linking

`react-native link react-native-fontawesome-pro`

1 more thing you have to do in order for `react-native-svg` to work

go into your `.xcodeproj` and navigate into

Libraries => RNFontAwesomePro.xcodeproj => RNFontAwesomePro => Libraries => RNSVG.xcodeproj => Products

find `libRSVG.a` and drag it into your projects build phases => Link Binary With Libraries



# Usage

In your main app.js file
```
import { configureFontAwesomePro } from "react-native-fontawesome-pro";

/* NOTE: Optional you can pass a prefixType into configureFontAwesomePro to change the default from "regular" to "solid" or "light" */

configureFontAwesomePro();
// configureFontAwesomePro("solid");
// configureFontAwesomePro("light");
```

In your components
```
import Icon from "react-native-fontawesome-pro";

<View style={styles.container}>
  <Icon name="chevron-right" color="red" type="regular" />
  <Icon name="chevron-right" color="blue" type="solid" size={24}/>
  <Icon name="chevron-right" color="green" type="light" size={24} />
</View>
```

# Props
```
  prefixType = {
    regular: "far",
    solid: "fas",
    light: "fal"
  };
```
The icon `name` prop can be found in fontawesome.com/icons
If a valid name is not provided `question-circle` will show up instead.

| Props         | type          | default  |
| ------------- |:-------------:| --------:|
| name          | string        | ""                      |
| color      | hexdecimal or string | "black"             |
| size      | number      |   20                        |
| type | prefixType as a string see definition above      |    "regular" |





###  PR's are welcome ¯\_(ツ)_/¯
<a href="https://www.buymeacoffee.com/KDUHSQq" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
