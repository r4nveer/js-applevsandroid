// Get references to elements
const androidButton = document.getElementById("android");
const appleButton = document.getElementById("apple");
const image = document.querySelector("img"); // The 'Android vs Apple' image
const debateLink = document.querySelector(".center.bottom a"); // 'Explore the Debate' link
const htmlElement = document.querySelector("html");

// Android Button Event Listener
androidButton.addEventListener("click", () => {
    // Change the image source to the Android Logo
    document.getElementById("img-appleandroid").src = "images/Android-Logo.jpg";
    image.alt = "Android Logo";

    // Update the 'Explore the Debate' link
    debateLink.textContent = "Android Home";
    debateLink.href = "https://www.android.com/";
    debateLink.style.backgroundColor = "#a4c93b";
    

    // Change the background color and font family of the HTML
    htmlElement.style.backgroundColor = "#a4c93b";
    htmlElement.style.fontFamily = "'Roboto', sans-serif";

    // Add the 'active' class to the Android button and remove it from the Apple button
    androidButton.classList.add("active");
    appleButton.classList.remove("redborder");
});

// Apple Button Event Listener
appleButton.addEventListener("click", () => {
    // Change the image source to the Apple Logo
    image.src = "images/Apple-Logo.jpg";
    image.alt = "Apple Logo";

    // Update the 'Explore the Debate' link
    debateLink.textContent = "Apple Home";
    debateLink.href = "https://www.apple.com/";
    debateLink.style.backgroundColor = "#b6bcca";

    // Change the background color and font family of the HTML
    htmlElement.style.backgroundColor = "#b6bcca";
    htmlElement.style.fontFamily = "'Brygada 1918', serif";

    // Add the 'redborder' class to the Apple button and remove it from the Android button
    appleButton.classList.add("redborder");
    androidButton.classList.remove("active");
});
