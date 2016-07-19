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