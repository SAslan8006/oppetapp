import React from 'react';
import {SafeAreaView, Image, View, Text, TouchableOpacity} from 'react-native';
import IconMa from 'react-native-vector-icons/MaterialIcons';
import {deviceWidth, deviceHeight} from '../utils/dimensions';
import Faded from '../utils/faded';
import {FlatListSlider} from 'react-native-flatlist-slider';

const images = [
  {
    image:
      'https://lh3.googleusercontent.com/proxy/Qvgz-dOKvMLPgIJbamrc5quk89QN1a2GLXzqwvuh7NjHrvt7lVOd9QDFfoO0P-5sG9tqNSkG8BXPyaoF5b6PlB0Qr0Wi6Aa_QNiwVyC4TVAY',
    desc: 'Title 1',
  },
  {
    image:
      'https://lh3.googleusercontent.com/proxy/Qvgz-dOKvMLPgIJbamrc5quk89QN1a2GLXzqwvuh7NjHrvt7lVOd9QDFfoO0P-5sG9tqNSkG8BXPyaoF5b6PlB0Qr0Wi6Aa_QNiwVyC4TVAY',
    desc: 'Title 2',
  },
];
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#0271cd'}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
          }}>
          <FlatListSlider
            data={images}
            height={deviceHeight / 2}
            timer={5000}
            onPress={item => alert(JSON.stringify(item))}
            contentContainerStyle={{paddingHorizontal: 0}}
            indicatorContainerStyle={{position: 'absolute', top: 10}}
            indicatorActiveColor={'#e9bc18'}
            indicatorInActiveColor={'#ffffff'}
            indicatorActiveWidth={30}
            animation
          />
          <Faded
            style={{zIndex: 2, position: 'absolute', bottom: 0, left: 0}}
            color="#0271cd"
            height={deviceHeight / 4}
            width={deviceWidth}
          />
        </View>
        <View style={{flex: 1, width: '100%', marginVertical: 20}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRightWidth: 1,
                borderRightColor: 'rgba(255, 255, 255, 0.2)',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(255, 255, 255, 0.2)',
              }}>
              <Text style={{color: '#fff', fontSize: 24}}> En Yakın Opet</Text>
              <Text style={{color: '#fff', fontSize: 34}}> 2.4 Km</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRightWidth: 1,
                borderRightColor: 'rgba(255, 255, 255, 0.2)',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(255, 255, 255, 0.2)',
              }}>
              <Text style={{color: '#fff', fontSize: 24}}>Akıllı Dolum</Text>
              <IconMa name="local-gas-station" size={48} color="#fff" />
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRightWidth: 1,
                borderRightColor: 'rgba(255, 255, 255, 0.2)',
              }}>
              <Text style={{color: '#fff', fontSize: 24}}>Benzin</Text>
              <Text style={{color: '#fff', fontSize: 34}}> 27 TL</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff', fontSize: 24}}>Ödeme Yap</Text>
              <IconMa name="payment" size={48} color="#fff" />
            </View>
          </View>
        </View>

        <View
          style={{
            height: 60,
            borderTopWidth: 1,
            borderTopColor: 'rgba(255, 255, 255, 0.2)',
            backgroundColor: '#0271cd',
            width: '100%',
            justifyContent: 'center',
            padding: 10,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.navigate('KampanyaScreen')}>
            <View style={{flex: 1}}>
              <Text style={{color: '#fff', fontSize: 18}}>KAMPANYALAR</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <IconMa name="keyboard-arrow-right" size={32} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
