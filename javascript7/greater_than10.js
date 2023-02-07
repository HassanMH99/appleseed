 const p1 =function(num) {
  return new Promise((res, rej) => {
    if (num > 10) {
      res(num + " is Greter than 10");
    } else {
      rej(num + " is Less Than 10");
    }
  });
};
p1(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
