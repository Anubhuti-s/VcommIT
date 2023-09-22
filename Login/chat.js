
        // Function to toggle the profile dropdown
        function toggleProfileDropdown() {
            var dropdownContent = document.getElementById("profile-dropdown-content");
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        }
// JavaScript for chat functionality
document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chat-messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const openChatLinks = document.querySelectorAll(".open-chat");

    // Function to add a new message to the chat
    function addMessage(message) {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
    }

    // Function to send a message
    function sendMessage() {
        const message = messageInput.value;
        if (message.trim() !== "") {
            addMessage(`You: ${message}`);
            messageInput.value = "";
            // In a real application, you would send this message to the server
            // and broadcast it to other users.
        }
    }

    // Event listener for sending a message
    sendButton.addEventListener("click", sendMessage);
    messageInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    // Event listener for opening a chat
    openChatLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const user = this.getAttribute("data-user");
            openChat(user);
        });
    });

    // Function to open a chat for a user
    function openChat(user) {
        // In a real application, you would load the chat history for the selected user
        // and display it in the chat-messages container.
        // You can also implement file upload functionality here.
        // For simplicity, we'll just display a message indicating the selected user.
        chatMessages.innerHTML = `<p>You are now chatting with ${user}.</p>`;
    }
});
