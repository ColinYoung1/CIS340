import React from 'react';
import { Text, TextInput, View } from 'react-native';



function MyApp(){

  return (
    <View>
      <Text> 
        {"\n\n"}
        Hello, I am a student in CIS 340!
        
      </Text>
      
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'Center',
      alignItems: 'Center'

    }}>
      <Text> {"\n\n"}Welcome to My Class </Text>
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />

    </View>
  )
}