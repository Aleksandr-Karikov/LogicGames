import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import TableItem from "../TableItem";
import uuid from 'react-native-uuid';

const Table = ({data}) => (
    <View>
        <TableItem item={{x: 'X', y: "Y"}}/>
        {data.map((item) => <TableItem key={uuid.v4()} item={item}/>)}
    </View>
);



export default Table;