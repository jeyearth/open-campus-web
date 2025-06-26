import 'styled-components';
import { theme } from '@/config/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  // config/theme.ts で定義したもので DefaultTheme を上書きする
  export interface DefaultTheme extends Theme {}
}