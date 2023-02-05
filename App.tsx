import { StyleSheet, View } from "react-native";
import { Canvas } from "@react-three/fiber";
import { NativeBaseProvider, extendTheme } from "native-base";
import { Leva } from "leva";
import Scene from "./components/Scene";
import TitleUI from "./components/TitleUI";
import GameUI from "./components/GameUI";
import GameOverUI from "./components/GameOverUI";
import { useBearStore } from "./utils/store";

export default function App() {
  const theme = extendTheme({
    config: {
      initialColorMode: "dark",
    },
  });

  const gameState = useBearStore((state) => state.gameState);

  return (
    <NativeBaseProvider theme={theme}>
      <Leva collapsed hidden />
      <View style={styles.container}>
        <Canvas
          shadows
          camera={{
            position: [1, 1, 1],
            near: 0.01,
          }}
        >
          <Scene />
        </Canvas>
        {gameState == "title" ? (
          <TitleUI />
        ) : gameState == "playing" ? (
          <GameUI />
        ) : gameState == "gameover" ? (
          <GameOverUI />
        ) : null}
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
  },
});