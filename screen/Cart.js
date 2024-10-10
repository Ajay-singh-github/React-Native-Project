import { View ,Text,StyleSheet,Dimensions,ScrollView, Image} from "react-native";
import Button from "../components/textfield/ButtonBox";
import { useNavigation } from '@react-navigation/native';
import FoodList from "../components/FoodList";
import {  useState,useEffect } from "react";
import EI from "react-native-vector-icons/Entypo"
import FI from "react-native-vector-icons/Fontisto"
import { FlatList } from "react-native-gesture-handler";
import { serverURL } from "../services/FetchNodeServices";
import { useSelector } from "react-redux";
import ButtonBox from "../components/textfield/ButtonBox";
import { getKey, getStoreData, removeStoreData } from "../storage/AsyncStroage";

const {width,height}=Dimensions.get('screen');


export default function Cart(props) {

  const styles=StyleSheet.create({
    
    textView:{
      width:width*0.53,
      margin:5,
      flexDirection:'column' 
    },
    title:{
      fontSize:18,
      fontWeight:'bold',
      color:'#121212',
      marginVertical:5,
      marginRight:10
    }, 
    price:{
      fontSize:15,
      color:'#121212',
      fontWeight:'500'
    },
    shadowProp:{  
      shadowOffset:{width:0, height:4},  
      shadowColor:'#171717',  
          shadowOpacity:0.5,  
          shadowRadius:2,  
      },  
  })

  var navigation=useNavigation()
    var cart=useSelector(state=>state.orderData)
    var keys=Object.keys(cart)
    var foodsList=Object.values(cart)
   console.log("food list again in cart:",foodsList)


  const [selectedFood,setSelectedFood]=useState({})
  const [discount,setDiscount]=useState(0);
  const [total,setTotal]=useState(0);
  const [deliveryFee,setDeliveryFee]=useState(0);
  const [deliveryTip,setDeliveryTip]=useState(0);
  const [platformFee,setplatformFee]=useState(0);
  const [gst,setGst]=useState('');
  const [netPrice,setNetPrice]=useState('');


  const calculate=()=>{
    setDiscount(foodsList.reduce((sum,item)=>{
      return(sum+parseInt(item.offerprice>0?item.price-item.offerprice:0))
    },0));

    setTotal(foodsList.reduce((sum,item)=>{
      return(sum+parseInt(item.price))
    },0));

    setDeliveryFee(30)
    setDeliveryTip(7)
    setplatformFee(5)
    setGst((total*5)/100);
    setNetPrice(total+deliveryFee-discount+deliveryTip+platformFee+gst)
  }
  
  useEffect(function(){

    calculate()
  },[])

  const handleClick=async()=>{
    var userKey=await getKey()
   
    if(userKey=="USER")
    {
      
      navigation.navigate('otp')
    }
    else
    {
        navigation.navigate('login')
    }
      
  }

  const showOrderedFood=()=>{
    return foodsList.map ((item)=>{
        return( <View>
 
           <View style={[styles.textView,{backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between'}]}>
             <View style={{marginLeft:-40,marginRight:20}}><Image source={{uri:`${serverURL}/images/${item.icon}`}} style={{resizeMode:'contain',width:50,height:30,borderRadius:5}} /></View>
             <Text style={styles.title}>{item.fooditemname}</Text>
 
             <View style={{flexDirection:'row',marginVertical:5}}>
               <Text style={styles.price}>&#8377;<Text style={{textDecorationLine:'line-through'}}>{item.price} </Text></Text>
               <Text style={[styles.price,{marginLeft:8}]}>&#8377;{item.offerprice}</Text>
             </View>

           </View>
 
         </View>
)
      })
    
  }
  return (
  <ScrollView> 
    <View  style={{backgroundColor:'#eee',flex:1,gap:20}}>

{/* //!Adress//////////////////////////////// */}
      <View style={{width:width,height:height*0.10,backgroundColor:'#fff',alignItems:'center',paddingHorizontal:20,borderBottomLeftRadius:25,borderBottomRightRadius:25,flexDirection:'row',gap:10,borderWidth:0.3,borderColor:'#777'}}>
        <EI name={'home'} size={20} style={{color:'red'}}/>
        <Text style={{fontSize:18,fontWeight:'bold',color:'#151515'}}>21 mins to Home</Text>
        <Text style={{fontSize:16}}>|</Text>
        <Text style={{fontSize:16}}>C12, Thatipur, Gwalior</Text>
      </View>

{/* //!Saving//////////////////////////////// */}
      <View style={{width:width*0.9,height:height*0.08,backgroundColor:'#BDF5BD',alignItems:'center',paddingHorizontal:20,borderRadius:20,flexDirection:'row',gap:10,borderWidth:1,borderColor:'green',alignSelf:'center'}}>
        <FI name={'shopping-sale'} size={30} style={{color:'green'}}/>

        <Text style={{fontSize:22,color:'green',fontWeight:'bold'}}>&#8377; {
         discount
        } saved!</Text>

        <Text style={{fontSize:18,color:'green'}}>On this order</Text>
      </View>

{/* //!Food items//////////////////////////////// */}
      <View style={[{width:width*0.90,backgroundColor:'#fff',alignItems:'center',paddingHorizontal:20,borderRadius:25,borderBottomRightRadius:25,flexDirection:'column',gap:10,alignSelf:'center'},styles.shadowProp]}>
        {showOrderedFood()}
      </View>

{/* //!Coupon//////////////////////////////// */}
      <Text style={{fontSize:19,fontWeight:'bold',color:'#151515',marginLeft:width*.05,marginTop:10}}>Offers & Benefits</Text>


      <View style={[{width:width*0.90,height:height*0.08,backgroundColor:'#fff',alignItems:'center',paddingHorizontal:20,borderRadius:25,borderBottomRightRadius:25,flexDirection:'row',gap:10,alignSelf:'center'},styles.shadowProp]}>

        <Text style={{fontSize:20,fontWeight:'bold',color:'#151515'}}>Apply Coupon</Text>
      </View>

{/* //!Delivery tip//////////////////////////////// */}
      <Text style={{fontSize:19,fontWeight:'bold',color:'#151515',marginLeft:width*.05,marginTop:10}}>Tip Your Delivery Partner</Text>

      <View style={[{width:width*0.90,backgroundColor:'#fff',alignItems:'center',padding:20,borderRadius:25,borderBottomRightRadius:25,flexDirection:'row',gap:10,alignSelf:'center'},styles.shadowProp]}>

        <Text style={{fontSize:17,color:'#555',fontWeight:'500'}}>Thank your delivery partner by leaving them a tip. 100% of the tip will go to your delivery partner.</Text>
      </View>

{/* //!Bill Details//////////////////////////////// */}
      <Text style={{fontSize:19,fontWeight:'bold',color:'#151515',marginLeft:width*.05,marginTop:10}}>Bill Details</Text>


      <View style={[{width:width*0.90,backgroundColor:'#fff',alignItems:'center',padding:20,borderRadius:25,borderBottomRightRadius:25,flexDirection:'column',gap:10,alignSelf:'center'},styles.shadowProp]}>

        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>  
          <Text style={{fontWeight:'bold',color:'#555',fontSize:15}}>Item Total</Text>
          <Text style={{color:'#151515',fontWeight:'bold',fontSize:17}}>&#8377;{total}</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>  
          <Text style={{fontWeight:'bold',color:'#555',fontSize:15,textDecorationLine:'underline',textDecorationStyle:'dotted'}}>Delivery Fee</Text>
          <Text style={{color:'#151515',fontWeight:'bold',fontSize:17}}>&#8377;{deliveryFee}</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',borderTopWidth:1,borderBottomWidth:1,borderColor:'#777',paddingVertical:15,borderStyle:'dotted'}}>  
          <Text style={{fontWeight:'bold',color:'#555',fontSize:15}}>Item Discount</Text>
          <Text style={{color:'green',fontWeight:'bold',fontSize:17}}>-&#8377;{discount}</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>  
          <Text style={{fontWeight:'bold',color:'#555',fontSize:15}}>Delivery Tip</Text>
          <Text style={{color:'#151515',fontWeight:'bold',fontSize:17}}>&#8377;{deliveryTip}</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>  
          <Text style={{fontWeight:'bold',color:'#555',fontSize:15}}>Platform fee</Text>
          <Text style={{color:'#151515',fontWeight:'bold',fontSize:17}}>&#8377;{platformFee}</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>  
          <Text style={{fontWeight:'bold',color:'#555',fontSize:15,}}>GST and Restaurant Charges</Text>
          <Text style={{color:'#151515',fontWeight:'bold',fontSize:17}}>&#8377;{gst}</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',borderTopWidth:1,borderColor:'#777',paddingVertical:15,borderStyle:'dotted'}}>  
          <Text style={{fontWeight:'bold',color:'#151515',fontSize:17}}>To Pay</Text>
          <Text style={{color:'#151515',fontWeight:'bold',fontSize:17}}>&#8377;{total+deliveryFee-discount+deliveryTip+platformFee+gst}</Text>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10, width: width }} >
                <ButtonBox onPress={handleClick} w='0.8' bg={'red'} message={'Proceed to pay'} />
            </View>


      </View>
      

{/* //!cancellation note//////////////////////////////// */}
      <Text style={{fontSize:19,fontWeight:'bold',color:'#151515',marginLeft:width*.05,marginTop:20}}>Review your order and address details to avoid cancellation</Text>
      

      
    </View>
  </ScrollView>)
}
