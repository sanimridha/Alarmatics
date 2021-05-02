import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const AlarmLaunching = () => {
  return (
    <View style={{backgroundColor: '#F2F2F2'}}>
      <View
        style={{
          alignItems: 'center',
          height: '90%',
        }}>
        <Text style={{fontSize: 70, top: 40, fontWeight: 'bold'}}>12:48</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: '#F44336',
            width: '70%',
            height: 60,
            borderRadius: 10,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              alignItems: 'center',
            }}>
            Dismiss
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AlarmLaunching;

const styles = StyleSheet.create({});
