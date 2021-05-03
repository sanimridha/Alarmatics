import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AndroidOpenSettings from 'react-native-android-open-settings';

const Settings = () => {
  return (
    <View style={{}}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          height: 70,
          width: '95%',
          backgroundColor: 'white',
          borderRadius: 10,
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: 10,
          // _________SHADOW
          shadowColor: '#000',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 3,
        }}
        onPress={() => {
          AndroidOpenSettings.generalSettings();
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingRight: 15,
            alignItems: 'center',
          }}>
          <View style={{paddingLeft: 20, flexDirection: 'row'}}>
            <MaterialCommunityIcons
              name="bell-ring-outline"
              size={30}
              color="#868B98"
              style={{alignSelf: 'center'}}
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#868B98',
                  paddingLeft: 10,
                }}>
                Alarm Ringtone
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  // fontWeight: 'bold',
                  color: '#868B98',
                  paddingLeft: 10,
                }}>
                Go to settings
              </Text>
            </View>
          </View>
          {/* rightArrow */}
          <View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color="#868B98"
              // style={{alignSelf: 'center'}}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          height: 70,
          width: '95%',
          backgroundColor: 'white',
          borderRadius: 10,
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: 10,
          // _________SHADOW
          shadowColor: '#000',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 3,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingRight: 15,
            alignItems: 'center',
          }}>
          <View style={{paddingLeft: 20, flexDirection: 'row'}}>
            <Feather
              name="settings"
              size={30}
              color="#868B98"
              style={{alignSelf: 'center'}}
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#868B98',
                  paddingLeft: 10,
                }}>
                Edit system time
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  // fontWeight: 'bold',
                  color: '#868B98',
                  paddingLeft: 10,
                }}>
                Go to settings
              </Text>
            </View>
          </View>
          {/* rightArrow */}
          <View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color="#868B98"
              // style={{alignSelf: 'center'}}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          height: 70,
          width: '95%',
          backgroundColor: 'white',
          borderRadius: 10,
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: 10,
          // _________SHADOW
          shadowColor: '#000',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 3,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingRight: 15,
            alignItems: 'center',
          }}>
          <View style={{paddingLeft: 20, flexDirection: 'row'}}>
            <Ionicons
              name="ios-volume-high-outline"
              size={30}
              color="#868B98"
              style={{alignSelf: 'center'}}
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#868B98',
                  paddingLeft: 10,
                }}>
                Alarm Ringtone
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  // fontWeight: 'bold',
                  color: '#868B98',
                  paddingLeft: 10,
                }}>
                Go to settings
              </Text>
            </View>
          </View>
          {/* rightArrow */}
          <View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color="#868B98"
              // style={{alignSelf: 'center'}}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
