$(document).ready(function() {
    // Function to shorten the title and text of each blog
    function shortenBlogText(blogId) {
        var $blog = $("#blog-" + blogId);
        
        // Check if shortenBlogText has already been applied to this blog
        if ($blog.hasClass('shortened')) {
            return;
        }
        
        var titleText = $blog.find(".blog-title").text();
        if (titleText.length > 60) {
            var shortTitle = titleText.substr(0, 60) + "...";
            var shortTitleElem = $("<h4 class='blog-title-shorten' data-toggle='modal' data-target='#blogmodal'>" + shortTitle + "</h3>");
            $blog.find(".blog-title").after(shortTitleElem).hide();
        }
    
        var blogText = $blog.find(".text").text();
        if (blogText.length > 150) {
            var shortBlogText = blogText.substr(0, 90) + "...";
            var shortBlogTextElem = $("<p class='text-shorten'>" + shortBlogText + "</p>");
            $blog.find(".text").after(shortBlogTextElem).hide();
        }
        
        // Add the 'shortened' class to the blog to indicate that it has been shortened
        $blog.addClass('shortened');
    }
    
    // Call the shortenBlogText function for each blog
    
    fetch("./src/blogs/")
    .then(response => response.text())
    .then(data => {
        var numFiles = $(data).find("a[href$='.html']").length;
        for (var i = 0; i <= numFiles; i++) {
            shortenBlogText(i);
        }
    })
    .catch(error => {
        console.error("Error fetching blog data:", error);
    });

    
    function showFullBlogText(blogId) {
        var $blog = $("#blog-" + blogId);

        // Check if showFullBlogText has already been applied to this blog
        if ($blog.hasClass('fulltext')) {
            return;
        }
    }
    
    // Add click event listener to each blog-box
    $(".blog-box").click(function() {
        // Get the blog ID from the clicked blog-box
        var parentID = $(this).parent().attr("id");
        if (parentID.startsWith("blog-")) {
            var blogId = parentID.replace("blog-", "");
            // Show the original title and text of the clicked blog
            showFullBlogText(blogId);
            
            // Get the blog details for the modal
            var blogTitle = $("#blog-" + blogId + " .blog-title").text();
            var blogImage = $("#blog-" + blogId + " .blog-images img").attr("src");
            var blogText = $("#blog-" + blogId + " .text").text();
    
            // Update the modal with the blog details
            $("#blog-modal .modal-title").html(blogTitle);
            $("#blog-modal .modal-body").html('<img src="' + blogImage + '" class="img-fluid"><p>' + blogText + '</p>');
    
            // Show the modal
            $("#blog-modal").modal("show");
        }
    });
});