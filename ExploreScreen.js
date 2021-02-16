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


class ExploreScreen extends React.Component {

    constructor(props) {
        super(props);
          
        this.state={

            FlatListItemsSale: [

                {"key": "#1",
            
                 "addd": require('./un.png'),
                 "add33":('Navratri Sale'),
                
                
                
                                           
                },
            
                {"key": "#2",
            
                "addd": require('./un.png'),
                "add33":('Navratri Sale'),
            
               
            
                },

                {"key": "#3",
            
                "addd": require('./un.png'),
            
                "add33":('Navratri Sale'),             
            
                },

                {"key": "#4",
            
                "addd": require('./un.png'),
                "add33":('Navratri Sale'),
              
            
               
            
                },

                {"key": "#5",
            
                "addd": require('./un.png'),
               
                "add33":('Navratri Sale'),
                
            
               
            
                },

                {"key": "#6",
            
                "addd": require('./un.png'),
                "add33":('Navratri Sale'),
               
               
                },
            
                               
                        
              ],
            

              FlatListItemPrayer: [

                {"key": "#7",
            
                 "addd": require('./sadhuimg.png'),
                 "add33":('Kanya Bhojan'),
                
                
                
                                           
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
            



              FlatListItemTv: [

                {"key": "#13",
            
                 "addd": require('./sadhuimg.png'),
                 "add1": require('./playimg.png'),
                 "add2": require('./plabtn.png'),
                 "add33":('The story of Manikarma'),
                
                
                
                                           
                },
            
                {"key": "#14",
            
                "addd": require('./sadhuimg.png'),
                "add33":('The story of Manikarma'),
            
               
            
                },

                {"key": "#15",
            
                "addd": require('./sadhuimg.png'),
                "add33":('The story of Manikarma'),           
            
                },

                {"key": "#16",
            
                "addd": require('./sadhuimg.png'),
                "add33":('The story of Manikarma'),
              
            
               
            
                },

                {"key": "#17",
            
                "addd": require('./sadhuimg.png'),
               
                "add33":('The story of Manikarma'),
                
            
               
            
                },

                {"key": "#18",
            
                "addd": require('./sadhuimg.png'),
                "add33":('The story of Manikarma'),
               
               
                },
            
                               
                        
              ],
            



            


            }}



            renderItemSale=({item, index}) => {
                // alert(JSON.stringify(item))
            return(
        
       
        
          
            <ImageBackground imageStyle={{borderRadius:5}} style={{marginLeft:16,marginRight:4,height:190,width:280}}  source={item.addd}>
         <View style={{width:'50%'}}>
         <Text style={{marginLeft:12,marginTop:22,textAlign:'justify',color:'#FFF',fontSize:25,lineHeight:28,fontWeight:'normal'}}>{item.add33}</Text>
            
         </View>
           
            </ImageBackground>
        
        
        
        
        
        )
        }

        _keyExtractor=(item, index)=>item.key;



        renderItemPrayer=({item, index}) => {
            // alert(JSON.stringify(item))
        return(
    
   
    
      <View style={{flexDirection:'column'}}>
        <ImageBackground imageStyle={{borderRadius:5}} style={{marginLeft:16,marginRight:4,height:187,width:225}}  source={item.addd}>
        </ImageBackground>
         <Text style={{marginLeft:18,marginTop:16,color:'#505050',fontSize:18,lineHeight:22,fontStyle:'normal'}}>{item.add33}</Text>
        
         </View>
    
    
    
    
    )
    }

    _keyExtractor=(item, index)=>item.key;


    renderItemTv=({item, index}) => {
        // alert(JSON.stringify(item))
    return(



  <View style={{flexDirection:'column'}}>
    <ImageBackground imageStyle={{borderRadius:5}} style={{marginLeft:16,marginRight:4,height:110,width:225,justifyContent:'center',alignSelf:'center'}}  source={item.addd}>
  
  <TouchableOpacity>
   <View style={{height:50,width:50,justifyContent:'center',alignSelf:'center'}}>
   <ImageBackground style={{height:49,width:49,alignSelf:'center'}} source={require('./playimg.png')}>
        <Image style={{marginTop:15,height:15,alignSelf:'center',width:15}} source={require('./plabtn.png')}/>
    </ImageBackground>

   </View>
   </TouchableOpacity>
   
   
    
    </ImageBackground>
     <Text style={{marginLeft:18,marginTop:16,color:'#505050',fontSize:18,lineHeight:22,fontStyle:'normal',fontWeight:'normal'}}>{item.add33}</Text>
    
     </View>




)
}

_keyExtractor=(item, index)=>item.key;


    render() {
        return (

            <ScrollView style={{ backgroundColor: 'white' }}>
                <StatusBar
                    backgroundColor='orange'


                />

<View style={{ width: '100%', height:350 }}>
    <ImageBackground style={{height:350,width:'100%'}} source={require('./headlogoimg.png')}>
        <View style={{marginTop:92,flexDirection:'column',justifyContent:'center',alignSelf:'center'}}>
            <Image style={{alignSelf:'center',height:82,width:115}} source={require('./vect2.png')}/>
            <Image style={{height:36,width:190}} source={require('./sha1.png')}/>
            <Image style={{height:32,width:84,alignSelf:'flex-end'}} source={require('./sha2.png')}/>

        </View>


<View style={{marginTop:45,height:45,borderRadius:22,width:'90%',backgroundColor:'white',alignSelf:'center',justifyContent:'center'}}>


<TouchableOpacity style={{marginLeft:50,justifyContent:'center' }}>
<View style={{alignSelf:'center',marginTop:30,flexDirection:'row',width:'90%',height:45}}>
    <Image style={{height:14,width:14}} source={require('./searchs.png')}/>
    <Text style={{marginLeft:10,fontSize:10,fontFamily:'DM Sans',fontWeight:'normal'}}>Your spiritual experience today</Text>
    
</View>
</TouchableOpacity>
</View>

    </ImageBackground>

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
                <Text style={{marginTop:48,fontSize:20,marginLeft:17,fontFamily:'DM Sans',fontWeight:'normal',lineHeight:23,color:'#FF9445'}}>Join in prayer</Text>

                <Text style={{marginTop:8,textAlign:'justify',fontSize:12,marginLeft:17,marginRight:40,fontFamily:'DM Sans',fontWeight:'normal',
                lineHeight:18,color:'#505050'}}>We conduct online and on-ground pujas with authentic priests and at reasonable prices.</Text>

                <View style={{marginTop:24,width:'100%',justifyContent:'center',alignSelf:'center'}}>
                

                <FlatList  style={{width:'100%'}}
                   data={this.state.FlatListItemPrayer}
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
                   keyExtractor={this._keyExtractor}
                   renderItem={this.renderItemPrayer}
                />
                
                </View>
                

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ExplorePujas')} >
                <View style={{marginTop:20,borderColor:'#949494',borderWidth:1,height:42,width:140,marginLeft:17,borderRadius:9,justifyContent:'center'}}>
                    <Text style={{alignSelf:'center',fontSize:14,lineHeight:18,fontFamily:'DM Sans',fontWeight:'normal',color:'#949494'}}>EXPLORE PUJAS</Text>


                </View></TouchableOpacity>

                <View style={{height:300,backgroundColor:'#FFFAF4',width:Dimensions.get('window').width,marginTop:45}}>
                <Text style={{marginTop:48,fontSize:20,lineHeight:23,marginLeft:16,fontWeight:'normal',fontFamily:'DM Sans',color:'#FF9445'}}>Our astrologers</Text>
              
              
              <View style={{marginTop:24,flexDirection:'row',marginLeft:17,height:70}}>
   
              <Image style={{height:70,width:70}} source={require('./frameimg.png')}/>
             
               <View style={{marginTop:6,marginLeft:16,flexDirection:'column'}}>
                <Text style={{fontSize:18,lineHeight:21,fontWeight:'normal',
                fontFamily:'DM Sans',color:'#505050'}}>Copy Consult</Text>
                <Text style={{marginTop:6,fontSize:16,lineHeight:24,fontWeight:'normal',
                fontFamily:'DM Sans',color:'#949494'}}>Ask an expert about...</Text>
              
                </View>
                </View>


                <View style={{marginTop:24,flexDirection:'row',marginLeft:17,height:70}}>
   
              <Image style={{height:70,width:70}} source={require('./frameimg.png')}/>
             
               <View style={{marginTop:6,marginLeft:16,flexDirection:'column'}}>
                <Text style={{fontSize:18,lineHeight:21,fontWeight:'normal',
                fontFamily:'DM Sans',color:'#505050'}}>Predict</Text>
                <Text style={{marginTop:6,fontSize:16,lineHeight:24,fontWeight:'normal',
                fontFamily:'DM Sans',color:'#949494'}}>To know your path</Text>
              
                </View>
                </View>



</View>


<Text style={{fontStyle:'normal',fontSize:20,fontFamily:'DM Sans',lineHeight:23,fontWeight:'normal',color:'#FF9445'
,marginLeft:17,marginTop:45}}>Online Yoga</Text>
       <Image style={{height:330,width:'90%',alignSelf:'center',marginTop:24}} source={require('./yogaimg.png')}/>        

       <View style={{marginTop:20,borderColor:'#949494',borderWidth:1,height:42,width:145,marginLeft:17,borderRadius:9,justifyContent:'center'}}>
                    <Text style={{alignSelf:'center',fontSize:14,lineHeight:18,fontFamily:'DM Sans',fontWeight:'normal',color:'#949494'}}>book a session</Text>

                </View>

                <ImageBackground style={{marginTop:45,height:378,width:'100%'}} source={require('./framyoga.png')}>

                </ImageBackground>

                <Text style={{fontSize:20,fontFamily:'DM Sans',lineHeight:23,fontWeight:'normal',color:'#FF9445'
,marginLeft:17,marginTop:45}}>Shaktipeeth TV</Text>


<View style={{marginTop:24,width:'100%',justifyContent:'center',alignSelf:'center'}}>
                

                <FlatList  style={{width:'100%'}}
                   data={this.state.FlatListItemTv}
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
                   keyExtractor={this._keyExtractor}
                   renderItem={this.renderItemTv}
                />
                
                </View>


                <View style={{marginTop:20,borderColor:'#949494',borderWidth:1,height:42,width:100,marginLeft:17,borderRadius:9,justifyContent:'center'}}>
                    <Text style={{alignSelf:'center',fontSize:15,lineHeight:18,fontFamily:'DM Sans',
                    fontWeight:'normal',color:'#949494'}}>View all</Text>


                </View>

                <View style={{height:310,marginTop:45,backgroundColor:'#F7F7F7',width:'100%',marginBottom:10}}>

                    <Text style={{marginLeft:17,marginTop:45,color:'#505050',fontFamily:'DM Sans',fontWeight:'normal',lineHeight:23,fontSize:20}}>More Information</Text>


                    <View style={{justifyContent:'space-between',width:'90%',alignSelf:'center',alignItems:'center',flexDirection:'row'}}>
                  

                    <View style={{borderBottomWidth:1,width:'48%',borderBottomColor:'#949494'}}>
                        <Text style={{marginTop:24,fontSize:16,marginBottom:16,lineHeight:24,color:'#949494'}}>Guests</Text>

                    </View>

                    <View style={{borderBottomWidth:1,width:'48%',borderBottomColor:'#949494'}}>
                        <Text style={{marginTop:24,marginBottom:16,fontSize:16,lineHeight:24,color:'#949494'}}>Partners</Text>

                    </View>

                
                    </View>


                    <View style={{justifyContent:'space-between',width:'90%',alignSelf:'center',alignItems:'center',flexDirection:'row'}}>
                  

                  <View style={{borderBottomWidth:1,width:'48%',borderBottomColor:'#949494'}}>
                      <Text style={{marginTop:16,fontSize:16,marginBottom:4,lineHeight:24,color:'#949494'}}>Get Help</Text>
                      <Text style={{marginTop:4,fontSize:14,marginBottom:16,lineHeight:18,color:'#949494'}}>Support with the app</Text>

                  </View>

                  <View style={{width:'48%'}}>
                      <Text style={{marginTop:16,marginBottom:4,fontSize:16,lineHeight:24,color:'#949494'}}>Offer services</Text>
                      <Text style={{marginTop:4,marginBottom:16,fontSize:14,lineHeight:18,color:'#949494'}}>As astrologer, priest or agent.</Text>

                  </View>

              
                  </View>

                  <View style={{marginLeft:17,width:'90%',flexDirection:'column'}}>
                      <Text style={{marginTop:16,fontSize:16,marginBottom:4,lineHeight:24,color:'#949494'}}>Safety</Text>
                      <Text style={{marginTop:4,fontSize:14,marginBottom:16,lineHeight:18,color:'#949494'}}>Our Covid-19 Protocol</Text>

                  </View>

                </View>

            
              

            </ScrollView>

        );
    }
}

export default ExploreScreen;