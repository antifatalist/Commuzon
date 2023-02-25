import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

type SearchBarComponentProps = {};

const SwitchComponent: React.FunctionComponent<SearchBarComponentProps> = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <View style={styles.view}>
      <SearchBar
        inputContainerStyle={styles.searchBarInputContainerStyle}
        containerStyle={styles.searchBarContainerStyle}
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        placeholderTextColor="#444444"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    width: '100%',
    borderWidth: 0,
    borderColor: "white"
  },
  searchBarInputContainerStyle: {
    backgroundColor: "white"
  },
  searchBarContainerStyle: {
    height: 65,
    backgroundColor: "white",
    borderTopColor: "white",
    borderBottomColor: "white"
  },
  searchBarPlaceholderTextColor: {
    color: "#444444"
  }
});

export default SwitchComponent;