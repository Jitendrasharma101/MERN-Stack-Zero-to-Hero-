const { exec } = require('child_process');

// Function to execute shell command
function executeCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`Command stderr: ${stderr}`);
    }
    console.log(`Command output: ${stdout}`);
  });
}

// Listen for user input
process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  
  if (input.toLowerCase() === 'exit') {
    process.exit();
  } else {
    executeCommand(input);
  }
});

// Prompt user for input
console.log('Enter a shell command (or "exit" to quit):');