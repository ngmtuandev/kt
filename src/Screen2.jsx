import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, addTodo, deleteTodo } from "./store/todoSlice";

const Screen2 = ({ route }) => {
  const [dataTodo, setDatatodo] = useState("");
  const dataUsers = route.params.list;
  const user = route.params.user;
  console.log("user id", user[0].id);
  const dispatch = useDispatch();
  const { dataUser } = useSelector((state) => state.todo);
  console.log("data user uin redux", dataUser);
  useEffect(() => {
    dispatch(addUser(user[0]));
  }, []);

  const handleAdd = () => {
    dispatch(addTodo(dataTodo));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = async () => {
    console.log("data", dataUser);
    await fetch(
      `https://657274dbd61ba6fcc014f8d7.mockapi.io/todo/${user[0].id}`,
      {
        method: "put",
        body: JSON.stringify(dataUser),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <View>
      <TextInput
        onChangeText={(value) => setDatatodo(value)}
        placeholder="add todo"
      ></TextInput>
      <TouchableOpacity onPress={handleAdd}>
        <Text>Add todo</Text>
      </TouchableOpacity>
      {dataUser?.todo?.map((item) => {
        return (
          <View>
            <Text style={{ color: "red" }}>{item.todoItem}</Text>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text>Xóa</Text>
            </TouchableOpacity>
          </View>
        );
      })}
      <TouchableOpacity onPress={handleUpdate}>
        <Text>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;
