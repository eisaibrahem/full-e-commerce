// theme.d.ts
import { Palette } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    bgColor: {
      main: string;
    };
    backgroundSelector: {
      main: string;
    };
    favColor: {
      main: string;
    };
  }

  interface PaletteOptions {
    bgColor?: {
      main: string;
    };
    backgroundSelector?: {
      main: string;
    };
    favColor?: {
      main: string;
    };
  }
}
