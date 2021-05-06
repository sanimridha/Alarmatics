import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import Settings from '../components/Settings';
import DatePicker from 'react-native-date-picker';
import {createIconSetFromFontello} from 'react-native-vector-icons';

const Setalarm = ({navigation}) => {
  const [date, setDate] = useState(new Date());

  const [activeDays, setActiveDays] = useState([
    {
      id: 1,
      day: 'Sunday',
      text: 'S',
      active: false,
    },
    {
      id: 2,
      day: 'Monday',
      text: 'M',
      active: true,
    },
    {
      id: 3,
      day: 'Tuesday', //Tuesday, Wednesday, Thursday, Friday,
      text: 'T',
      active: true,
    },
    {
      id: 4,
      day: 'Wednesday',
      text: 'W',
      active: true,
    },
    {
      id: 5,
      day: 'Thursday',
      text: 'T',
      active: true,
    },
    {
      id: 6,
      day: 'Friday',
      text: 'F',
      active: true,
    },
    {
      id: 7,
      day: 'Saturday',
      text: 'S',
      active: false,
    },
  ]);

  const renderHeader = () => {
    return (
      <View
        style={{
          marginLeft: '2%',
          // height: 65,
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
              onPress={() => navigation.navigate('Launching', date)}
              style={{}}>
              <Feather name="eye" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const renderSetAlarm = () => {
    return (
      <View style={{}}>
        {/* section for setTime  */}
        <DatePicker
          style={{justifyContent: 'center', alignSelf: 'center'}}
          mode={'time'}
          androidVariant={'nativeAndroid'}
          date={date}
          onDateChange={setDate}
          is24hourSource={'device'}
        />
        {console.log(date)}
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
            {activeDays.map((item, k) => {
              console.log(item);
              return (
                <TouchableOpacity
                  key={k}
                  onPress={() => {
                    console.log(item.id);
                    // Sunday
                  }}
                  activeOpacity={0.8}
                  style={{
                    height: '100%',
                    width: '13%',
                    backgroundColor: item.active == 1 ? '#CD0023' : '#ABBAD9',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 8,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    {item.text}
                  </Text>
                </TouchableOpacity>
              );
            })}
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
      <View style={{paddingBottom: 20}}>
        <Settings />
      </View>
    );
  };
  const renderSaveButton = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: '#F44336',
            width: '90%',
            height: 60,
            borderRadius: 10,
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Home', date)}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              alignItems: 'center',
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <View style={{height: '10%'}}>{renderHeader()}</View>
      <ScrollView style={{height: '78%'}}>
        {renderSetAlarm()}
        {renderSettings()}
      </ScrollView>
      <View style={{height: '10%', justifyContent: 'center'}}>
        {renderSaveButton()}
      </View>
    </View>
  );
};

export default Setalarm;

const styles = StyleSheet.create({});
