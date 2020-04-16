import React from 'react';
import { Text } from 'react-native';

export default function MyApp() {

  function getFullName(fName, mName, lName){
    return fName + " " + mName + " " + lName
  }

  const pet = "Dog";
  return (
    
      <Text> 
        {"\n\n\n\n\n\n\t\t"}
        Hello, I am a student in CIS 340!
        {"\n\n\t\t"}
        My full name is {getFullName("Colin", "Alexander", "Young")}
        {"\n\n\t\t"}
        I have a {pet}!
      </Text>
      
  );
}

