const genAwait = (s: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    const ms = Math.floor(Math.random() * s * 1000);
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 30));
    }, ms);
  });
};
export default genAwait;
