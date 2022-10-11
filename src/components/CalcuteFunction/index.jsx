import React, {useState} from 'react';
import {Button, Text, View} from "react-native";
import {getFunction} from "../../lib/mnk";

const CalculateFunction = ({data}) => {
    const [func, setFunc] = useState('');
    const calculate = () => {
        setFunc(getFunction(data))
    }

    return (
        <View>
            <Button onPress={calculate} disabled={data.length < 3} title={'Рассчитать'}/>
            <Text>
                {func}
            </Text>
        </View>
    )
}

export default CalculateFunction;