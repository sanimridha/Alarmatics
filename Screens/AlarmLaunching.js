import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import NotificationSounds, {
  playSampleSound,
  stopSampleSound,
} from 'react-native-notification-sounds';

const AlarmLaunching = () => {
  useEffect(() => {
    /*
get the list of System notification sounds. This function returns an array the array contains Title, Url, SoundID
You can pass the following values to the getNotifications:
1. notification: get the list of notification sounds
2. ringtone: get the list of ringtones
3. alarm: get the list of alarm sounds (android only)
*/
    NotificationSounds.getNotifications('alarm').then(soundsList => {
      // console.warn('SOUNDS', JSON.stringify(soundsList));
      /*
	Play the notification sound.
	pass the complete sound object.
	This function can be used for playing the sample sound
	*/
      playSampleSound(soundsList[10]);
      // if you want to stop any playing sound just call:
    });
  }, []);

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
          onPress={() => stopSampleSound()}
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
