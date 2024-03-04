import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: green;
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostDetails = styled.View``;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostDate = styled.Text`
  font-size: 12px;
  margin-top: 2px;
  color: #555;
`;

export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImage source={{ uri: imageUrl }} />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
};
