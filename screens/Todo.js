
import { StyleSheet, Text, SafeAreaView, ImageBackground, FlatList } from 'react-native'
import Header from '../components/Header';
import { useState } from 'react';
import TodoItem from '../components/TodoItem';
import Form from '../components/Form';

export default function Todo() {

    const [todo, setTodo] = useState([])

    const addTodo = (newItem) => {
        setTodo([
            ...todo,
            { ...newItem }
        ])
    }

    const deleteTodo = (id) => {
        setTodo((newList) => {
            return newList.filter(todoItems => id != todoItems.id)
        })
    }
    return (
        <SafeAreaView style={styles.app} >
            <Header />

            <ImageBackground
                source={require("../assets/bg.jpg")}
                style={styles.bg}
            >
                <Form addTodo={addTodo} />
                {
                    todo.length ? <Text>Всього: {todo.length}</Text> : null
                }
                <FlatList
                    data={todo}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TodoItem item={item} deleteTodo={deleteTodo} />
                    )}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    app: {
        flex: 1,
    }
})