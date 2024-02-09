const fontFamily = [
  'Montserrat', // professional font
  'Lato', // thin-sharp classic font
  'Roboto', // modern font
  'Quicksand', // rounded font
  'Sixtyfour', // trailing big font
  'sans-serif', // fallback font
];

const familyEntries = fontFamily.map((v) => [v, [v, 'sans-serif']]);
const MakeFamily = Object.fromEntries(familyEntries);

export { MakeFamily };
export default fontFamily;
