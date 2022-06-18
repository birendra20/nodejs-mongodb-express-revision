// Promise API
// The fs / promises API provides asynchronous file system methods that return promises .

// mkdir ( ) - Asynchronously creates a directory .
// Syntax : - mkdir ( path [ , options ] )

// readdir ( ) - Reads the contents of a directory .
// Syntax : - readdir ( path [ , options ] )

// rmdir ( ) - Removes the directory identified by path .
// Syntax : - rmdir ( path [ , options ] )

// writeFile ( ) - Asynchronously writes data to a file , replacing the file if it already exists .
//Syntax : - writeFile ( file , data [ , options ] )

// readFile ( ) - Asynchronously reads the entire contents of a file .
// Syntax : - readFile ( path [ , options ] )

// appendFile ( path , data [ , options ] ) - Asynchronously append data to a file , creating the file if it does not yet exist .
// Syntax : - appendFile ( path , data [ , options ] )

// copyFile ( ) - Asynchronously copies src to dest . By default , dest is overwritten if it already exists .
// Syntax : - copyFile ( src , dest [ , mode ] )

// stat ( ) - Used to get file information .
// Syntax : - stat ( path [ , options ] )

import * as fs from "fs/promises";

//creating directory -path should be there

// try {
//   await fs.mkdir(
//     "C:\\Users\\biren\\OneDrive\\Desktop\\nodejs-mongodb-express-revision\\ch5\\promiseApi"
//   );
//   console.log("created");
// } catch (error) {
//   console.log(error);
// }

//creating directory -path not require

try {
  await fs.mkdir(
    "C:\\Users\\biren\\OneDrive\\Desktop\\nodejs-mongodb-express-revision\\ch5\\demo\\test",
    { recursive: true }
  );
  console.log("created");
} catch (error) {
  console.log(error);
}
