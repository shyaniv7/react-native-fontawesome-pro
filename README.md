# react-native-fontawesome-pro
Easily use your FontAwesome Pro icons in React-Native

# Requirements

* Create a `.npmrc` file in the root of your project and the line below.
Replace `TOKEN` with your FontAwesome Pro token

```
@fortawesome:registry=https://npm.fontawesome.com/<TOKEN>
```
This will allow you to download the pro solid, regular and light font packages from the fontawesome pro repo.

* Install the FontAwesome Pro packages ( you will not be able to install them without the previous step )

```
npm install --save @fortawesome/fontawesome-free-brands @fortawesome/fontawesome-pro-light @fortawesome/fontawesome-pro-regular @fortawesome/fontawesome-pro-solid

or

yarn add @fortawesome/fontawesome-free-brands @fortawesome/fontawesome-pro-light @fortawesome/fontawesome-pro-regular @fortawesome/fontawesome-pro-solid

```


* Install `react-native-svg`

```
npm install --save react-native-svg

or

yarn add react-native-svg
```

* Link `react-native-svg`

```
react-native link react-native-svg
```

# Installation

`npm install react-native-fontawesome-pro --save`

or

`yarn add react-native-fontawesome-pro`

The postinstall script will then automatically install the pro packages for you.

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
  <Icon name="chevron-right" color="red" type="regular" onPress={() => alert("do something")} />
  <Icon name="chevron-right" color="blue" type="solid" size={24}/>
  <Icon name="chevron-right" color="green" type="light" size={24} />
</View>
```

# Props
```
  prefixType = {
    regular: "far",
    solid: "fas",
    light: "fal",
    brands: "fab"
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
| iconStyle | style object      |    {} |
| containerStyle | style object      |    {} |
| onPress | function      |    null |




###  PR's are welcome ¯\_(ツ)_/¯
<a href="https://www.buymeacoffee.com/KDUHSQq" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
