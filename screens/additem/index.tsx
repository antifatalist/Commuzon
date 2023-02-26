import React from 'react';
import { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { RootStackScreenProps } from '../../navigation/types';
import axios from 'axios';

const AddItemScreen = () => {

  const stackNavigation = useNavigation<RootStackScreenProps<'AddItem'>['navigation']>();

    const [enteredItemNameText, setEnteredItemNameText] = useState('');
    const [enteredProviderText, setEnteredProviderText] = useState('');
    const [enteredProducerText, setEnteredProducerText] = useState('');
    const [enteredDateListedText, setEnteredDateListedText] = useState('');

    function itemNameInputHandler(enteredText: string) {
        setEnteredItemNameText(enteredText);
    }

    function providerInputHandler(enteredText: string) {
      setEnteredProviderText(enteredText);
    }

    function producerInputHandler(enteredText: string) {
      setEnteredProducerText(enteredText);
    }

    function dateListedInputHandler(enteredText: string) {
      setEnteredDateListedText(enteredText);
    }

    type ItemResponse = {
      name: string;
      provider: string;
      producer: string;
    };
    
    async function createItem() {
      try {
        // 👇️ const data: Item
        const { data, status } = await axios.post<ItemResponse>(
          'http://143.42.114.251:3000/items',
          {
            name: enteredItemNameText,
            provider: enteredProviderText,
            producer: enteredProducerText
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          },
        );
    
        console.log(JSON.stringify(data, null, 4));
    
        console.log(status);
    
        return data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
          // 👇️ error: AxiosError<any, any>
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
    }

    const onAddItemPress = () => {
      createItem();
      stackNavigation.navigate('MainNav', {
        screen: 'Home',
        params: {
          itemName: enteredItemNameText,
          provider: enteredProviderText,
          producer: enteredProducerText,
          dateListed: enteredDateListedText
        }
      });
    }

    const onCancelPress = () => {
      stackNavigation.navigate('MainNav', {
        screen: 'Home'
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
        <TextInput
          style={styles.textInput}
          placeholder="Enter provider"
          onChangeText={providerInputHandler}
          value={enteredProviderText}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter producer"
          onChangeText={producerInputHandler}
          value={enteredProducerText}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter date listed"
          onChangeText={dateListedInputHandler}
          value={enteredDateListedText}
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