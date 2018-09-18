import { ViewStyle, ViewProperties } from "react-native";
import { SvgProps } from "react-native-svg";

export interface IconProps extends ViewProperties {
  name?: string;
  size?: number;
  color?: string;
  type?: "regular" | "light" | "solid" | "brands";
  containerStyle?: ViewStyle;
  iconStyle?: ViewStyle;
  onPress?: () => void;
  activeOpacity?: number;
}

export function configureFontAwesomePro(): void;

declare const Icon: React.ComponentClass<IconProps>;
export default Icon;
