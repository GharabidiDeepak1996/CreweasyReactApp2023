import React from "react";
import { Image, View, StyleSheet, ImageBackground, Text } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require("../assets/images/bg.png")}
        resizeMode="cover"
        style={styles.backgroundImage}>
        
        {/* innerContainer */}
        <View style={styles.innerContainer}>
          <View style={{ position: "relative", top: -50 }}>
            <Image
              style={styles.logoImage}
              source={require("../assets/images/app_logo.png")}/>

            <Text>Airline Name</Text>
            <Text>Airline Name</Text>
            <Text>Airline Name</Text>
            <Text>Airline Name</Text>
            <Text>Airline Name</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  innerContainer: {
    top: 140,
    height: "45%",
    width: "80%",
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    borderRadius: 16,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  logoImage: {
    width: 90,
    height: 90,
    borderRadius: 16,
    alignSelf: "center",
    backgroundColor: "#ff3fff",
    justifyContent: "center",
  },
  formattingContainer: {
    flexDirection: "column",
  },
});
