const fontFamily = [
  'Montserrat', // professional font
  'Lato', // thin-sharp classic font
  'Roboto', // modern font
  'Quicksand', // rounded font
  'Sixtyfour', // trailing big font
  'Pacifico',
  'Protest Guerrilla',
  'sans-serif', // fallback font
  'Protest Strike',
];

const familyEntries = fontFamily.map((v) => [v, [v, 'sans-serif']]);
const MakeFamily = Object.fromEntries(familyEntries);

export { MakeFamily };
export default fontFamily;
