import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from "react-native";
import InputTable from "./src/components/InputTable";
import Table from "./src/components/Table";
import Graphic from "./src/components/Graphic";
import CalculateFunction from "./src/components/CalcuteFunction";

const data = [
    {x: 1, y: 1},
    {x: 2, y: 2},
    {x: 3, y: 3},
    {x: 4, y: 4},
    {x: 5, y: 5},
    {x: 6, y: 6},
    {x: 7, y: 7},
    {x: 8, y: 8},
    {x: 9, y: 9},
    {x: 10, y: 10},
]


const App = () => {
    const [data, setData] = useState([{x:1, y: 1}]);
    const onAdd = (newData) => {
        setData([...data,newData])
    }
    return (
        <ScrollView style={cls.container}>
            <InputTable onAdd={onAdd}/>
            <Table data={data}/>
            <CalculateFunction data={data}/>
        </ScrollView>
    )
}

const cls = StyleSheet.create({
    container: {
    }
})

export default App;
