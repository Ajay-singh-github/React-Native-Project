import {useState} from 'react'
import {  View,StyleSheet,Dimensions,Text, TouchableOpacity } from "react-native";
import EI from "react-native-vector-icons/EvilIcons"
var {width,height}=Dimensions.get('screen')


export default function ButtonBox({ w,message,bg, onPress = () => {}})
{  
    return(
        
        <TouchableOpacity onPress={onPress} style={{justifyContent:'center',alignItems:'center',marginVertical:1, width:width*w,height:45,borderRadius:10, backgroundColor:bg}}>
    
           
            
            <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>{message}</Text>
            

     
  
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  