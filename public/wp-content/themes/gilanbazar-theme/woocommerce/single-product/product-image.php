<?php
/**
 * Single Product Image
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/product-image.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://woo.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 7.8.0
 */

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'wc_get_gallery_image_html' ) ) {
    return;
}

global $product;

$columns           = apply_filters( 'woocommerce_product_thumbnails_columns', 4 );
$post_thumbnail_id = $product->get_image_id();
$wrapper_classes   = apply_filters(
    'woocommerce_single_product_image_gallery_classes',
    array(
        'woocommerce-product-gallery',
        'woocommerce-product-gallery--' . ( $post_thumbnail_id ? 'with-images' : 'without-images' ),
        'woocommerce-product-gallery--columns-' . absint( $columns ),
        'images',
    )
);
?>
<div class="productImg <?php echo esc_attr( implode( ' ', array_map( 'sanitize_html_class', $wrapper_classes ) ) ); ?>" data-columns="<?php echo esc_attr( $columns ); ?>" style="opacity: 0; transition: opacity .25s ease-in-out;">
    <div class="swiper productImg__images js-product-images">
        <div class="swiper-wrapper">
            <?php
            if ($post_thumbnail_id) {
                $image_url = wp_get_attachment_image_url($post_thumbnail_id, 'full');
                echo '<div class="productImg__images-slider swiper-slide"><img src="' . esc_url($image_url) . '" alt="Product Image"></div>';
            }
            $attachment_ids = $product->get_gallery_image_ids();
            foreach ($attachment_ids as $attachment_id) {
                $image_url = wp_get_attachment_image_url($attachment_id, 'full');
                echo '<div class="productImg__images-slider swiper-slide"><img src="' . esc_url($image_url) . '" alt="Product Image"></div>';
            }
            ?>
        </div>
        <div class="productImg__images-nav--next">
            <?php echo fetch_svg('chevron-left') ?>
        </div>
        <div class="productImg__images-nav--prev">
            <?php echo fetch_svg('chevron-right') ?>
        </div>
    </div>

    <div thumbsSlider="" class="swiper productImg__images-thumbs js-product-images-thumbs">
        <div class="swiper-wrapper">
            <?php
            if ($post_thumbnail_id) {
                $thumb_url = wp_get_attachment_image_url($post_thumbnail_id, 'full');
                echo '<div class="productImg__images-slider-thumb swiper-slide"><img  src="' . esc_url($thumb_url) . '" alt="Product Thumbnail"></div>';
            }

            foreach ($attachment_ids as $attachment_id) {
                $thumb_url = wp_get_attachment_image_url($attachment_id, 'full');
                echo '<div class="productImg__images-slider-thumb swiper-slide"><img src="' . esc_url($thumb_url) . '" alt="Product Thumbnail"></div>';
            }
            ?>
        </div>
    </div>

</div>
