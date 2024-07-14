import { Image, Pressable, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import React from 'react';
import { bs } from '../styles/bsStyles';
import { imageBaseUrl } from '../api';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MovieItem({ movie, setModalVisible, setSelectedMovie }) {

    const parseDate = (date) => {
        const [year, month, day] = date.split('-');
        return `${day}.${month}.${year}`;
    }
    return (
        <TouchableNativeFeedback
            onPress={() => {
                setModalVisible(true);
                setSelectedMovie(movie);
            }}
        >
            <View>
                <View style={{ borderBottomColor: 'white', borderBottomWidth: 0.2, marginHorizontal: 8 }} />
                <View style={[bs.p2, styles.container]}>
                    <Image
                        source={{ uri: `${imageBaseUrl}${movie.poster_path}` }}
                        style={[bs.rounded2, styles.image]}
                    />
                    <View style={styles.textContainer}>
                        <Text style={[bs.textWhite, styles.title]}>{movie.title}</Text>
                        <Text style={[bs.textWhite, styles.releaseDate]}>{parseDate(movie.release_date)}</Text>
                        <View style={[bs.row, { alignItems: 'center' }]}>
                            <Icon name="star" size={16} color='white' />
                            <Text style={[bs.textWhite, bs.mx1, styles.rating]}>
                                {Number(movie.vote_average).toFixed()}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.actionsContainer}>
                        <Icon name="angle-right" size={40} color='white' />
                    </View>
                </View>
                <View style={{ borderBottomColor: 'white', borderBottomWidth: 0.2, marginHorizontal: 8 }} />
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        padding: 10,
    },
    actionsContainer: {
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    releaseDate: {
        fontSize: 14,
    },
    rating: {
        fontSize: 14,
        marginTop: 5,
    },
});