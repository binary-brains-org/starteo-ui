const hideCenterString = (value: string) => {
  const mid: number = Math.floor(value.length / 3);
  return value.slice(0, mid - 2) + '*'.repeat(mid + 2) + value.slice(mid + 6);
};

export default hideCenterString;