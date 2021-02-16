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

import { Dropdown } from 'react-native-material-dropdown-v2-fixed';

class PujaDetails extends React.Component {



    constructor(props) {
        super(props);
          
        this.state={


            
        data : [{
            value: 'French',
          }, 
          {
            value: 'Hindi',
          }, 
          {
            value: 'Japanies',
          },

          
          {
            value: 'English',
            
          }],

            FlatListItemsSale: [

                {"key": "#1",
            
                 "pujaProfile": require('./facebook.png'),
                 "changePuja":('Online pujas changed by life in covid'),
                 "name":('Shah Alam'),
                 "date":('10 DEC'),
                                           
                },
            
                {"key": "#2",
            
                "pujaProfile": require('./facebook.png'),
                "changePuja":('Online pujas changed by life in covid'),
                "name":('Shah Alam'),
                "date":('10 DEC'),
               
            
                },

                {"key": "#3",
            
                "pujaProfile": require('./facebook.png'),
                 "changePuja":('Online pujas changed by life in covid'),
                 "name":('Shah Alam'),
                 "date":('10 DEC'),
                },

                {"key": "#4",
            
                "pujaProfile": require('./facebook.png'),
                "changePuja":('Online pujas changed by life in covid'),
                "name":('Shah Alam'),
                "date":('10 DEC'),
               
            
                },

                {"key": "#5",
            
                "pujaProfile": require('./facebook.png'),
                "changePuja":('Online pujas changed by life in covid'),
                "name":('Shah Alam'),
                "date":('10 DEC'),
               
            
                },

                {"key": "#6",
                "pujaProfile": require('./facebook.png'),
                "changePuja":('Online pujas changed by life in covid'),
                "name":('Shah Alam'),
                "date":('10 DEC'),
               
                },
            
                               
                        
              ],
        
            }}



