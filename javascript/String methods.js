const str = "Hello, World!";

//property
console.log(str.length); // Output: 13

//0 argument methods
console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"
console.log(str.toLowerCase()); // Output: "hello, world!"
console.log(str.trim()); // Output: "Hello, World!"
console.log(str.trimStart()); // Output: "Hello, World!"
console.log(str.trimEnd()); // Output: "Hello, World!"

//argument methods
console.log(str.includes("World")); // Output: true
console.log(str.indexOf("World")); // Output: 7
console.log(str.replace("World", "Universe")); // Output: "Hello, Universe!"
console.log(str.replaceAll("l", "L")); // Output: "HeLLo, WorLd!"
console.log(str.concat(" How are you?")); // Output: "Hello, World! How are you?"
console.log(str.padStart(20, "*")); // Output: "**********Hello, World!"
console.log(str.padEnd(20, "*")); // Output: "Hello, World!**********"
console.log(str.charAt(6)); // Output: "W"
console.log(str.charCodeAt(6)); // Output: 87
