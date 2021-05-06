import React, {useState} from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
  Dimensions,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AndroidOpenSettings from 'react-native-android-open-settings';
import VolumeControl, {VolumeControlEvents} from 'react-native-volume-control';
import Slider from '@react-native-community/slider';

const {width, height} = Dimensions.get('window');
// const Settings = () => {
class Settings extends React.Component {
  // _______________________________________________________________
  state = {
    volume: 0,
  };

  async componentDidMount() {
    this.setState({
      volume: await VolumeControl.getVolume(),
    });

    // Add and store event listener
    this.volEvent = VolumeControlEvents.addListener(
      'VolumeChanged',
      this.volumeEvent,
    );
  }

  // Updates Slider UI when hardware buttons change volume
  volumeEvent = event => {
    this.setState({volume: event.volume});
  };

  // Updates device volume
  sliderChange(value) {
    VolumeControl.change(value);
  }

  componentWillUnmount() {
    // remove event listener
    this.volEvent.remove();
  }
  // ______________________________________________
  render() {
    this.state = {
      vibrationIsEnabled: false,
    };

    const toggleSwitch = value => {
      this.setState(previousState => !previousState);
      console.log('Switch 1 is: ' + value);
    };
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
          }}
          onPress={() => {
            AndroidOpenSettings.dateSettings();
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
              <View style={{flexDirection: 'row'}}>
                <Slider
                  style={{width: width / 2, height: 40}}
                  value={this.state.volume}
                  onValueChange={this.sliderChange}
                  minimumTrackTintColor="#1cd2d9"
                  maximumTrackTintColor="#000000"
                />
                <View
                  style={{
                    height: '90%',
                    width: 2,
                    backgroundColor: '#868B98',
                  }}></View>
              </View>
            </View>
            {/* rightArrow */}
            <View>
              <MaterialCommunityIcons name="vibrate" size={25} style={{}} />
            </View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={this.vibrationIsEnabled ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={this.toggleSwitch}
              value={this.vibrationIsEnabled}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Settings;

const styles = StyleSheet.create({});
