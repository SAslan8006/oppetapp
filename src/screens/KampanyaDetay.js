import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {deviceHeight, deviceWidth} from '../utils/dimensions';
import Faded from '../utils/faded';

const KampanyaDetayScreen = ({route}) => {
  const item = route.params;
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        paddingVertical: 0,
        paddingHorizontal: 0,
      }}>
      <Image
        style={{resizeMode: 'cover', width: '100%', height: deviceHeight / 3}}
        source={{uri: item.image}}
      />
      <View style={{position: 'absolute', top: 0, width: '100%'}}>
        <Faded height={deviceHeight / 4} color="#0070d4" direction="bottom" />
      </View>
      <ScrollView>
        <Text style={{fontSize: 28}}>{item.title}</Text>

        <Text style={{fontSize: 18}}>{item.detail}</Text>
      </ScrollView>
    </View>
  );
};

export default KampanyaDetayScreen;
