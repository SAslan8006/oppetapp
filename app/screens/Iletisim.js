import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import IconMc from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {phonecall, email, web} from 'react-native-communications';


const IletisimScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', }}>
           <ScrollView style={{flex: 1, backgroundColor: '#1a7ed3'}}>
           <TouchableOpacity
           onPress={() => navigation.navigate('IletisimFormuScreen')}
           style={{
            marginTop: 70,
            height: 80,
            flexDirection: 'row',
            backgroundColor: '#0070d4',
            alignItems: 'center',
            paddingHorizontal: 10,
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
                    <View style={{flex: 1, margin: 10}}>
                        <Text style={{color: '#ffffff', fontSize: 18}}>
                            Öneri ve Şikayetlerinizi yazabilirsiniz..
                        </Text>
                    </View>
                    <View
                    style={{
                        width: 70,
                        height: 70,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Icon name="arrow-forward-ios" size={32} color= '#f2e600'/>
                    </View>
           </TouchableOpacity>

           <TouchableOpacity
                onPress={() => phonecall('+905321645027', true)}
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
                    <View style={{flex: 1, margin: 10}}>
                        <Text style={{color: '#ffffff', fontSize: 24}}>
                            +90 532 164 5027
                        </Text>
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
                onPress={() => email(['inf@codeks.org'], null, null, null, null)}
                style={{
                    height: 80,
                    flexDirection: 'row',
                    backgroundColor: '#0070d4',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    borderRadius: 30,
                    borderWidth: 1,
                    margin: 10,
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
                    <View style={{flex: 1, margin: 10}}>
                        <Text style={{color: '#ffffff', fontSize: 24}}>
                            inf@codeks.org
                        </Text>
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
                onPress={() => web('http://www.codeks.org')}
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
                    <View style={{flex: 1, margin: 10}}>
                        <Text style={{color: '#ffffff', fontSize: 24}}>www.codeks.org</Text>
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

