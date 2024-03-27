import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import slides from '../base';
import Slideitem from './Slideitem';
import Pagination from './Pagination';

const Slider = () => {
  return (
    <View>
      <FlatList data={slides}
        renderItem={({ item }) => <Slideitem item=
          {item} />}
        horizontal
        pagingEnabled
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
      />
      <Pagination data={slides} />
    </View>
  )
}

export default Slider;

const styles = StyleSheet.create({})