# react-native-fontawesome-pro

Easily use your FontAwesome Pro 5.1 icons in React-Native.

v2 of this module takes advantage of [enhancements in FontAwesome 5.1’s JS Package Cleanup](https://fontawesome.com/changelog/latest#enhancements) and provides access to 409 new icons.

**Want to install v1?** [View the old readme for FontAwesome Pro 5](https://github.com/shyaniv7/react-native-fontawesome-pro/tree/fcbabb90f197c552aecb9bb5d9a9acb3170ecb080)

# Upgrading from v1?

If upgrading from a v1 installation uninstall the previous prerequisite FontAwesome packages:

    npm uninstall --save @fortawesome/fontawesome-free-brands @fortawesome/fontawesome-pro-light @fortawesome/fontawesome-pro-regular @fortawesome/fontawesome-pro-solid

or

    yarn remove @fortawesome/fontawesome-free-brands @fortawesome/fontawesome-pro-light @fortawesome/fontawesome-pro-regular @fortawesome/fontawesome-pro-solid


# Installation Prerequisites

1. Create a `.npmrc` file in the root of your project and the line below. Replace `YOUR-TOKEN-HERE` with your FontAwesome Pro token which you can find in your Font Awesome account <https://fontawesome.com/account/services>. More info: [Font Awesome docs: Using a Package Manager](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers)

        @fortawesome:registry=https://npm.fontawesome.com/
        //npm.fontawesome.com/:_authToken=YOUR-TOKEN-HERE

    This will allow you to download the pro solid, regular and light font packages from the fontawesome pro repo.

2. Install the FontAwesome Pro packages ( you will not be able to install them without the previous step )


        npm install --save @fortawesome/pro-light-svg-icons @fortawesome/pro-regular-svg-icons @fortawesome/pro-solid-svg-icons @fortawesome/free-brands-svg-icons

    or

        yarn add @fortawesome/pro-light-svg-icons @fortawesome/pro-regular-svg-icons @fortawesome/pro-solid-svg-icons @fortawesome/free-brands-svg-icons

3. Install `react-native-svg`

        npm install --save react-native-svg

    or

        yarn add react-native-svg

4. Link `react-native-svg`


        react-native link

    …or if you only want to link the single library:

        react-native link react-native-svg

    **Note:** Rebuilding the app for any simulator/emulator is required after running `react-native link`.


# Installation


    npm install react-native-fontawesome-pro --save

or

    yarn add react-native-fontawesome-pro

The postinstall script will then automatically install the pro packages for you.


# Usage

Configure FontAwesomePro in your main `app.js` file. Optionally set the default font from "regular" to "solid" or "light":

    import { configureFontAwesomePro } from "react-native-fontawesome-pro";

    configureFontAwesomePro();
    // configureFontAwesomePro("solid");
    // configureFontAwesomePro("light");

Add icons to a component:

    import Icon from "react-native-fontawesome-pro";

    <View>
      <Icon name="chevron-right" color="red" type="regular" onPress={() => alert("do something")} />
      <Icon name="chevron-right" color="blue" type="solid" size={24}/>
      <Icon name="chevron-right" color="green" type="light" size={10} />
    </View>

# Props

Values for the Icon `name` prop can be found on [fontawesome.com/icons](https://fontawesome.com/icons).

| prop | type | default value |
| :- | :- | :- |
| `name` | string | "" (If a valid `name` value is not provided, Font Awesome defaults to "question-circle") |
| `color` | string, html color keyword or hexdecimal | "black" |
| `size` | int | 20 |
| `type` | string, one of the available Font Awesome prefix types: "regular", "solid", "light", or "brands" | "regular" |
| `iconStyle` | style object | undefined |
| `containerStyle` | style object | undefined |
| `onPress` | function | undefined |
| `activeOpacity` | number (beween 0 and 1) | 0.2 ([same as default](https://facebook.github.io/react-native/docs/touchableopacity.html#activeopacity)) |

###  PR's are welcome `¯\_(ツ)_/¯`

<a href="https://www.buymeacoffee.com/KDUHSQq" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
