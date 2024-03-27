import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import slides from '../base';

const Pagination = ({data}) => {
  return (
    <View style={styles.container}>
     {slides.map((_, idx) => {
        return <View key={idx.toString()} style=
        {styles.dot} />;
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 50,
        flexDirection: 'row',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
        dot:{
        width: 12,
        height: 12,
        borderRadius:6,
        marginHorizontal: 3,
        backgroundColor:'white',
    },
});