import TextBox from "../components/TextBox";
import { Dimensions, Text, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/EvilIcons";
import ButtonBox from "../components/textfield/ButtonBox";
import { getKey, getStoreData, storeData } from "../storage/AsyncStroage";
const {width,height}=Dimensions.get('screen');
import RazorpayCheckout from 'react-native-razorpay';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";



function Third()
{
  var navigation =useNavigation()
  const {width,height}=Dimensions.get('screen');
  const [name,setName]=useState()
  const [emailid,setEmailId]=useState()
  const [address,setAddress]=useState()
  
  const handleClick=async()=>
  {
   
   await storeData("USERDATAINFORMATION",{"name":name,"emailid":emailid,'address':address})
 
   await paymentGateway()
  }


  const paymentGateway=()=>{
   
    var options = {
      description: 'Credits towards FoodApp',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key:'rzp_test_GQ6XaPC6gMPNwH', // Your api key
      amount: '5000',
      name: 'food',
      prefill: {
        email: 'void@razorpay.com',
        contact: '6261448735',
        name: 'Razorpay Software'
      },
      theme: {color: '#F37254'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
      console.log("i i i    iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii:",getStoreData("USERDATAINFORMATION"))

      setTimeout(() => {
       navigation.navigate("Home") 
      },1700);
      
      
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  
  
  }
    return(
        <View>
          <View style={{display:"flex",alignItems:"center",flexDirection:"row"}}>
          <Icon name={'arrow-left'} size={35} />
            <Text style={{fontSize:25,padding:20,fontWeight:"bold",color:'#000'}}>Personal Details</Text>
         </View>

         <View >
            <Text style={{paddingLeft:20,fontSize:17,color:"#000"}}>What's your name?</Text>
         </View>

         

         <View style={{display:'flex',alignItems:'center',paddingTop:10}}>
         <TextBox w={0.9}  message={'Enter Your Name'} onChangeText={(text)=>setName(text)} />
         </View>
          
         <View style={{display:'flex',alignItems:'center',paddingTop:10}}>
         <TextBox w={0.9} type="email-address" message={'Enter Your Email Id'} onChangeText ={(text)=>setEmailId(text)} />
         </View>

         <View style={{display:'flex',alignItems:'center',paddingTop:10}}>
         <TextBox w={0.9} type="email-address" message={'Enter Your address where you want to get order sent'} onChangeText ={(text)=>setAddress(text)} />
         </View>

         <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10, width: width }} >
                <ButtonBox onPress={handleClick} w='0.8' bg={'green'} message={'Proceed to pay'} />
            </View>
        </View>
    )
}


export default Third;