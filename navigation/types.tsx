import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type BottomTabParamList = {
  Home:
    | {
        itemName: string;
        provider: string;
        producer: string;
      }
    | undefined;
  Details: undefined;
  Account: {
    userId: string;
  };
  ForgotPassword: undefined;
  PasswordSent: undefined;
  Login: undefined;
};

export type RootStackParamList = {
  MainNav: NavigatorScreenParams<BottomTabParamList>;
  Login: undefined;
  CreateAccount: undefined;
  ForgotPassword: undefined;
  PasswordSent: undefined;
  AddItem: undefined;
  AddProduct: undefined;
  AddListing: undefined;
  MakeCommunityRequest: undefined;
  NotFound: undefined;
};

export type HomeScreenNavigationProp = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, "Home">,
  NativeStackScreenProps<RootStackParamList>
>;

export type AccountScreenNavigationProp = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, "Account">,
  NativeStackScreenProps<RootStackParamList>
>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeTabScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
