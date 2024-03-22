import { View, Image, Text, } from 'react-native';
import { useFonts, Aclonica_400Regular } from '@expo-google-fonts/aclonica';


const Onboarding1 = () => {
  let [fontsLoaded, error] = useFonts({
    Aclonica_400Regular,
  });
 
  if (!fontsLoaded) {
      return null;
  }

  return (
    <View style={{height: '100%'}}>
      <Image source={require('./../assets/bkgrond.png')} style={{ height: "70%", width: '100', zIndex: 1 }} />
      <View style={{ backgroundColor: '#0898A0', borderTopRightRadius: 25, borderTopLeftRadius: 25, width: '100%', height: 500, zIndex: 2, top: -40, alignItems: 'center', padding: 5 }}>
        <Text style={{ fontFamily: 'Aclonica_400Regular', fontSize: 25, color: 'white', textAlign: "center", marginTop: 20 }}>
          menji
        </Text>
        <Text style={{fontSize: 35, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Request Ride</Text>
        <Text style={{fontSize: 15, color: 'white', textAlign: 'center', padding: 20}}>Ready to experience hassle-free and convenient transportation?</Text>
      </View>

    </View>

  )
}



export default Onboarding1;