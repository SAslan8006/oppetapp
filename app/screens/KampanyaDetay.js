import React from 'react';
import { View, Text, Image } from 'react-native';
import { deviceHeight } from '../utils/dimensions';

const KampanyaDetayScreen = ({route, navigation}) => {
    const item = route.params;
    return (
        <View style={{width: '100%', paddingVertical: 0, backgroundColor: '#f0f8ff' , height: '100%',
        paddingHorizontal: 0 ,alignItems: 'center', 
    }}>
        <Image 
        style={{resizeMode: 'stretch', width: '100%', height: deviceHeight/2}}
        source={{uri: item.image}}
        />
        <Text style={{fontSize: 28}}>{item.title}</Text>
        <Text style={{fontSize: 20}}>{item.subtitle}</Text>
        <Text style={{fontSize: 16}}>{item.detail}</Text>
     </View>
    );
};

export default KampanyaDetayScreen;