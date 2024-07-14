import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { bs } from './styles/bsStyles';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from './api';
import MovieItem from './components/MovieItem';
import { LinearGradient } from 'expo-linear-gradient';
import MovieModal from './components/MovieModal';

export default function App() {

  const [movies, setMovies] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(url);
      setMovies(response.data.items);
    } catch (error) {
      console.log('App.js: fetchMovies(): error:', error);
    }
  }

  return (
    <LinearGradient
      colors={['#00474f', '#08979c']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0.7 }}
      style={{ flex: 1 }}>
      <Text style={[bs.h4, bs.textCenter, bs.py3, bs.textWhite, bs.mt3]}>Movies App</Text>
      <MovieModal modalVisible={modalVisible} setModalVisible={setModalVisible} selectedMovie={selectedMovie} />
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieItem movie={item} setModalVisible={setModalVisible} setSelectedMovie={setSelectedMovie} />
        )}
      />
      <StatusBar style="light" />
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
});
