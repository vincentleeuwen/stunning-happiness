import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, View, Text  } from 'react-native';
import database from '@react-native-firebase/database';

import Filters from './Filters';
import ListItem from './ListItem';

import { CareService } from './types';

const filterServices = (services: CareService[], levelTwo: boolean) : CareService[] => {
  const minLevel = levelTwo ? 2 : 0;
  return services.filter(({ level }) => level >= minLevel);
}

const List = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState<CareService[]>([]);
  const [levelTwo, setLevelTwo] = useState(false);

  const toggleLevel = () => setLevelTwo(!levelTwo);

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
      ListHeaderComponent={() => <Filters toggle={toggleLevel} level={levelTwo} />}
      data={filterServices(services, levelTwo)}
      renderItem={({ item }) => (
        <ListItem {...item} />
      )}
      keyExtractor={item => item.id}
    />
  )
}

export default List;