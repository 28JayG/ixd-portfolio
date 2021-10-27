export const convertHexToRGB = (string) => {
  const hexArray = string.substring(1).match(/.{1,2}/g);
  const rgbArray = [
    parseInt(hexArray[0], 16),
    parseInt(hexArray[1], 16),
    parseInt(hexArray[2], 16),
  ];

  return rgbArray;
};
