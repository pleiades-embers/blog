type RGB = [red: number, green: number, blue: number];

type Palette = {
  red: string | RGB;
  green: string | RGB;
  blue: string | RGB;
};
const palette = {
  red: [255, 0, 0],
  green: "00ff00",
  blue: [0, 0, 255],
} satisfies Palette;

palette.green.toUpperCase();
