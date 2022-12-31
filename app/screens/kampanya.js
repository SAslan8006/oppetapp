import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const KampanyaScreen = ({navigation}) => {
  const kampanyaList = [
    {
      id: 1,
      title: 'Başlık - 1',
      subtitle: 'manşet - 1',
      detail: 'açıklama - 1',
      image:
        'https://cdnuploads.aa.com.tr/uploads/sirkethaberleri/Contents/2020/04/28/thumbs_b_c_70ec5f5bcbabbfad76dbe9dc5a6db539.jpg',
    },
    {
      id: 2,
      title: 'Başlık - 2',
      subtitle: 'manşet - 2',
      detail: 'açıklama - 2',
      image:
        'https://cdnuploads.aa.com.tr/uploads/sirkethaberleri/Contents/2020/04/28/thumbs_b_c_70ec5f5bcbabbfad76dbe9dc5a6db539.jpg',
    },
    {
      id: 3,
      title: 'Başlık - 3',
      subtitle: 'manşet - 3',
      detail: 'açıklama - 3',
      image:
        'https://cdnuploads.aa.com.tr/uploads/sirkethaberleri/Contents/2020/04/28/thumbs_b_c_70ec5f5bcbabbfad76dbe9dc5a6db539.jpg',
    },

    {
      id: 4,
      title: 'Başlık - 4',
      subtitle: 'manşet - 4',
      detail: 'açıklama - 4',
      image:
        'https://cdnuploads.aa.com.tr/uploads/sirkethaberleri/Contents/2020/04/28/thumbs_b_c_70ec5f5bcbabbfad76dbe9dc5a6db539.jpg',
    },
  ];

  const itemSeparatorComponent = () => {
    return (
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: 1,
          backgroundColor: '#e9bc18',
        }}
      />
    );
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          paddingVertical: 40,
          paddingHorizontal: 20,
        }}>
        <Image
          style={{resizeMode: 'stretch', width: '100%', height: 240}}
          source={{uri: item.image}}
        />
        <Text style={{fontSize: 28}}>{item.title}</Text>
        <Text style={{fontSize: 18}}>{item.subtitle}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('KampanyaDetayScreen', item)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 60,
            backgroundColor: '#0070d4',
            borderRadius: 25,
            width: '100%',
          }}>
          <Text style={{color: '#ffffff', fontSize: 24}}>Kampanya Detay</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={kampanyaList}
        itemSeparatorComponent={itemSeparatorComponent}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default KampanyaScreen;
