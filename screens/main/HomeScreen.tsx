import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SwitchComponent from '../../components/SwitchComponent';
import Button from '../../components/Button'
import type { RootStackScreenProps } from '../../navigation/types';
import type { HomeScreenNavigationProp } from '../../navigation/types';

function HomeScreen({ navigation, route }: HomeScreenNavigationProp): JSX.Element {

  const stackNavigation = useNavigation<RootStackScreenProps<'MainNav'>['navigation']>();

  React.useEffect(() => {
    if (route.params?.itemName) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      if (route.params?.itemName != undefined) {
        alert(JSON.stringify(route.params));
      }
    }
  }, [route.params?.itemName]);

  const onAddItemPress = () => {
    navigation.navigate('AddItem');
  }

  return (
    <View>
      <View style={styles.searchBarView}>
        <SwitchComponent />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Button
          backgroundColor={'#E07075'}
          title={"Add New Item"}
          onPress={onAddItemPress}
          iconProps={{ iconName: "store-alert", iconSize: 48, iconColor: "white"}}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarView: {
    height: 100,
    marginTop: 30,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  startScreenButton: {
    padding: 30,
    margin: 20,
    width: '70%',
    alignItems: 'center',
    backgroundColor: '#E07075',
    borderRadius: 12,
  },
  homeScreenText: {
    color: '#000000',
    //fontWeight: 'bold',
    fontFamily: 'Merriweather-Regular',
    fontSize: 18,
  },
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  addItemButton: {
    padding: 30,
    margin: 10,
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#E07075',
    borderRadius: 12,
  },
  addItemButtonText: {
    color: '#FFFFFF',
    //fontWeight: 'bold',
    fontFamily: 'Merriweather-Black',
    fontSize: 18,
  }
});

export default HomeScreen;