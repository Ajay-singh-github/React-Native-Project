import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import Icon from 'react-native-vector-icons/EvilIcons';
import TextBox from '../components/TextBox';
import React, {useEffect, useState} from 'react';
import {useRef} from 'react';
import { postData } from '../services/FetchNodeServices';
import { useNavigation } from '@react-navigation/native';

const Otp = () => {
  var navigation=useNavigation()
  const txt1 = useRef();
  const txt2 = useRef();
  const txt3 = useRef();
  const txt4 = useRef();
  const txt5 = useRef();
  const txt6 = useRef();
  const [box1, setBox1] = useState('');
  const [box2, setBox2] = useState('');
  const [box3, setBox3] = useState('');
  const [box4, setBox4] = useState('');
  const [box5, setBox5] = useState('');
  const [box6, setBox6] = useState('');
  const [count, setCount] = useState(15);
  const [otp, setOtp] = useState('');
  const generateOTP=async()=>{
   var gotp=parseInt(Math.random()*899999)+100000
   var result=await postData('sms/sendotp',{otp:gotp,mobileno:'9301123085'})
   console.log(gotp)
    setOtp(gotp)
    
  }
 const handleVerifyOtp=()=>{
   var inputOtp=box1+box2+box3+box4+box5+box6
   if(inputOtp==otp)
   {
   // alert('correct')
   navigation.navigate('third')
    
   }
   else
   { 
    alert('invalid otp')
   }

 }




 useEffect(()=>{
  generateOTP()

 },[])
  useEffect(() => {
  
    const interval = setInterval(() => {
      if (count == 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Icon name={'arrow-left'} size={30} />
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={[styles.title, {marginLeft: '48%', fontSize: 15}]}>
          Skip
        </Text>
      </View>

      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
        <Text style={[styles.title, {fontWeight: '400'}]}>
          We have sent a verification code to
        </Text>
      </View>

      <View style={styles.otpView}>
        <TextInput
          onChangeText={txt => {
            setBox1(txt);
            if (txt.length >= 1) {
              txt2.current.focus();
            }
          }}
          value={box1}
          ref={txt1}
          style={[
            styles.inputView,
            {borderColor: box1.length >= 1 ? 'black' : '#BDB6B3'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
        />

        <TextInput
          onChangeText={txt => {
            setBox2(txt);
            if (txt.length >= 1) {
              txt3.current.focus();
            } else if (txt.length < 1) {
              txt1.current.focus();
            }
          }}
          value={box2}
          ref={txt2}
          style={[
            styles.inputView,
            {borderColor: box2.length >= 1 ? 'black' : '#BDB6B3'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
        />

        <TextInput
          onChangeText={txt => {
            setBox3(txt);
            if (txt.length >= 1) {
              txt4.current.focus();
            } else if (txt.length < 1) {
              txt2.current.focus();
            }
          }}
          value={box3}
          ref={txt3}
          style={[
            styles.inputView,
            {borderColor: box3.length >= 1 ? 'black' : '#BDB6B3'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
        />

        <TextInput
          onChangeText={txt => {
            setBox4(txt);
            if (txt.length >= 1) {
              txt5.current.focus();
            } else if (txt.length < 1) {
              txt3.current.focus();
            }
          }}
          value={box4}
          ref={txt4}
          style={[
            styles.inputView,
            {borderColor: box4.length >= 1 ? 'black' : '#BDB6B3'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
        />

        <TextInput
          onChangeText={txt => {
            setBox5(txt);
            if (txt.length >= 1) {
              txt6.current.focus();
            } else if (txt.length < 1) {
              txt4.current.focus();
            }
          }}
          value={box5}
          ref={txt5}
          style={[
            styles.inputView,
            {borderColor: box5.length >= 1 ? 'black' : '#BDB6B3'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
        />

        <TextInput
          onChangeText={txt => {
            setBox6(txt);
            if (txt.length >= 1) {
              txt6.current.focus();
            } else if (txt.length < 1) {
              txt5.current.focus();
            }
          }}
          value={box6}
          ref={txt6}
          style={[
            styles.inputView,
            {borderColor: box6.length >= 1 ? 'black' : '#BDB6B3'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginVertical: 10,
          justifyContent: 'center',
        }}>
        {count !== 0 ? (
          <Text style={{fontSize: 15, fontWeight: '600', color: 'blue'}}>
            Check text messages for your OTP
          </Text>
        ) : (
          ''
        )}
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginVertical: 20,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            marginRight: 5,
            color: 'black',
          }}>
          Didn't get the OTP?
        </Text>
        {count == 0 ? (
          <Text
            style={{fontSize: 15, fontWeight: '600', color: '#CB202D'}}
            onPress={() => {
              setCount(15);
            }}>
            Resend SMS
          </Text>
        ) : (
          <Text style={{fontSize: 15, fontWeight: '600', color: '#A59698'}}>
            Resend SMS in
          </Text>
        )}
        {count !== 0 && (
          <Text style={{marginLeft: 10, fontSize: 15}}>{count + ' sec'}</Text>
        )}
      </View>

      <TouchableOpacity
        onPress={handleVerifyOtp}
        disabled={
          box1 !== '' &&
          box2 !== '' &&
          box3 !== '' &&
          box4 !== '' &&
          box5 !== '' &&
          box6 !== ''
            ? false
            : true
        }
        style={[
          styles.btn,
          {
            backgroundColor:
              box1 !== '' &&
              box2 !== '' &&
              box3 !== '' &&
              box4 !== '' &&
              box5 !== '' &&
              box6 !== ''
                ? '#CB202D'
                : '#A59698',
          },
        ]}>
        <Text
          style={{color: 'white', fontSize: 20, fontWeight: 'bold', margin: 5}}>
          Verify OTP
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginVertical: 10,
          justifyContent: 'center',
          top: '70%',
        }}>
        <Text style={{fontSize: 15, fontWeight: '600', color: '#CB202D'}}>
          Go back to login methods
        </Text>
      </View>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginLeft: 5,
  },
  inputView: {
    width: 50,
    height: 50,
    borderWidth: 1.5,
    borderRadius: 10,
    margin: 8,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
  },
  otpView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 50,
  },
  btn: {
    width: '60%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#CB202D',
    alignSelf: 'center',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
