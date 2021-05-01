import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <View>
      <Text>Tabs here</Text>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