            renderItemSale=({item, index}) => {
                // alert(JSON.stringify(item))
            return(
        
       
        
         
         <View style={{marginLeft:16,marginRight:4,borderRadius:30,height:180,width:280,borderWidth:1,borderColor:'#D1D1D1'}}>
         <View style={{width:'90%',flexDirection:'column',justifyContent:'center',alignSelf:'center'}}>
         <Text style={{marginLeft:12,marginTop:30,textAlign:'justify',color:'#505050',fontSize:16,lineHeight:24,fontWeight:'normal'}}>{item.changePuja}</Text>
           
           
            <View style={{width:'76%',marginTop:25,flexDirection:'row',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                <Image style={{height:48,width:48}} source={require('./facebook.png')}/>


                <View style={{width:'90%',flexDirection:'column',marginLeft:16}}>

<Text style={{fontFamily:'DM Sans',fontSize:14,fontStyle:'normal',lineHeight:18,color:'#000',fontWeight:'bold'}}>{item.name}</Text>
<Text style={{fontFamily:'DM Sans',marginTop:4,fontSize:14,lineHeight:18,color:'#505050'}}>{item.date}</Text>


</View>

            </View>

          

         </View >

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
<ScrollView style={{marginBottom:20}}>
<View style={{ width: '100%', height:293 }}>
   
        <ImageBackground style={{ height:293, width: '100%', resizeMode: 'contain' }} source={require('./topimg.png')} >

              
                <View style={{marginTop:220,marginLeft:14,height:28,width:146,backgroundColor:'#FFF',borderRadius:7,justifyContent:'center'}}>
                <Text style={{color:'#FF9445',fontSize:14,lineHeight:13,fontStyle:'normal',alignSelf:'center'}}>Available online</Text>

                </View>
        
<View style={{width:'100%',borderTopLeftRadius:15,borderTopRightRadius:15,height:20,marginTop:29,backgroundColor:'#FFF'}}>
</View>

        </ImageBackground>

</View>

<Text style={{color:'#000',fontSize:21,lineHeight:24,fontStyle:'normal',marginTop:26,marginLeft:16}}>Kanya Bhojan</Text>
              

<Text style={{color:'#FF9445',fontSize:14,lineHeight:15,fontStyle:'normal',marginTop:15,marginLeft:16}}>₹1000</Text>
    

<Text style={{color:'#505050',fontFamily:'DM Sans',fontSize:16,textAlign:'justify',lineHeight:24,fontStyle:'normal',marginTop:32,marginLeft:16,marginRight:16}}>Mi tortor amet vitae imperdiet pellentesque purus rhoncus lorem neque. Amet facilisis elit facilisis scelerisque ut nulla et. Sit leo, mattis facilisis massa venenatis scelerisque risus interdum. Quis arcu sodales suscipit condimentum vitae quis accumsan suspendisse id. Orci, ac molestie eu velit porttitor ornare in in amet. Facilisis neque adipiscing tellus, id eros.
Eu amet dictum pellentesque faucibus arcu malesuada ut accumsan a. Eget aliquam lacus tincidunt venenatis eu lectus molestie. </Text>
    


<View style={{width:'90%',height:42,marginTop:40,borderRadius:8,borderWidth:1,borderColor:'#000',backgroundColor:'#FFF',justifyContent:'center',alignSelf:'center'}}>

<Text style={{color:'#949494',fontSize:12,lineHeight:14,fontStyle:'normal',alignSelf:'center'}}>Questions? enquire</Text>
  

</View>

<View style={{backgroundColor:'#505050',borderWidth:1,width:'90%',justifyContent:'center',alignSelf:'center',marginTop:23}}></View>


<View style={{marginTop:32,flexDirection:'row',width:'100%',marginLeft:16}}> 
<Image style={{height:17,width:18}} source={require('./startimage.png')}/>

<Text style={{marginLeft:10,color:'#505050',fontSize:20,fontFamily:'DM Sans',lineHeight:23,fontStyle:'normal'}}>4.3 </Text>
<Text style={{color:'#505050',fontSize:20,lineHeight:23,fontStyle:'normal'}}>(112 Reviews)</Text>
  
</View>

    <View style={{marginTop:20,width:'100%',justifyContent:'center',alignSelf:'center'}}>
                

                <FlatList  style={{width:'100%'}}
                   data={this.state.FlatListItemsSale}
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
                   keyExtractor={this._keyExtractor}
                   renderItem={this.renderItemSale}
                />
                
                </View>

                <View style={{backgroundColor:'#505050',borderWidth:1,width:'90%',justifyContent:'center',alignSelf:'center',marginTop:23}}></View>

                <Text style={{fontWeight:'bold',fontSize:20,lineHeight:23,fontFamily:'DM Sans',color:'#505050',marginLeft:16,marginTop:29}}>Locations </Text>

                <Text style={{fontWeight:'normal',fontSize:16,marginRight:16,lineHeight:24,fontFamily:'DM Sans',color:'#505050'
                ,marginLeft:10,textAlign:'justify',marginTop:8}}>  Select a location for your puja experience. </Text>

             
<View style={{width:Dimensions.get('window').width,justifyContent:'center',alignSelf:'center',height:'auto'}}>                
                         
                         <Dropdown  

                         containerStyle={{width:'90%',alignSelf:'center',height:70,marginTop:25}}       
                         label='App Language'
                         icon={require('./dropdownimg.png')}
                         labelFontSize={20}
                       //  underlineColor={{borderBottomColor:'white'}}
                         data={this.state.data}
                    
                    />

                </View> 




                <View  style ={{flexDirection:'row',justifyContent:'space-between',width:'90%',alignSelf:'center',marginTop:30}}>
    <View style={{flexDirection:'column',marginTop:12}}>
        <Text style={{fontSize:14,lineHeight:18,fontWeight:'normal',fontFamily:'DM Sans'}}>Select your location to book.</Text>

    </View>

    
<TouchableOpacity onPress={()=>this.props.navigation.navigate('PujaDetailSelected')}>

    <View style={{backgroundColor:'#E9E9E9',borderRadius:10,height:42,width:110,justifyContent:'center',alignSelf:'center'}}>
<Text style={{alignSelf:'center',fontSize:14,lineHeight:18,fontWeight:'normal',fontFamily:'DM Sans',color:'#FFF'}}>Book Now</Text>

</View>

</TouchableOpacity>

</View>






                
              
             
             </ScrollView>
            </SafeAreaProvider>

        );
    }
}

export default PujaDetails;