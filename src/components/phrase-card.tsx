import { colors } from "@/app/theme/colors";
import * as Speech from "expo-speech";
import { Pressable, StyleSheet, Text, View } from "react-native";

type PhraseCardProps = {
  phrase: string;
  translation: string;
  language?: string;
};

export default function PhraseCard({
  phrase,
  translation,
  language = "en-US",
}: PhraseCardProps) {
  function speak() {
    Speech.speak(translation, { language: language });
  }

  return (
    <Pressable onPress={speak} style={styles.card}>
      <View style={styles.texts}>
        <Text style={styles.text}>{phrase}</Text>
        <Text style={styles.translation}>{translation}</Text>
      </View>
      <Text style={styles.speaker}>
        🔊 {language.substring(0, 2).toUpperCase()}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
  },
  texts: { flex: 1, gap: 4 },
  text: { fontSize: 16, fontWeight: "bold", color: colors.text },
  translation: { fontSize: 15, color: colors.blue },
  speaker: { fontSize: 15, fontWeight: "bold", color: colors.orange },
});
