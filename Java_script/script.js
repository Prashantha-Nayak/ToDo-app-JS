document.addEventListener('DOMContentLoaded', function () {
    // Select all divs with class 'type'
    var typeDivs = document.querySelectorAll('.type');
    
    // Add click event listener to each div
    typeDivs.forEach(function(div) {
        div.addEventListener('click', function() {
            // Get the ID of the clicked div
            var clickedId = div.id;
            
            // Output the ID to the console
            if(clickedId=== 'today'){
                window.location.href= 'html/today.html';
            }
            else if(clickedId === 'personal')
                {
                    window.location.href='html/personal.html';
                }
                else if(clickedId === 'planned')
                {
                    window.location.href= 'html/planed.html';
                }
                else{
                    window.location.href='work.html';
                }
            
            // You can perform other actions with the ID here
        });
    });
});
