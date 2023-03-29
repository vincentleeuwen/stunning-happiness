import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AsyncIcon from './AsyncIcon';
import { CareService } from './types';

const ListItem = ({ id, intro: { de: introDe }, title: { de: titleDe } }: CareService) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <View style={styles.wrapper}>
      <View style={styles.controls}>
        <View style={styles.inner}>
          <AsyncIcon id={id} height={50} width={50} />
          <Text style={styles.title}>{titleDe}</Text>
        </View>
        <Text onPress={toggle}>{open ? 'Close' : 'Open'}</Text>
      </View>
      {
        open && <View style={styles.intro}>
          <Text>{introDe}</Text>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    marginLeft: 10,
    maxWidth: '75%',
  },
  intro: {
    marginTop: 10,
  }
})

export default ListItem;