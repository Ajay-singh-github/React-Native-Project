import { View,Text,Dimensions,FlatList,Image } from "react-native";
import ButtonBox from "../components/textfield/ButtonBox";
import { useNavigation } from "@react-navigation/native";
import { serverURL } from "../services/FetchNodeServices";
//import { serverURL } from "../services/FetchNodeServices";
var { width, height } = Dimensions.get('screen')

export default function CircleComponent({listFood}){
   var navigation=useNavigation()
   var colorList=['#130f40','#4834d4','#2ecc71','#8e44ad','#d35400','#f1c40f','#16a085']
  //  var listFood=[{id:1,name:'Poha',image:'burgur.png'},{id:2,name:'Samosa',image:'cb.png'},{id:3,name:'Dal Fry',image:'burgur.png'},{id:4,name:'Kachori',image:'cb.png'},{id:5,name:'Chole',image:'burgur.png'}]
  
  console.log('ajajaajjajajaajajajaajjaajaj:',listFood)
   const showFoodList=({item})=>{
   
        return(
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <View style={{marginHorizontal:4, justifyContent: 'center', alignItems: 'center', marginVertical: 5, width:100,height:50, backgroundColor:'#fff'  }} >
                <Image
          style={{resizeMode: 'contain', width: 80, height:80 }}
          // source={require(`../assets/burgur.png`)}
          source={{uri:`${serverURL}/images/${item.icon}`}}
        />
        </View>
              <Text style={{letterSpacing:1,color:'#576574',fontWeight:400,}}>{item.categoryname}</Text>
              
              </View>)
            
   }


    return( 
      <View style={{flexDirection:'column',marginBottom:20}}>
        <View style={{width:width,justifyContent:'center',alignItems:'center'}}>
          <Text style={{marginVertical:10, letterSpacing:2,fontWeight:400}}>WHATS ON YOUR MIND?</Text>
        </View>
       <FlatList
       data={listFood}
       renderItem={showFoodList}
       keyExtractor={item => item.categoryid}
       horizontal={true}
       
       showsHorizontalScrollIndicator={false}
       />
      </View>)
     
}