// DENO

const text = "This is a test and it should be stored in a file.";

const encoder = new TextEncoder();
const data = encoder.encode(text); // encode string to Uint8Array = an array where each item is an 8 bit (1 byte) unsigned integer

Deno.writeFile("message.txt", data).then(() => {
  console.log("Wrote to file");
});

// execute with 'deno run app.ts --allow-write' to enable writing to files
