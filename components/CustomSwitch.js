import React, {useState} from 'react';
import {View, Switch, StyleSheet, Vibration} from 'react-native';

const CustomSwitch = () => {
  const [isEnabled, setIsEnabled] = useState();

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    if (isEnabled == false) {
      Vibration.vibrate(1000);
    }
  };
  return (
    <View style={{flex: 1}}>
      <Switch
        trackColor={{false: '#767577', true: '#1cd2d9'}}
        thumbColor={isEnabled ? '#F44336' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({});
