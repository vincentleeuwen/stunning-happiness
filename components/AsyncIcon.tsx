import { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import storage from '@react-native-firebase/storage';

interface Props {
  id: string;
  height: number;
  width: number;
}

const AsyncIcon = ({ id, height, width }: Props) => {
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState<string | null>(null);

  useEffect(() => {
    const getImage = async () => {
      const assetPath = `assets/${id}.png`;
      const url = await storage().ref(assetPath).getDownloadURL();
      setImg(url);
      setLoading(false);
    }
    void getImage();
  }, [id])

  return (
    <>
      {
        loading || !img ? <View style={[styles.placeholder, { height, width }]} /> : <Image source={{ uri: img}} style={{ height, width }} />
      }
    </>
  )
}

AsyncIcon.defaultProps = {
  height: 50,
  width: 50,
}

const styles = StyleSheet.create({
  placeholder: {
    backgroundColor: 'gray',
  }
});

export default AsyncIcon;
