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

class ChooseTime extends React.Component {

    constructor(props) {
        super(props);
          
        this.state={
            isChecked :true,



            FlatListItemCheckBox: [

                {"key": "#7",
            
                
                 "slote1":('6.00 AM'),
                 "slote2":('6.00 AM'),
                 "slote3":('6.00 AM'),
                                           
                },
            
                {"key": "#8",
            
                "slote1":('6.00 AM'),
                "slote2":('6.00 AM'),
                "slote3":('6.00 AM'),
               
                },

                {"key": "#9",

               
                 "slote1":('6.00 AM'),
                 "slote2":('6.00 AM'),
                 "slote3":('6.00 AM'),      
            
                },

            
              ],



              FlatListItemTimeSloteEvening: [

                {"key": "#11",
            
                
                 "slote1":('6.00 AM'),
                 "slote2":('6.00 AM'),
                 "slote3":('6.00 AM'),
                                           
                },
            
                {"key": "#12",
            
                "slote1":('6.00 AM'),
                "slote2":('6.00 AM'),
                "slote3":('6.00 AM'),
               
                },

                {"key": "#13",

               
                 "slote1":('6.00 AM'),
                 "slote2":('6.00 AM'),
                 "slote3":('6.00 AM'),      
            
                },

                {"key": "#14",

               
                "slote1":('6.00 AM'),
                "slote2":('6.00 AM'),
                "slote3":('6.00 AM'),      
           
               },


            
              ],




            }}



            renderItemTimeSlote=({item, index}) => {
                // alert(JSON.stringify(item))
            return(
        
        
                <View style={{flexDirection:'column',width:'100%'}}>




                <View style={{flexDirection:'row',width:'90%',justifyContent:'center',alignSelf:'center',marginTop:16,flex:1}}>
                
                <View style={{flex:1,borderRadius:3,backgroundColor:'#FBFBFB',justifyContent:'center',height:32}}>
                <Text style={{fontSize:12,fontFamily:'DN Sans',fontWeight:'normal',textAlign:'justify',lineHeight:14,color:'#000',alignSelf:'center'}}>{item.slote1}</Text>
                </View>
                
                <View style={{flex:1,marginLeft:20,borderRadius:3,backgroundColor:'#FBFBFB',justifyContent:'center',height:32 }}>
                <Text style={{fontSize:12,fontFamily:'DN Sans',fontWeight:'normal',textAlign:'justify',lineHeight:14,color:'#000',alignSelf:'center'}}>{item.slote2}</Text>
                </View>
                
                <View style={{flex:1,borderRadius:3,marginLeft:20,backgroundColor:'#FBFBFB',justifyContent:'center',height:32}}>
                <Text style={{fontSize:12,fontFamily:'DN Sans',fontWeight:'normal',textAlign:'justify',lineHeight:14,color:'#000',alignSelf:'center'}}>{item.slote3}</Text>
                </View>
                
                </View>
                </View>
        
        
        
        
        )
        }
    
        _keyExtractor=(item, index)=>item.key;
    
        
    

        renderItemTimeSloteEvening=({item, index}) => {
            // alert(JSON.stringify(item))
        return(
    
    
            <View style={{flexDirection:'column',width:'100%'}}>




            <View style={{flexDirection:'row',width:'90%',justifyContent:'center',alignSelf:'center',marginTop:16,flex:1}}>
            
            <View style={{flex:1,borderRadius:3,backgroundColor:'#FBFBFB',justifyContent:'center',height:32}}>
            <Text style={{fontSize:12,fontFamily:'DN Sans',fontWeight:'normal',textAlign:'justify',lineHeight:14,color:'#000',alignSelf:'center'}}>{item.slote1}</Text>
            </View>
            
            <View style={{flex:1,marginLeft:20,borderRadius:3,backgroundColor:'#FBFBFB',justifyContent:'center',height:32 }}>
            <Text style={{fontSize:12,fontFamily:'DN Sans',fontWeight:'normal',textAlign:'justify',lineHeight:14,color:'#000',alignSelf:'center'}}>{item.slote2}</Text>
            </View>
            
            <View style={{flex:1,borderRadius:3,marginLeft:20,backgroundColor:'#FBFBFB',justifyContent:'center',height:32}}>
            <Text style={{fontSize:12,fontFamily:'DN Sans',fontWeight:'normal',textAlign:'justify',lineHeight:14,color:'#000',alignSelf:'center'}}>{item.slote3}</Text>
            </View>
            
            </View>
            </View>
    
    
    
    
    )
    }

