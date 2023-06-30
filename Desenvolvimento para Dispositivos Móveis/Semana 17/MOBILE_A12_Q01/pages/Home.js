import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Item = ({ item, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', {postId: item.id})}>
      <View style={styles.item}>
        <Text style={{ color: "#FFFFFF" }}>{item.id}</Text>
        <Text style={{ color: "#FFFFFF" }}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export function Home({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getPostsNaAPI = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      setPosts(posts);
    } catch (error) {
      setPosts([]);
      alert('Falha ao acessar servidor. Tente novamente mais tarde!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostsNaAPI();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontWeight: 'bold', padding: 20, fontSize: 25 }}>POSTS</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={posts}
          renderItem={({ item }) => <Item item={item} navigation={navigation} />}
          keyExtractor={(item) => String(item.id)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  item: {
    backgroundColor: '#222C5F',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
