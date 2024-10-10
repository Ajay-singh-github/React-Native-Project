/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
    View,Text,Dimensions,Image,TouchableOpacity,ScrollView
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import TextBox from '../components/TextBox';
import AppButton from '../components/AppButton';
import ButtonBox from '../components/textfield/ButtonBox';
import Menu from 'react-native-vector-icons/Entypo'
import { getKey, storeData } from '../storage/AsyncStroage';
 
var {width,height}=Dimensions.get('screen')


function Login(){

   var navigation=useNavigation()
   const [mobilenumber,setMobileNumber] = useState()
   const checkUserData=async()=>{
    var userKey=await getKey()
    console.log("USEEERR:",userKey)
    if(userKey!=undefined)
    {

    navigation.navigate('otp')
    }


  }
  useEffect(function(){
    checkUserData()
  },[])
  const handleLogin=async()=>{
   await storeData("USER",{"mobileno":mobilenumber})
    navigation.navigate('otp')
  }
  return (
    <ScrollView>
    <View >
        <View style={{position:'relative'}}>
        <Image source={require('../assets/food.jpg')} />
        <Text style={{left:width*0.27,top:height*0.15,fontSize:70,fontWeight:'bold',color:'#FFF',position:'absolute'}}>Foodie</Text>
        </View>

        <View style={{width:width,justifyContent:'center',alignItems:'center',marginVertical:10}}>
          <Text style={{color:'#000',fontWeight:'bold',fontSize:26}}>India's #1 Food Delivery</Text>
          <Text style={{color:'#000',fontWeight:'bold',fontSize:32}}><Text style={{fontWeight:'bold',fontSize:25}}>and Dining App</Text></Text>
        </View>

      <View style={{flexDirection:'row',
        width:width,justifyContent:'center',alignItems:'center',marginTop:20}} >
        <View style={{
  width: width*0.25,
  borderBottomWidth: 0.6,
  borderColor: 'grey',
}}></View>
<Text style={{ color:'#000', width:width*0.35,textAlign:'center', fontSize:15,fontWeight:"300"}}>Log in or sign up</Text>
<View style={{
  width: width*0.25,
  borderBottomWidth: 0.6,
  borderColor: 'grey',
}}></View>
</View>

<View style={{flexDirection:'row',
        width:width,justifyContent:'center',alignItems:'center',marginTop:20} } >
 <TouchableOpacity><View style={{marginRight:10}}><TextBox w='0.1'  icon={''}  ></TextBox></View></TouchableOpacity>
 <View><TextBox w='0.7' message='Enter Phone Number' icon={''} onChangeText={(txt)=>setMobileNumber(txt)} /></View>
</View>


<View style={{paddingLeft:35,paddingTop:10}}>
  <ButtonBox w="0.8" message={"Continue"} bg={'#e74c3c'} onPress={handleLogin}/>
</View>

<View style={{flexDirection:'row',
        width:width,justifyContent:'center',alignItems:'center',marginTop:20}} >
        <View style={{
  width: width*0.37,
  borderBottomWidth: 0.6,
  borderColor: 'grey',
}}></View>
<Text style={{ color:'#000', width:width*0.1,textAlign:'center', fontSize:15,fontWeight:"300"}}>or</Text>
<View style={{
  width: width*0.37,
  borderBottomWidth: 0.6,
  borderColor: 'grey',
}}></View>
</View>
<View style={{ flexDirection: 'row', width: width, justifyContent: 'center', alignItems: 'center', marginVertical: 10, }}>
                <View style={{ borderRadius: 50, width: width * 0.15, height: 55, justifyContent: "center", alignItems: 'center', borderWidth: 0.5, marginHorizontal: 10 }} >
                    <Image source={require('../assets/google.png')} />
                </View>

                <View style={{ borderRadius: 50, width: width * 0.15, height: 55, justifyContent: "center", alignItems: 'center', borderWidth: 0.5, marginHorizontal: 10 }} >
                    <Menu name={'menu'} fontSize={20} />
                </View>

            </View>
            
            <View style={{paddingLeft:80,paddingTop:20}}>
              <Text style={{color:'black'}}>By continuing, you agree to our</Text>
            </View>
            <View style={{paddingLeft:30}}>
              <Text style={{color:'black'}} >Terms of Service Privacy Policy Content Policy</Text>
              
            </View>
            

            <View style={{paddingTop:50}}></View>
    </View>
    </ScrollView>
  );
}


export default Login;
