import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, View, Text  } from 'react-native';
import database from '@react-native-firebase/database';

import ListItem from './ListItem';

import { CareService } from './types';

const List = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState<CareService[]>([]);

  useEffect(() => {
    const onServicesChange = database().ref('services').on('value', snapshot => {
      setLoading(true);
      setServices(Object.entries(snapshot.val()).map(([key, value]) => ({ ...value as object, id: key} as CareService)));
      setLoading(false);
    });
    return () => database().ref('services').off('value', onServicesChange);
  }, [])

  if (loading) {
    return <ActivityIndicator />;
  }

  return ( 
    <FlatList
      data={services}
      renderItem={({ item }) => (
        <ListItem {...item} />
      )}
    />
  )
}

export default List;