const sentence = "hello there from lighthouse labs";
const l = sentence.length;

//Implement the logic to have each letter delay its appearance by 50ms (or so) longer than the previous letter
  
  let i = 0;
  function timeout() {
    setTimeout(() => {
      if (i === sentence.length - 1) {
        process.stdout.write(sentence[i] + '\n');
        return;
      }

      if (i > sentence.length - 1) {
        return;
      }

      process.stdout.write(sentence[i]);
      i++
      timeout();
    
    }, 50)
  };


timeout(sentence);