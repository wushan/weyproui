$('input.pick-date').pickadate();
$('input.pick-time').pickatime();

$('.image-pop').magnificPopup({
	type: 'image',
	closeOnContentClick: true,
	mainClass: 'mfp-img-mobile',
	image: {
		verticalFit: true
	}
});


//Init Plugins
$(document).ready(function(){
	$(".sticker").sticky({
		topSpacing:0,
		zIndex: 99
	});
	$(window).resize(function(){
		$(".sticker").sticky('update');
	})
});
//Tabber Trigger
$('#tabber').tabber();
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
//DataTables
$('.data-tables.normal').DataTable({
	paging: true,
	"pagingType": "full",
	ordering: true,
    responsive: {
            details: {
                type: 'column',
                target: -1
            }
        },
        columnDefs: [ {
            className: 'control',
            orderable: false,
            targets:   -1
        } ]
});

$('.data-tables.draggable').DataTable({
	paging: true,
	"pagingType": "full",
    rowReorder: {
		selector: 'td:first-child',
		dataSrc: 'td:first-child'
	},
	ordering: true,
    responsive: {
            details: {
                type: 'column',
                target: -1
            }
        },
        columnDefs: [ {
            className: 'control',
            orderable: false,
            targets:   -1
        } ]
});

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
