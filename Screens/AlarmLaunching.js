import moment from 'moment';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import NotificationSounds, {
  playSampleSound,
  stopSampleSound,
} from 'react-native-notification-sounds';
// import ReactNativeAN from 'react-native-alarm-notification';
import AlarmClock from 'react-native-alarm-clock';

// ------------------Alarm datas---------------
// const fireDate = ReactNativeAN.parseDate(new Date(Date.now() + 1000)); // set the fire date for 1 second from now
// // or;
// // const fireDate = '05-05-2021 02:43:00'; // set exact date time | Format: dd-MM-yyyy HH:mm:ss

// const alarmNotifData = {
//   title: 'My Notification Title',
//   message: 'My Notification Message',
//   channel: 'my_channel_id',
//   small_icon: 'ic_launcher',

//   // You can add any additional data that is important for the notification
//   // It will be added to the PendingIntent along with the rest of the bundle.
//   // e.g.
//   data: {foo: 'bar'},
// };
// ---------------------------------------------------
const AlarmLaunching = ({route, navigation}) => {
  // const {date} = route.params;
  const [currentTime, setCurrentTime] = useState();

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
      playSampleSound(soundsList[11]);
      // console.log('Alarming!');
      // if you want to stop any playing sound just call:
    });
    // var time = moment().format('hh:mm:ss');
    // setCurrentTime(time);
    // console.log(time);
    // return () => clearInterval(secTimer);
  }, []);

  // -------------Showing current time---------------------
  useEffect(() => {
    setInterval(() => {
      var time = moment().format('hh:mm:ss');
      setCurrentTime(time);
    }, 1000);
  }, 1000);
  // useEffect(() => {
  //   let date = new Date();
  //   date.setDate(date.getDate());
  //   date.setHours(16, 14);

  //   AlarmClock.createAlarm(date.toISOString(), 'My Custom Alarm');
  //   // async () => {
  //   //   //Schedule Future Alarm
  //   //   const alarm = await ReactNativeAN.scheduleAlarm({
  //   //     ...alarmNotifData,
  //   //     fire_date: fireDate,
  //   //   });
  //   //   console.log(alarm); // { id: 1 }
  //   //   //Send Local Notification Now
  //   //   ReactNativeAN.sendNotification(alarmNotifData);
  //   //   //Get All Scheduled Alarms
  //   //       const alarms = await ReactNativeAN.getScheduledAlarms();
  //   // }
  // }, []);
  return (
    <View style={{backgroundColor: '#F2F2F2'}}>
      <View
        style={{
          alignItems: 'center',
          height: '90%',
        }}>
        <Text style={{fontSize: 70, top: 40, fontWeight: 'bold'}}>
          {currentTime}
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            stopSampleSound();
            navigation.navigate('Setalarm');
          }}
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
