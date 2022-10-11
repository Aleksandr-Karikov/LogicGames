import React, {useMemo} from 'react';
import {View, StyleSheet} from "react-native";

const Column = ({width, children}) => {
 return (
     <View style={{width}}>
         {children}
    </View>
 )
}

const cls = StyleSheet.create({
    item: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 0.3,
        height: 50
    }
})

const Item = () => {
    return (
        <View style={cls.item}/>
    )
}


const Graphic = (props) => {
    const {data, height, width} = props;

    const maxX = useMemo(()=>{
        return Math.max(data.map(el => el.x))
    }, [data]);

    const maxY = useMemo(()=>{
        return Math.max(data.map(el => el.y))
    }, [data]);

    const xInterval = maxX / 10;
    const yInterval = maxX / 10;
    const widthColumn = width / 10;
    const heightColumn = height/ 10;
    return (
       <View style={{height, display:'flex', flexDirection:'row'}}>

           <Column width={widthColumn}>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
           </Column>
           <Column width={widthColumn}>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
           </Column>
           <Column width={widthColumn}>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
           </Column>
           <Column width={widthColumn}>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
           </Column>
           <Column width={widthColumn}>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
           </Column>
           <Column width={widthColumn}>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
           </Column>
           <Column width={widthColumn}>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
           </Column>
           <Column width={widthColumn}>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
           </Column>
           <Column width={widthColumn}>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
           </Column>
       </View>
    )
}

export default Graphic;