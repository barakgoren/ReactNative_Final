import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { bs } from '../styles/bsStyles';
import { imageBaseUrl } from '../api';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MovieModal({ modalVisible, setModalVisible, selectedMovie }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style={{ flex: 1, backgroundColor: '#08979c' }}>
                <View style={styles.centeredView}>
                    <View>
                        <View style={styles.header}>
                            <Image source={{ uri: `${imageBaseUrl}${selectedMovie?.poster_path}` }} style={{ width: 100, height: 150 }} />
                            <View style={styles.modalText}>
                                <Text style={[bs.textWhite, bs.h3, bs.mb2]}>{selectedMovie?.title}</Text>
                                <Text style={[bs.textWhite]}>{selectedMovie?.release_date}</Text>
                                <Text style={[bs.textWhite]}>{selectedMovie?.vote_count.toLocaleString()} Reviews</Text>
                                <View style={[bs.row, { alignItems: 'center' }]}>
                                    <Icon name="star" size={16} color='white' />
                                    <Text style={[bs.mx1, bs.textWhite]}>
                                        {Number(selectedMovie?.vote_average).toFixed(1)}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{ marginVertical: 25, color: 'white' }}>{selectedMovie?.overview}</Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(false)}>
                                <Text style={styles.textStyle}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonBuy]}
                                onPress={() => setModalVisible(false)}>
                                <Text style={styles.textStyle}>Buy Tickers</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        marginTop: 0,
        margin: 22,
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    button: {
        width: '50%',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: 'red',
    },
    buttonBuy: {
        backgroundColor: '#00474f',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginHorizontal: 10,
    },
    header: {
        flexDirection: 'row',
    },
})