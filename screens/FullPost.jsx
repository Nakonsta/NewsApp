import axios from 'axios';
import styled from 'styled-components/native';
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

const PostImage = styled.Image`
  width: 100%;
  height: 350px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  padding: 0 10px 10px;
  font-size: 16px;
  line-height: 20px;
`;

export const FullPostScreen = ({ route, navigation }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id, title } = route.params;

  const fetchPosts = () => {
    navigation.setOptions({ title });
    setIsLoading(true);
    axios
      .get(`https://65e4f5ae3070132b3b257492.mockapi.io/Articles/${id}`)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Ошибка при получении статьи');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <PostImage
        source={{
          uri: data.imageUrl,
        }}
      />
      <PostText>{data.text}</PostText>
    </View>
  );
};
