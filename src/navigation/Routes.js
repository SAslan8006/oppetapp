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

const logo = { uri: 'https://seeklogo.com/images/O/Opet-logo-B963B9C1FC-seeklogo.com.png' };

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
          style={{
            width: 25,
            height: 25,
            marginRight: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '     Home',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
            >
              <Image
                style={{ width: 70, height: 24, marginLeft: 10 }}
                source={logo}
              />
            </TouchableOpacity>),
          headerRight: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          headerStyle: {
            backgroundColor: '#0271cd', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },

        }}

      />
    </Stack.Navigator>
  )
}

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#0271cd',
      }}
      screenOptions={{
        activeTintColor: '#ff0',
        inactiveTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#0271cd',
          borderBottomColor: '#ff0',
        },
        itemStyle: { marginVertical: 5 },
        labelStyle: {
          fontSize: 18,
        },
      }}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreenStack} 
      options={{  drawerLabel: 'Ana Sayfa',  drawerIcon: ({ focused }) => (
          <IconMa name='home' size={24} color='#fff' />  ), }}   />
    </Drawer.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Routes;