import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from "@react-navigation/drawer"
import { View,Text,Image,Alert, StyleSheet } from "react-native";
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "../screen/Home"
import Login from "../screen/Logina"
import Otp from "../screen/OTP"
import Third from "../screen/Thirdpage"
import ProductList from "../screen/ProductList";
import AppHeader from "../components/textfield/AppHeader";
import Cart from "../screen/Cart";
import { getStoreData, removeStoreData } from "../storage/AsyncStroage";

import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";


var Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();
export default function RootNavigaton(props) {
   const [data,setData]=useState()
   const [mobile,setMobileNo]=useState()
   const fetch =async()=>
   {
      setData(await getStoreData("USERDATAINFORMATION") )
      setMobileNo(await getStoreData("USER"))
      console.log("lllllllllllllllllllllllllllllllllllllllllllllll",mobile,data)
      
   }
   useEffect (function (){
    // setData( getStoreData("USERDATAINFORMATION"))
    //  console.log("llllllllllllllllllllllllllllllllllll",data,getStoreData("USERDATAINFORMATION"))
    fetch()
   },[])
    const ProjectDrawer = () => {
        return (
          <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={props => <CustomDrawerContent {...props} />}>  
           <Drawer.Screen  name="Home" component={Home} options={{headerShown:false,
             
             drawerIcon:()=><MCI name={"home-city"} size={24} />,
             
             }} 
             />


            {/* <Drawer.Screen  name="Login" component={Login} options={{header:AppHeader,
             
             drawerIcon:()=><MCI name={"home-city"} size={24} />,
             
             }}  */}
                 <Drawer.Screen  name="Login" component={Login} options={{headerShown:false,
             
             drawerIcon:()=><MCI name={"home-city"} size={24} />,
             
             }} 
             />


          </Drawer.Navigator>    
      )}


        function CustomDrawerContent(props) {
          const handleLogout = () => {
            Alert.alert(
              'Logout Confirmation', // Alert title
              'Are you sure you want to logout?', // Alert message
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Logout Cancelled'),
                  style: 'cancel', // Makes the cancel button stand out
                },
                {
                  text: 'Yes', // Text for the "Yes" button
                  onPress: async() => {
                    // Perform logout action here
                   await removeStoreData('USERDATAINFORMATION') // Example of removing user token
                   await removeStoreData('USER') // Example of removing user token

                      .then(() => {
                        alert('Logged out successfully');
                        // Navigate to login screen or perform other actions
                      })
                      .catch((error) => console.error('Error during logout', error));
                  },
                },
              ],
              { cancelable: false } // Prevents dismissing by tapping outside
            );
          };
    return (
      <DrawerContentScrollView {...props}>

        <View style={{display:'flex',paddingTop:20,paddingLeft:20,paddingRight:20,alignItems:'center',flexDirection:'column'}}>
        <Image  style={{marginBottom:5,borderRadius:50,resizeMode:'contain',width:100,height:100}}
        source={require('../assets/ajay.jpg')}/>
         <Text style={{fontWeight:'bold'}}>{data?.name}</Text> 
        <Text>+91 {mobile?.mobileno}</Text> 
        <Text style={{fontSize:12}}>{data?.emailid}</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text>--------------------------------------</Text>
        </View>
        <View>
          <Text style={{paddingLeft:15}}>Address:{data?.address}</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text>--------------------------------------</Text>
        </View>
        <DrawerItemList {...props}/>
          <DrawerItem
            label="My Profile"
            onPress={()=>props.navigation.navigate('hello')}
            icon={()=><MCI name={"account-box"} size={24}  />}
          />
          <DrawerItem
            label="Settings"
            icon={()=><MCI name={"account-settings"} size={24} />}
          />

          <DrawerItem label="Logout" onPress={handleLogout} icon={()=><MCI name={"logout"} size={24} />} />
        
      </DrawerContentScrollView> 
    );
  };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Home1"} >
                
                <Stack.Screen component={Login} name="login" options={{ headerShown: false }} />
                <Stack.Screen component={Otp} name="otp" options={{ headerShown: false }} />
                <Stack.Screen component={Third} name="third" options={{ headerShown: false }} />
                <Stack.Screen component={ProductList} name="productlist" options={{ headerShown: false }} />
                {<Stack.Screen name="Home1"  component={ProjectDrawer} options={{header:AppHeader}}   />}
                <Stack.Screen component={Cart} name="cart" options={{ headerShown: false }} />

           
            </Stack.Navigator>
        </NavigationContainer>
    )
}