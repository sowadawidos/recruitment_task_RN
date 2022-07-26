import * as Font from 'expo-font'

export const loadFontsAsync = async () => {
  try {
    await Font.loadAsync({
      montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
      'montserrat-black': require('../assets/fonts/Montserrat-Black.ttf'),
      'montserrat-black-italic': require('../assets/fonts/Montserrat-BlackItalic.ttf'),
      'montserrat-bold': require('../assets/fonts/Montserrat-Bold.ttf'),
      'montserrat-bold-italic': require('../assets/fonts/Montserrat-BlackItalic.ttf'),
      'montserrat-extra-bold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
      'montserrat-extra-bold-italic': require('../assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
      'montserrat-extra-light': require('../assets/fonts/Montserrat-ExtraLight.ttf'),
      'montserrat-extra-light-italic': require('../assets/fonts/Montserrat-ExtraLightItalic.ttf'),
      'montserrat-italic': require('../assets/fonts/Montserrat-Italic.ttf'),
      'montserrat-light': require('../assets/fonts/Montserrat-Light.ttf'),
      'montserrat-light-italic': require('../assets/fonts/Montserrat-LightItalic.ttf'),
      'montserrat-medium': require('../assets/fonts/Montserrat-Medium.ttf'),
      'montserrat-medium-italic': require('../assets/fonts/Montserrat-MediumItalic.ttf'),
      'montserrat-semibold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
      'montserrat-semibold-italic': require('../assets/fonts/Montserrat-SemiBoldItalic.ttf'),
      'montserrat-thin': require('../assets/fonts/Montserrat-Thin.ttf'),
      'montserrat-thin-italic': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      opensans: require('../assets/fonts/OpenSans-Regular.ttf'),
      'opensans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
      'opensans-extrabold': require('../assets/fonts/OpenSans-ExtraBold.ttf'),
      'opensans-italic': require('../assets/fonts/OpenSans-Italic.ttf'),
      'opensans-bold-italic': require('../assets/fonts/OpenSans-BoldItalic.ttf'),
      'opensans-extrabold-italic': require('../assets/fonts/OpenSans-ExtraBoldItalic.ttf'),
      'opensans-light': require('../assets/fonts/OpenSans-Light.ttf'),
      'opensans-lightitalic': require('../assets/fonts/OpenSans-LightItalic.ttf'),
      'opensans-medium': require('../assets/fonts/OpenSans-Medium.ttf'),
      'opensans-medium-italic': require('../assets/fonts/OpenSans-MediumItalic.ttf'),
      'opensans-semibold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
      'opensans-semibold-italic': require('../assets/fonts/OpenSans-SemiBoldItalic.ttf'),
      karla: require('../assets/fonts/Karla-Regular.ttf'),
      'karla-bold': require('../assets/fonts/Karla-Bold.ttf'),
      'karla-italic': require('../assets/fonts/Karla-Italic.ttf'),
      'karla-bold-italic': require('../assets/fonts/Karla-BoldItalic.ttf'),
    })
  } catch (error) {
    console.log('utils.js (24) - error', error)
  }
}
