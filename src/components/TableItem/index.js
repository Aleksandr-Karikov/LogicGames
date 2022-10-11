import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const TableItem = ({item}) => (
    <View style={cls.header}>
        <Text style={cls.title}>{item.x}</Text>
        <Text style={cls.title}>{item.y}</Text>
    </View>
);

const cls = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection:'row'
    },
    title: {
        width: '50%',
        textAlign:'center',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
    }
})

export default TableItem;