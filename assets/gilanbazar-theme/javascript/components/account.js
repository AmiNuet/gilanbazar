// eslint-disable-next-line no-undef
const $ = jQuery.noConflict();

$(document).ready(() => {
    // eslint-disable-next-line no-undefined

    $('#profile_management-nav-item').on('click', function(e) {
        e.preventDefault();
    });

    $('#product_management-nav-item').on('click', function(e) {
        e.preventDefault();
    });

    $('#request_management-nav-item').on('click', function(e) {
        e.preventDefault();
    });

    // Select all message links in the inbox
    $('a[href*="my-account/?fepaction=viewmessage"]').each(function() {
        const originalUrl = $(this).attr('href');
        const newUrl = originalUrl.replace('my-account/?fepaction=viewmessage', 'my-account/message_management/?fepaction=viewmessage');
        $(this).attr('href', newUrl);
    });

    $('#show-message-form-button').click(function (event) {
        event.preventDefault();
        $('#group-message-modal').show(); // Display the modal
    });

    // Click event to close the modal when clicking outside of it
    $('#group-message-modal').click(function (event) {
        if (event.target === this) {
            $(this).hide(); // Hide the modal
        }
    });

    const data = {
        action: 'check_user_logged_in'
    };

    // check if user is logged in then let them send message
    $.post(ajaxurl, data, function(response) {
        if(response === 'yes') {
            $('.message-sent-submit').one('click', function() {
                $('.single__message-form').submit(function(event) {
                    event.preventDefault(); // Prevent the default form submission

                    // // Get the form ID
                    const formId = $(this).attr('id');

                    // Serialize the form data
                    const formData = $(this).serialize();

                    const getValue = function (valueName) {
                        const fakeURL = "http://www.example.com/t.html?" + formData;
                        const newUrl = new URL(fakeURL);
                        return newUrl.searchParams.get(valueName);
                    };

                    const mp = getValue('message-participants');
                    if (mp.length === 0) {
                        alert('لطفا برای ارسال پیام گروهی حداقل یک محصول انتخاب کنید.')
                        return;
                    }

                    const data = {
                        'action': 'mili_message',
                        'message_participants': getValue('message-participants'),
                        'message_product_ids': getValue('message-product-ids'),
                        'message_company_id': getValue('message-company-id'),
                        'message_subject': getValue('subject'),
                        'message_body': getValue('message-body'),
                    };

                    $.post( ajaxurl, data, 'json')
                        .done(function(response) {
                            $('.single__message-form')[0].reset();
                            if(response['success'] == true ) {
                                alert( "پیام با موفقیت ارسال شد." );
                            } else {
                                alert(response['message']);
                            }
                        }).fail(function() {
                        alert( "اشکال در برقراری ارتباط با سرور لطفا مجددا تلاش کنید." );
                    }).always(function() {
                        // $('#uspin').hide();
                    });
                });
            });
        } else {
            $('.message-sent-submit').one('click', function() {
                $('.single__message-form').submit(function(event) {
                    event.preventDefault();
                    alert('برای ارسال پیام لطفا ابتدا ثبت نام کنید و یا اگر عضو هستید وارد شوید.');
                });
            });
        }
    });


    // Gather users after selecting companies in product categories and shop
    $('#send-selected-users-button').on('click', function () {
        let recipients = [];
        let productIds = [];
        $('.select-company-message').each(function () {
            if ($(this).prop('checked')) {
                // Checkbox is checked, gather data
                const authorUser = $(this).data('userauthor');
                const productId = $(this).val();
                recipients.push(authorUser);
                productIds.push(productId);
            }
        });

        // Convert the recipients array to a comma-separated string
        const recipientsString = recipients.join(', ');
        const productIdsString = productIds.join(', ');

        // Set the value of the hidden input
        $('#message-participants').val(recipientsString);
        $('#message-product-ids').val(productIdsString);

        // Now 'recipients' array contains the data from checked checkboxes
        console.log(productIds);
    });



    // This part handles directing user from product to send message panel
    // Function to get URL parameter by name
    function getUrlParameter(name) {
        name = name.replace(/[\[\]]/g, "\\$&");
        const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(window.location.href);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Get the 'recipient' parameter from the URL
    const recipientUsername = getUrlParameter('recipient');
    const currentUserShop = $('.current-user-shop').val();

    $('.product-single__button').click(function(event) {

        // Get the 'productUser' value associated with the clicked button within the same container
        const productUser = $(this).closest('.archive-product__contact-btn').find('.product-user').val();

        console.log(currentUserShop);
        console.log(productUser);

        if (productUser === currentUserShop) {
            event.preventDefault();
            alert("امکان ارسال پیام به خودتان وجود ندارد.");
        }

    });

    // Set the value of the 'message_to' input field
    if (recipientUsername) {
        $('#fep-message-to').val(recipientUsername);
    }
    // Set the value and disable the 'message_top' input field
    if (recipientUsername) {
        $('#fep-message-top').val(recipientUsername).prop('readonly', true);
    }

});
