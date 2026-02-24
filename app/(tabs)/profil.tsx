import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';

// Données factices du profil
const PROFILE = {
  name: 'Alex',
  age: 28,
  bio: 'Aime les balades, les bons restos et les soirées jeux. En recherche de quelque chose de sérieux.',
  city: 'Paris',
  interests: ['Voyages', 'Cuisine', 'Cinéma', 'Sport'],
};

export default function ProfilScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ paddingTop: insets.top }}>
        {/* Bandeau / en-tête avec dégradé léger */}
        <View className="bg-card px-4 pb-6 pt-4">
          <View className="items-center">
            <Avatar alt={PROFILE.name} className="h-24 w-24 border-4 border-background">
              <AvatarFallback className="bg-[#FE3C72]/20">
                <Text className="text-3xl text-[#FE3C72]">
                  {PROFILE.name.charAt(0)}
                </Text>
              </AvatarFallback>
              {/* <AvatarImage source={{ uri: PROFILE.avatar }} /> */}
            </Avatar>
            <Text variant="h2" className="mt-3 border-0 pb-0 text-2xl font-bold">
              {PROFILE.name}, {PROFILE.age}
            </Text>
            <Text variant="muted" className="mt-0.5">
              {PROFILE.city}
            </Text>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 rounded-full border-[#FE3C72] bg-transparent"
            >
              <Text className="text-[#FE3C72]">Modifier le profil</Text>
            </Button>
          </View>
        </View>

        <View className="px-4 pt-4">
          {/* À propos */}
          <Card className="mb-4 border-0 bg-card">
            <CardHeader>
              <CardTitle>À propos</CardTitle>
            </CardHeader>
            <CardContent className="-mt-2">
              <Text variant="muted" className="leading-6">
                {PROFILE.bio}
              </Text>
            </CardContent>
          </Card>

          {/* Intérêts */}
          <Card className="mb-4 border-0 bg-card">
            <CardHeader>
              <CardTitle>Intérêts</CardTitle>
            </CardHeader>
            <CardContent className="-mt-2 flex-row flex-wrap gap-2">
              {PROFILE.interests.map((interest) => (
                <View
                  key={interest}
                  className="rounded-full bg-muted px-3 py-1.5"
                >
                  <Text variant="small" className="text-foreground">
                    {interest}
                  </Text>
                </View>
              ))}
            </CardContent>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}
