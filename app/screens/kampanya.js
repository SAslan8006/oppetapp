import React from 'react';
import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';

export default KampanyaScreen = ({navigation}) => {
const kampanyalarList = [
    {
        id: 1,
        title: 'Başlik 1',
        subtitle: 'manşet 1',
        detail: 'açıklama 1',
        image: 'https://tele1.com.tr/wp-content/uploads/2019/06/total-opet.jpg'
    },
    {
        id: 2,
        title: 'Başlik 2',
        subtitle: 'manşet 2',
        detail: 'açıklama 2',
        image: 'https://tele1.com.tr/wp-content/uploads/2019/06/total-opet.jpg'
    },
    {
        id: 3,
        title: 'Başlik 3',
        subtitle: 'manşet 3',
        detail: 'açıklama 3',
        image: 'https://tele1.com.tr/wp-content/uploads/2019/06/total-opet.jpg'
    },
    {
        id: 4,
        title: 'Başlik 4',
        subtitle: 'manşet 4',
        detail: 'açıklama 4',
        image: 'https://tele1.com.tr/wp-content/uploads/2019/06/total-opet.jpg'
    },
    {
        id: 5,
        title: 'Başlik 5',
        subtitle: 'manşet 5',
        detail: 'açıklama 5',
        image: 'https://tele1.com.tr/wp-content/uploads/2019/06/total-opet.jpg'
    },
    {
        id: 6,
        title: 'Başlik 6',
        subtitle: 'manşet 6',
        detail: 'açıklama 6',
        image: 'https://tele1.com.tr/wp-content/uploads/2019/06/total-opet.jpg'
    }
];

const itemSeparatorComponent = () => {
    return (
        <View style={{height: 0.7, width: '100%', backgroundColor: '#f2e600', alignItems: 'center', margin: 20}}></View>
    );
};

const renderItem = ({item}) => {
    return (
        <View style={{margin: 20}}>
            <View>
                <Image
                style={{resizeMode: 'stretch', width: '100%', height: 240}}
                source={{uri: item.image}}
                />
            </View>
            <View style={{alignItems: 'center', margin: 5}}>
                <Text style={{fontSize: 28}}>{item.title}</Text>
                <Text style={{fontSize: 18}}>{item.subtitle}</Text>
            </View>
            <TouchableOpacity
            onPress={() => navigation.navigate('KampanyaDetayScreen', item)}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                backgroundColor: '#0070d4',
                borderRadius: 25,
                width: '100%',
            }}>
                <Text style={{color: '#ffffff', fontSize: 24}}>Kampanya Detay</Text>
            </TouchableOpacity>
        </View>
    )
}

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <FlatList
                data={kampanyalarList}
                ItemSeparatorComponent={itemSeparatorComponent}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString}
                />
            </View>
        </SafeAreaView>
    );
};