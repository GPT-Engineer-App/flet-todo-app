import React, { useState } from "react";
import { Box, Button, Input, VStack, HStack, Text, IconButton, useToast } from "@chakra-ui/react";
import { FaTrash, FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const toast = useToast();

  const handleAddTodo = () => {
    if (input === "") {
      toast({
        title: "No input",
        description: "Please enter a todo item.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, input]);
    setInput("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <VStack p={4}>
      <Text fontSize="2xl" fontWeight="bold">
        Todo Application
      </Text>
      <HStack>
        <Input placeholder="Add a todo" value={input} onChange={(e) => setInput(e.target.value)} />
        <IconButton icon={<FaPlus />} isRound="true" onClick={handleAddTodo} />
      </HStack>
      <VStack>
        {todos.map((todo, index) => (
          <HStack key={index}>
            <Text>{todo}</Text>
            <IconButton icon={<FaTrash />} isRound="true" onClick={() => handleDeleteTodo(index)} />
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default Index;
