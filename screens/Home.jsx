import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Alert,
  View,
  FlatList,
  ActivityIndicator,
  Text,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { Post } from '../components/Post';
import { Loading } from '../components/Loading';

export const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState();

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get('https://65e4f5ae3070132b3b257492.mockapi.io/Articles')
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Ошибка при получении статей');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchRecipes = () => {
    setIsLoading(true);
    axios
      .get('https://food-backend-2024-f556bc1359f3.herokuapp.com/recipes')
      .then(({ data }) => {
        setRecipes(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Ошибка при получении рецептов');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
    fetchRecipes();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('FullPost', {
                id: item.id,
                title: item.title,
              })
            }
          >
            <Post
              title={item.title}
              createdAt={item.createdAt}
              imageUrl={item.imageUrl}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    paddingTop: 20,
  },
});
