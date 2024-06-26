import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContentRequest } from '../redux/actions/contentActions';
import ContentGrid from '../components/ContentGrid';
import SearchBar from '../components/SearchBar';
import BackButton from '../components/BackButton';
import SearchIcon from '../components/SearchIcon';

const ContentListScreen = () => {
  const dispatch = useDispatch();
  const contentList = useSelector(state => state.content.contentList);
  const loading = useSelector(state => state.content.loading);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchContentRequest(page));
  }, [page]);

  const filteredContent = contentList.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLoadMore = () => {
    if (!loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const handleBackPress = () => {
    Alert.alert('Back button pressed');
  };

  const handleSearchPress = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={handleBackPress} />
        <Text style={styles.heading}>Romantic Comedy</Text>
        <SearchIcon onPress={handleSearchPress} />
      </View>
      {searchVisible && (
        <View style={styles.searchBarContainer}>
          <SearchBar onChangeText={setSearchQuery} />
        </View>
      )}
      {loading && page === 1 ? (
        <ActivityIndicator size="large" color="#FFFFFF" />
      ) : (
        <ContentGrid contentList={filteredContent} onEndReached={handleLoadMore} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop:50
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    flex: 1,
  },
  searchBarContainer: {
    paddingHorizontal: 10,
  },
});

export default ContentListScreen;