import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { NavigationContainer, NavigationHelpersContext, NavigationRouteContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import IconMa from 'react-native-vector-icons/MaterialIcons';
import IconFa from 'react-native-vector-icons/FontAwesome5';
import MaC from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/Home';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



const Routes = () => {
  return (
    <Text>Opet App  Routes</Text>
  )
}

export default Routes;