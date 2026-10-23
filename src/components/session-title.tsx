import { colors } from "@/app/theme/colors";
import type { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

type SectionTitleProps = {
  emoji: string;
  children: ReactNode;
};

export default function SectionTitle({ emoji, children }: SectionTitleProps) {
  return (
    <Text style={styles.title}>
      {emoji} {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: "bold", color: colors.orange },
});
