import 'styled-components';
import { theme } from '@/styles/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  // config/theme.ts で定義したもので DefaultTheme を上書きする
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface DefaultTheme extends Theme {}
}