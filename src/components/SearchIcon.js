import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const SearchIcon = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={require('../assets/search-icon.png')} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default SearchIcon;