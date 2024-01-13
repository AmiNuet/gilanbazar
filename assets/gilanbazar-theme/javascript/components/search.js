const $ = jQuery.noConflict();

window.addEventListener('DOMContentLoaded', () => {
    // Attach keyup event handler to the search input field
    $('#s').on('keyup', function (event) {
        // Check if the pressed key is not the "Enter" key
        if (event.key !== "Enter") {
            // Call the performSearch function when the user types in the input field
            performSearch();
            $('.search__results-ajax').css('display', 'block');
        }
    });

    // Prevent any form submission behavior when "Enter" is pressed
    $('#s').closest('form').on('submit', function (event) {
        event.preventDefault();
    });

    $(document).on('click', function (event) {
        const container = $('.search__results-ajax'); // Add #searchform to the container
        const target = $(event.target);

        // Check if the click target is outside the search results container
        if (!target.closest(container).length && !target.is('#searchform')) {
            // Clear the search results by emptying the container
            container.empty();
            container.css('display', 'none');
        }
    });

    // Separate click event handler for #searchform to prevent interference
    $('#searchform').on('click', function (event) {
        // Prevent the click event from bubbling up to the document level
        event.stopPropagation();
    });
});

// Wrap the search functionality in a separate function
function performSearch() {
    // Get the search query from the input field
    let query = $('#s').val();

    // Check if the query length is at least three characters
    if (query.length >= 3) {
        // AJAX request to perform the search
        $.ajax({
            url: ajax_object.ajaxurl, // WordPress AJAX endpoint
            type: 'GET',
            dataType: 'json',
            data: {
                action: 'ajax_search', // This is the name of the AJAX action we'll define in Step 3
                search_query: encodeURIComponent(query),
            },
            success: function (response) {
                // Handle the AJAX response and update the search results container
                if (response.success) {
                    $('.search__results-ajax').html(response.data.html);
                } else {
                    // Handle the case when there are no search results
                    $('.search__results-ajax').html('<p>متاسفم، هیچ محصولی یافت نشد.</p>');
                }
            },
        });
    } else {
        // Clear the search results or display a message indicating the need for at least three characters
        $('.search__results-ajax').html('<p>لطفا حداقل سه حرف برای جستجو وارد کنید</p>');
    }
}
