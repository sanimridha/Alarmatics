import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dots from 'react-native-vector-icons/Entypo';

const Home = ({navigation, props}) => {
  // const {date} = props.params;
  const [isSelected, setSelection] = useState(false);
  // console.log(date);
  const renderHeader = () => {
    return (
      <View
        style={{
          marginLeft: '2%',
          height: '10%',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 27, fontWeight: 'bold'}}>Upcomming alarms</Text>
      </View>
    );
  };
  const renderBody = () => {
    return (
      <>
        <View style={{height: '100%', width: '100%'}}>
          <View
            style={{
              width: '100%',
              height: '15%',
              backgroundColor: 'white',
              borderRadius: 5,
              borderColor: '#000',
              justifyContent: 'center',

              // _________SHADOW
              shadowColor: '#000',
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{}}>
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
                <View style={{marginLeft: 15}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: isSelected ? 'black' : '#868B98',
                      }}>
                      7:30
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        paddingLeft: 5,
                        top: 10,
                        color: isSelected ? 'black' : '#868B98',
                      }}>
                      AM
                    </Text>
                  </View>
                  <Text style={{color: isSelected ? 'black' : '#868B98'}}>
                    Daily
                  </Text>
                </View>
              </View>
              {/* ________options________ */}

              <View
                style={{
                  // justifyContent: 'center',

                  alignSelf: 'center',
                  flexDirection: 'row',
                }}>
                <View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Setalarm')}>
                    <Ionicons
                      name="alarm"
                      size={30}
                      style={{
                        color: isSelected ? '#1cd2d9' : '#868B98',
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{marginLeft: 10}}>
                  <TouchableOpacity activeOpacity={0.8}>
                    <Dots
                      name="dots-three-vertical"
                      size={30}
                      style={{
                        color: isSelected ? 'black' : '#868B98',
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </>
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
