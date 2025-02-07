import React, { useState } from "react";
import { View, Text, Button, TextInput, FlatList } from "react-native";
import { useGetBooksQuery, useAddBookMutation } from "../slices/books-slice";

export default function BooksScreen() {
  const { data: books, refetch } = useGetBooksQuery();
  const [addBook] = useAddBookMutation();
  const [title, setTitle] = useState("");

  const handleAddBook = async () => {
    if (title.trim()) {
      await addBook({ title });
      setTitle("");
      refetch();
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Enter Book Title"
        style={{ borderBottomWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Button title="Add Book" onPress={handleAddBook} />
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}
