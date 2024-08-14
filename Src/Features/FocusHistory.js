import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { fontSizes, spacings } from '../utilities/sizes';
import { colors } from '../utilities/colors'
export const FocusHistory = ({history}) => {

  if (!history || !history.length) return <Text style={styles.container}>You have not focussed yet</Text>;

  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Things you have focussed on:</Text>
      <FlatList 
          data={history} 
          renderItem={renderItem} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacings.medium,
    color: colors.white,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.medium,
  },
  item: {
    fontSize: fontSizes.medium,
    color: colors.white,
    paddingTop: spacings.small
  }

});