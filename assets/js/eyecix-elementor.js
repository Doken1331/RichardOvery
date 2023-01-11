(function () {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */
    var WidgetEyecixHandler = function ($scope, $) {
        console.log($scope);
    };

    // Make sure you run this code under Elementor.
    jQuery(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/awesomesauce.default', WidgetEyecixHandler);
    });
})(jQuery);

jQuery(document).on('click', '.eyecix-post-like-btn', function (e) {
    'use strict';
    e.preventDefault();
    var _this = jQuery(this),
        this_id = _this.attr('data-id'),
        icon_class = 'fa fa-thumbs-o-up',
        icon_fill_class = 'fa fa-thumbs-up',
        this_loader = _this.find('i'),
        this_counter = _this.find('.like-count');

    this_loader.attr('class', 'fa fa-refresh fa-spin');

    var request = jQuery.ajax({
        url: eyecix_funnc_vars.ajax_url,
        method: "POST",
        data: {
            post_id: this_id,
            action: 'eyecix_post_dislikes_count',
        },
        dataType: "json"
    });
    request.done(function (response) {
        if (typeof response.counter !== 'undefined' && response.counter != '') {
            this_counter.html(response.counter);
        }
        _this.removeAttr('class');
        _this.find('i').attr('class', icon_fill_class);
    });
    request.fail(function (jqXHR, textStatus) {
        _this.find('i').attr('class', icon_class);
    });
});