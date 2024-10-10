import { View,Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CircleComponent from "../components/CircleComponent";
import FoodList from "../components/FoodList";
var { width, height } = Dimensions.get('screen')
import RBSheet from "react-native-raw-bottom-sheet";
import { useRef } from "react";
import { useState,useEffect } from "react";
import { postData } from "../services/FetchNodeServices";
import ShowBottomFood from "../components/ShowBottomFood";
import FloatingCart from "../components/FloatingCart";

export default function Home(props){
   var navigation=useNavigation()
   const refRBSheet = useRef();
   const [categories,setCategories]=useState([]) 
   const [foodItems,setFoodItems]=useState([]) 
   const [selectedFood,setSelectedFood]=useState({})
   const [refresh,setRefresh]=useState(false)

   const fetchAllCategory=async()=>{
    var result=await postData('restaurants/fetch_all_category',{restaurantid:28})
    setCategories(result.result) 
   }


   const fetchAllFood=async()=>{
    var result=await postData('restaurants/fetch_all_sub_category',{restaurantid:28})
    setFoodItems(result.result) 
   }

   useEffect(function(){
  fetchAllCategory()
  fetchAllFood()
   },[])


    return(<View  style={{position:'relative', backgroundColor:'#fff',height:height,flex: 1}}>
      <View style={{ position:'absolute',zIndex:2,bottom:10, width:width,justifyContent:'center',alignItems:'center'}}>
           <FloatingCart  />
           </View>  
       <CircleComponent listFood={categories} /> 
      <View style={{width:width,justifyContent:'center',alignItems:'center'}}>
       <FoodList listFood={foodItems} refRBSheet={refRBSheet} setSelectedFood={setSelectedFood}/>
       </View>
   
       <RBSheet
             ref={refRBSheet}
             height={500}
             openDuration={250}
             customStyles={{
               container: {
                borderTopLeftRadius:25,
                borderTopRightRadius:25
                
               }
             }}
           >
            <ShowBottomFood refresh={refresh} setRefresh={setRefresh} item={selectedFood}  />
           </RBSheet>
          
     
       </View>)
}