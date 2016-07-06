//Tree List
(function () {
    'use strict';
    var treeList = $('.tree-list');
    treeList.on('click', 'a', function () {
        if ($(this).siblings('ul').length > 0) {
            $(this).siblings('ul').slideToggle('fast');
            $(this).toggleClass('active');
            $(this).parents('li').siblings().find('ul').slideUp('fast').promise().done(function () {
                $(this).siblings('a').removeClass('active');
            });
            $(this).parents('li').siblings().find('a').removeClass('active');
        } else {
            $(this).toggleClass('active');
            $(this).parents('li').siblings().find('ul').slideUp('fast');
            $(this).parents('li').siblings().find('a').removeClass('active');
        }
    });
}());