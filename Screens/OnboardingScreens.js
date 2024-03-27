
import React from "react";
import { SafeAreaView, StyleSheet, Dimensions, View, FlatList, Image, Text, } from "react-native";
import { useFonts, Aclonica_400Regular } from '@expo-google-fonts/aclonica';

const { width, height } = Dimensions.get("window");
const COLORS = {primary: '#0898A0'}

const Slides = [
    {
        id: '1',
        image: require('../assets/bkgrond.png'),
        title: 'menji',
        text: 'Swift & Affordable',
        buttonText: 'Get Started',
        buttonColor: COLORS.primary
    },
    {
        id: '2',
        image: require('../assets/picture2.png'),
        title: 'Confirm Driver',
        text: 'Enjoy quick and reliable rides with Menji. We match you with the best drivers in your area.',
        buttonText: 'Get Started',
        buttonColor: COLORS.primary
    },
    {
        id: '3',
        image: require('../assets/Login.png'),
        title: 'menji',
        text: 'Swift & Affordable',
        buttonText: 'Get Started',
        buttonColor: COLORS.primary
    },
];

const Slide = ({item}) => {
    let [fontsLoaded, error] = useFonts({
        Aclonica_400Regular,
      });
     
      if (!fontsLoaded) {
          return null;
      }
    return(
        <View style={{alignItems: 'center'}}>
            <Image source={item.image} style={{height:'60%', width, resizeMode:'contain', zIndex: 1}} />
            <View style={{backgroundColor: '#0898A0', borderTopRightRadius: 25, borderTopLeftRadius: 25, width: '100%', height: 500, zIndex: 2, top: -40, alignItems: 'center', padding: 5}}>
                <Text style={{ fontFamily: 'Aclonica_400Regular', fontSize: 25, color: 'white', textAlign: "center", marginTop: 20 }}>
                    {item.title}
                </Text>
                <Text style={{fontSize: 35, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>
                    {item.text}
                </Text>
                <Text style={{fontSize: 15, color: 'white', textAlign: 'center', padding: 20}}>
                    {item.buttonText}
                </Text>
                    <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
                        {item.buttonText}
                        </Text>
            </View>
        </View>
    )
}

const OnboardingScreen = ({navigation}) => {
    const[currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const Footer = () => {
        return (
            <View style={{
                height: height * 0.25,
                justifyContent: 'space-between',
                paddingHorizontal: 20,
     }}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
        }}>
           {Slides.map((_, index) =>(
             <View key={index} style={[styles.indicator, currentSlideIndex == index && {
                backgroundColor:COLORS.white,
                width: 25,
             }
            ]} />
           ))}
        </View>
     </View>
        )
    };
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };
    return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
        <FlatList
        onMomentumScrollEnd={updateCurrentSlideIndex} 
        pagingEnabled
        data={Slides} 
        contentContainerStyle={{height: height * 0.1}}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Slide item={item}  />} 
        />
        <Footer />
    </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    indicator: {
        height: 2.5, 
        width: 10, 
        backgroundColor: 'white', 
        marginHorizontal: 3, 
        borderRadius: 2,
    },
  });
export default OnboardingScreen; 