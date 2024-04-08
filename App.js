// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Bottomsheet from './components/Bottomsheet'

// const App = () => {
//   return (
//     <View style={styles.container1}>
//       <Bottomsheet />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container1: {
//          flex: 1,
//          justifyContent: 'center',
//          alignItems: 'center',
//          backgroundColor: 'gray',
//          zIndex: 1,
//       },
//       bottom:{
//         zIndex: 10
//       },
// })


 import React, { useState } from 'react';
 import MapView, { Marker} from 'react-native-maps';
 import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
 import { Overlay } from 'react-native-maps';
 import { Ionicons } from '@expo/vector-icons';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import { MaterialIcons } from '@expo/vector-icons';
 import Bottomsheet from './components/Bottomsheet';
 import TheButtomsheet from './components/TheButtomsheet';


 export default function MyMap ({naviagtion}) {
  const [defaultBottomsheet, setDefaultBottomsheet] =useState(true);
  const [searchLocationBottomsheet, setSearchLocationBottomsheet] =useState(false);

  const handleLocationBottomSheet=()=>{
    setSearchLocationBottomsheet(true);
    setDefaultBottomsheet(false);
  }




   return (
     <View style={styles.container}>
       <MapView style={styles.map} 
       initialRegion={{
         latitude: 4.8776,
         longitude: 7.0283,
         latitudeDelta: 0.01,
         longitudeDelta: 0.01
       }}
       provider='google'
       >
        
         <Marker 
         coordinate={{
           latitude: 4.8776,
           longitude: 7.0283
         }}
         pinColor='red'
         >

         </Marker>
       </MapView>
       <View style={{position: 'absolute', marginTop: 40, paddingLeft: 25 }}>
       <TouchableOpacity style={{backgroundColor:'#0898A0', borderRadius: 35, padding: 10}}>
         <Ionicons 
         name='menu-outline'
         size={35}
         color={'white'}
         onPress={() => naviagtion.openDrawer()} />
         </TouchableOpacity>
       </View>

       <View style={{position: 'absolute', marginTop: 730, paddingLeft: 430 }}>
         <TouchableOpacity style={{backgroundColor:'#0898A0', borderRadius: 35, padding: 15}}>
         <MaterialIcons
         name='gps-fixed'
         size={25}
         color={'white'}
         onPress={() => naviagtion.openDrawer()} />
         </TouchableOpacity>
       </View>
      
       <View style={{position: 'absolute', marginTop: 650, paddingLeft: 430  }}>
       <TouchableOpacity style={{backgroundColor:'black', borderRadius: 35, padding: 15}}>
         <MaterialIcons
         name='gpp-good'
         size={25}
         color= 'white'
         onPress={() => naviagtion.openDrawer()} />
         </TouchableOpacity>
       </View>
       {defaultBottomsheet&&<Bottomsheet openNext={handleLocationBottomSheet} />}
      {searchLocationBottomsheet && <TheButtomsheet />}
     </View>
   );
 }

 const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
 },
   container: {
     flex: 1,
     height: '100%'
   },
   map: {
     width: '100%',
     height: '80%',
     zIndex: 2,
   },
 });