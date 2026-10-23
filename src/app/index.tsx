import PhraseCard from "@/components/phrase-card";
import SectionTitle from "@/components/session-title";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "./theme/colors";

export default function TravelPhrases() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Frases de Viagem 🌎</Text>
        <Text style={styles.subtitle}>
          Toque em uma frase para ouvir a pronúncia
        </Text>

        <SectionTitle emoji="🛫">No aeroporto</SectionTitle>

        <PhraseCard
          phrase="Quanto custa?"
          translation="How much does it cost?"
        />
        <PhraseCard
          phrase="Onde fica o banheiro?"
          translation="Where is the bathroom?"
        />
        <PhraseCard
          phrase="Qual é o preço do ingresso?"
          translation="What is the price of the ticket?"
        />

        <SectionTitle emoji="⚠️">Emergência</SectionTitle>

        <PhraseCard
          phrase="Quanto custa?"
          translation="How much does it cost?"
        />
        <PhraseCard
          phrase="Onde fica o banheiro?"
          translation="Where is the bathroom?"
        />
        <SectionTitle emoji="🇪🇸">Espanhol</SectionTitle>

        <PhraseCard
          phrase="Olá, como vai?"
          translation="Hola, ¿cómo estás?"
          language="es"
        />
        <PhraseCard
          phrase="Onde fica o banheiro?"
          translation="¿Dónde está el baño?"
          language="es"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    gap: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.blue,
  },
  subtitle: {
    fontSize: 15,
    color: colors.mutedText,
    marginBottom: 8,
  },
});
