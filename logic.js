// Function to show the sidebar
function showSidebar() {
    // Select the sidebar element
    const sidebar = document.querySelector('.sidebar');
    // Set the display property to flex to show the sidebar
    sidebar.style.display = 'flex';
}

// Function to hide the sidebar
function hideSidebar() {
    // Select the sidebar element
    const sidebar = document.querySelector('.sidebar');
    // Set the display property to none to hide the sidebar
    sidebar.style.display = 'none';
}

// Function to open image in a modal
function openImageInModal(imageUrl) {
    // Create a modal container element
    const modal = document.createElement('div');
    modal.classList.add('modal');

    // Create an image element inside the modal
    const image = document.createElement('img');
    image.src = imageUrl;

    // Append the image to the modal
    modal.appendChild(image);

    // Append the modal to the document body
    document.body.appendChild(modal);

    // Event listener to close the modal when clicked
    modal.addEventListener('click', function() {
        modal.remove();
    });
}