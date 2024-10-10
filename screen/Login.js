/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    View,Text,Dimensions,Image,
} from 'react-native';
import TextBox from '../components/TextBox';
import AppButton from '../components/AppButton';
 
var {width,height}=Dimensions.get('screen')


function Login(){
   
  return (
    <View >
        <View style={{position:'relative'}}>
        <Image source={require('../assets/food.jpg')} />
        <Text style={{left:width*0.27,top:height*0.15,fontSize:70,fontWeight:'bold',color:'#FFF',position:'absolute'}}>Foodie</Text>
        </View>

        <View style={{width:width,justifyContent:'center',alignItems:'center',marginVertical:10}}>
          <Text style={{color:'#000',fontWeight:'bold',fontSize:32}}>India's #1 Food Delivery</Text>
          <Text style={{color:'#000',fontWeight:'bold',fontSize:32}}><Text style={{fontWeight:'bold',fontSize:32}}>and Dining App</Text></Text>
        </View>

      <View style={{flexDirection:'row',
        width:width,justifyContent:'center',alignItems:'center',marginTop:20}} >
        <View style={{
  width: width*0.25,
  borderBottomWidth: 0.6,
  borderColor: 'grey',
}}></View>
<Text style={{ color:'#000', width:width*0.35,textAlign:'center', fontSize:18,fontWeight:'bold'}}>Log in or sign up</Text>
<View style={{
  width: width*0.25,
  borderBottomWidth: 0.6,
  borderColor: 'grey',
}}></View>
</View>

<View style={{flexDirection:'row',
        width:width,justifyContent:'center',alignItems:'center',marginTop:20}} >

 <TextBox w='0.8' message='Enter Phone Number' icon={''} ></TextBox>
</View>

    </View>
  );
}


export default Login;
