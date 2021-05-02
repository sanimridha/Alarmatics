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
          backgroundColor: '#F2F2F2',
          elevation: 5,
          borderTopWidth: 0,
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
                style={{
                  color: focused ? '#F44336' : '#868B98',
                }}
              />
              <Text
                style={{
                  color: focused ? '#F44336' : '#868B98',
                  fontWeight: focused ? 'bold' : 'normal',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setalarm"
        component={Setalarm}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name="access-alarm"
                size={30}
                style={{color: focused ? '#F44336' : '#868B98'}}
              />
              <Text
                style={{
                  fontWeight: focused ? 'bold' : 'normal',
                  color: focused ? '#F44336' : '#868B98',
                }}>
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
                style={{color: focused ? '#F44336' : '#868B98'}}
              />
              <Text
                style={{
                  fontWeight: focused ? 'bold' : 'normal',
                  color: focused ? '#F44336' : '#868B98',
                }}>
                View
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
