import { View, ImageBackground, Text,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Aclonica_400Regular } from '@expo-google-fonts/aclonica';


const Login = () => {
    const [fontsLoaded] = useFonts({
        Aclonica_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={{ height: '100%' }}>
            <ImageBackground source={require('./../assets/Login.png')} style={{ height: '100%', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Aclonica_400Regular', fontSize: 50, color: 'white', textAlign: "center", marginTop: 265 }}>
                    menji
                </Text>
                <Text style={{ fontSize: 15, color: '#D9D9D9', textAlign: "center" }}>Swift & Affordable</Text>
                <TouchableOpacity style={{ borderRadius: 36, backgroundColor: '#0898A0', padding: 18, width: 340, marginTop: 270}}>
                    <Text style={{ fontSize: 19, fontWeight: '600', color: 'white', textAlign: 'center', }}>Get Started</Text>
                </TouchableOpacity>
            </ImageBackground>

        </View>

    )
}



export default Login;