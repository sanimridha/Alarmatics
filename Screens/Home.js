import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CheckBox from 'react-native-check-box';

const Home = () => {
  const [isSelected, setSelection] = useState(false);

  const renderHeader = () => {
    return (
      <View
        style={{
          marginLeft: '2%',
          height: '10%',
          // backgroundColor: 'red',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 27, fontWeight: 'bold'}}>Upcomming alarms</Text>
      </View>
    );
  };
  const renderBody = () => {
    return (
      <View style={{height: '100%', width: '100%'}}>
        <View
          style={{
            width: '100%',
            height: '15%',
            backgroundColor: 'white',
            // shadowOffset: {
            //   height: 5,
            //   width: 3,
            // },
            shadowRadius: 5,
            shadowOffset: 5,
            shadowColor: 'black',
          }}>
          <View style={{width: '10%'}}>
            <CheckBox
              style={{padding: 10}}
              isChecked={isSelected}
              checkBoxColor={'#1cd2d9'}
              onClick={() => {
                if (isSelected == true) {
                  setSelection(false);
                }
                if (isSelected == false) {
                  setSelection(true);
                }
              }}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      {renderHeader()}
      {renderBody()}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
