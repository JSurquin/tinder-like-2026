import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';
import useAuthStore from '@/stores/auth.store';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import { Pressable } from 'react-native';
import { router } from 'expo-router';

function SettingRow({
  label,
  description,
  right,
}: {
  label: string;
  description?: string;
  right: React.ReactNode;
}) {
  return (
    <View className="flex-row items-center justify-between gap-4 py-3">
      <View className="flex-1 min-w-0">
        <Text className="font-medium text-foreground">{label}</Text>
        {description ? (
          <Text variant="muted" className="mt-0.5 text-sm">
            {description}
          </Text>
        ) : null}
      </View>
      {right}
    </View>
  );
}

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const { logout } = useAuthStore();
  const [notifications, setNotifications] = useState(true);
  const [matchNotifications, setMatchNotifications] = useState(true);

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerStyle={{
        paddingBottom: insets.bottom + 24,
        paddingTop: insets.top,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View className="px-4 pb-2 pt-2">
        <Text variant="h2" className="border-0 pb-0 text-2xl font-bold">
          Paramètres
        </Text>
        <Text variant="muted" className="mt-0.5">
          Gère ton compte et tes préférences
        </Text>
      </View>

      {/* Compte */}
      <Card className="mx-4 mt-4 border-0 bg-card">
        <CardHeader>
          <CardTitle>Compte</CardTitle>
        </CardHeader>
        <CardContent className="-mt-2">
          <SettingRow
            label="Email"
            description="Adresse connectée au compte"
            right={
              <Text variant="muted" className="text-sm">
                utilisateur@exemple.com
              </Text>
            }
          />
          <Separator />
          <Pressable className="active:opacity-80">
            <SettingRow
              label="Modifier le mot de passe"
              right={<Text className="text-[#FE3C72]">Modifier</Text>}
            />
          </Pressable>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="mx-4 mt-4 border-0 bg-card">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="-mt-2">
          <SettingRow
            label="Activer les notifications"
            description="Messages et rappels"
            right={
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            }
          />
          <Separator />
          <SettingRow
            label="Nouveaux matchs"
            description="Être notifié à chaque nouveau match"
            right={
              <Switch
                checked={matchNotifications}
                onCheckedChange={setMatchNotifications}
              />
            }
          />
        </CardContent>
      </Card>

      {/* Confidentialité */}
      <Card className="mx-4 mt-4 border-0 bg-card">
        <CardHeader>
          <CardTitle>Confidentialité</CardTitle>
        </CardHeader>
        <CardContent className="-mt-2">
          <Pressable className="active:opacity-80">
            <SettingRow label="Qui peut me voir" right={<Text variant="muted">Tout le monde</Text>} />
          </Pressable>
          <Separator />
          <Pressable className="active:opacity-80">
            <SettingRow label="Bloquer des comptes" right={null} />
          </Pressable>
        </CardContent>
      </Card>

      {/* Déconnexion */}
      <Pressable
        onPress={() => {
          logout();
          router.replace('/(auth)/login');
        }}
        className="mx-4 mt-6 active:opacity-80"
      >
        <View className="items-center rounded-xl border border-destructive/50 bg-destructive/10 py-3">
          <Text className="font-semibold text-destructive">Se déconnecter</Text>
        </View>
      </Pressable>

      <Text variant="muted" className="mt-6 text-center text-xs">
        Love First · v1.0.0
      </Text>
    </ScrollView>
  );
}
