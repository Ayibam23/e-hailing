// import BottomSheet from "@gorhom/bottom-sheet";
// import { useMemo } from "react";
// import { StyleSheet, View, Text } from "react-native";
// import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'



// export default function Bottomsheet() {
//     const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);


//     return (
//         <GestureHandlerRootView style={StyleSheet.container}>
//             <BottomSheetModalProvider index={1} snapPoints={snapPoints}>
//                 <BottomSheet snapPoints={snapPoints} style={styles.contentcontainer}>
//                     <Text style={styles.containerHeadline}>Hello World</Text>
//                 </BottomSheet>
//             </BottomSheetModalProvider>
//         </GestureHandlerRootView>
//     )
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     contentcontainer: {
//         flex: 1,
//         alignItems: 'center'
//     },
//     containerHeadline: {
//         fontSize: 24,
//         fontWeight: '600',
//         padding: 20
//     }
// });




// import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
// import React, { useCallback, useMemo, useRef } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const Bottomsheet = () => {
// 	const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);

// 	return (
// 		<View style={styles.container}>
// 			{/* <BottomSheet index={1} snapPoints={snapPoints}> */}
// 				<View style={styles.contentContainer}>
// 					<Text style={styles.containerHeadline}>Awesome Bottom Sheet 🎉</Text>
// 				</View>
// 			{/* </BottomSheet> */}
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		alignItems: 'center',
// 		justifyContent: 'center'
// 	},
// 	contentContainer: {
// 		flex: 1,
// 		alignItems: 'center'
// 	},
// 	containerHeadline: {
// 		fontSize: 24,
// 		fontWeight: '600',
// 		padding: 20
// 	}
// });
// export default Bottomsheet;


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import BottomSheet from '@gorhom/bottom-sheet'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'
// import { useMemo, useRef, useCallback } from 'react'

// const BottomSheet = () => {
//   const bottomSheetRef = useRef(null);
//    const snapPoints = useMemo(() => ['20%', '35%', ], []);
//    const handleSheetChanges = useCallback((index) => {}, []);
//    return (
//      <GestureHandlerRootView style={styles.container}>
//        <Text>App</Text>
//        <BottomSheet index={0} 
//        snapPoints={snapPoints} 
//        enablePanDownToClose={false}
//        ref={bottomSheetRef}
//        onChange={handleSheetChanges}
//        style={styles.bottom}> 
//        {/* <Bottomsheet /> */}
//        </BottomSheet> 
//      </GestureHandlerRootView>
//    )
//  }

// export default BottomSheet

// const styles = StyleSheet.create({
//   container: {
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

import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler'


const Bottomsheet = ({ openNext }) => {
	const bottomSheetRef = useRef(null);
	const snapPoints = useMemo(() => ['100%',], []);
	const handleSheetChanges = useCallback((index) => { }, []);

	return (
		<GestureHandlerRootView style={styles.container}>
			<BottomSheet index={0}
				snapPoints={snapPoints}
				enablePanDownToClose={false}
				ref={bottomSheetRef}
				onChange={handleSheetChanges}
				style={styles.bottom}>
				<View style={styles.contentContainer}>
					<Text style={styles.containerHeadline}>Hello, Temi</Text>
					<View style={{ flexDirection: 'row', paddingLeft: 15 }}>
						<View style={{ borderWidth: 1, borderColor: '#f5f5f5', backgroundColor: '##f5f5f5', padding: 15, borderBottomLeftRadius: 15, borderTopLeftRadius: 15 }}>
							<TouchableOpacity >
								<Ionicons
									name='search'
									size={25}
									color={'#0898A0'} />
							</TouchableOpacity>
						</View>
						<View style={{ borderWidth: 2, borderColor: '#f5f5f5', backgroundColor: '#f5f5f5', padding: 15, borderBottomRightRadius: 15, borderTopRightRadius: 15, width: '85%' }}>
							<TouchableOpacity style={{ fontSize: 25 }} onPress={openNext}>
									<Text>'Where are you going today?</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</BottomSheet>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'gray',
		zIndex: 4,
		width: '100%',
		height: '100%',

	},
	bottom: {
		width: '100%',
	},
	contentContainer: {
		flex: 1,
		alignItems: 'flex-start',

	},
	containerHeadline: {
		fontSize: 24,
		fontWeight: '600',
		padding: 15,
		color: '#A3A3A3'
	}
});
export default Bottomsheet;