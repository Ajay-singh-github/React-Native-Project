import {TouchableOpacity, View,Text,Dimensions,FlatList,Image,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector} from "react-redux";
var { width, height } = Dimensions.get('screen')

export default function FloatingCart(){
   var navigation=useNavigation()
    var cart=useSelector(state=>state.orderData)
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",cart)
    var keys=Object.keys(cart)
    var foods=Object.values(cart)
    var total=foods.reduce(getTotal,0)
    function getTotal(t,food)
    {  return (t+ parseInt(food.offerprice>0?food.offerprice:food.price))
       

    }

    const handleShowCart=(food)=>{
     
    navigation.navigate('cart')
    }
        return(
         <>
          {keys.length>0?
          <TouchableOpacity onPress={handleShowCart}>
        
        <View style={{ padding:10, alignItems:'center', flexDirection:'row',width:width*0.9,borderRadius:10,height:height*0.07,backgroundColor:'#009432'}} >
        
        <Text style={{fontSize:16,color:'#fff',fontWeight:'bold'}}>{keys.length} Items | &#8377;{total} </Text>
        <Text style={{fontSize:16,color:'#fff',fontWeight:'bold',marginLeft:'auto'}}>View Cart</Text>
        
        </View>
              
 
              
    </TouchableOpacity>:<></>}
    </>
              )
            
   }

 