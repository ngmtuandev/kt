import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const Screen1 = ({ navigation }) => {
  const [listData, setListData] = useState([]);
  const [err, setErr] = useState(false);
  const [data, setData] = useState({
    username: "email 1",
    pass: "pass 1",
  });
  useEffect(() => {
    fetch("https://657274dbd61ba6fcc014f8d7.mockapi.io/todo", {
      method: "GET",
    })
      .then((rs) => rs.json())
      .then((data) => {
        if (data) {
          setListData(data);
        }
      });
  }, []);

  const login = () => {
    const check = listData.filter((item) => item.email === data.username);
    console.log("check : ", check);
    if (!check) {
      setErr(true);
    } else {
      const checkPass = data.pass === check[0].pass;
      if (checkPass === false) {
        setErr(true);
      } else {
        navigation.navigate("screen2", {
          list: listData,
          user: check,
        });
      }
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <View>
        <View>
          <TextInput
            onChangeText={(value) => setData({ ...data, username: value })}
            placeholder="email"
          ></TextInput>
        </View>
        <View>
          <TextInput
            onChangeText={(value) => setData({ ...data, pass: value })}
            placeholder="user name"
          ></TextInput>
        </View>
      </View>
      <TouchableOpacity onPress={login}>
        <Text>Register</Text>
      </TouchableOpacity>
      <View>{err && <Text style={{ color: "red" }}>Lỗi đăng nhập</Text>}</View>
    </View>
  );
};

export default Screen1;
