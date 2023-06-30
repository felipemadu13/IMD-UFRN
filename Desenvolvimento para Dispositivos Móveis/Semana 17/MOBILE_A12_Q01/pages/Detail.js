import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';


export function Detail({navigation, route}) {

  var postId = route.params.postId;

  const getPostsNaAPI = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const post = await response.json()
      setPost(post)
    } catch (error) {
      setPost([])
      alert('Falha ao acessar servidor. Tente novamente mais tarde!')
    }
  }
  
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPostsNaAPI()
  }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.title}>
                  <Text style={styles.textTitle}> ID #{post.id}</Text>
                  <Text style={styles.textItem}>{post.title} </Text>
                </View>
                <View>
                  <Text style={styles.textItem}>{post.body} </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#222C5F',
      flex: 1,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#FFFFFF"
    },
    textItem: {
      fontSize: 15,
      color: "#FFFFFF"
    },
    title: {
      marginVertical: 30,
      alignItems: 'center'
    }
  });
  
  