    _keyExtractor=(item, index)=>item.key;

    





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

    <Text style={{ lineHeight:30,fontSize: 20, fontFamily: 'DM Sans', color: 'white' }}>Choose Time</Text>
    <Image style={{ height: 30, width: 12, resizeMode: 'contain' }} />


</View>

</View>

<View style={{flexDirection:'column',marginTop:25,marginLeft:16}}>
        <Text style={{fontSize:14,lineHeight:18,color:'#949494',fontWeight:'normal',fontFamily:'DM Sans'}}>Clear All</Text>
        
        <View style={{backgroundColor:'#949494',borderWidth:1,width:55,marginTop:2}}></View>

    </View>


    
<View style={{flexDirection:'column',marginTop:20,width:'100%',justifyContent:'center',alignSelf:'center'}}>


<View style={{width:'90%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center',alignItems:'center'}}>

<Text style={{fontSize:14,lineHeight:18,color:'#949494',fontWeight:'normal',fontFamily:'DM Sans'}}>I am okay with any time slot</Text>

<TouchableOpacity>
<ImageBackground style={{height:24,width:24}} source={require('./ucCheckedColor.png')}>

</ImageBackground>
</TouchableOpacity>
</View>


<Text style={{fontWeight:'bold',fontSize:20,lineHeight:23,fontFamily:'DM Sans',color:'#505050',marginLeft:16,marginTop:20}}>Locations</Text>
 
 
 </View>





<View style={{width:'100%',justifyContent:'center',alignSelf:'center'}}>
                

                <FlatList  style={{width:'100%'}}
                   data={this.state.FlatListItemCheckBox}
                   horizontal={false}
                   showsVerticalScrollIndicator={false}
                   keyExtractor={this._keyExtractor}
                   renderItem={this.renderItemTimeSlote}
                />
                
                </View>

                <Text style={{fontWeight:'bold',fontSize:20,lineHeight:23,fontFamily:'DM Sans',color:'#505050',marginLeft:16,marginTop:20}}>Evening</Text>
 
                <View style={{width:'100%',justifyContent:'center',alignSelf:'center'}}>
                

                <FlatList  style={{width:'100%'}}
                   data={this.state.FlatListItemTimeSloteEvening}
                   horizontal={false}
                   showsVerticalScrollIndicator={false}
                   keyExtractor={this._keyExtractor}
                   renderItem={this.renderItemTimeSloteEvening}
                />
                
                </View>




                <View style={{position:'absolute',bottom:0,height:70,width:'100%',backgroundColor:'#FFF',elevation:5,marginTop:20}}>
   
   <View  style ={{flexDirection:'row',justifyContent:'space-between',width:'90%',alignSelf:'center',marginTop:15}}>
      
     
       <View style={{flexDirection:'column',marginTop:12}}>
   
       <TouchableOpacity  onPress={()=>this.props.navigation.navigate('ChooseDate')}>
           <Text style={{fontSize:14,lineHeight:18,fontWeight:'normal',fontFamily:'DM Sans'}}>Choose timeslot</Text>
           
           </TouchableOpacity>
   
       </View>
   
       
   <TouchableOpacity onPress={() => this.props.navigation.navigate('PujaBooking')}>
   
       <View style={{backgroundColor:'#FF9445',borderRadius:10,height:42,width:122,justifyContent:'center',alignSelf:'center'}}>
   <Text style={{alignSelf:'center',fontSize:14,lineHeight:18,fontWeight:'normal',fontFamily:'DM Sans',color:'#FFF'}}>Book now</Text>
   
   </View>
   
   </TouchableOpacity>
   
   </View>
   
   


   </View>


  

            </SafeAreaProvider>

        );
    }
}

export default ChooseTime;