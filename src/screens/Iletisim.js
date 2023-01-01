import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Communications from 'react-native-communications';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMc from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFa from 'react-native-vector-icons/FontAwesome5';
import { address } from 'react-native-communications'

const IletisimScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <ScrollView style={{ flex: 1, backgroundColor: '#1a7ed3' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('IletisimFormuScreen')}
          style={{
            marginTop: 70,
            height: 80,
            flexDirection: 'row',
            backgroundColor: '#0070d4',
            alignItems: 'center',
            padding: 10,
            margin: 10,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#ffffff',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              backgroundColor: '#1a7ed3',
              borderRadius: 40,
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="edit" size={32} color="#ffffff" />
          </View>
          <View style={{ flex: 1, margin: 8 }}>
            <Text style={{ color: '#ffffff', fontSize: 18 }}>Öneri ve Şikayetlerinizi Yazabilirsiniz</Text>
          </View>

          <View
            style={{
              width: 70,
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="arrow-forward-ios" size={32} color="#f2e600" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Communications.phonecall('+905321234567', true)}
          style={{
            height: 80,
            flexDirection: 'row',
            backgroundColor: '#0070d4',
            alignItems: 'center',
            padding: 10,
            margin: 10,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#ffffff',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              backgroundColor: '#1a7ed3',
              borderRadius: 40,
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="phone" size={32} color="#ffffff" />
          </View>
          <View style={{ flex: 1, margin: 6 }}>
            <Text style={{ color: '#ffffff', fontSize: 24 }}>+90 532 123 4567</Text>
          </View>

          <View
            style={{
              width: 70,
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="arrow-forward-ios" size={32} color="#f2e600" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Communications.email(['suleymanaslan.8006@gmail.com'], null, null, null, null)}
          style={{
            height: 80,
            flexDirection: 'row',
            backgroundColor: '#0070d4',
            alignItems: 'center',
            padding: 10,
            margin: 10,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#ffffff',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              backgroundColor: '#1a7ed3',
              borderRadius: 40,
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="alternate-email" size={32} color="#ffffff" />
          </View>
          <View style={{ flex: 1, margin: 10 }}>
            <Text style={{ color: '#ffffff', fontSize: 24 }}>Mail to</Text>
          </View>

          <View
            style={{
              width: 70,
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="arrow-forward-ios" size={32} color="#f2e600" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Communications.web('https://www.linkedin.com/in/suleyman-aslan/')}
          style={{
            height: 80,
            flexDirection: 'row',
            backgroundColor: '#0070d4',
            alignItems: 'center',
            padding: 10,
            margin: 10,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#ffffff',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              backgroundColor: '#1a7ed3',
              borderRadius: 40,
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IconMc name="web" size={32} color="#ffffff" />
          </View>
          <View style={{ flex: 1, margin: 10 }}>
            <Text style={{ color: '#ffffff', fontSize: 24 }}>Linkedin</Text>
          </View>

          <View
            style={{
              width: 70,
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="arrow-forward-ios" size={32} color="#f2e600" />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IletisimScreen;
