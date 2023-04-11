import React from "react";
import {Image, View,StyleSheet, ImageBackground, Text} from "react-native";

export default function LoginScreen(){
    return(
        <View style={styles.mainContainer}>
            <ImageBackground
            source={require('../assets/images/bg.png')}
            resizeMode='cover'
            style={styles.image}>
                  {/* innerContainer */}
                
            <View style={styles.innerContainer}>
            <View style={styles.smallContainer}>
            <Image 
             style={{width: 90, height: 90, borderRadius:16,}}
            source={require('../assets/images/app_logo.png')} />
            <View style={{top:10}}>
            <Text>Airline Name</Text>
            </View>
            </View>  
             </View>   
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
      },
      innerContainer:{
        top:140,
        height:'45%',
        width:'80%',
        backgroundColor:'#FFFFFF',
        alignSelf:'center',
        borderRadius:16,
      },
      smallContainer:{
        bottom:50,
        alignSelf:'center',
        
      },
      image: {
        flex: 1,
        justifyContent: 'center',
      },
})