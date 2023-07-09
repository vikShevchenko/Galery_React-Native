import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button } from "react-native"
import uuid from "react-native-uuid"
const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('')

    return (
        <View>
            <TextInput
                style={styles.textInput}
                placeholder='Назва задача'
                onChangeText={text => setInputValue(text)}
                value={inputValue}
            />
            <Button
                title="Додати задачу"
                style={styles.btn}
                disabled={!inputValue}
                onPress={() => {
                    addTodo({
                        id: uuid.v4(),
                        text: inputValue
                    })
                    setInputValue('')
                }}
            />
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    textInput: {
        padding: 10,
        margin: 10,
        marginHorizontal: 5,
        backgroundColor: "white",
        shadowColor: "black",
        borderRadius: 8,
        // shadowOffset: { width: 1, height: 1 },
        // shadowOpacity: 0.3,
        // shadowRadius: 8,
    }
})