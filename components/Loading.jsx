import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.container2}>
      <ActivityIndicator size='large' color='#00ff00' />
      <Text style={styles.loading}>Загрузка...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  loading: {
    paddingTop: 20,
  },
});
