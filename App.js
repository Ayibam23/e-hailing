// import React, { useCallback, useMemo, useRef } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// const App = () => {
//   // ref
//   const bottomSheetRef = useRef(null);
//   const snapPoints = useMemo(() => [ '300'], []);

//   // callbacks
//   // const handleSheetChanges = useCallback((index) => {
//   //   console.log('handleSheetChanges', index);
//   // }, []);

//   // renders
//   return (
//     <GestureHandlerRootView>    
//       <View style={styles.container}>
//       <BottomSheet
//         ref={bottomSheetRef}
//         // onChange={handleSheetChanges}
//         snapPoints={snapPoints}
//         enablePanDownToClose={true}
//       >
       
//           <Text style={{fontSize: 24, fontWeight: 'bold'}}>Awesome 🎉</Text>
       
//       </BottomSheet>
//     </View>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: 'grey',
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// export default App;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Bottomsheet from './components/Bottomsheet'
import { useMemo, useRef, useCallback } from 'react'

const App = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%', ], []);
  const handleSheetChanges = useCallback((index) => {}, []);
  return (
    <GestureHandlerRootView>
      <Text style={{textAlign: 'center', justifyContent: 'center', marginTop: 900}}>App</Text>
      <BottomSheet index={0} 
      snapPoints={snapPoints} 
      enablePanDownToClose={false}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}>
        <Bottomsheet />
      </BottomSheet>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})