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
import ImagePicker from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';



type Props = {};
const options = {
    title: 'Select Document',
    maxWidth:500,
    maxHeight:500,

    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};



// const options = {
//     title: 'Select Your Gallery',
//     maxWidth : 500,
//     maxHeight : 500,
//     storageOptions: {
//         skipBackup: true,
//         path: 'images',
//     },
// };




class PujaBooking extends React.Component {

    constructor(props) {
        super(props);
          
        this.state={

            text: '', avatarSource:'',avatarSourceSecond:'',
            loading:'',
            image :'',
            flag:0,

            FlatListItemPrayer: [

                {"key": "#7",
            
                 "addd": require('./sadhuimg.png'),
                 "add33":('Kanya Bhojan'),
                 "online":('Online'),


                
              
                
                                           
                },
            
                {"key": "#8",
            
                "addd": require('./sadhuimg.png'),
                "add33":('Kanya Bhojan'),
            
               
            
                },

                {"key": "#9",
            
                "addd": require('./sadhuimg.png'),
                "add33":('Kanya Bhojan'),           
            
                },

                {"key": "#10",
            
                "addd": require('./sadhuimg.png'),
                "add33":('Kanya Bhojan'),
              
            
               
            
                },

                {"key": "#11",
            
                "addd": require('./sadhuimg.png'),
               
                "add33":('Kanya Bhojan'),
                
            
               
            
                },

                {"key": "#12",
            
                "addd": require('./sadhuimg.png'),
                "add33":('Kanya Bhojan'),
               
               
                },
            
                               
                        
              ],


        }}







        


    // changeImage=()=>{
    //     ImagePicker.showImagePicker(options, (response) => {
    //         console.log('Response = ', response);

    //         if (response.didCancel) {
                
    //             console.log('User cancelled image picker');
    //         } else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //         } else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //         } else {
    //             const source = { uri: response.uri };

    //             GLOBAL.profileImage = response.uri
    //             // You can also display the image using data:
    //             // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    //             this.setState({flag:1});
    //             this.setState({
    //                 avatarSource: source,
    //             });
    //         }
    //     });

    // }







