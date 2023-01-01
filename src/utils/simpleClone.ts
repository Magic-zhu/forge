const simpleClone = (input: any[] | Object) => {
  const t = JSON.stringify(input);
  return JSON.parse(t);
};
export default simpleClone;
