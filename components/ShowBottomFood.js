import {TouchableOpacity, View,Text,Dimensions,FlatList,Image,StyleSheet } from "react-native";
import ButtonBox from "../components/textfield/ButtonBox";
import { useNavigation } from "@react-navigation/native";
import { serverURL } from "../services/FetchNodeServices";
import { useDispatch } from "react-redux";
var { width, height } = Dimensions.get('screen')

export default function ShowBottomFood({item,refresh,setRefresh}){
   var navigation=useNavigation()
   var dispatch=useDispatch()
    const handleSetOrder=(food)=>{
      
     dispatch({type:'ADD_ORDER',payload:[item.fooditemid,item]})
     setRefresh(!refresh) 
    }
        return(
          <TouchableOpacity>
        
        <View style={{width:width,height:height*0.25}} >
                <Image
          style={{resizeMode:'cover',marginBottom:5, width:width , height:height*0.35,}}
          source={{uri:`${serverURL}/images/${item.icon}`}}
        />
        <View style={{marginHorizontal:15}}>
        <View style={{padding:4,width:width*0.55}} >
                <Image
          style={{resizeMode: 'contain', width: 25, height: 30}}
          source={{uri:`${serverURL}/images/${item.foodtype}.png`}}
        />
        <View style={{flexDirection:'row',width:width}}>
        <View style={{width:width*0.6}}>
        <Text style={{fontSize:18,fontWeight:"bold",color:'#000'}}>{item.fooditemname}</Text>
        <View style={{flexDirection:'row',marginVertical:5}}>
        <Text style={{fontSize:18,fontWeight:480,color:'#212121'}}>&#8377;<Text style={{textDecorationLine:'line-through'}}>{item.price}</Text></Text>
        <Text style={{fontSize:18,fontWeight:480,color:'#212121',marginLeft:10}}>&#8377;{item.offerprice}</Text>
        </View>
        </View>
        <View style={{width:width*0.4}}>
             <ButtonBox onPress={()=>handleSetOrder(item)}  w={0.20} bg={'red'} message={'Add'} />
        </View>
        </View>
        
        <View style={{flexDirection:'row',marginVertical:5,alignItems:'center'}}>
        <Image
          style={{resizeMode: 'contain', width: 16, height: 16}}
          source={{uri:`${serverURL}/images/ratting.png`}}
        />
        


        <Text style={{fontSize:16,color:'#4cd137',fontWeight:'bold'}}> {item.ratings}</Text>
        <Text style={{fontSize:16,color:'#000'}}> (5)</Text>
        </View>
              
              </View>
              <Text numberOfLines={2} style={{fontSize:16,width:width*0.7}}>{item.ingredients}</Text>
              
              </View>

              </View>
              
    </TouchableOpacity>
              )
            
   }

 