        renderItemPrayer=({item, index}) => {
            // alert(JSON.stringify(item))
        return(
    
   
    
      <View style={{flexDirection:'column'}}>

          <View style={{height:140,width:'100%',justifyContent:'center',alignSelf:'center'}}>
          <ImageBackground imageStyle={{borderRadius:5}} style={{marginRight:8,height:140,marginLeft:10,width:340}}  source={item.addd}>
              </ImageBackground>

          </View>
     
         <Text style={{marginLeft:18,marginTop:16,color:'#505050',fontSize:18,lineHeight:22,fontStyle:'normal'}}>{item.add33}</Text>
         <Text style={{marginLeft:18,marginTop:4,color:'#505050',fontSize:16,lineHeight:24,fontStyle:'normal'}}>{item.online}</Text>

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

<View style={{ alignSelf:'center',width: '100%', height: 60, elevation: 2, backgroundColor: '#FFF', justifyContent:'space-between' }}>

<View style={{ marginTop:15,width: '90%', alignSelf: 'center', flexDirection: 'row', alignItems: "center" ,justifyContent:'space-between'}} >


    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
        <Image style={{height: 16, width: 16, resizeMode: 'contain' }} source={require('./backBlack.png')} />
    </TouchableOpacity>

    <Text style={{ color:'#505050',lineHeight:30,fontSize: 20, fontFamily: 'DM Sans', marginLeft: 20 }}>Confirm & Pay</Text>
    <Image style={{ height: 30, width: 12, resizeMode: 'contain' }} />


</View>

</View>   

<ScrollView style={{marginBottom:20}}>
<View style={{marginTop:24,width:'100%',justifyContent:'center',alignSelf:'center'}}>
                

                <FlatList  style={{width:'100%'}}
                   data={this.state.FlatListItemPrayer}
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
                   keyExtractor={this._keyExtractor}
                   renderItem={this.renderItemPrayer}
                />
                
                </View>

                <View style={{marginTop:25,borderBottomWidth:1,backgroundColor:'#D1D1D1',width:'90%',justifyContent:'center',alignSelf:'center'}}></View>
                
                <Text style={{fontWeight:'bold',fontSize:20,lineHeight:23,fontFamily:'DM Sans',color:'#FF9445',marginLeft:16,marginTop:29}}>Your Puja</Text>

                <View style={{marginTop:25,flexDirection:'row',width:'100%',justifyContent:'center',alignSelf:'center'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:18,lineHeight:21,fontFamily:'DM Sans',color:'#505050'}}>Date & Time</Text>

                <View style={{flexDirection:'column',width:27}}>
                <Text style={{fontWeight:'normal',fontSize:14,lineHeight:18,fontFamily:'DM Sans',color:'#949494'}}>Edit</Text>
              
                <View style={{marginTop:1,borderBottomWidth:1,backgroundColor:'#949494',width:27}}></View>

                </View>
                </View>
                </View>

                <Text style={{marginLeft:17,marginTop:4,fontWeight:'bold',fontSize:14,lineHeight:18,fontFamily:'DM Sans',color:'#505050'}}>18-Dec-2020, 11.00 AM</Text>
               
               
                <View style={{marginTop:25,flexDirection:'row',width:'100%',justifyContent:'center',alignSelf:'center'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:18,lineHeight:21,fontFamily:'DM Sans',color:'#505050'}}>Host</Text>

                <View style={{flexDirection:'column',width:27}}>
                <Text style={{fontWeight:'normal',fontSize:14,lineHeight:18,fontFamily:'DM Sans',color:'#949494'}}>Edit</Text>
              
                <View style={{marginTop:1,borderBottomWidth:1,backgroundColor:'#949494',width:27}}></View>

                </View>


                </View>
                </View>
                <Text style={{marginLeft:17,marginTop:4,fontWeight:'normal',fontSize:14,lineHeight:18,fontFamily:'DM Sans',color:'#000'}}>I am the host for this puja</Text>
                <Text style={{marginRight:17,marginLeft:17,marginTop:4,fontWeight:'normal',textAlign:'justify',fontSize:14,lineHeight:18,fontFamily:'DM Sans',
                color:'#505050'}}>Your personal details will be shared with organisers</Text>



<View style={{marginTop:25,flexDirection:'row',width:'100%',justifyContent:'center',alignSelf:'center'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:18,lineHeight:21,fontFamily:'DM Sans',color:'#505050'}}>Guests</Text>

                <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center'}}>
            <Image style={{height:30,width:30}} source={require('./minus.png')}/>

            <Image style={{marginLeft:10,height:24,width:20}} source={require('./round.png')}/>


            <Image style={{marginLeft:10,height:30,width:30}} source={require('./plus.png')}/>


                </View>

                
                </View>
                </View>


                <View style={{marginTop:13,marginLeft:17,flexDirection:'column',width:'90%',justifyContent:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:14,lineHeight:18,fontFamily:'DM Sans',color:'#949494'}}>Add Names</Text>
              
                <View style={{marginTop:1,borderBottomWidth:1,backgroundColor:'#949494',width:74}}></View>

                </View>


                <View style={{marginTop:30,borderBottomWidth:1,backgroundColor:'#949494',width:'90%',alignSelf:'center',justifyContent:'center'}}></View>
             
               <Text style={{marginTop:30,fontWeight:'bold',fontSize:18,lineHeight:21,marginLeft:17,fontFamily:'DM Sans',color:'#FF9445'}}>Notes</Text>
               <Text style={{marginTop:30,marginLeft:17,fontWeight:'bold',fontSize:18,lineHeight:21,fontFamily:'DM Sans',color:'#505050'}}>For the priest</Text>



{/* <View style={{width:'90%',borderRadius:8,height:150,alignSelf:'center',justifyContent:'center',backgroundColor:'#FBFBFB',borderWidth:1,borderColor:'grey'}}>




                          
               <ImageBackground style={{height:150,width:300,alignSelf:'center',resizeMode:'contain',justifyContent:'center'}} >
 <View>
   {this.state.avatarSource == '' && (
       <View> 
   
    <ImageBackground style={{height:150,width:300,resizeMode:'contain',alignSelf:'center'}} source={require('./uploadbg.png')}>

    <TouchableOpacity style={{marginTop:68,alignSelf:'flex-end'}} onPress={()=> this.changeImage()}>
    <Image style={{height:32,width:32,resizeMode:'contain'}} source={require('./uploadimg.png')} />
    </TouchableOpacity>
    </ImageBackground></View>

    )

   }
    

    
   {this.state.avatarSource != '' && (
  <View>
    <ImageBackground style={{height:150,width:300,resizeMode:'contain',alignSelf:'center'}} imageStyle={{borderRadius:6}} source={this.state.avatarSource}>

    <TouchableOpacity style={{marginTop:68,alignSelf:'flex-end'}} onPress={()=> this.changeImage()}>
    <Image style={{height:32,width:32,resizeMode:'contain'}} source={require('./uploadbg.png')} />
    </TouchableOpacity>
    </ImageBackground></View>
   )

 }</View>
  
</ImageBackground>

</View> */}


<View  style={{height:150,width:'90%',justifyContent:'center',alignSelf:'center',backgroundColor:'#D1D1D1',borderRadius:8,marginTop:30}}>

</View>

<View style={{marginTop:13,marginLeft:17,flexDirection:'column',width:'90%',justifyContent:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:14,lineHeight:18,fontFamily:'DM Sans',color:'#949494'}}>Add Documents</Text>
              
                <View style={{marginTop:1,borderBottomWidth:1,backgroundColor:'#949494',width:102}}></View>

                </View>

                <View style={{marginTop:30,borderBottomWidth:1,backgroundColor:'#949494',width:'90%',alignSelf:'center',justifyContent:'center'}}></View>

                <Text style={{marginTop:30,marginLeft:17,fontWeight:'bold',fontSize:18,lineHeight:21,fontFamily:'DM Sans',color:'#FF9445'}}>Show Support</Text>




                <View style={{marginTop:25,flexDirection:'row',width:'100%',justifyContent:'center',alignSelf:'center'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:18,lineHeight:21,fontFamily:'DM Sans',color:'#505050'}}>Add a donation</Text>

                <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center'}}>
            <Image style={{height:30,width:30}} source={require('./minus.png')}/>

            <Image style={{marginLeft:10,height:24,width:20}} source={require('./round.png')}/>


            <Image style={{marginLeft:10,height:30,width:30}} source={require('./plus.png')}/>


                </View>

                
                </View>
                </View>
                <Text style={{marginRight:17,marginLeft:17,marginTop:13,fontWeight:'normal',textAlign:'justify',fontSize:14,lineHeight:18,fontFamily:'DM Sans',
                color:'#505050'}}>This money goes towards helping our temples serve food to the less fortunate</Text>

<Text style={{marginTop:30,marginLeft:17,fontWeight:'bold',fontSize:18,lineHeight:21,
fontFamily:'DM Sans',color:'#FF9445'}}>Price details</Text>


<View style={{marginTop:25,flexDirection:'column',width:'100%',justifyContent:'center',alignSelf:'center'}}>
               
<View style={{flexDirection:'row',justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
              
              <Text style={{fontWeight:'normal',fontSize:16,lineHeight:24,fontFamily:'DM Sans',color:'#505050'}}>1x Kanya Bhojan Online</Text>
              <Text style={{fontWeight:'normal',fontSize:16,lineHeight:24,fontFamily:'DM Sans',color:'#949494'}}>₹1000.00</Text>
  
              </View>

                <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
              
              <Text style={{fontWeight:'normal',fontSize:16,lineHeight:24,fontFamily:'DM Sans',color:'#505050'}}>Discount 10%</Text>
              <Text style={{fontWeight:'normal',fontSize:16,lineHeight:24,fontFamily:'DM Sans',color:'#949494'}}>– ₹100.00</Text>
  
              </View>

              <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
              
              <Text style={{fontWeight:'normal',fontSize:16,lineHeight:24,fontFamily:'DM Sans',color:'#505050'}}>Discount 10%</Text>
              <Text style={{fontWeight:'normal',fontSize:16,lineHeight:24,fontFamily:'DM Sans',color:'#949494'}}>₹180.00</Text>
  
              </View>

              <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
              
              <Text style={{fontWeight:'normal',fontSize:16,lineHeight:24,fontFamily:'DM Sans',color:'#505050'}}>Donation</Text>
              <Text style={{fontWeight:'normal',fontSize:16,lineHeight:24,fontFamily:'DM Sans',color:'#949494'}}>₹20.00</Text>
  
              </View>

              <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
              
              <Text style={{fontWeight:'bold',fontSize:18,lineHeight:21,fontFamily:'DM Sans',color:'#505050'}}>Total</Text>
              <Text style={{fontWeight:'bold',fontSize:18,lineHeight:21,fontFamily:'DM Sans',color:'#505050'}}>₹1100.00</Text>
  
              </View>

           
                </View>





                <View style={{marginTop:30,borderBottomWidth:1,backgroundColor:'#949494',width:'90%',alignSelf:'center',justifyContent:'center'}}></View>



<Text style={{marginTop:30,marginLeft:17,fontWeight:'bold',fontSize:18,lineHeight:21,
fontFamily:'DM Sans',color:'#FF9445'}}>Payment</Text>


<View style={{marginTop:30,width:'100%',flexDirection:'row',justifyContent:'center',alignSelf:'center',alignItems:'center'}}>
<View style={{width:'90%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center',alignItems:'center'}}>

    <View style={{flexDirection:'row'}}>
    <Image style={{marginLeft:10,height:23,borderRadius:6,width:44}} source={require('./card.png')}/>
    <Text style={{marginLeft:10,fontWeight:'normal',fontSize:18,lineHeight:21,
fontFamily:'DM Sans',color:'#FF9445'}}>⋅ ⋅ ⋅ ⋅ 2774</Text>
    </View>

    <View style={{flexDirection:'column',width:27}}>
                <Text style={{fontWeight:'normal',fontSize:14,lineHeight:18,fontFamily:'DM Sans',color:'#949494'}}>Edit</Text>
              
                <View style={{marginTop:1,borderBottomWidth:1,backgroundColor:'#949494',width:27}}></View>

                </View>


</View>



</View>

<View style={{marginTop:24,flexDirection:'column',width:93,marginLeft:17}}>
                <Text style={{fontWeight:'normal',fontSize:14,lineHeight:18,fontFamily:'DM Sans',color:'#949494'}}>Add a coupon</Text>
              
                <View style={{marginTop:1,borderBottomWidth:1,backgroundColor:'#949494',width:93}}></View>

                </View>

                

                <View style={{marginTop:40,height:90,width:'100%',backgroundColor:'#FFF',elevation:5,marginTop:20}}>
  
   <TouchableOpacity style={{marginTop:10}} onPress={() => this.props.navigation.navigate('BookingPujaSuccess')}>
   
       <View style={{backgroundColor:'#FF9445',borderRadius:10,height:42,width:'90%',justifyContent:'center',alignSelf:'center'}}>
   <Text style={{alignSelf:'center',fontSize:14,lineHeight:18,fontWeight:'normal',fontFamily:'DM Sans',color:'#FFF'}}>confirm & pay</Text>
   
   </View>
   
   </TouchableOpacity>

   <Text style={{alignSelf:'center',marginTop:8,fontWeight:'normal',fontSize:14,lineHeight:18,fontFamily:'DM Sans',color:'#949494'}}>Your card will be charged</Text>


   </View>






               </ScrollView>


            </SafeAreaProvider>

        );
    }
}

export default PujaBooking;