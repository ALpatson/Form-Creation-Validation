// Asynchronous function to fetch and display user data
async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear loading message
    dataContainer.innerHTML = "";

    // Create a list
    const userList = document.createElement("ul");

    // Add each user's name as a list item
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      userList.appendChild(li);
    });

    // Append the list to the container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Show error message
    dataContainer.innerHTML = "Failed to load user data.";
    console.error("Error fetching users:", error);
  }
}

// Run the function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
