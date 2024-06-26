import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ContentCard from './ContentCard';

const ContentGrid = ({ contentList, onEndReached }) => {
  return (
    <FlatList
      data={contentList}
      numColumns={3}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <ContentCard title={item.name} posterImage={item['poster-image']} />}
      contentContainerStyle={styles.grid}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    paddingBottom: 20,
  },
});

export default ContentGrid;