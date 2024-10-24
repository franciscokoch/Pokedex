import 'styled-components';
import { defaultTheme } from '../styles/theme/DefaultTheme';

// Inferência do tipo do tema
type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
