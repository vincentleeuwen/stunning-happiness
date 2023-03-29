import { useState } from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';


interface Props {
  toggle: () => void;
  level: boolean;
}

const Filters = ({ toggle, level }: Props) => (
  <View style={styles.wrapper}>
    <View style={styles.inner}>
      <Text>Show only level two</Text>
      <Switch
        onValueChange={toggle}
        value={level}
      />
    </View>
  </View>
)


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    marginBottom: 5,
    marginTop: 5,
  },
  inner: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export default Filters;