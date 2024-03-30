import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { styles } from "./restaurant-info.styles";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    address = "100 random place",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://img.freepik.com/premium-photo/restaurant-table-many-different-dishes_135427-6768.jpg?w=740",
    ],
    rating = 4,
    isOpenNow = true,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <Card style={styles.card} elevation={5}>
      <Card.Cover
        style={styles.image}
        source={{
          uri: photos[0],
        }}
      />
      <Card.Content>
        <View style={styles.info}>
          <Text style={styles.text}>{name}</Text>
          <View style={styles.svgCon}>
            <View style={styles.starCon}>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </View>
            <View style={styles.openCon}>
              {isClosedTemporarily && (
                <Text style={styles.closedText}>CLOSED TEMPORARILY</Text>
              )}
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              {icon && <Image source={{ uri: icon }} width={20} height={20} />}
            </View>
          </View>
          <Text style={styles.address}>{address}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};
