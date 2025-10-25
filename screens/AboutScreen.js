import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

const AboutScreen = () => {
  return (
    <View style={styles.container}>
       <Image source={require("../assets/profile.jpeg")} width={1} height={1} style={styles.profile}/>
       <Text style={styles.username}>Unknown User</Text>
       <Text style={styles.userid}>@userid_{ Math.round(Math.random(0) * 100 * 100 * 100) }</Text>
       <View style={styles.options}>
        <Pressable onPress={()=> alert("chill, it's just a demo app")}>
          <Text style={styles.btnTxt}>Payment</Text>
        </Pressable>
         <Pressable onPress={()=> alert("chill, it's just a demo app")}>
          <Text style={styles.btnTxt}>Orders</Text>
        </Pressable>
        <Pressable onPress={()=> alert("chill, it's just a demo app")}>
          <Text style={styles.btnTxt}>Address</Text>
        </Pressable>
        <Pressable onPress={()=> alert("chill, it's just a demo app")}>
          <Text style={styles.btnTxt}>Settings</Text>
        </Pressable>
       </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  profile :{
    maxHeight: 200,
    maxWidth: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#b6a6fdff",
  },
  username: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 1,
    marginTop: 10,
    marginBottom: 3,
    textTransform: "uppercase"
  },
  userid: {
    paddingVertical: 4,
    paddingHorizontal: 5,
    backgroundColor: "#ddd",
    borderWidth: 1,
    borderColor: "#afaeaeff",
    borderRadius: 4
  }, 
  options:{
    position: "absolute",
    width: "100%",
    bottom: "0.5%"
  },
  btnTxt: {
    paddingVertical: 10,
    width: "100%",
    borderTopWidth: 2,
    fontSize: 15,
    borderTopColor: "#ddd",
    textAlign: "center"
  }
});
export default AboutScreen