import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import type { AccountScreenNavigationProp } from '../../navigation/types';

function AccountScreen({ navigation, route }: AccountScreenNavigationProp) {

    React.useEffect(() => {
        if (route.params?.userId) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
            if (route.params?.userId != undefined) {
            alert('Welcome, ' + route.params?.userId);
            }
        }
    }, [route.params?.userId]);

    return (
        <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.usernameRow}>
          <Text style={styles.username}>Username:</Text>
          <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
        </View>
        <View style={styles.typeRow}>
          <Text style={styles.type}>Type:</Text>
          <Text style={styles.hi}>hi</Text>
        </View>
        <View style={styles.genderRow}>
          <Text style={styles.gender}>Gender:</Text>
          <Text style={styles.test}>test</Text>
        </View>
        <View style={styles.birthdayRow}>
          <Text style={styles.birthday}>Birthday:</Text>
          <Text style={styles.loremIpsum2}>01/01/1970</Text>
        </View>
      </View>
      <Text style={styles.basicInformation}>Basic Information</Text>
      <View style={styles.loremIpsum3StackStack}>
        <View style={styles.loremIpsum3Stack}>
          <Text style={styles.loremIpsum3}>01/01/1970</Text>
          <View style={styles.rect1}>
            <View style={styles.address2Row}>
              <Text style={styles.address2}>Address:</Text>
              <Text style={styles.loremIpsum6}>
                123 Fake St Unit 1{"\n"}Fake City, FK 55555
              </Text>
            </View>
            <View style={styles.type2Row}>
              <Text style={styles.type2}>Type:</Text>
              <Text style={styles.apartment}>Apartment</Text>
            </View>
            <Text style={styles.loremIpsum5}>Default Instructions:</Text>
          </View>
        </View>
        <Text style={styles.test1}>test</Text>
        <Text style={styles.hi1}>hi</Text>
        <Text style={styles.loremIpsum4}>Lorem Ipsum</Text>
        <Text style={styles.birthday1}>Birthday:</Text>
        <Text style={styles.gender1}>Gender:</Text>
        <Text style={styles.type1}>Type:</Text>
        <Text style={styles.username1}>Username:</Text>
      </View>
      <Text style={styles.shippingInformation}>Shipping Information</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rect: {
        width: 256,
        height: 188,
        backgroundColor: "#E6E6E6",
        marginTop: 99,
        marginLeft: 57
    },
    username: {
        fontFamily: 'Merriweather-Regular',
        color: "#121212"
    },
    loremIpsum: {
        fontFamily: 'Merriweather-Regular',
        color: "#121212",
        marginLeft: 53
    },
    usernameRow: {
        height: 17,
        flexDirection: "row",
        marginTop: 21,
        marginLeft: 8,
        marginRight: 46
    },
    type: {
        fontFamily: 'Merriweather-Regular',
        color: "#121212"
    },
    hi: {
        fontFamily: 'Merriweather-Regular',
        color: "#121212",
        marginLeft: 90
    },
    typeRow: {
        height: 17,
        flexDirection: "row",
        marginTop: 24,
        marginLeft: 5,
        marginRight: 117
    },
    gender: {
        fontFamily: 'Merriweather-Regular',
        color: "#121212"
    },
    test: {
        fontFamily: 'Merriweather-Regular',
        color: "#121212",
        marginLeft: 75
    },
    genderRow: {
        height: 17,
        flexDirection: "row",
        marginTop: 26,
        marginLeft: 5,
        marginRight: 104
    },
    birthday: {
        fontFamily: 'Merriweather-Regular',
        color: "#121212"
    },
    loremIpsum2: {
        fontFamily: 'Merriweather-Regular',
        color: "#121212",
        marginLeft: 68
    },
    birthdayRow: {
        height: 17,
        flexDirection: "row",
        marginTop: 25,
        marginLeft: 5,
        marginRight: 54
    },
    basicInformation: {
        fontFamily: 'Merriweather-Regular',
        color: "#121212",
        marginTop: -210,
        marginLeft: 58
    },
    loremIpsum3: {
        top: 147,
        left: 128,
        position: "absolute",
        fontFamily: 'Merriweather-Regular',
        color: "#121212"
    },
    rect1: {
        top: 0,
        left: 0,
        width: 256,
        height: 188,
        position: "absolute",
        backgroundColor: "#E6E6E6"
    },
    address2: {
        fontFamily: 'Merriweather-Regular',
        color: "#121212"
    },
    loremIpsum6: {
        fontFamily: 'Merriweather-Regular',
        color: "#121212",
        marginLeft: 68,
        marginTop: 2
    },
    address2Row: {
        height: 35,
        flexDirection: "row",
        marginTop: 27,
        marginLeft: 5,
        marginRight: 7
    },
    type2: {
        fontFamily: 'Merriweather-Regular',
        color: "#121212"
    },
    apartment: {
        fontFamily: 'Merriweather-Regular',
        color: "#121212",
        marginLeft: 90
    },
    type2Row: {
        height: 17,
        flexDirection: "row",
        marginTop: 17,
        marginLeft: 5,
        marginRight: 62
    },
    loremIpsum5: {
        fontFamily: 'Merriweather-Regular',
        color: "#121212",
        marginTop: 26,
        marginLeft: 5
    },
    loremIpsum3Stack: {
        top: 0,
        left: 0,
        width: 256,
        height: 188,
        position: "absolute"
    },
    test1: {
        left: 128,
        position: "absolute",
        fontFamily: 'Merriweather-Regular',
        color: "#121212",
        top: 105
    },
    hi1: {
        top: 62,
        left: 128,
        position: "absolute",
        fontFamily: 'Merriweather-Regular',
        color: "#121212"
    },
    loremIpsum4: {
        top: 21,
        left: 128,
        position: "absolute",
        fontFamily: 'Merriweather-Regular',
        color: "#121212"
    },
    birthday1: {
        top: 147,
        left: 5,
        position: "absolute",
        fontFamily: 'Merriweather-Regular',
        color: "#121212"
    },
    gender1: {
        top: 105,
        left: 5,
        position: "absolute",
        fontFamily: 'Merriweather-Regular',
        color: "#121212"
    },
    type1: {
        top: 62,
        left: 5,
        position: "absolute",
        fontFamily: 'Merriweather-Regular',
        color: "#121212"
    },
    username1: {
        top: 21,
        left: 8,
        position: "absolute",
        fontFamily: 'Merriweather-Regular',
        color: "#121212"
    },
    loremIpsum3StackStack: {
        width: 256,
        height: 188,
        marginTop: 229,
        marginLeft: 57
    },
    shippingInformation: {
        fontFamily: 'Merriweather-Regular',
        color: "#121212",
        marginTop: -210,
        marginLeft: 58
    }
  });

export default AccountScreen;