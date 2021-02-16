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

class ExplorePujas extends React.Component {
    constructor(props) {
        super(props);
          
        this.state={
            

              FlatListItemPuja: [

                {"key": "#7",
            
                 "addd": require('./sadhuimg.png'),
                 "add33":('Kanya Bhojan'),
                 "add44":('₹1000'),
                 "add55":('Haridwar, Kolkata, Online'),
                 "add66":('990'),
                 "add77":('Available online'),
                
               
                                           
                },
            
                {"key": "#8",
            
                "addd": require('./deepimg.png'),
                "add33":('Kanya Bhojan'),
                "add44":('₹1000'),
                "add55":('Haridwar, Kolkata, Online'),
                "add66":('990'),
                "add77":('Available online'),
            
               
            
                },

                {"key": "#9",
            
                "addd": require('./laksmiji.png'),
                "add33":('Kanya Bhojan'), 
                "add77":('Available online'),          
            
                },

                {"key": "#10",
            
                "addd": require('./ii.png'),
                "add33":('Kanya Bhojan'),
                "add44":('₹1000'),
                "add55":('Haridwar, Kolkata, Online'),
                "add66":('990'),
                "add77":('Available online'),
              
            
               
            
                },

                {"key": "#11",
            
                "addd": require('./deepimg.png'),
               
                "add33":('Kanya Bhojan'),
                "add77":('Available online'),
                
            
               
            
                },

                {"key": "#12",
            
                "addd": require('./sadhuimg.png'),
                "add33":('Kanya Bhojan'),
                "add44":('₹1000'),
                "add55":('Haridwar, Kolkata, Online'),
                "add66":('990'),
                "add77":('Available online'),
               
               
                },                        
                        
              ],

            }}



            renderItemPuja=({item, index}) => {
                // alert(JSON.stringify(item))
            return(
        
       
        
          <View style={{flexDirection:'column',marginTop:20,width:'90%',alignSelf:'center'}}>
            <ImageBackground imageStyle={{borderRadius:5}}  style={{height:180,width:'100%'}} source={item.addd}>
                <View style={{marginTop:16,marginLeft:14,height:28,width:146,backgroundColor:'#FFF',borderRadius:7,justifyContent:'center'}}>
                <Text style={{color:'#FF9445',fontSize:14,lineHeight:13,fontStyle:'normal',alignSelf:'center'}}>{item.add77}</Text>

                </View>
            </ImageBackground>

            <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center',alignItems:'center'}}>
            <Text style={{marginTop:14,color:'#505050',fontSize:18,lineHeight:21,fontStyle:'normal'}}>{item.add33}</Text>
            <Text style={{marginTop:14,color:'#505050',fontSize:13,lineHeight:14,fontStyle:'normal',textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{item.add44}</Text>
            </View>

            <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center',alignItems:'center'}}>
            <Text style={{color:'#949494',fontSize:16,lineHeight:24,fontStyle:'normal'}}>{item.add55}</Text>
            <Text style={{fontSize:16,lineHeight:24,color:'#FF9445',fontStyle:'normal'}}>{item.add66}</Text>
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

<View style={{ width: '100%', height: 60, elevation: 2, backgroundColor: 'white', justifyContent: 'center' }}>

<View style={{justifyContent:'space-between',width:'90%',height:60,flexDirection:'row',alignSelf:'center'}}>




<View style={{ width: '80%', alignSelf: 'center', flexDirection: 'row', alignItems: "center" }} >


    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
        <Image style={{ height: 30, width: 12, resizeMode: 'contain' }} source={require('./backBlack.png')} />
    </TouchableOpacity>

    <Text style={{ lineHeight:30,fontSize: 20, fontFamily: 'DM Sans', color: 'black', marginLeft: 20 }}>Pujas</Text>

</View>

<View style={{ width: '80%', alignSelf: 'center', flexDirection: 'row', alignItems: "center" }} >

    <TouchableOpacity >
        <Image style={{ height: 17, width: 17, resizeMode: 'contain' ,marginRight:23}} source={require('./searchgrey.png')} />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => this.props.navigation.navigate('PujaFilter')}>
        <Image style={{ height: 19, width: 20, resizeMode: 'contain' }} source={require('./menu.png')} />
    </TouchableOpacity>

   
</View>
</View>
</View>

<View style={{width:'100%',justifyContent:'center',alignSelf:'center'}}>
                

                <FlatList  style={{width:'100%'}}
                   data={this.state.FlatListItemPuja}
                   horizontal={false}
                   showsVerticalScrollIndicator={false}
                   keyExtractor={this._keyExtractor}
                   renderItem={this.renderItemPuja}
                />
                
                </View>
              

            </SafeAreaProvider>

        );
    }
}

export default ExplorePujas;