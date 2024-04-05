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




import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Bottomsheet = () => {
	const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);

	return (
		<View style={styles.container}>
			{/* <BottomSheet index={1} snapPoints={snapPoints}> */}
				<View style={styles.contentContainer}>
					<Text style={styles.containerHeadline}>Awesome Bottom Sheet 🎉</Text>
				</View>
			{/* </BottomSheet> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	contentContainer: {
		flex: 1,
		alignItems: 'center'
	},
	containerHeadline: {
		fontSize: 24,
		fontWeight: '600',
		padding: 20
	}
});
export default Bottomsheet;