import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Alert, Image } from 'react-native';

const datasource = [
  {
    title: "Sedans & SUVs",
    bgcolor: "#c521ee",
    data: [
      {
        name: "Civic Sedan",
        image: "https://cdn.shopify.com/s/files/1/0583/7258/7554/files/ChatGPT_Image_Dec_30_2025_11_30_18_AM.png?v=1767065442",
      },
      {
        name: "X5 SUV",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6hfNv9uRUiMs8BK4pU6vnpDLS4dXjQ9kOwFyJquWhOg&s",
      },
      {
        name: "Corolla Altis",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzu2KFf_uNbacOaLJRhAWjLcRIn6d7q2VWBFGgmwkRwg&s=10",
      },
      {
        name: "Model Y",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjt8XvJ9m66MLVtKiWDjhTll-lILm8Zp8EmfiJFKW8sg&s=10",
      },
    ],
  },

  {
    title: "Sports & Hatchbacks",
    bgcolor: "khaki",
    data: [
      {
        name: "911 Coupe",
        image: "https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-carrera-153-67b4ae799fd18.jpg?crop=0.551xw:0.466xh;0.143xw,0.296xh&resize=1200:*",
      },
      {
        name: "A3 Hatchback",
        image: "https://i.i-sgcm.com/new_cars/cars/11330/11330_g1_b.jpg",
      },
      {
        name: "Mustang GT",
        image: "https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg",
      },
      {
        name: "Golf GTI",
        image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
      },
    ],
  },
  {
    title: "Electric & Hybrid",
    bgcolor: "palegreen",
    data: [
      {
        name: "Taycan EV",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTi-h8vbKDSmM6QoOfvy4mmrJDBl2Q_25AQHBJhSlRHg&s=10",
      },
      {
        name: "Ioniq 5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7vxvfVv-0lUg2uty7DOTqtZdVR8Q91PUjZWxE2jz67g&s=10",
      },
      {
        name: "Prius Hybrid",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIQx-2V08BzxwHzOLYn4DhUAFLf4CYKAzRY6aJw0AGSw&s=10",
      },
    ],
  },
];


export default function App() {
  const renderItem = ({ item, index, section }) => (
    <TouchableOpacity
      style={styles.opacityStyle}
      onPress={() => Alert.alert(`You pressed ${item.name}`)}
    >
      <Text style={styles.textStyle}>
        {index + 1}. {section.title}: {item.name}
      </Text>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>L10 Cars list</Text>
      <SectionList
        sections={datasource}
        contentContainerStyle={{ padding: 10 }}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title, bgcolor } }) => (
          <Text style={[styles.headerText, { backgroundColor: bgcolor }]}>{title}</Text>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingBottom: 30,
  },
  titleText: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  opacityStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 10,
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
  },
  cardImage: {
    width: 100,
    height: 85,
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});