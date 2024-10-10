import {TouchableOpacity, View,Text,Dimensions,FlatList,Image,StyleSheet } from "react-native";
import ButtonBox from "../components/textfield/ButtonBox";
import { useNavigation } from "@react-navigation/native";
import { serverURL } from "../services/FetchNodeServices";

var { width, height } = Dimensions.get('screen')

export default function FoodList({listFood,refRBSheet,setSelectedFood}){
   var navigation=useNavigation()
    console.log("food list console.log ",listFood)
   
  //  var listFood=[{id:1,foodtype:'Veg', fooditemname:'Veg Biryani',price:200,offerprice:180, ratings:4,likes:123,ingrediants:'Rice,Seasional Vegitables,Biryani Masala,Biryani Masala',icon:'vegpulao.webp'},
  //  {id:1,foodtype:'Veg', fooditemname:'Malai Kofta',price:200,offerprice:180, ratings:4,likes:123,ingrediants:'Rice,Seasional Vegitables,Biryani Masala',icon:'malailofta.png'},
  //  {id:1,foodtype:'Veg', fooditemname:'Malai Kofta',price:200,offerprice:180, ratings:4,likes:123,ingrediants:'Rice,Seasional Vegitables,Biryani Masala',icon:'malailofta.png'},
  //  {id:1,foodtype:'Veg', fooditemname:'Malai Kofta',price:200,offerprice:180, ratings:4,likes:123,ingrediants:'Rice,Seasional Vegitables,Biryani Masala',icon:'malailofta.png'},
  //  {id:1,foodtype:'Veg', fooditemname:'Malai Kofta',price:200,offerprice:180, ratings:4,likes:123,ingrediants:'Rice,Seasional Vegitables,Biryani Masala',icon:'malailofta.png'},
  //  {id:1,foodtype:'Veg', fooditemname:'Malai Kofta',price:200,offerprice:180, ratings:4,likes:123,ingrediants:'Rice,Seasional Vegitables,Biryani Masala',icon:'malailofta.png'},
  //  {id:1,foodtype:'Veg', fooditemname:'Malai Kofta',price:200,offerprice:180, ratings:4,likes:123,ingrediants:'Rice,Seasional Vegitables,Biryani Masala',icon:'malailofta.png'}]
  
   const showFoodList=({item})=>{
   
      const handleClick=(food)=>{
        refRBSheet.current.open()
        setSelectedFood(food)
      }

        return(
          <TouchableOpacity 
          onPress={()=>handleClick(item) }
          >
        <View style={{padding:10,marginBottom:5,flexDirection:'row'}}>
        <View style={{padding:4,flexDirection:'column',width:width*0.55}} >
                <Image
          style={{resizeMode: 'contain', width: 20, height: 20}}
          source={{uri:`${serverURL}/images/${item.foodtype}.png`}}
        />
        <Text style={{fontSize:20,fontWeight:"bold",color:'#000',marginVertical:5}}>{item.fooditemname}</Text>
        
        <View style={{flexDirection:'row',marginVertical:5}}>
        <Text style={{fontSize:18,fontWeight:"bold",color:'#000'}}>&#8377;<Text style={{textDecorationLine:'line-through'}}>{item.price}</Text></Text>
        <Text style={{fontSize:18,fontWeight:"bold",color:'#000',marginLeft:10}}>&#8377;{item.offerprice}</Text>
        </View>

        <View style={{flexDirection:'row',marginVertical:5,alignItems:'center'}}>
        <Image
          style={{resizeMode: 'contain', width: 16, height: 16}}
          source={{uri:`${serverURL}/images/ratting.png`}}
        />
        <Text style={{fontSize:16,color:'#4cd137',fontWeight:'bold'}}> {item.ratings}</Text>
        <Text style={{fontSize:16,color:'#000'}}> ({5})</Text>
        </View>
        <Text numberOfLines={2} style={{fontSize:16}}>{item.ingredients}</Text>
              
              </View>
              <View style={{padding:4,flexDirection:'column',width:width*0.45}} >
                <Image
          style={{resizeMode:'cover', width:width*0.4 , height:height*0.19,borderRadius:20}}
          source={{uri:`${serverURL}/images/${item.icon}`}}
        />
        </View>     
              </View>
              <View
  style={{width:width*0.92,
    alignSelf:'center',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
    </TouchableOpacity>
              )
            
   }


    return( 
      <View style={{flexDirection:'column'}}>
        <View style={{width:width,justifyContent:'center',alignItems:'center'}}>
          <Text style={{marginVertical:10, letterSpacing:2,fontWeight:400}}>WHATS ON YOUR MIND?</Text>
        </View>
       
       <FlatList
       data={listFood}
       renderItem={showFoodList}
       keyExtractor={item => item.fooditemid}
       
       
       />
      
    
      </View>)
     
}