import { Text, View } from "react-native";
import { Image } from "react-native";
import EI from "react-native-vector-icons/EvilIcons"
import TextBox from "../components/textfield/TextBox";
import { cloneElement, useState } from "react";



function Second()
{
    
    return(
        <View>
        <View style={{display:"flex",alignItems:"center"}}>
            <Text style={{fontSize:25,padding:20,fontWeight:"bold",color:'#000'}}>OTP Validation</Text>
        </View>
        <View style={{display:"flex",alignItems:"center"}}>
            <Text style={{paddingTop:40,fontSize:20,color:'#000'}}>We have a sent varification code to</Text>
            <Text style={{fontWeight:"bold",fontSize:21,color:'#000',paddingTop:7}}>+91-6261448735</Text>
        </View>

        <View style={{paddingTop:80,paddingLeft:10,display:"flex",flexDirection:"row",justifyContent:"space-between",paddingRight:10}}>
            <TextBox w={0.1} type="numeric"/>
            <TextBox w={0.1} type="numeric"/>
            <TextBox w={0.1} type="numeric"/>
            <TextBox w={0.1} type="numeric"/>
            <TextBox w={0.1} type="numeric"/>
            <TextBox w={0.1} type="numeric"/>
        </View>

        <View style={{display:"flex",flexDirection:"row",paddingTop:55,justifyContent:"center"}}>
            <Text style={{fontWeight:"bold",color:'#000'}}>Didn't get the OTP? </Text>
            <Text>Resend SMS in 12s</Text>
        </View>

        <View style={{display:"flex",flexDirection:"row",paddingTop:320,justifyContent:"center"}}>
            <Text style={{color:'red',fontWeight:'bold'}}>Go back to login methods</Text>
        </View>

       </View>
       
    )
}



export default Second;