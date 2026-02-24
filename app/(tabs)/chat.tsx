import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatList, Pressable, View } from 'react-native';

// Données factices pour la liste de conversations
const CONVERSATIONS = [
  {
    id: '1',
    name: 'Léa',
    lastMessage: 'Salut, ça te dit un café cette semaine ?',
    time: '14:32',
    unread: 2,
    image: null,
  },
  {
    id: '2',
    name: 'Thomas',
    lastMessage: 'Merci pour hier, c’était super 🙂',
    time: 'Hier',
    unread: 0,
    image: null,
  },
  {
    id: '3',
    name: 'Marie',
    lastMessage: 'Tu as vu le dernier épisode ?',
    time: 'Lun.',
    unread: 0,
    image: null,
  },
];

function ConversationItem({
  item,
  onPress,
}: {
  item: (typeof CONVERSATIONS)[0];
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} className="active:opacity-80">
      <Card className="mb-2 overflow-hidden border-0 bg-card">
        <CardContent className="flex-row items-center gap-4 p-4">
          <Avatar alt={item.name} className="h-14 w-14">
            <AvatarFallback>
              <Text className="text-lg text-muted-foreground">
                {item.name.charAt(0)}
              </Text>
            </AvatarFallback>
            {item.image ? <AvatarImage source={{ uri: item.image }} /> : null}
          </Avatar>
          <View className="flex-1 min-w-0">
            <View className="flex-row items-center justify-between gap-2">
              <Text className="font-semibold text-foreground" numberOfLines={1}>
                {item.name}
              </Text>
              <Text className="text-xs text-muted-foreground">{item.time}</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Text
                className="flex-1 text-sm text-muted-foreground"
                numberOfLines={1}
              >
                {item.lastMessage}
              </Text>
              {item.unread > 0 ? (
                <View className="rounded-full bg-[#FE3C72] px-2 py-0.5">
                  <Text className="text-xs font-semibold text-white">
                    {item.unread}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        </CardContent>
      </Card>
    </Pressable>
  );
}

export default function ChatScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-background" style={{ paddingTop: insets.top }}>
      <View className="border-b border-border bg-background px-4 pb-3 pt-2">
        <Text variant="h2" className="border-0 pb-0 text-2xl font-bold">
          Messages
        </Text>
        <Text variant="muted" className="mt-0.5">
          Tes conversations
        </Text>
      </View>
      <FlatList
        data={CONVERSATIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ConversationItem
            item={item}
            onPress={() => {}}
          />
        )}
        contentContainerStyle={{ padding: 16 }}
        ListEmptyComponent={
          <View className="py-12">
            <Text className="text-center text-muted-foreground">
              Aucune conversation pour le moment
            </Text>
          </View>
        }
      />
    </View>
  );
}
