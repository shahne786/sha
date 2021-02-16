import {
    SafeAreaView,
    Platform,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Alert,
    TouchableOpacity,
    TextInput,
    Image,
    ImageBackground,
    Linking,
    FlatList,
    Dimensions,
    AsyncStorage,
    PermissionsAndroid,
    NativeModules,
    BackHandler,




} from 'react-native';

import React, { Component, } from 'react';
//import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CalendarPicker from 'react-native-calendar-picker';

class ChooseDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
      }
    
      onDateChange(date) {
        this.setState({
          selectedStartDate: date,
        });
      }





    render() {


        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (

            <SafeAreaProvider style={{ backgroundColor: 'white' }}>
                <StatusBar
                    backgroundColor='orange'


                />

<View style={{ alignSelf:'center',width: '100%', height: 60, elevation: 2, backgroundColor: '#FF9445', justifyContent:'space-between' }}>

<View style={{ marginTop:15,width: '90%', alignSelf: 'center', flexDirection: 'row', alignItems: "center" ,justifyContent:'space-between'}} >


    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
        <Image style={{height: 16, width: 16, resizeMode: 'contain' }} source={require('./closebtn.png')} />
    </TouchableOpacity>

    <Text style={{ lineHeight:30,fontSize: 20, fontFamily: 'DM Sans', color: 'white', marginLeft: 20 }}>Choose Date</Text>
    <Image style={{ height: 30, width: 12, resizeMode: 'contain' }} />


</View>

</View>

<View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />

        {/* <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View> */}
      </View>


    
<View style={{position:'absolute',bottom:0,height:70,width:'100%',backgroundColor:'#FFF',elevation:5,marginTop:20}}>
   
   <View  style ={{flexDirection:'row',justifyContent:'space-between',width:'90%',alignSelf:'center',marginTop:15}}>
      
      
     
       <View style={{flexDirection:'column',marginTop:12}}>
   
       <TouchableOpacity  onPress={()=>this.props.navigation.navigate('ChooseDate')}>
           <Text style={{fontSize:14,lineHeight:18,fontWeight:'normal',fontFamily:'DM Sans'}}>Choose your date</Text>
           
           </TouchableOpacity>
   
       </View>
   
       
   <TouchableOpacity onPress={() => this.props.navigation.navigate('ChooseTime')}>
   
       <View style={{backgroundColor:'#FF9445',borderRadius:10,height:42,width:122,justifyContent:'center',alignSelf:'center'}}>
   <Text style={{alignSelf:'center',fontSize:14,lineHeight:18,fontWeight:'normal',fontFamily:'DM Sans',color:'#FFF'}}>check times</Text>
   
   </View>
   
   </TouchableOpacity>
   
   </View>
   
   
   </View>
              

            </SafeAreaProvider>

        );
    }
}

export default ChooseDate;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      marginTop: 30,
    },
  });