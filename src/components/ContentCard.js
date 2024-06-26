import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ContentCard = ({ title, posterImage }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: `https://test.create.diagnal.com/images/${posterImage}` }} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '30%',
    margin: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default ContentCard;