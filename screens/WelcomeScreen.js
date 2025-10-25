import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function WelcomeScreen({ navigation }) {
  const getIsFirstTime = async () => {
    try {
      const value = await AsyncStorage.getItem("isFirst");
      if (value !== null) return value === "true";
    } catch (e) {
      console.error("getIsFirstTime", e);
      return false;
    }
  };
  const setIsFirstTime = async () => {
    try {
      await AsyncStorage.setItem("isFirst", "true");
    } catch (e) {
      console.error("setIsFirstTime:", e);
    }
  };
  useEffect(() => {
    (async () => {
      const alreadyShown = await getIsFirstTime();
      if (alreadyShown) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Main" }],
        });
      }
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/first_logo.png")}
        style={styles.image}
      />
      <Text style={styles.headTxt}>MiniMarket</Text>
      <Text style={styles.stubTxt}>Browse, select, and checkout quickly.</Text>
      <Pressable
        style={styles.startBtn}
        onPress={async () => {
          await setIsFirstTime();
          navigation.reset({
            index: 0,
            routes: [{ name: "Main" }],
          });
        }}
      >
        <Text style={styles.startBtnTxt}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  image: { width: "100%", height: "21%" },
  headTxt: { fontWeight: "bold", fontSize: 40, color: "#212121" },
  stubTxt: {
    letterSpacing: 2,
    color: "#757575",
    fontStyle: "italic",
    fontSize: 15,
    marginTop: 1,
  },
  startBtn: {
    position: "absolute",
    backgroundColor: "#1E90FF",
    borderRadius: 8,
    paddingHorizontal: "30%",
    paddingVertical: 10,
    bottom: "5%",
  },
  startBtnTxt: { fontSize: 18, fontWeight: "bold", color: "#fff" },
});
