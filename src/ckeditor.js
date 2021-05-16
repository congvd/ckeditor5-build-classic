// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

// Additional GroupVine plugins.  For instructions, see:
//   https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installing-plugins.html

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Font from '@ckeditor/ckeditor5-font/src/font';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import Comments from '@ckeditor/ckeditor5-comments/src/comments';


export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	Underline,
	BlockQuote,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
    ImageResize,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	Alignment,
	Font,
	RemoveFormat,
	Indent,
	IndentBlock,
	SimpleUploadAdapter,
	Comments
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
		    'undo', 'redo',
		    '|', 'bold', 'italic', 'underline',
                    '|', 'fontColor', 'fontBackgroundColor',
		    '|', 'numberedList', 'bulletedList',
		    '|', 'alignment', 'indent', 'outdent',
		    '|', 'heading', 'fontFamily', 'fontSize', 
		    '|', 'link', 'insertTable', 'imageUpload', 'mediaEmbed',
            '|', 'removeFormat',
            '|', 'blockQuote', 'comment'
		]
	},
    // https://ckeditor.com/docs/ckeditor5/latest/features/image.html
    // 'imageStyle:side',  'side',
    image : {
        toolbar: [ 
            'imageTextAlternative', 'imageStyle:full', 
            '|', 
            'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight'
        ],
        styles : [
            'full',
            'alignLeft',
            'alignCenter',
            'alignRight'
        ]
    },
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
    heading: {
        options: [
            { model: 'paragraph', title: 'Normal', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: {name : 'h1', classes : 'gv-h1'}, title: 'Heading 1', class: 'ck-heading_heading1 gv-heading1' },
            { model: 'heading2', view: {name : 'h2', classes : 'gv-h2'}, title: 'Heading 2', class: 'ck-heading_heading2 gv-heading2' },
            { model: 'heading3', view: {name : 'h3', classes : 'gv-h3'}, title: 'Heading 3', class: 'ck-heading_heading3 gv-heading3' }
        ]
    },

	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'vn'
};