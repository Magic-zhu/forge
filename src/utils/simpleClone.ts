const simpleClone = (input: any [] | Object) => {
  return JSON.parse(JSON.stringify(input));
};
export default simpleClone
;
