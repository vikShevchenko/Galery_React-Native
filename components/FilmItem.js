import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, Image, Modal, SafeAreaView, ScrollView } from "react-native"

const FilmItem = ({ film }) => {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <TouchableOpacity
            onLongPress={() => setModalVisible(true)}
            style={styles.filmItem}
        >
            <Image
                source={{ uri: `http://image.tmdb.org/t/p/w200${film.poster_path}` }}
                style={styles.image}
            />
            <Text style={styles.title}>
                {film.title}
            </Text>
            <Modal
                animationType="slide"
                presentationStyle="formSheet"
                visible={modalVisible}
            >
                <ScrollView >
                    <SafeAreaView style={styles.modal}>
                        <Text
                            onPress={() => setModalVisible(!modalVisible)}
                            style={styles.close}>
                            &times;
                        </Text>
                        <Image
                            source={{ uri: `http://image.tmdb.org/t/p/w200${film.poster_path}` }}
                            style={styles.modalImage}
                        />
                        <Text style={styles.overview}>{film.overview}</Text>
                    </SafeAreaView>
                </ScrollView>
            </Modal>
        </TouchableOpacity>
    )
}

export default FilmItem

const styles = StyleSheet.create({
    filmItem: {
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 15,
    },
    image: {
        width: 100,
        height: 150,
        // resizeMode: 'container'
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 5,
        textAlign: 'center'
    },
    modal: {
        margin: 25,
    },
    close: {
        fontSize: 30,
        textAlign: 'right'
    },
    modalImage: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
        display: 'flex',
        alignSelf: 'center'
    },
    overview: {
        width: '100%',
        fontSize: 18,
        marginTop: 25,
    }
})