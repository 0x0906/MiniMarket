import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { Button } from "react-native";

const PaymentResultScreen = ({ route, navigation }) => {
  const { isSuccess } = route.params;
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isSuccess ? "#D4EDDA" : "#F8D7DA" },
      ]}
    >
      {isSuccess ? (
        <View style={styles.response}>
          <Image
            source={require("../assets/success.png")}
            width={96}
            height={96}
          />
          <Text style={styles.resultH}>Payment Success</Text>
          <Text style={styles.resultD}>order placed</Text>
        </View>
      ) : (
        <View style={styles.response}>
          <Image
            source={require("../assets/failed.png")}
            width="96"
            height="96"
          />
          <Text style={styles.resultH}>Payment Failed</Text>
          <Text style={styles.resultD}>order not placed</Text>
        </View>
      )}
      <Pressable
        style={styles.paymentBtn}
        onPress={() => navigation.navigate("Main")}
      >
        <Text style={styles.btnTxt}>Go back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  response: {
    alignItems: "center",
  },
  resultH: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  resultD: {
    fontSize: 20,
    textAlign: "center",
    color: "#3a3737ff",
    letterSpacing: 2,
  },
  btnTxt: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  paymentBtn: {
    position: "absolute",
    marginTop: 20,
    backgroundColor: "#333333",
    borderRadius: 8,
    paddingVertical: 14,
    width: "80%",
    bottom: "5%",
  },
});

export default PaymentResultScreen;
