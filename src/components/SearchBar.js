import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#FFFFFF"
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171717',
    padding: 10,
  },
  input: {
    backgroundColor: '#333333',
    borderRadius: 5,
    color: '#FFFFFF',
    padding: 10,
  },
});

export default SearchBar;