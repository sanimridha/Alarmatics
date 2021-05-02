import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Setalarm = ({navigation}) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          marginLeft: '2%',
          height: '10%',
          justifyContent: 'center',
        }}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
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
  return renderHeader();
};

export default Setalarm;

const styles = StyleSheet.create({});
