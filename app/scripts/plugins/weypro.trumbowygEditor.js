//Editor
var fullOptions = {
    btnsDef: {
        // Customizables dropdowns
        image: {
            dropdown: ['insertImage', 'upload', 'base64'],
            ico: 'insertImage'
        },
        linkImproved: {
            dropdown: ['createLink', 'editLink', 'unlink'],
            ico: 'link'
        }
    },
    btns: ['viewHTML',
        '|', 'formatting',
        '|', 'btnGrp-design',
        '|', 'linkImproved',
        '|', 'image',
        '|', 'btnGrp-justify',
        '|', 'btnGrp-lists',
        '|', 'foreColor', 'backColor',
        '|', 'preformatted',
        '|', 'horizontalRule']
};

$('textarea.editor').trumbowyg(fullOptions);