import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Setalarm from '../Screens/Setalarm';
import AlarmLaunching from '../Screens/AlarmLaunching';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon name="access-alarm" size={24} color="black" />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Settings" component={Setalarm} />
      <Tab.Screen name="Launching" component={AlarmLaunching} />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
