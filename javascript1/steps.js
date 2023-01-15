function step_shape(n){
    for (let i = 1; i <= n; i++) {
        let step = "";
        for (let j = 1; j <= n; j++) {
          if (j <= i) {
            step += "#";
          } else {
            step += " ";
          }
        }
        console.log(step);
      }
}
step_shape(4);
step_shape(10);