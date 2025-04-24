//your JS code here. If required.
const outputDiv = document.getElementById("output");

// Step 1: Return a Promise that resolves after 3 seconds with the array
new Promise((resolve) => {
  setTimeout(() => {
    const arr = [1, 2, 3, 4];
    resolve(arr);
  }, 3000);
})
// Step 2: Filter even numbers after 1 second
.then((arr) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evens = arr.filter(num => num % 2 === 0);
      outputDiv.innerText = evens.join(",");
      resolve(evens);
    }, 1000);
  });
})
// Step 3: Multiply evens by 2 after 2 seconds
.then((evens) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const doubled = evens.map(num => num * 2);
      outputDiv.innerText = doubled.join(",");
      resolve(doubled);
    }, 2000);
  });
});
