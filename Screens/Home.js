import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const Home = () => {
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

  return (
    <>
      {renderHeader()}
      <ScrollView></ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
