import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import React, { useState, useRef } from "react";
import CardCom from "../components/CardCom";

const data = [
  { name: "Tomato - 3kg", price: 90, imageUrl: "https://unsplash.com/photos/g4wzhY8qiMw/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzYxMjM4Mjc2fA&force=true" },
  { name: "Potato - 2kg", price: 29.64, imageUrl: "https://unsplash.com/photos/B0s3Xndk6tw/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzYxMjM3MDE0fA&force=true" },
  { name: "Onion - 5kg", price: 85.5, imageUrl: "https://unsplash.com/photos/pmS8XSz5NU0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fE9uaW9ufGVufDB8fHx8MTc2MTIzODY4M3ww&force=true" },
  { name: "Carrot - 4kg", price: 280, imageUrl: "https://unsplash.com/photos/IZq1FV87qpM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8Q2Fycm90fGVufDB8fHx8MTc2MTIzODcxMnww&force=true" },
  { name: "Cabbage - 3kg", price: 75.3, imageUrl: "https://unsplash.com/photos/gofXEm3c_Ho/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8Q2FiYmFnZXxlbnwwfHx8fDE3NjEyMzg3Mzl8MA&force=true" },
  { name: "Cauliflower - 2kg", price: 76.6, imageUrl: "https://unsplash.com/photos/hnEp8wnCj4g/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzYxMjM4NzU5fA&force=true" },
  { name: "Pumpkin - 5kg", price: 107.95, imageUrl: "https://unsplash.com/photos/Nu4u9g7Sgdw/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzYxMjM4Nzg1fA&force=true" },
  { name: "Beetroot - 3kg", price: 133.23, imageUrl: "https://unsplash.com/photos/udo5pIvRfrA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8QmVldHJvb3R8ZW58MHx8fHwxNzYxMjM4ODA0fDA&force=true" },
  { name: "Capsicum - 4kg", price: 260, imageUrl: "https://unsplash.com/photos/gpP-OkJ5BbI/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzYxMjM4ODM0fA&force=true" },
  { name: "Coriander Leaves - 1kg", price: 20, imageUrl: "https://unsplash.com/photos/9rt6gV_IjhA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8Q29yaWFuZGVyJTIwTGVhdmVzfGVufDB8fHx8MTc2MTIzODg1N3ww&force=true" }
];

export default function DashboardScreen({}) {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const searchInputRef = useRef();
  const handleSearch = () => {
    searchInputRef.current?.blur(); 
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/first_logo.png")}
          style={styles.image}
        />
        <Text style={styles.headTxt}>MiniMarket</Text>
      </View>
       <View style={styles.search}>
        <TextInput
          ref={searchInputRef}
          style={styles.searchbar}
          placeholder="Search your item here..."
          placeholderTextColor={"#000"}
          value={searchText}
          cursorHidden={true} 
          caretHidden={false} 
          onChangeText={setSearchText}
        />
        <Pressable style={styles.searchbtn} onPress={handleSearch}>
          <Text style={styles.searchbtnTxt}>Search</Text>
        </Pressable>
      </View>

      <FlatList
        data={filteredData}
        style={styles.product}
        keyExtractor={(item) => item.name}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardCom
            id={item.name}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: "10%",
    height: "100%",
  },
  search: {
    display: "flex",
    flexDirection: "row",
    width: "94.5%",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    gap: 10,
  },
  searchbar: {
    borderColor: "#007AFF",
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center",
    flex: 1,
  },
  searchbtn: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
  },
  searchbtnTxt: {
    color: "#fff",
  },
  header: {
    width: "100%",
    height: "8%",
    alignItems: "center",
    marginBottom: 40, 
  },
  image: {
    width: "50%",
    height: "100%",
    opacity: 1,
    borderRadius: 20,
  },
  headTxt: {
    fontWeight: "bold",
    fontSize: 24,
    letterSpacing: 2,
  },
  product: {
    marginVertical: 10,
    marginHorizontal: 4,
  },
});
