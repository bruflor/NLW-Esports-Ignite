import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { styles } from "./styles";
import { GameParams } from "../../@types/navigation";
import { TouchableOpacity, Image, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { THEME } from "../../theme";
import logoImg from "../../assets/logo-nlw-esports.png";

export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />
        <Heading title={game.title} subtitle={"Conecte-se e comece a jogar!"} />
      </SafeAreaView>
    </Background>
  );
}
