import react,  { useState, useEffect } from "react";
import {View,ImageBackground,ActivityIndicator,StyleSheet} from "react-native";
import LoginScreen from "./LoginScreen";

const SplashScreen = ({navigation}) => {
  const [isLoading,setLoading] = useState(true);
  const [token,setToken] = useState("")
   //state for activity animation
   const [animating, setAnimating] = useState(true)
 
  const fetchToken = async () => {
    try {//https://api.utwiz.com/CrewEasy/V1.8/
      //ABEF76BB-C294-4BE9-BDD0-E70F453006B5
      const response = await fetch('http://172.16.0.2:8014/Token/ReceiveToken',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Secretkey: 'D066D869-83C6-4DBC-BF80-7388962D4EA6',
          DeviceNo: '',
          AppType: '2',
          AirlineCode:'CR',
          AppVersion:'',
          OsVersion:'',
          UserName:'',
          AccessToken:''
        }),
      })
      const statusCode = response.status
     
      if (statusCode == 200) {
        const json = await response.json()
        setToken(json.token)
         setLoading(false);
         setAnimating(false)
         console.log(json.token)

         getVersionDetails()
    } 
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }finally {
      setLoading(false);
  }
  };

  const getVersionDetails = async () =>{
    try{
      const response = await fetch('http://172.16.0.2:8014/User/GetVersionDetail',{
        method: 'POST',
        headers:{
          Accept:'application/json',
          'Content-Type': 'application/json',
          token: token
        },
        body: JSON.stringify({
          AirlineCode: "CR",
          'OS_Type': '2',
          AppVersion: '4.2.0'
        }),
      })
      const statusCode = response.status
      if (statusCode == 200) {
        const json = await response.json()
        
         setLoading(false);
         setAnimating(false)

         navigation.navigate('LoginScreen')

         console.log(json)
    } 
      setLoading(false);
    }catch(err){
      console.log(err.message)
    }
  };

  function animation(){
   return(
    setTimeout(() => {
      setAnimating(false)
  }, 5000)
   )
  }

  useEffect(() => {
    navigation.navigate('LoginScreen')
    //animation()
    fetchToken()
}, [])

  return(
    <View style={styles.container}>
    <ImageBackground 
    style={styles.image}
    source={require('../assets/images/bg.png')} 
    resizeMode='cover'>

<ActivityIndicator
                animating={animating}
                color="#FFFF"
                size="large"/>
    </ImageBackground>
   
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default SplashScreen;