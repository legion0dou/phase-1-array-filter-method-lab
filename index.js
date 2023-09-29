// Code your solution here
// Sample array of driver objects
const drivers = [
    { name: "John", hometown: "New York" },
    { name: "Alice", hometown: "Los Angeles" },
    { name: "Bob", hometown: "Chicago" },
    { name: "Carol", hometown: "San Francisco" },
  ];
  
  // Function to find matching drivers by name (case-insensitive)
  function findMatching(drivers, name) {
    return drivers.filter(driver =>
      driver.name.toLowerCase() === name.toLowerCase()
    );
  }
  
  // Function to find drivers whose names begin with a provided string (case-insensitive)
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver =>
      driver.name.toLowerCase().startsWith(letters.toLowerCase())
    );
  }
  
  // Function to find drivers by exact name match (case-sensitive)
  function matchName(drivers, name) {
    return drivers.filter(driver =>
      driver.name === name
    );
  }
  
  // Test cases
  console.log(findMatching(drivers, "John")); // Returns [{ name: "John", hometown: "New York" }]
  console.log(fuzzyMatch(drivers, "a")); // Returns [{ name: "Alice", hometown: "Los Angeles" }, { name: "Carol", hometown: "San Francisco" }]
  console.log(matchName(drivers, "Bob")); // Returns [{ name: "Bob", hometown: "Chicago" }]
  