var dark = document.getElementById("clicked");
var white = document.getElementById("white-color");
var lol = document.getElementById("white-2color");
dark.onclick = function (){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        white.style.filter = "brightness(5)";
        lol.style.filter = "brightness(5)";
    }
    else{
        white.style.filter = "none";
        lol.style.filter = "none";
    }
}

function searchPeople() {
    const query = document.getElementById("searchInput").value;
    const resultsDiv = document.getElementById("results");

    // Example of search results (replace with actual search logic)
    const people = [
        { name: "John Doe" },
        { name: "Jane Smith" },
        { name: "Alice Johnson" }
    ];

    const filteredPeople = people.filter(person => person.name.toLowerCase().includes(query.toLowerCase()));

    resultsDiv.innerHTML = filteredPeople.map(person => `<p>${person.name}</p>`).join('');
}


        function submitSearchForm() {
        var form = document.getElementById("searchForm");
        var formData = new FormData(form);

        // Use AJAX to submit the form asynchronously
        var xhr = new XMLHttpRequest();
        xhr.open("GET", form.action + "?" + new URLSearchParams(formData).toString(), true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Update the search results div with the new content
                document.getElementById("searchResults").innerHTML = xhr.responseText;
            }
        };
        xhr.send();

        // Note: You may need to adjust this logic based on your server response

        // Do not close the modal
    }


    $(document).ready(function() {
        // Function to scroll to the bottom of the chat container
        function scrollToBottom() {
            $("#chat-container").scrollTop($("#chat-container")[0].scrollHeight);
        }

        // Scroll to the bottom on document load
        scrollToBottom();

        // Optionally, scroll to the bottom whenever a new message is added
        $(".send-button").on("click", function() {
            // Scroll to the bottom when the send button is clicked
            scrollToBottom();
        });
    });


