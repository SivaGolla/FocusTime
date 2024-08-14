import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utilities/colors';
import { RoundedButton} from '../Components/RoundedButton';
import { spacings, fontSizes } from '../utilities/sizes';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          label="What would you like to focus on?"
          onChangeText={ setSubject }
        />

        <View style={styles.button} > 
          <RoundedButton 
            title='+' 
            size={50} 
            onPress={() => {
              addSubject(subject);
            }} 
          />
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  textInput: {
    flex: 1,
    marginRight: spacings.small
  },  
  button: {
    justifyContent: 'center'
  },
  inputContainer: {
    paddingTop: spacings.large,
    flexDirection: 'row',
    justifyContent: 'top',
  },
});
