hexo.extend.tag.register(
    'clearfix',
    () => {
        return '<span class="clearfix"></span>';
    }
);

hexo.extend.filter.register('inject_ready', (inject) => {
    inject.require(
        'head_begin',
        'clearfix.css',
        {
            inline: false
        }
    );
});
