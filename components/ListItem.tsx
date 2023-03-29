import { View, Text, StyleSheet } from 'react-native';

import AsyncIcon from './AsyncIcon';
import { CareService } from './types';

const ListItem = ({ id, title: { de } }: CareService) => {

  return (
    <View style={styles.wrapper}>
      <View style={styles.inner}>
        <AsyncIcon id={id} height={50} width={50} />
        <Text style={styles.title}>{de}</Text>
      </View>
      <Text>J</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 10,
  }
  
})

export default ListItem;