import React from 'react';
import { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { RootStackScreenProps } from '../../navigation/types';

const AddItemScreen = () => {

  const stackNavigation = useNavigation<RootStackScreenProps<'AddItem'>['navigation']>();

    const [enteredItemNameText, setEnteredItemNameText] = useState('');

    function itemNameInputHandler(enteredText: string) {
        setEnteredItemNameText(enteredText);
    }

    const onAddItemPress = () => {
      stackNavigation.navigate('MainNav', {
        screen: 'Home',
        params: { itemName: enteredItemNameText }
      });
    }

    const onCancelPress = () => {
      stackNavigation.navigate('MainNav', {
        screen: 'Home',
        params: { itemName: '' }
      })
    }

    return (
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter item name"
          onChangeText={itemNameInputHandler}
          value={enteredItemNameText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancelPress} color="#f31282" />
            <Button title="Add Item" onPress={onAddItemPress} color="#b180f0" />
          </View>
        </View>
      </View>
    );
}

export default AddItemScreen;

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#311b6b',
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#e4d0ff',
      backgroundColor: '#e4d0ff',
      color: '#120438',
      borderRadius: 6,
      width: '100%',
      padding: 16,
    },
    buttonContainer: {
      marginTop: 16,
      flexDirection: 'row',
    },
    button: {
      width: 100,
      marginHorizontal: 8,
    },
  });