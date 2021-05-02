import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Setalarm from '../Screens/Setalarm';
import AlarmLaunching from '../Screens/AlarmLaunching';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Plus from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#E7915B',
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name="home"
                size={30}
                style={{color: focused ? 'white' : '#CFD6DE'}}
              />
              <Text style={{color: focused ? 'white' : '#CFD6DE'}}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setalarm}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name="access-alarm"
                size={30}
                style={{color: focused ? 'white' : '#CFD6DE'}}
              />
              <Text style={{color: focused ? 'white' : '#CFD6DE'}}>
                Set Alarm
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Launching"
        component={AlarmLaunching}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="alarm-light-outline"
                size={30}
                style={{color: focused ? 'white' : '#CFD6DE'}}
              />
              <Text style={{color: focused ? 'white' : '#CFD6DE'}}>View</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
