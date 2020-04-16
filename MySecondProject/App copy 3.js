import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function MyApp() {


  return (
    <View>
      <Text> 
        {"\n\n\n\n\n\n\t\t"}
        Hello, I am a student in CIS 340!
        {"\n\n\t\t"}
      </Text>
      <TextInput 
      style={{
        height: 40,
        borderColor: "gray",
        borderWidth: 2,
      }}
       
      /> 

      
      </View>
  );
}

