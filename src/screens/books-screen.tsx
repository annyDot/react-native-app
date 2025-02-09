import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import { useGetBooksQuery, useAddBookMutation } from "../slices/books-slice";
import { useTheme } from "../contexts/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BooksScreen() {
  const { theme } = useTheme();
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
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme === "dark" ? "#2c3e50" : "#ecf0f1" },
      ]}
    >
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Enter Book Title"
        placeholderTextColor={theme === "dark" ? "#bbb" : "#555"}
        style={[styles.input, { color: theme === "dark" ? "#fff" : "#000" }]}
      />
      <Button title="Add Book" onPress={handleAddBook} />
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ color: theme === "dark" ? "#fff" : "#000" }}>
            {item.title}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
});
