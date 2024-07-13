$(document).ready(function() {
    // Show all images and descriptions initially
    $('.image-container').show();
    $('.description').hide();
    $('.description[data-category="all"]').show();

    // Filter images and show corresponding descriptions on button click
    $('.filter-btn').click(function() {
        var category = $(this).data('category');

        // Hide all images and descriptions
        $('.image-container').hide();
        $('.description').hide();

        // Show images and descriptions for the selected category
        if (category === 'all') {
            $('.image-container').show();
        } else {
            $('.image-container[data-category="' + category + '"]').show();
            $('.description[data-category="' + category + '"]').show();
        }
    });

    // Lightbox functionality
    $('.image-container').click(function() {
        var imgSrc = $(this).find('img').attr('src');
        $('.lightbox-img').attr('src', imgSrc);
        $('#lightbox').show();
    });

    // Close lightbox
    $('.close').click(function() {
        $('#lightbox').hide();
    });

    // Close lightbox when clicking outside the image
    $('#lightbox').click(function(e) {
        if (e.target.id === 'lightbox') {
            $('#lightbox').hide();
        }
    });
});
