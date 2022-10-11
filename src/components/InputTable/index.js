import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from "react-native";

const InputTable = ({onAdd}) => {
    const [input, setInput] = useState({});
    const setX = (x) => {
        setInput({...input, x:x.replace(/[^0-9]/g, '')})
    }
    const setY = (y) => {
        setInput({...input, y:y.replace(/[^0-9]/g, '')})
    }

    return (
        <View style={cls.container}>
            <TextInput
                onChangeText={setX}
                value={input.x}

                placeholder="X"
                keyboardType="numeric"
            />
            <TextInput
                onChangeText={setY}
                value={input.y}
                placeholder="Y"
                keyboardType="numeric"
            />
            <Button onPress={()=>onAdd(input)} disabled={!input.x || !input.y} title={'Добавить'}/>
        </View>
    );
}

const cls = StyleSheet.create({
    container: {
        color:'red'
    }
})

export default InputTable;