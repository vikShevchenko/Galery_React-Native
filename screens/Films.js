import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import axios from 'axios';
import { FlatList } from 'react-native';
import FilmItem from '../components/FilmItem';

const URL = 'https://api.themoviedb.org/3/'; //
const KEY = 'f6ffe98b5dc08916d40352e501f3317f';

export default function Films() {

    const [films, setFilms] = useState([])

    useEffect(() => {
        TrendingMovies = async () => {
            const response = await axios.get(`${URL}trending/movie/week?api_key=${KEY}`);
            setFilms(response.data.results)
        };
        TrendingMovies()
    }, [])

    return (
        <View >
            <Header />
            <FlatList

                columnWrapperStyle={{ flex: 1, justifyContent: 'space-around' }}
                numColumns={3}
                contentContainerStyle={{ paddingBottom: 100 }}
                data={films}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <FilmItem film={item} />
                )}
            />
        </View>
    );
}
