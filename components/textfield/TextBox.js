import {useState} from 'react'
import { TextInput,View,StyleSheet,Dimensions,Text } from "react-native";
import EI from "react-native-vector-icons/EvilIcons"
var {width,height}=Dimensions.get('screen')


export default function TextBox({password=false, w,message,type='default',error='',h=50,icon,...props})
{   const [color,setColor]=useState(false)
    return(
        <View style={{marginVertical:2}}>
        <View style={{flexDirection:'row',alignItems:'center',marginVertical:1, width:width*w,height:h,borderWidth:1,borderRadius:12,borderColor:error?'red':color?'#4834d4':'#95a5a6'}}>
            {icon!=''?
            <EI name={icon} size={30}/>:            
            <Text style={{fontSize:16,color:'#000',fontWeight:'bold',marginLeft:10,width:width*0.08}} >{props.code}</Text>}
            
            <TextInput style={{fontSize:16}} {...props} secureTextEntry={password}  onBlur={() => setColor(false)} onFocus={()=>setColor(true)}  placeholder={message} keyboardType={type}/>
            

        </View>
        {error?
        <Text style={{color:'red',marginLeft:5}}>{error?error:''}</Text>:<></>}
        </View>
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
  