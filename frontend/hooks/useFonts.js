import * as Font from "expo-font";
 
export default async function useFonts (){
  await Font.loadAsync({
    'Raleway_100Thin': require('../src/assets/fonts/Raleway-Thin.ttf'),
    'Raleway_200ExtraLight': require('../src/assets/fonts/Raleway-ExtraLight.ttf'),
    'Raleway_300Light': require('../src/assets/fonts/Raleway-Light.ttf'),
    'Raleway_400Regular': require('../src/assets/fonts/Raleway-Regular.ttf'),
    'Raleway_500Medium': require('../src/assets/fonts/Raleway-Medium.ttf'),
    'Raleway_600SemiBold': require('../src/assets/fonts/Raleway-SemiBold.ttf'),
    'Raleway_700Bold': require('../src/assets/fonts/Raleway-Bold.ttf'),
    'Raleway_800ExtraBold': require('../src/assets/fonts/Raleway-ExtraBold.ttf'),
    'Raleway_900Black': require('../src/assets/fonts/Raleway-Black.ttf'),
  });
}
