import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import Settings from '../components/Settings';
import DatePicker from 'react-native-date-picker';

const Setalarm = ({navigation}) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          marginLeft: '2%',
          height: '20%',
          justifyContent: 'center',
          marginBottom: 10,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            // top: 20,
          }}>
          <Text style={{fontSize: 27, fontWeight: 'bold'}}>Set an alarm</Text>
          <View style={{alignSelf: 'center', marginRight: '2%'}}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Launching')}
              style={{}}>
              <Feather name="eye" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const renderSetAlarm = () => {
    const [date, setDate] = useState(new Date());
    return (
      <View style={{}}>
        {/* section for setTime  */}
        <DatePicker
          style={{justifyContent: 'center', alignSelf: 'center'}}
          mode={'time'}
          androidVariant={'nativeAndroid'}
          date={date}
          onDateChange={setDate}
        />
        {/* section for setDate  */}
        <View
          style={{
            height: 50,
            marginLeft: '10%',
            marginRight: '10%',
            justifyContent: 'center',
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#ABBAD9',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                S
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#CD0023',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#CD0023',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                T
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#CD0023',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                W
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#CD0023',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                T
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#CD0023',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                F
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#ABBAD9',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                S
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* next ring in time  */}
        <View
          style={{
            height: 25,
            backgroundColor: '#E1E9F4',
            width: '90%',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            borderRadius: 8,
            marginTop: 5,
          }}>
          <Text style={{color: '#868B98'}}>
            Ring in 10 hours and 52 minutes
          </Text>
        </View>
        {/* underline */}
        <View
          style={{
            height: 2,
            backgroundColor: '#E1E9F4',
            width: '90%',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 10,
          }}></View>
      </View>
    );
  };

  const renderSettings = () => {
    return (
      <View>
        <Settings />
      </View>
    );
  };

  return (
    <View>
      {renderHeader()}
      {renderSetAlarm()}
      {/* {renderSettings()} */}
    </View>
  );
};

export default Setalarm;

const styles = StyleSheet.create({});
