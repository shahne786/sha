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
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';

class GuestDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        address:'',
        permanentaddress:'',
      


        }}



    render() {
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

    <Text style={{ lineHeight:30,fontSize: 20, fontFamily: 'DM Sans', color: 'white' }}>Guest Details</Text>
    <Image style={{ height: 30, width: 12, resizeMode: 'contain' }} />


</View>

</View>   




<View style={{marginTop:30,flexDirection:'row',width:'100%',justifyContent:'center',alignSelf:'center'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:18,lineHeight:21,fontFamily:'DM Sans',color:'#505050'}}>Guests</Text>

                <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center'}}>
            <Image style={{height:30,width:30}} source={require('./minus.png')}/>

            <Image style={{marginLeft:10,height:24,width:20}} source={require('./round.png')}/>


            <Image style={{marginLeft:10,height:30,width:30}} source={require('./plus.png')}/>


                </View>

                
                </View>
                </View>


                <KeyboardAwareScrollView>

                <View style={{width:'90%',justifyContent:'center',alignSelf:'center'}}>


<View style={{marginTop:26,width:'100%',flexDirection:'column',backgroundColor:'white',justifyContent:'center'}}>
                       <View style={{flexDirection:'row',backgroundColor:'white'}}>
                      
                       <Text style={{fontFamily: 'DM Sans',marginLeft:5,fontSize:12,height:15,color:'#161F3D',backgroundColor:'white'}}> NAME</Text>

                       

                    </View>
                  

                   </View>
                   <View style={{width:'100%',height:40,backgroundColor:'white'}}>
                   <TextInput
                       style={{ fontFamily: 'DM Sans',fontSize:15,color:'#161F3D',alignSelf:'center',borderColor:'#1D1D26',width:'100%',height: 40, borderBottomWidth: 1 }}
                   
                       placeholder="Enter your Name"
                       onChangeText={(text) => this.setState({name:text})}
                       value={this.state.name}


                      />
                   </View>
                   </View>




                   <View style={{width:'90%',justifyContent:'center',alignSelf:'center'}}>


<View style={{marginTop:26,width:'100%',flexDirection:'column',backgroundColor:'white',justifyContent:'center'}}>
                       <View style={{flexDirection:'row',backgroundColor:'white'}}>
                      
                       <Text style={{fontFamily: 'DM Sans',marginLeft:5,fontSize:12,height:15,color:'#161F3D',backgroundColor:'white'}}>ADDRESS</Text>

                       

                    </View>
                  

                   </View>
                   <View style={{width:'100%',height:40,backgroundColor:'white'}}>
                   <TextInput
                       style={{ fontFamily: 'DM Sans',fontSize:15,color:'#161F3D',alignSelf:'center',borderColor:'#1D1D26',width:'100%',height: 40, borderBottomWidth: 1 }}
                   
                       placeholder="Enter your address"
                       onChangeText={(text) => this.setState({permanentaddress:text})}
                       value={this.state.permanentaddress}


                      />
                   </View>
                   </View>





                   
            <View style={{width:'90%',justifyContent:'center',alignSelf:'center'}}>


<View style={{marginTop:26,width:'100%',flexDirection:'column',backgroundColor:'white',justifyContent:'center'}}>
                       <View style={{flexDirection:'row',backgroundColor:'white'}}>
                      
                       <Text style={{fontFamily: 'DM Sans',marginLeft:5,fontSize:12,height:15,color:'#161F3D',backgroundColor:'white'}}>PERMANENT ADDRESS</Text>

                       

                    </View>
                  

                   </View>
                   <View style={{width:'100%',height:40,backgroundColor:'white'}}>
                   <TextInput
                       style={{ fontFamily: 'DM Sans',fontSize:15,color:'#161F3D',alignSelf:'center',borderColor:'#1D1D26',width:'100%',height: 40, borderBottomWidth: 1 }}
                   
                       placeholder="Enter your permanent address"
                       onChangeText={(text) => this.setState({name:text})}
                       value={this.state.name}


                      />
                   </View>
                   </View>





                </KeyboardAwareScrollView>

                
                <View style={{height:70,position:'absolute',bottom:0,width:Dimensions.get('window').width,elevation:2,borderColor:'#D1D1D1',marginTop:35}}>
             <View  style ={{marginTop:20,flexDirection:'row',justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
    <View style={{flexDirection:'column',marginTop:12}}>
        <Text style={{fontSize:14,lineHeight:18,fontWeight:'normal',fontFamily:'DM Sans'}}>Cancel</Text>
        
        <View style={{backgroundColor:'#E9E9E9',borderWidth:1,width:45,marginTop:2}}></View>

    </View>

    
<TouchableOpacity onPress={()=>this.props.navigation.navigate('PaymentMethodScreen')}>

    <View style={{backgroundColor:'#FF9445',borderRadius:10,height:42,width:75,justifyContent:'center',alignSelf:'center'}}>
<Text style={{alignSelf:'center',fontSize:14,lineHeight:18,fontWeight:'normal',fontFamily:'DM Sans',color:'#FFF'}}>Apply</Text>

</View>

</TouchableOpacity>

</View> 


            </View>
    

            </SafeAreaProvider>

        );
    }
}

export default GuestDetails;