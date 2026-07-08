import { tallyQuestions, dfaQuestions, adfaQuestions, pdfaQuestions, taxationQuestions } from './courses/accounting.js';
import { graphicDesignQuestions, coreldrawQuestions, photoshopQuestions, illustratorQuestions, threeDEffectsQuestions } from './courses/graphic_design.js';
import { reactQuestions, gsapQuestions, lenisQuestions, cLangQuestions, cppQuestions, phpQuestions, javaQuestions, javascriptQuestions, sqlQuestions, linuxQuestions } from './courses/coding_extra.js';
import { webDesignQuizQuestions, oLevelQuestions, aLevelQuestions, dataScientistQuestions, googleAdsQuestions, seoQuestions, wordpressQuestions } from './courses/professional.js';
import { excelMisQuestions, excelMacroQuestions, excelDashboardQuestions, advancedExcelQuestions } from './courses/excel.js';
import { niitQuestions, ditQuestions, adcaQuestions, dcaQuestions } from './courses/diploma.js';
import { pandasQuestions, numpyQuestions, machineLearningQuestions, powerBiQuestions, tableauQuestions } from './courses/data_analyst.js';
import { basicQuestions, cccQuestions, ipItQuestions } from './courses/other.js';

export const QUESTION_BANK = {
  coding: {
    title: 'Technology & Coding',
    icon: '💻',
    colorTheme: 'from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.15)] border-cyan-500/20 text-cyan-400',
    subcategories: {
      html: {
        title: 'HTML',
        easy: [
          {
            question: 'What does HTML stand for?',
            options: [
              'HighText Markup Language',
              'HyperText Markup Language',
              'HyperTabular Model Language',
              'Hybrid Text Makeup Language'
            ],
            correct: 1,
            explanation: 'HTML stands for HyperText Markup Language. It is the standard markup language used to create web pages.'
          },
          {
            question: 'Which HTML element is used to define the most important heading?',
            options: ['<h6>', '<h1>', '<heading>', '<head>'],
            correct: 1,
            explanation: '<h1> is the element used to define the most important heading on a page, while <h6> defines the least important heading.'
          },
          {
            question: 'Which element is used to create a hyperlink in HTML?',
            options: ['<link>', '<a>', '<href>', '<url>'],
            correct: 1,
            explanation: 'The <a> (anchor) tag is used to define a hyperlink, which links one page to another.'
          },
          {
            question: 'What is the correct HTML element for inserting a line break?',
            options: ['<break>', '<lb>', '<br>', '<hr>'],
            correct: 2,
            explanation: 'The <br> tag inserts a single line break. It is an empty/void element, meaning it does not have a closing tag.'
          },
          {
            question: 'Which attribute is used to specify a unique identifier for an HTML element?',
            options: ['class', 'id', 'name', 'key'],
            correct: 1,
            explanation: 'The id attribute specifies a unique id for an HTML element. The value must be unique within the HTML document.'
          },
          {
            question: 'What does the <ol> tag represent in HTML?',
            options: ['Ordered List', 'Original List', 'Optional List', 'One-time List'],
            correct: 0,
            explanation: 'The <ol> tag defines an ordered list. The list items (<li>) are numbered by default.'
          },
          {
            question: 'Which HTML attribute is used to specify an alternate text for an image if the image cannot be displayed?',
            options: ['title', 'src', 'alt', 'desc'],
            correct: 2,
            explanation: 'The alt attribute provides alternative information for an image if a user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).'
          },
          {
            question: 'Which tag is used to create a checkbox in an HTML form?',
            options: ['<checkbox>', '<input type="checkbox">', '<check>', '<input type="check">'],
            correct: 1,
            explanation: 'The <input> element with type set to "checkbox" creates a checkbox input element on the page.'
          },
          {
            question: 'Which element is used to group inline-elements and does not represent anything on its own?',
            options: ['<div>', '<span>', '<section>', '<p>'],
            correct: 1,
            explanation: 'The <span> tag is an inline container used to mark up a part of a text or a part of a document, whereas <div> is a block-level container.'
          },
          {
            question: 'In HTML, what is the default target of a hyperlink if the target attribute is not specified?',
            options: ['_blank', '_self', '_parent', '_top'],
            correct: 1,
            explanation: 'The default value is _self, which opens the linked document in the same frame/tab where it was clicked.'
          },
          {
            question: 'Which tag is used to define a list item inside an ordered or unordered list?',
            options: ['<list>', '<li>', '<item>', '<ul>'],
            correct: 1,
            explanation: 'The <li> (list item) tag is used to define an item in a list, whether it is ordered (<ol>) or unordered (<ul>).'
          },
          {
            question: 'What is the correct HTML element to define important text?',
            options: ['<strong>', '<important>', '<b>', '<i>'],
            correct: 0,
            explanation: 'The <strong> element is used to identify text of strong importance, which browsers typically display in bold.'
          },
          {
            question: 'Which element represents a paragraph in HTML?',
            options: ['<para>', '<p>', '<pg>', '<text>'],
            correct: 1,
            explanation: 'The <p> element defines a paragraph.'
          },
          {
            question: 'Which HTML tag is used to define an unordered list?',
            options: ['<ol>', '<ul>', '<list>', '<dl>'],
            correct: 1,
            explanation: 'The <ul> tag defines an unordered (bulleted) list.'
          },
          {
            question: 'What is the correct HTML tag to display an image?',
            options: ['<image>', '<img>', '<pic>', '<src>'],
            correct: 1,
            explanation: 'The <img> tag is used to embed an image in an HTML page.'
          },
          {
            question: 'Which HTML attribute is used to define inline styles?',
            options: ['class', 'styles', 'style', 'font'],
            correct: 2,
            explanation: 'The style attribute specifies an inline style for an element.'
          },
          {
            question: 'Which tag is used to create a drop-down list in an HTML form?',
            options: ['<input type="dropdown">', '<select>', '<list>', '<option>'],
            correct: 1,
            explanation: 'The <select> element is used to create a drop-down list.'
          },
          {
            question: 'What is the correct tag for the document\'s header area, usually containing site navigation?',
            options: ['<head>', '<header>', '<nav>', '<top>'],
            correct: 1,
            explanation: 'The <header> element represents a container for introductory content or a set of navigational links.'
          },
          {
            question: 'Which tag is used to create an input text field?',
            options: ['<input type="text">', '<textfield>', '<input type="string">', '<text>'],
            correct: 0,
            explanation: 'Setting type to "text" on an <input> tag creates a single-line text input field.'
          },
          {
            question: 'Which HTML element is used to define a multiline input field?',
            options: ['<input type="multiline">', '<textarea>', '<input type="textarea">', '<text>'],
            correct: 1,
            explanation: 'The <textarea> element defines a multi-line text input control.'
          },
          {
            question: 'Which HTML element is used for the footer of a document?',
            options: ['<bottom>', '<footer>', '<foot>', '<end>'],
            correct: 1,
            explanation: 'The <footer> element represents a footer for its nearest ancestor sectioning content or sectioning root.'
          },
          {
            question: 'Which HTML element defines a title for the document?',
            options: ['<title>', '<head>', `<meta>`, '<header>'],
            correct: 0,
            explanation: 'The <title> element defines the title of the document. The title must be text-only, and it is shown in the browser\'s title bar or in the page\'s tab.'
          },
          {
            question: 'What is the default background color of a web page in a clean HTML document if no styling is applied?',
            options: ['Black', 'White', 'Gray', 'Yellow'],
            correct: 1,
            explanation: 'By default, browsers render the background of an HTML document in white.'
          },
          {
            question: 'Which element is used to highlight or mark text in HTML?',
            options: ['<mark>', '<highlight>', '<color>', '<b>'],
            correct: 0,
            explanation: 'The <mark> element defines text that should be marked or highlighted.'
          },
          {
            question: 'Which element represents the container for all of a page\'s visible content?',
            options: ['<head>', '<body>', '<html>', '<main>'],
            correct: 1,
            explanation: 'The <body> element contains all the visible content of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.'
          },
          {
            question: 'Which attribute is used to provide extra information about an element, often shown as a tooltip when the mouse moves over it?',
            options: ['tooltip', 'title', 'info', 'hover'],
            correct: 1,
            explanation: 'The title attribute specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.'
          },
          {
            question: 'Which character entity represents a non-breaking space in HTML?',
            options: ['&nbsp;', '&space;', '&nbsp', '&amp;'],
            correct: 0,
            explanation: '&nbsp; is the character entity used to insert a non-breaking space.'
          },
          {
            question: 'Which HTML tag is used to define a horizontal rule/line?',
            options: ['<line>', '<hr>', '<br>', '<hl>'],
            correct: 1,
            explanation: 'The <hr> tag defines a thematic break in an HTML page, usually displayed as a horizontal rule.'
          },
          {
            question: 'Which element is used to represent preformatted text in HTML?',
            options: ['<code>', '<pre>', '<text>', '<format>'],
            correct: 1,
            explanation: 'The <pre> element defines preformatted text. Text in a <pre> element is displayed in a fixed-width font, and it preserves both spaces and line breaks.'
          },
          {
            question: 'Which element is used to define subscript text?',
            options: ['<sub>', '<sup>', '<subscript>', '<under>'],
            correct: 0,
            explanation: 'The <sub> tag defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font.'
          }
        ],
        medium: [
          {
            question: 'Which HTML5 element is used to display a measurement within a known range, such as disk usage or query results?',
            options: ['<progress>', '<range>', '<meter>', '<scale>'],
            correct: 2,
            explanation: 'The <meter> element defines a scalar measurement within a known range, or a fractional value. <progress> represents task completion status instead.'
          },
          {
            question: 'What is the correct HTML element for playing audio files?',
            options: ['<sound>', '<music>', '<audio>', '<play>'],
            correct: 2,
            explanation: 'The <audio> HTML element is used to embed sound content in documents. It may contain one or more audio sources.'
          },
          {
            question: 'Which HTML tag is used to define a description list (formerly definition list)?',
            options: ['<dl>', '<ul>', '<ol>', '<list>'],
            correct: 0,
            explanation: 'The <dl> tag defines a description list. It is used in conjunction with <dt> (defines terms/names) and <dd> (describes each term/name).'
          },
          {
            question: 'What does the <noscript> tag do in HTML?',
            options: [
              'Disables JavaScript on the page',
              'Displays content for users who have disabled JavaScript in their browser',
              'Speeds up page load times by ignoring scripts',
              'Comments out script blocks'
            ],
            correct: 1,
            explanation: 'The <noscript> element defines an alternate content for users that have disabled script in their browser or have a browser that doesn\'t support script.'
          },
          {
            question: 'Which attribute of the <script> tag allows the script to be executed asynchronously as soon as it is available?',
            options: ['defer', 'async', 'async-exec', 'onload'],
            correct: 1,
            explanation: 'The async attribute is a boolean attribute. When present, it specifies that the script will be executed asynchronously as soon as it is available, without blocking HTML parsing.'
          },
          {
            question: 'In an HTML table, which attribute allows a cell to span across multiple columns?',
            options: ['colspan', 'rowspan', 'span', 'colwidth'],
            correct: 0,
            explanation: 'The colspan attribute defines the number of columns a table cell (<th> or <td>) should span.'
          },
          {
            question: 'Which semantic element represents a thematic grouping of content, typically with a heading, in HTML5?',
            options: ['<article>', '<aside>', '<section>', '<div>'],
            correct: 2,
            explanation: 'The <section> element represents a standalone, thematic section of a document. It should typically contain a heading element.'
          },
          {
            question: 'What is the purpose of the download attribute on an <a> element?',
            options: [
              'Automatically downloads the linked file when the page loads',
              'Prompts the user to save the linked resource instead of navigating to it',
              'Restricts downloading of the resource',
              'Specifies the download speed limit'
            ],
            correct: 1,
            explanation: 'The download attribute on an <a> element instructs the browser to download the URL instead of navigating to it, prompting the user to save it locally.'
          },
          {
            question: 'What does the <details> tag represent in HTML5?',
            options: [
              'A sidebar containing metadata',
              'An interactive disclosure widget that the user can open or close',
              'A list of detailed descriptions',
              'An invisible comment block'
            ],
            correct: 1,
            explanation: 'The <details> tag specifies additional details that the user can view or hide on demand. It is typically paired with <summary>.'
          },
          {
            question: 'Which HTML5 input type is specifically designed for entering calendar dates?',
            options: ['<input type="date">', '<input type="datetime">', '<input type="calendar">', '<input type="time">'],
            correct: 0,
            explanation: 'The <input> type="date" defines a date picker control in supporting browsers.'
          },
          {
            question: 'Which tag is used to define the title of a table in HTML?',
            options: ['<title>', '<head>', '<caption>', '<header>'],
            correct: 2,
            explanation: 'The <caption> tag defines a table caption and must be inserted immediately after the <table> tag.'
          },
          {
            question: 'What is the purpose of the HTML5 <figure> element?',
            options: [
              'To wrap self-contained content like diagrams, photos, or code listings',
              'To style vector graphics',
              'To construct layouts using flexbox',
              'To perform mathematical calculations'
            ],
            correct: 1,
            explanation: 'The <figure> element represents self-contained content, optionally with a caption (<figcaption>), that is referenced as a single unit from the main flow.'
          },
          {
            question: 'Which HTML attribute is used to pre-populate an input field with a hint describing the expected value?',
            options: ['value', 'placeholder', 'hint', 'desc'],
            correct: 1,
            explanation: 'The placeholder attribute specifies a short hint that describes the expected value of an input field.'
          },
          {
            question: 'What is the difference between checked and defaultChecked in HTML form inputs?',
            options: [
              'checked is used only in CSS while defaultChecked is JS-only',
              'defaultChecked is the initial default state whereas checked reflects the current active DOM state',
              'They are completely identical in all scenarios',
              'checked works only for checkboxes and defaultChecked only for radio buttons'
            ],
            correct: 1,
            explanation: 'defaultChecked represents the initial state set by the HTML markup, while checked represents the current state modified by user interaction.'
          },
          {
            question: 'Which attribute should you add to a form input to specify that it must be filled out before submitting the form?',
            options: ['validate', 'required', 'check', 'mandatory'],
            correct: 1,
            explanation: 'The required attribute is a boolean attribute. When present, it specifies that an input field must be filled out before submitting the form.'
          },
          {
            question: 'In HTML, what is the purpose of the <abbr> tag?',
            options: [
              'To make text bold',
              'To define an abbreviation or an acronym',
              'To insert a line break',
              'To create an absolute link'
            ],
            correct: 1,
            explanation: 'The <abbr> tag defines an abbreviation or an acronym. It can use the global title attribute to show the full version when hovering.'
          },
          {
            question: 'What does the <time> element represent in HTML5?',
            options: [
              'A stopwatch utility',
              'A machine-readable date/time representation',
              'The current server time',
              'The total video duration'
            ],
            correct: 1,
            explanation: 'The <time> element represents a specific period in time. It can include the datetime attribute to translate the time into a machine-readable format.'
          },
          {
            question: 'Which HTML tag is used to embed another HTML document within the current document?',
            options: ['<embed>', '<object>', '<iframe>', '<frame>'],
            correct: 2,
            explanation: 'An <iframe> (inline frame) is used to embed another document within the current HTML document.'
          },
          {
            question: 'Which HTML5 tag is used to specify a set of options for an <input> element with autocompletion?',
            options: ['<datalist>', '<select>', '<option>', '<list>'],
            correct: 0,
            explanation: 'The <datalist> tag specifies a list of pre-defined options for an <input> element.'
          },
          {
            question: 'In an HTML document, what does the <address> tag represent?',
            options: [
              'The street location of a server',
              'Contact information for the author/owner of a document or article',
              'An IP address mapping',
              'A hyperlink structure'
            ],
            correct: 1,
            explanation: 'The <address> HTML element indicates that the enclosed HTML provides contact information for a person or people, or for an organization.'
          },
          {
            question: 'What is the correct HTML element for displaying a progress bar?',
            options: ['<progressbar>', '<progress>', '<bar>', '<loading>'],
            correct: 1,
            explanation: 'The <progress> HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
          },
          {
            question: 'Which HTML5 tag defines navigation links?',
            options: ['<nav>', '<navigation>', '<links>', '<menu>'],
            correct: 0,
            explanation: 'The <nav> HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents.'
          },
          {
            question: 'Which HTML5 attribute is used to specify that an input field should automatically get focus when the page loads?',
            options: ['focus', 'autofocus', 'select', 'onload'],
            correct: 1,
            explanation: 'The autofocus attribute specifies that an <input> element should automatically get focus when the page loads.'
          },
          {
            question: 'What is the role of the <kbd> tag in HTML?',
            options: ['Defines keyboard input', 'Defines a database key', 'Marks bold text', 'Represents a code block'],
            correct: 0,
            explanation: 'The <kbd> HTML element represents a span of inline text denoting user input from a keyboard, voice input, or any other text entry device.'
          },
          {
            question: 'Which element represents self-contained caption content for a <figure>?',
            options: ['<legend>', '<caption>', '<figcaption>', '<title>'],
            correct: 2,
            explanation: 'The <figcaption> HTML element represents a caption or legend describing the rest of the contents of its parent <figure> element.'
          },
          {
            question: 'Which element is used to group related elements inside an HTML form?',
            options: ['<group>', '<fieldset>', '<legend>', '<optgroup>'],
            correct: 1,
            explanation: 'The <fieldset> element is used to group several controls and labels (<label>) within a web form.'
          },
          {
            question: 'In HTML5, which tag is used to specify a caption for a <fieldset>?',
            options: ['<caption>', '<legend>', '<title>', '<label>'],
            correct: 1,
            explanation: 'The <legend> element represents a caption for the content of its parent <fieldset>.'
          },
          {
            question: 'What is the purpose of the <mark> tag in HTML5?',
            options: ['Highlight text', 'Insert mathematical symbols', 'Define a bookmark', 'Draw shapes'],
            correct: 0,
            explanation: 'The <mark> HTML element represents text which is marked or highlighted for reference or notation purposes, due to the marked passage\'s relevance or importance in the enclosing context.'
          },
          {
            question: 'Which attribute is used to specify the relationship between the current document and the linked document in a <link> tag?',
            options: ['rel', 'type', 'href', 'media'],
            correct: 0,
            explanation: 'The rel attribute specifies the relationship between the current document and the linked document (e.g., rel="stylesheet").'
          },
          {
            question: 'In HTML5, which tag is used to specify independent, self-contained content, such as a blog post or news article?',
            options: ['<section>', '<article>', '<aside>', '<main>'],
            correct: 1,
            explanation: 'The <article> element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable.'
          }
        ],
        hard: [
          {
            question: 'In HTML5, which of the following is true about "void elements"?',
            options: [
              'They must not have any content or a closing tag',
              'They automatically delete their children from the DOM',
              'They are only allowed inside the <head> section',
              'They must have a closing tag but cannot have content'
            ],
            correct: 0,
            explanation: 'Void elements (like <img>, <br>, <input>, <meta>) cannot have any content and must never have a closing tag in HTML.'
          },
          {
            question: 'What does the rel="noopener" attribute-value pair do when used on a hyperlink with target="_blank"?',
            options: [
              'Prevents the destination page from stealing focus',
              'Improves performance by lazy-loading the new window',
              'Prevents the new page from accessing the window.opener property of the original window',
              'Automatically closes the original tab'
            ],
            correct: 2,
            explanation: 'Using rel="noopener" ensures that the newly opened page cannot access window.opener of the referring page, protecting against reverse tabnabbing.'
          },
          {
            question: 'What is the default value of the enctype attribute on an HTML <form> element?',
            options: [
              'multipart/form-data',
              'text/plain',
              'application/x-www-form-urlencoded',
              'application/json'
            ],
            correct: 2,
            explanation: 'The default encoding type is application/x-www-form-urlencoded. Keys and values are encoded in key-value pairs separated by &.'
          },
          {
            question: 'Which HTML5 global attribute is used to indicate that an element is not yet, or is no longer, directly relevant to the page\'s current state?',
            options: ['disabled', 'hidden', 'invisible', 'ignore'],
            correct: 1,
            explanation: 'The hidden attribute is a boolean attribute. When present, it specifies that an element is not yet, or is no longer, directly relevant (typically styled as display: none).'
          },
          {
            question: 'Under the HTML Living Standard, what is the correct tag structure for displaying pre-formatted code with syntax highlighting?',
            options: [
              '<code syntax="lang">...</code>',
              '<pre><code>...</code></pre>',
              '<codebox>...</codebox>',
              '<pre><plaintext>...</plaintext></pre>'
            ],
            correct: 1,
            explanation: 'The recommended way to mark up computer code is to wrap a <code> element (representing a fragment of computer code) inside a <pre> element (representing preformatted text).'
          },
          {
            question: 'Which element is used to represent the result of a calculation or user action in HTML5?',
            options: ['<result>', '<output>', '<calc>', '<data>'],
            correct: 1,
            explanation: 'The <output> element is a container element into which a site or app can inject the results of a calculation.'
          },
          {
            question: 'What is the effect of the translate attribute in HTML5?',
            options: [
              'It applies CSS transforms to translate elements on the screen',
              'It specifies whether an element\'s attribute values and text content should be translated when the page is localized',
              'It specifies the target language for machine translation',
              'It is a deprecated attribute used for frameset layouts'
            ],
            correct: 1,
            explanation: 'The global translate attribute specifies whether an element\'s attribute values and text content should be translated when the page is localized.'
          },
          {
            question: 'In HTML5 responsive design, which attribute is used on the <source> element inside a <picture> element to specify the media condition (like min-width) for that source?',
            options: ['media', 'sizes', 'srcset', 'condition'],
            correct: 0,
            explanation: 'The media attribute on <source> accepts a media query to decide which image source the browser should select.'
          },
          {
            question: 'Under the HTML Living Standard, which element is used to draw graphics on the fly via scripting (usually JavaScript)?',
            options: ['<svg>', '<canvas>', '<paint>', '<graphic>'],
            correct: 1,
            explanation: 'The <canvas> element is used to draw graphics on the fly via scripting (usually JavaScript). Unlike SVG, it is raster-based.'
          },
          {
            question: 'What does the ping attribute on an <a> element do?',
            options: [
              'Tests the server connection speed when clicked',
              'Sends a POST request with the body "PING" to the target URL',
              'Specifies a list of URLs to be notified (via POST requests) when the link is followed',
              'Opens a websocket ping-pong connection'
            ],
            correct: 2,
            explanation: 'The ping attribute specifies a list of URLs to which the browser will send a POST request in the background when the user clicks the hyperlink.'
          },
          {
            question: 'Which HTML5 element represents content that is tangentially related to the content around it, often represented as a sidebar?',
            options: ['<section>', '<aside>', '<summary>', '<nav>'],
            correct: 1,
            explanation: 'The <aside> element represents a section of a page that consists of content that is tangentially related to the content around the aside element.'
          },
          {
            question: 'In HTML, what is the difference between defer and async when loading external scripts?',
            options: [
              'defer runs scripts synchronously, while async runs them asynchronously',
              'async executes scripts immediately after download (blocking HTML parsing), while defer executes scripts in document order only after HTML parsing is complete',
              'defer is for inline scripts, while async is only for external files',
              'There is no difference; they are aliases of the same behavior'
            ],
            correct: 1,
            explanation: 'Scripts loaded with async are run as soon as they finish downloading, which might block parser execution. Scripts loaded with defer are executed in order after the document parsing is fully done.'
          },
          {
            question: 'What is the purpose of the <kbd> tag in HTML?',
            options: [
              'To style text with a strike-through',
              'To represent user keyboard input',
              'To define a database key',
              'To display text in a bold sans-serif font'
            ],
            correct: 1,
            explanation: 'The <kbd> tag is used to define keyboard input. The content inside is typically displayed in the browser\'s default monospace font.'
          },
          {
            question: 'Which attribute of the <iframe> element is used to enforce restrictions on the content loaded within the frame (e.g., preventing scripts or form submissions)?',
            options: ['secure', 'sandbox', 'restrict', 'policy'],
            correct: 1,
            explanation: 'The sandbox attribute enables an extra set of restrictions for the content in the <iframe>. When the attribute is set, it restricts script execution, form submission, same-origin policies, and popups.'
          },
          {
            question: 'In HTML5, what is the purpose of the <mark> element?',
            options: [
              'To insert a bookmark flag on the page',
              'To highlight or mark text for reference due to its relevance in another context',
              'To define a mathematical range',
              'To represent a correction markup'
            ],
            correct: 1,
            explanation: 'The <mark> element defines marked or highlighted text for reference or notation purposes.'
          },
          {
            question: 'Under the HTML specification, which element is used to represent content that is no longer accurate or no longer relevant, typically rendered with a strike-through?',
            options: ['<strike>', '<del>', '<s>', '<remove>'],
            correct: 2,
            explanation: 'The <s> tag represents things that are no longer correct, accurate or relevant. (Note: <del> is specifically for document edits/deletions, and <strike> is deprecated in HTML5).'
          },
          {
            question: 'In HTML5, what is the semantic purpose of the <main> element?',
            options: [
              'To wrap the navigation links',
              'To hold the dominant content of the <body> of a document',
              'To serve as a substitute for <body>',
              'To define headers and footers'
            ],
            correct: 1,
            explanation: 'The <main> element represents the dominant content of the <body> of a document. The content inside the <main> element should be unique to the document.'
          },
          {
            question: 'What does the srcdoc attribute on an <iframe> do?',
            options: [
              'Points to a JavaScript file that controls the frame',
              'Specifies the HTML content of the page to show in the inline frame, overriding the src attribute',
              'Specifies the security certificate URL',
              'Defines the download directory of the frame'
            ],
            correct: 1,
            explanation: 'The srcdoc attribute specifies the HTML content of the page to show in the <iframe>. If a browser supports srcdoc, it will override the src attribute.'
          },
          {
            question: 'Which HTML5 element represents a machine-readable value of its contents alongside a human-readable translation?',
            options: ['<data>', '<meter>', '<translation>', '<label>'],
            correct: 0,
            explanation: 'The <data> HTML element links a given piece of content with a machine-readable translation (via its value attribute).'
          },
          {
            question: 'In an HTML form, what is the effect of setting novalidate on the <form> element?',
            options: [
              'Disables all inputs inside the form',
              'Specifies that the form-data should not be validated when submitted',
              'Allows submitting the form without a submit button',
              'Forces form inputs to be validated on every character stroke'
            ],
            correct: 1,
            explanation: 'The novalidate attribute is a boolean attribute. When present, it specifies that the form-data (inputs) should not be validated when submitted.'
          },
          {
            question: 'What is the correct way to include fallback options for the HTML5 <video> tag?',
            options: [
              'Put text or markup inside the <video> tag',
              'Use fallback attribute on the <video> tag',
              'Use <video-fallback> tag',
              'Fallback is handled automatically by CSS'
            ],
            correct: 0,
            explanation: 'Any content placed between the opening and closing <video> tags is rendered only in browsers that do not support the video element.'
          },
          {
            question: 'Which HTML5 tag is used to draw vector graphics directly in the browser?',
            options: ['<svg>', '<canvas>', '<vector>', '<draw>'],
            correct: 0,
            explanation: 'The <svg> tag defines a container for SVG (Scalable Vector Graphics) vector graphics.'
          },
          {
            question: 'What does the contenteditable global attribute do?',
            options: [
              'Allows the user to edit the content of the element',
              'Prevents the user from copying the element\'s text',
              'Changes the display styles of elements',
              'Enables browser spellchecking only'
            ],
            correct: 0,
            explanation: 'The contenteditable attribute specifies whether the content of an element is editable or not.'
          },
          {
            question: 'Which attribute specifies the HTTP method used when submitting form data?',
            options: ['method', 'action', 'submit', 'type'],
            correct: 0,
            explanation: 'The method attribute specifies the HTTP method (GET or POST) to be used when submitting the form-data.'
          },
          {
            question: 'What is the role of the manifest attribute in the <html> tag?',
            options: [
              'Specifies the offline cache manifest URL',
              'Links to a webmanifest for PWA characteristics',
              'Configures CSS framework imports',
              'Optimizes SEO heading layouts'
            ],
            correct: 0,
            explanation: 'The manifest attribute in the <html> tag points to the cache manifest file for offline web page caching.'
          },
          {
            question: 'Which value of the preload attribute inside a <video> tag tells the browser to download the metadata and media when the page loads?',
            options: ['auto', 'metadata', 'none', 'full'],
            correct: 0,
            explanation: 'Setting preload="auto" hints to the browser that it can download the entire video or audio file when the page loads.'
          },
          {
            question: 'In HTML5, which tag specifies a resource that the media element can stream depending on browser compatibility?',
            options: ['<source>', '<link>', '<media>', '<track>'],
            correct: 0,
            explanation: 'The <source> tag is used to specify multiple media resources for media elements, such as <video>, <audio>, and <picture>.'
          },
          {
            question: 'What is the purpose of the <track> element in a <video> tag?',
            options: ['Subtitles, captions or description text files', 'Audio track selector', 'Video thumbnail images', 'Playback speed tracker'],
            correct: 0,
            explanation: 'The <track> element specifies explicit timed text tracks (such as subtitles, captions, or description tracks) for media elements.'
          },
          {
            question: 'Which attribute of the <input> element specifies a regular expression pattern to validate the input value?',
            options: ['pattern', 'regex', 'validate', 'match'],
            correct: 0,
            explanation: 'The pattern attribute specifies a regular expression that the <input> element\'s value is checked against.'
          },
          {
            question: 'In HTML5, which attribute of the <img> tag allows specifying responsive images depending on device pixel ratios?',
            options: ['srcset', 'sizes', 'media', 'src-responsive'],
            correct: 0,
            explanation: 'The srcset attribute provides the browser with a list of image sources, allowing the browser to select the image that fits best.'
          }
        ]
      },
      css: {
        title: 'CSS',
        easy: [
          {
            question: 'What does CSS stand for?',
            options: [
              'Creative Style Sheets',
              'Cascading Style Sheets',
              'Computer Style Sheets',
              'Colorful Style Sheets'
            ],
            correct: 1,
            explanation: 'CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media.'
          },
          {
            question: 'Which HTML tag is used to define an internal style sheet?',
            options: ['<css>', '<script>', '<style>', '<link>'],
            correct: 2,
            explanation: 'The <style> tag is used to define internal CSS rules within the <head> section of an HTML document.'
          },
          {
            question: 'Which CSS property is used to change the background color of an element?',
            options: ['color', 'background-color', 'bgcolor', 'background-image'],
            correct: 1,
            explanation: 'The background-color property sets the background color of an element.'
          },
          {
            question: 'Which CSS property is used to change the text color of an element?',
            options: ['text-color', 'fgcolor', 'color', 'font-color'],
            correct: 2,
            explanation: 'The color property specifies the color of text.'
          },
          {
            question: 'Which CSS property controls the text size?',
            options: ['font-size', 'text-size', 'font-style', 'size'],
            correct: 0,
            explanation: 'The font-size property sets the size of the font.'
          },
          {
            question: 'Which CSS property is used to make the text bold?',
            options: ['font-weight: bold', 'style: bold', 'font: bold', 'text-decoration: bold'],
            correct: 0,
            explanation: 'The font-weight property sets how thick or thin characters in a text should be displayed.'
          },
          {
            question: 'How do you display hyperlinks without an underline in CSS?',
            options: ['text-decoration: none', 'underline: none', 'link-underline: none', 'text-style: no-underline'],
            correct: 0,
            explanation: 'Setting text-decoration to none removes the default underline from anchor <a> tags.'
          },
          {
            question: 'Which CSS property is used to capitalize the first letter of each word in a text?',
            options: ['text-transform: capitalize', 'text-transform: uppercase', 'text-style: capital', 'font-style: capitalize'],
            correct: 0,
            explanation: 'text-transform: capitalize capitalizes the first character of each word.'
          },
          {
            question: 'What is the correct CSS syntax to make all the <p> elements bold?',
            options: ['p {font-weight: bold;}', '<p style="font-weight: bold;">', 'p {text-size: bold;}', 'p:bold {font-weight: bold;}'],
            correct: 0,
            explanation: 'Target the tag p and apply the rule font-weight: bold; inside curly braces.'
          },
          {
            question: 'Which CSS property is used to set the font family of an element?',
            options: ['font-family', 'font-style', 'font-type', 'typeface'],
            correct: 0,
            explanation: 'The font-family property specifies a prioritized list of one or more font family names for the selected element.'
          },
          {
            question: 'Which CSS property is used to align text to the center?',
            options: ['text-align: center', 'align: center', 'text-style: center', 'font-align: center'],
            correct: 0,
            explanation: 'The text-align property specifies the horizontal alignment of text in an element.'
          },
          {
            question: 'How do you make a list that lists items with square bullets in CSS?',
            options: ['list-type: square', 'list-style-type: square', 'bullet-type: square', 'list-bullet: square'],
            correct: 1,
            explanation: 'The list-style-type property specifies the type of list-item marker (such as circle, disc, square, decimal).'
          },
          {
            question: 'Which CSS property is used to specify the background image of an element?',
            options: ['background-image', 'image-src', 'background-src', 'bg-image'],
            correct: 0,
            explanation: 'The background-image property sets one or more background images for an element.'
          },
          {
            question: 'What is the default style value of the border property?',
            options: ['solid', 'none', 'hidden', 'double'],
            correct: 1,
            explanation: 'By default, the border-style is none, so borders do not show unless specified.'
          },
          {
            question: 'Which CSS property is used to set the width of an element\'s border?',
            options: ['border-width', 'border-thickness', 'border-weight', 'border-size'],
            correct: 0,
            explanation: 'The border-width property sets the width of an element\'s border.'
          },
          {
            question: 'Which CSS property is used to specify the spacing between lines of text?',
            options: ['line-height', 'letter-spacing', 'word-spacing', 'line-spacing'],
            correct: 0,
            explanation: 'The line-height property specifies the height of a line box.'
          },
          {
            question: 'Which property is used to control the flow of text if it overflows the boundaries of its element container?',
            options: ['text-overflow', 'overflow', 'word-wrap', 'white-space'],
            correct: 1,
            explanation: 'The overflow property specifies what should happen if content overflows an element\'s box.'
          },
          {
            question: 'What is the value of the opacity property that makes an element completely transparent?',
            options: ['1', '0', '0.5', 'none'],
            correct: 1,
            explanation: 'The opacity property ranges from 0 (completely transparent) to 1 (completely opaque).'
          },
          {
            question: 'Which CSS property is used to change the background color of an element?',
            options: ['color', 'background-color', 'bgcolor', 'background'],
            correct: 1,
            explanation: 'The background-color property sets the background color of an element.'
          },
          {
            question: 'Which CSS property is used to change the text color of an element?',
            options: ['text-color', 'fgcolor', 'color', 'font-color'],
            correct: 2,
            explanation: 'The color property specifies the color of text inside an element.'
          },
          {
            question: 'Which CSS property is used to specify the font of an element?',
            options: ['font-style', 'font-family', 'font-type', 'font-name'],
            correct: 1,
            explanation: 'The font-family property specifies the font for an element.'
          },
          {
            question: 'How do you center align text in CSS?',
            options: ['text-align: center', 'align: center', 'text-center', 'align-text: center'],
            correct: 0,
            explanation: 'The text-align property specifies the horizontal alignment of text in an element.'
          },
          {
            question: 'How do you display a border around an element in a single shorthand declaration?',
            options: ['border-width: 1px', 'border: 1px solid black', 'outline: 1px', 'stroke: 1px'],
            correct: 1,
            explanation: 'The border property is a shorthand property for border-width, border-style, and border-color.'
          },
          {
            question: 'Which value of the text-transform property converts all characters to uppercase?',
            options: ['uppercase', 'capitalize', 'upper', 'all-caps'],
            correct: 0,
            explanation: 'Setting text-transform to "uppercase" forces the browser to display all letters in uppercase.'
          },
          {
            question: 'How do you remove the underline from hyperlinks in CSS?',
            options: ['text-decoration: none', 'underline: none', 'link-decoration: none', 'text-style: no-underline'],
            correct: 0,
            explanation: 'Setting text-decoration to "none" removes decorations such as underlines from text links.'
          },
          {
            question: 'Which property is used to change the list style of list items?',
            options: ['list-type', 'list-style-type', 'list-item-type', 'bullet-style'],
            correct: 1,
            explanation: 'The list-style-type property specifies the type of list-item marker (bullet, number, etc.) for lists.'
          },
          {
            question: 'How do you make the text bold in CSS?',
            options: ['font-weight: bold', 'font-style: bold', 'bold: true', 'text-style: bold'],
            correct: 0,
            explanation: 'The font-weight property sets how thick or thin characters in text should be displayed, where "bold" represents a heavy weight.'
          },
          {
            question: 'What is the default value of the position property in CSS?',
            options: ['relative', 'static', 'absolute', 'fixed'],
            correct: 1,
            explanation: 'HTML elements are positioned static by default. Static positioned elements are not affected by the top, bottom, left, and right properties.'
          }
        ],
        medium: [
          {
            question: 'How do you select an element with id "demo" in CSS?',
            options: ['.demo', '#demo', 'demo', '*demo'],
            correct: 1,
            explanation: 'The # selector is used to target elements with a specific ID attribute.'
          },
          {
            question: 'How do you select elements with class name "test" in CSS?',
            options: ['#test', 'test', '.test', '*test'],
            correct: 2,
            explanation: 'The . selector is used to target elements with a specific class attribute.'
          },
          {
            question: 'Which CSS property is used to set the spacing between the content of an element and its border?',
            options: ['margin', 'padding', 'border-spacing', 'offset'],
            correct: 1,
            explanation: 'The padding property sets the inner spacing of an element (inside the border), while margin sets the outer spacing.'
          },
          {
            question: 'In the CSS box model, what is the correct order of components from the inside out?',
            options: [
              'Content, Border, Padding, Margin',
              'Content, Padding, Border, Margin',
              'Content, Margin, Padding, Border',
              'Padding, Content, Border, Margin'
            ],
            correct: 1,
            explanation: 'The box model consists of the Content in the center, surrounded by Padding, then the Border, and finally the Margin on the outside.'
          },
          {
            question: 'What is the default value of the position property in CSS?',
            options: ['relative', 'absolute', 'static', 'fixed'],
            correct: 2,
            explanation: 'HTML elements are positioned static by default. Static positioned elements are not affected by top, bottom, left, and right properties.'
          },
          {
            question: 'Which CSS property controls the layout order of flex items in a flex container?',
            options: ['z-index', 'order', 'flex-order', 'index'],
            correct: 1,
            explanation: 'The order property specifies the order of a flex or grid item relative to the rest of the items in the container.'
          },
          {
            question: 'Which CSS property is used to specify whether an element\'s box should be treated as block or inline?',
            options: ['float', 'display', 'position', 'layout'],
            correct: 1,
            explanation: 'The display property specifies the display behavior (the type of rendering box) of an element.'
          },
          {
            question: 'How do you add a shadow effect to a text element in CSS?',
            options: ['box-shadow', 'text-shadow', 'shadow-effect', 'font-shadow'],
            correct: 1,
            explanation: 'The text-shadow property adds shadow to text. box-shadow is used to add shadows to element boxes/containers.'
          },
          {
            question: 'In CSS flexbox, which property is used to align items horizontally when flex-direction is set to row?',
            options: ['align-items', 'justify-content', 'align-content', 'flex-pack'],
            correct: 1,
            explanation: 'The justify-content property aligns flex items along the main axis of the current line of the flex container (horizontally in row layout).'
          },
          {
            question: 'What does the float property do in CSS?',
            options: [
              'It makes an element float on top of other elements',
              'It places an element on the left or right side of its container, allowing text and inline elements to wrap around it',
              'It hides an element off-screen',
              'It adds animation coordinates to elements'
            ],
            correct: 1,
            explanation: 'The float property places an element on the left or right side of its container, allowing text and inline elements to wrap around it.'
          },
          {
            question: 'Which CSS property controls the spacing between lines of text?',
            options: ['letter-spacing', 'line-height', 'word-spacing', 'text-spacing'],
            correct: 1,
            explanation: 'The line-height property specifies the height of a line.'
          },
          {
            question: 'Which CSS selector targets active hyperlinks while you are clicking them?',
            options: [':hover', ':visited', ':active', ':focus'],
            correct: 2,
            explanation: 'The :active pseudo-class matches an element (like a link or button) during the time it is being activated by the user.'
          },
          {
            question: 'In CSS, what is the default value of the flex-direction property?',
            options: ['column', 'row', 'row-reverse', 'column-reverse'],
            correct: 1,
            explanation: 'By default, a flex container lays out its items horizontally, meaning flex-direction is set to row.'
          },
          {
            question: 'Which CSS property is used to set the aspect ratio of an element box?',
            options: ['aspect-ratio', 'ratio', 'box-ratio', 'dimensions'],
            correct: 0,
            explanation: 'The aspect-ratio CSS property allows you to define the preferred width-to-height ratio for an element\'s box.'
          },
          {
            question: 'What does the z-index property do in CSS?',
            options: [
              'Controls the horizontal position of elements',
              'Controls the stack order of positioned elements',
              'Resizes elements dynamically',
              'Adds zoom levels'
            ],
            correct: 1,
            explanation: 'The z-index property specifies the stack order of an element (which elements should be placed in front of, or behind, others). It only works on positioned elements.'
          },
          {
            question: 'How do you center a block element horizontally within its container using margins?',
            options: ['margin: auto 0;', 'margin: 0 auto;', 'margin: center;', 'align-margin: center;'],
            correct: 1,
            explanation: 'Setting vertical margins to 0 and horizontal margins to auto tells the browser to distribute the remaining horizontal space equally, centering the block element.'
          },
          {
            question: 'Which unit in CSS is relative to the font-size of the root element (usually the <html> element)?',
            options: ['em', 'rem', 'px', 'vh'],
            correct: 1,
            explanation: 'The rem unit stands for "root em" and is relative to the font-size of the root element.'
          },
          {
            question: 'Which CSS property is used to apply 2D or 3D rotations, scales, skew, or translations to an element?',
            options: ['transition', 'transform', 'animation', 'translate'],
            correct: 1,
            explanation: 'The transform property applies 2D or 3D transformations to an element.'
          },
          {
            question: 'Which display value allows an element to behave like an inline element but supports setting width and height?',
            options: ['inline', 'block', 'inline-block', 'flex'],
            correct: 2,
            explanation: 'inline-block elements are formatted like inline elements but behave like block-level elements where width and height can be set.'
          },
          {
            question: 'In CSS, what is the default value of the flex-wrap property?',
            options: ['wrap', 'nowrap', 'wrap-reverse', 'normal'],
            correct: 1,
            explanation: 'The default value of flex-wrap is nowrap, which means flex items will all try to fit on a single line.'
          },
          {
            question: 'Which CSS property specifies the stack order of an element?',
            options: ['z-index', 'order', 'index', 'stack-order'],
            correct: 0,
            explanation: 'The z-index property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.'
          },
          {
            question: 'Which unit represents 1% of the width of the viewport?',
            options: ['vh', 'vw', 'vmin', 'vmax'],
            correct: 1,
            explanation: 'vw stands for viewport width. 1vw is equal to 1% of the viewport\'s width.'
          },
          {
            question: 'What is the default direction of a flex layout if flex-direction is not set?',
            options: ['row', 'column', 'row-reverse', 'column-reverse'],
            correct: 0,
            explanation: 'By default, the flex-direction property is set to row.'
          },
          {
            question: 'Which transition property determines how long a transition should take to complete?',
            options: ['transition-duration', 'transition-delay', 'transition-property', 'transition-timing-function'],
            correct: 0,
            explanation: 'The transition-duration property specifies how many seconds or milliseconds a transition effect takes to complete.'
          },
          {
            question: 'How do you select all elements with the name "p" inside elements with the class name "intro"?',
            options: ['p.intro', '.intro p', 'p + .intro', '.intro + p'],
            correct: 1,
            explanation: 'The descendent selector (space separator) selects elements that are descendants of another specified element.'
          },
          {
            question: 'Which CSS pseudo-class matches an element when it is hovered by the mouse pointer?',
            options: [':active', ':focus', ':hover', ':visited'],
            correct: 2,
            explanation: 'The :hover pseudo-class is used to select elements when you mouse over them.'
          },
          {
            question: 'Which border property specifies whether the borders of a table should collapse into a single border?',
            options: ['border-collapse', 'border-style', 'border-spacing', 'border-mode'],
            correct: 0,
            explanation: 'The border-collapse property sets whether table borders should collapse into a single border or be separated as in standard HTML.'
          },
          {
            question: 'What does CSS grid-template-columns: repeat(3, 1fr) do?',
            options: [
              'Creates 3 equal width columns that fill the available container space',
              'Creates 1 column repeated 3 times with fixed 1px width',
              'Sets column width to exactly 3px',
              'Shrinks columns to fit content size'
            ],
            correct: 0,
            explanation: 'repeat(3, 1fr) defines three columns of equal width distributed across 1 fractional unit of space each.'
          },
          {
            question: 'Which property is used to specify the background image of an element?',
            options: ['background-img', 'background-image', 'image-src', 'bg-image'],
            correct: 1,
            explanation: 'The background-image property sets one or more background images for an element.'
          },
          {
            question: 'What does the display: none property do?',
            options: [
              'Hides the element and removes it from the document layout flow',
              'Makes the element invisible but preserves its layout space',
              'Minimizes the element height to 0',
              'Sets opacity to zero but keeps click interactions active'
            ],
            correct: 0,
            explanation: 'display: none hides the element, and the page will be rendered as if the element is not there. visibility: hidden hides an element but still takes up space.'
          }
        ],
        hard: [
          {
            question: 'Which CSS property is used to create a flex container?',
            options: ['display: flexbox', 'display: flex', 'flex-direction: row', 'layout: flex'],
            correct: 1,
            explanation: 'Setting the display property to flex defines a flex container, enabling Flexbox layout on its direct children.'
          },
          {
            question: 'What is the specificity value of a single ID selector (e.g., #header) in CSS selector calculation?',
            options: ['0,0,1,0', '0,1,0,0', '1,0,0,0', '0,0,0,1'],
            correct: 1,
            explanation: 'In CSS specificity calculations, a single ID selector has a value of 0,1,0,0.'
          },
          {
            question: 'What does the align-items property do in a Flexbox container?',
            options: [
              'Aligns flex items along the main axis',
              'Aligns flex items along the cross axis',
              'Specifies the direction of flex items',
              'Forces flex items onto multiple lines'
            ],
            correct: 1,
            explanation: 'The align-items property defines the default behavior for how flex items are laid out along the cross axis.'
          },
          {
            question: 'In CSS Grid, what does the fr unit represent?',
            options: [
              'Free space',
              'Fractional unit representing a fraction of the flexible space in the grid container',
              'Fixed resolution',
              'Frame rate'
            ],
            correct: 1,
            explanation: 'The fr unit is a fractional unit that represents a portion of the available space inside the grid container.'
          },
          {
            question: 'What is the purpose of the will-change property in CSS?',
            options: [
              'Declares dynamic JS style changes',
              'Hints to the browser how an element is expected to change, so it can optimize rendering beforehand',
              'Forces immediate redraw',
              'Resets changes to default values'
            ],
            correct: 1,
            explanation: 'The will-change property provides a hint to browsers about what aspect of an element is likely to change, allowing the browser to set up optimizations.'
          },
          {
            question: 'What is the effect of using the box-sizing: border-box; declaration in CSS?',
            options: [
              'It forces the border to be rounded',
              'It includes padding and border in the element\'s total width and height',
              'It places the border outside the margin box',
              'It disables margins on the box'
            ],
            correct: 1,
            explanation: 'Under border-box, the width and height properties include content, padding, and border, making sizing elements much easier.'
          },
          {
            question: 'In CSS Grid, what is the purpose of the minmax() function?',
            options: [
              'It calculates the absolute average width of grid columns',
              'It defines a size range greater than or equal to min and less than or equal to max',
              'It sets the maximum font size allowed in a grid',
              'It is a math utility to solve grid coordinates'
            ],
            correct: 1,
            explanation: 'The minmax() function defines a size range greater than or equal to min and less than or equal to max, which is commonly used to create responsive grid tracks.'
          },
          {
            question: 'Which CSS pseudo-class matches elements based on their position among a group of siblings of the same element type?',
            options: [':focus-within', ':role()', ':first-child', ':only-child'],
            correct: 0,
            explanation: ':focus-within matches an element if that element itself or any of its children currently has focus.'
          },
          {
            question: 'What does the object-fit: cover; property do when applied to an <img> element?',
            options: [
              'It places a border mask over the image',
              'It sizes the image to maintain its aspect ratio while filling the element\'s entire content box, clipping it if necessary',
              'It stretches the image to fit the box exactly',
              'It hides the image background'
            ],
            correct: 1,
            explanation: 'object-fit: cover sizes the image to maintain its aspect ratio while filling the element\'s entire content box, clipping parts that do not fit.'
          },
          {
            question: 'In CSS animations, what does the animation-fill-mode: forwards; property-value pair accomplish?',
            options: [
              'It loops the animation forever',
              'It targets styles forward to children elements',
              'It retains the style values set by the last keyframe when the animation ends',
              'It speeds up the start of the animation'
            ],
            correct: 2,
            explanation: 'The forwards value tells the browser to keep the styles of the last keyframe applied to the element after the animation has finished.'
          },
          {
            question: 'Which CSS property is used to specify how the background image is clipped (e.g., to the border-box, padding-box, or content-box)?',
            options: ['background-clip', 'background-origin', 'background-attachment', 'background-size'],
            correct: 0,
            explanation: 'The background-clip property defines how far the background (color or image) should extend within the element\'s box model.'
          },
          {
            question: 'In CSS grid, what does the grid-template-areas property do?',
            options: [
              'Specifies margins inside the grid tracks',
              'Defines named grid areas which can be referenced by grid-area on items',
              'Sets up automatically repeated grid grids',
              'Specifies media queries for grid rows'
            ],
            correct: 1,
            explanation: 'grid-template-areas defines named grid areas in a visual matrix mapping, which grid items can reference to position themselves.'
          },
          {
            question: 'What is the purpose of the CSS clamp() function?',
            options: [
              'Clamps an element to the cursor coordinates',
              'Clamps a value between an upper and lower bound, allowing responsive values to scale dynamically',
              'Forces integer divisions in responsive layouts',
              'Clamps margin collisions'
            ],
            correct: 1,
            explanation: 'clamp(min, val, max) takes a minimum value, a preferred value, and a maximum value, and clamps the calculated value between them.'
          },
          {
            question: 'Which keyword is used with the CSS custom property (variables) declaration to provide a fallback value if the variable is not defined?',
            options: [
              'var(--my-var, fallback-value)',
              'var(--my-var || fallback-value)',
              'var(--my-var ? fallback-value)',
              'env(--my-var, fallback-value)'
            ],
            correct: 0,
            explanation: 'The var() function accepts a second parameter representing the fallback value (e.g., color: var(--theme-color, blue);).'
          },
          {
            question: 'What does the CSS pseudo-class :focus-within match?',
            options: [
              'Matches an element that is currently focused by the keyboard',
              'Matches an element if the element itself or any of its descendants have focus',
              'Matches input elements with validated focus states',
              'Matches form boundaries'
            ],
            correct: 1,
            explanation: ':focus-within matches an element if that element itself or any of its children currently has focus.'
          },
          {
            question: 'What is the difference between transition and animation in CSS?',
            options: [
              'transitions loop infinitely while animations run once',
              'transitions require a trigger state change (like hover) to run, while animations can run automatically and support multiple keyframe steps',
              'transitions only support position coordinates',
              'animations are JavaScript-based while transitions are pure CSS'
            ],
            correct: 1,
            explanation: 'Transitions require a trigger state change (like hover) to run, while animations can run automatically and support multiple keyframe steps (keyframes).'
          },
          {
            question: 'What does the @supports at-rule do in CSS?',
            options: [
              'Defines framework support configurations',
              'Enables feature queries, letting you write CSS declarations conditionally based on whether the browser supports a specific CSS property-value pair',
              'Loads external fonts',
              'Declares global vendor prefixes'
            ],
            correct: 1,
            explanation: '@supports allows you to write conditional CSS rules depending on browser support for specific properties.'
          },
          {
            question: 'In the flexbox layout, what does the flex-shrink property specify?',
            options: [
              'How much a flex item will shrink relative to the rest of the flex items when space is negative',
              'The minimum pixel width of the item',
              'A boolean flag to disable width configurations',
              'How fast an item rotates'
            ],
            correct: 0,
            explanation: 'The flex-shrink property specifies how much the item will shrink relative to other items when the flex container is smaller than the combined size of the items.'
          },
          {
            question: 'Which CSS property specifies how the text content should be wrapped when it exceeds the width of its box, typically breaking words if necessary?',
            options: ['text-overflow', 'white-space', 'word-break', 'text-wrap'],
            correct: 2,
            explanation: 'word-break: break-all or break-word forces text to wrap by breaking words at letters, whereas text-overflow only clips/adds ellipses to text.'
          },
          {
            question: 'In CSS layout, what is the effect of setting position: sticky on an element?',
            options: [
              'Forces the element to occupy zero space in the document flow',
              'Positions the element relative to its normal position until a scroll threshold is met, at which point it acts as fixed',
              'Keeps the element fixed at coordinates relative to the screen dimensions regardless of scroll',
              'Sticks the element to parent margins'
            ],
            correct: 1,
            explanation: 'A sticky element is treated as relatively positioned until its containing block crosses a specified threshold (e.g. top: 10px), at which point it behaves as fixed in its scrolling viewport.'
          },
          {
            question: 'What does the will-change CSS property do?',
            options: [
              'Hints the browser about elements changing attributes for ahead-of-time rendering optimization',
              'Forces transition animations to complete immediately',
              'Pre-compiles CSS properties into JS script calls',
              'Disables rendering filter properties on elements'
            ],
            correct: 0,
            explanation: 'The will-change CSS property provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time.'
          },
          {
            question: 'Which selector matches an element that is the only child of its parent?',
            options: [':only-child', ':first-child', ':last-child', ':nth-child(1)'],
            correct: 0,
            explanation: 'The :only-child pseudo-class represents an element without any siblings.'
          },
          {
            question: 'What is the difference between :before and ::before?',
            options: [
              ':before is the CSS2 single colon syntax for backward compatibility, while ::before is the CSS3 standard syntax for pseudo-elements',
              'They are completely different properties with distinct behaviors',
              'Single colon is used for images only and double colon for strings',
              'Double colon is supported only by specific layout engines'
            ],
            correct: 0,
            explanation: 'CSS3 introduced the double colon syntax (::before) to distinguish pseudo-elements from pseudo-classes. Browsers support both for compatibility.'
          },
          {
            question: 'Which CSS function calculates values dynamically based on mathematical equations?',
            options: ['calc()', 'var()', 'clamp()', 'minmax()'],
            correct: 0,
            explanation: 'The calc() function allows mathematical expressions to be used for property values, mixing units like percentages and pixels (e.g., calc(100% - 20px)).'
          },
          {
            question: 'What does containment property contain: layout do?',
            options: [
              'Limits layout calculation boundaries to the element subtree, optimizing page performance',
              'Resizes elements automatically based on viewport',
              'Groups relative positions into a flex layout',
              'Deletes layout rendering history of the element'
            ],
            correct: 0,
            explanation: 'contain: layout tells the browser that nothing outside the element affects its internal layout, and vice versa, confining layout scope.'
          },
          {
            question: 'Which value of the CSS clip-path property defines a basic polygon shape cut-out?',
            options: ['polygon()', 'path()', 'shape()', 'rect()'],
            correct: 0,
            explanation: 'The polygon() function defines a polygon shape cut-out region for clip-path.'
          },
          {
            question: 'Which value of the mix-blend-mode property blends the color layers using a multiplying mathematical calculation?',
            options: ['multiply', 'screen', 'overlay', 'difference'],
            correct: 0,
            explanation: 'multiply multiplies the colors of the element and its backdrop, resulting in a darker color layer.'
          },
          {
            question: 'What does box-sizing: border-box do?',
            options: [
              'Includes padding and borders in the element total width and height declarations',
              'Excludes padding from total width calculation',
              'Increases border width to match width properties',
              'Removes margins from the element layout'
            ],
            correct: 0,
            explanation: 'border-box tells the browser to account for any border and padding in the values you specify for an element\'s width and height.'
          },
          {
            question: 'Which selector targets a sibling element that directly follows another element?',
            options: ['Adjacent sibling selector (+)', 'General sibling selector (~)', 'Child selector (>)', 'Descendant selector (space)'],
            correct: 0,
            explanation: 'The adjacent sibling selector (+) selects an element that is directly after another specific element.'
          },
          {
            question: 'What does the @supports CSS rule do?',
            options: [
              'Performs feature detection checking if a browser supports specific CSS properties/values',
              'Evaluates mobile device screen widths and heights',
              'Imports layout stylesheets asynchronously',
              'Checks server network status indicators'
            ],
            correct: 0,
            explanation: 'The @supports at-rule associates a block of declarations with a condition testing support for CSS features.'
          }
        ]
      },
      python: {
        title: 'Python',
        easy: [
          {
            question: 'Who created the Python programming language?',
            options: ['Bjarne Stroustrup', 'Guido van Rossum', 'James Gosling', 'Dennis Ritchie'],
            correct: 1,
            explanation: 'Python was created by Guido van Rossum and was first released in 1991.'
          },
          {
            question: 'Which of the following is the correct extension for Python files?',
            options: ['.pyt', '.py', '.pyo', '.python'],
            correct: 1,
            explanation: 'Python scripts are saved with the .py extension.'
          },
          {
            question: 'How do you output "Hello World" in Python?',
            options: [
              'print("Hello World")',
              'echo("Hello World")',
              'console.log("Hello World")',
              'System.out.println("Hello World")'
            ],
            correct: 0,
            explanation: 'The print() function is used to output text/data to the console in Python.'
          },
          {
            question: 'How do you create a variable named x with the numeric value 5 in Python?',
            options: ['int x = 5', 'x = 5', 'var x = 5', 'x := 5'],
            correct: 1,
            explanation: 'Python is dynamically typed; you declare and assign a variable in a single step using the = operator.'
          },
          {
            question: 'Which of the following starts a comment in Python?',
            options: ['//', '/*', '#', '<!--'],
            correct: 2,
            explanation: 'Python uses the # character to start single-line comments.'
          },
          {
            question: 'How do you create a list in Python?',
            options: ['x = (1, 2, 3)', 'x = {1, 2, 3}', 'x = [1, 2, 3]', 'x = <1, 2, 3>'],
            correct: 2,
            explanation: 'Lists in Python are created using square brackets [].'
          },
          {
            question: 'Which of the following is NOT a valid variable name in Python?',
            options: ['my_var', '_myvar', '2myvar', 'myVar'],
            correct: 2,
            explanation: 'Variable names in Python cannot start with a number.'
          },
          {
            question: 'What is the correct syntax to output "Hello" if x is greater than y in Python?',
            options: ['if x > y: print("Hello")', 'if x > y print("Hello")', 'if x > y then: print("Hello")', 'if (x > y) {print("Hello")}'],
            correct: 0,
            explanation: 'Python uses an if statement followed by a condition, a colon :, and then indented block/statement code.'
          },
          {
            question: 'Which data type is used to represent true or false values in Python?',
            options: ['bool', 'boolean', 'TrueFalse', 'int'],
            correct: 0,
            explanation: 'The bool data type holds Boolean values: True or False.'
          },
          {
            question: 'What is the value of the expression 10 // 3 in Python?',
            options: ['3.33333333333', '3', '1', '3.0'],
            correct: 1,
            explanation: 'The // operator performs floor division, returning the integer quotient of division without the remainder.'
          },
          {
            question: 'Which method is used to return a string in all lowercase letters in Python?',
            options: ['lower()', 'lowercase()', 'tolower()', 'casefold()'],
            correct: 0,
            explanation: 'The lower() method returns the string in lower case.'
          },
          {
            question: 'Which function is used to get the number of items in a list in Python?',
            options: ['count()', 'length()', 'len()', 'size()'],
            correct: 2,
            explanation: 'The built-in len() function returns the length (the number of items) of an object.'
          },
          {
            question: 'How do you start writing a while loop in Python?',
            options: ['while x > y {', 'while x > y:', 'while (x > y) then:', 'while x > y then {'],
            correct: 1,
            explanation: 'Like other block structures in Python, a while loop starts with the while keyword, the condition, and a colon :.'
          },
          {
            question: 'Which keyword is used to import modules in Python?',
            options: ['import', 'include', 'require', 'load'],
            correct: 0,
            explanation: 'The import keyword is used to import code/modules from other scripts/libraries.'
          },
          {
            question: 'What will the expression 2 ** 3 evaluate to in Python?',
            options: ['6', '8', '9', '5'],
            correct: 1,
            explanation: 'The ** operator represents exponentiation (power). 2 ** 3 is 2 cubed, which is 8.'
          },
          {
            question: 'How do you insert a value to a list at a specific index in Python?',
            options: ['insert()', 'append()', 'add()', 'push()'],
            correct: 0,
            explanation: 'The insert(index, element) method inserts an element at the specified index in a list.'
          },
          {
            question: 'What is the correct way to initialize an empty dictionary in Python?',
            options: ['d = []', 'd = {}', 'd = ()', 'd = set()'],
            correct: 1,
            explanation: 'Empty curly braces {} initialize an empty dictionary.'
          },
          {
            question: 'Which statement is used to exit a loop early in Python?',
            options: ['exit', 'stop', 'break', 'continue'],
            correct: 2,
            explanation: 'The break statement terminates the current loop and resumes execution at the next statement.'
          },
          {
            question: 'What does the continue statement do in a loop?',
            options: [
              'Exits the entire loop',
              'Skips the rest of the current iteration and jumps to the next iteration',
              'Restarts the loop from index 0',
              'Pauses the script execution'
            ],
            correct: 1,
            explanation: 'continue skips the remaining statements in the current loop iteration and moves execution back to the loop header for the next pass.'
          },
          {
            question: 'Which of the following is an immutable collection type in Python?',
            options: ['list', 'dict', 'set', 'tuple'],
            correct: 3,
            explanation: 'A tuple is an immutable sequence type, meaning elements cannot be changed or reassigned once created.'
          },
          {
            question: 'What is the correct file extension for Python files?',
            options: ['.pyt', '.py', '.pyc', '.pyd'],
            correct: 1,
            explanation: 'Python script files typically use the .py file extension.'
          },
          {
            question: 'How do you start a single-line comment in Python?',
            options: ['//', '#', '/*', '--'],
            correct: 1,
            explanation: 'Comments in Python start with the hash character (#) and extend to the end of the physical line.'
          },
          {
            question: 'Which function is used to take user input from the console in Python 3?',
            options: ['read()', 'input()', 'get()', 'scan()'],
            correct: 1,
            explanation: 'The input() function reads a line from input (usually from the user) and returns it as a string.'
          },
          {
            question: 'Which of these is NOT a valid variable name in Python?',
            options: ['my_var', 'my-var', '_myvar', 'myVar1'],
            correct: 1,
            explanation: 'Variable names cannot contain hyphens (-). They must start with a letter or underscore, and can only contain alphanumeric characters and underscores.'
          },
          {
            question: 'How do you create a variable with the numeric value 5 in Python?',
            options: ['x = 5', 'int x = 5', 'x := 5', 'var x = 5'],
            correct: 0,
            explanation: 'Python uses dynamic typing. You declare variables by assigning a value directly with the = operator.'
          },
          {
            question: 'Which operator is used for exponentiation (power calculation) in Python?',
            options: ['^', '**', 'exp', '^^'],
            correct: 1,
            explanation: 'The ** operator performs exponentiation, calculating the base to the power of the exponent (e.g. 2 ** 3 is 8).'
          },
          {
            question: 'How do you find the length of a string in Python?',
            options: ['len(string)', 'string.length()', 'length(string)', 'string.size()'],
            correct: 0,
            explanation: 'The built-in len() function returns the number of items/characters in an object.'
          },
          {
            question: 'Which value represents boolean true in Python?',
            options: ['true', 'True', 'yes', '1'],
            correct: 1,
            explanation: 'Python uses capitalized "True" and "False" for its boolean values.'
          },
          {
            question: 'How do you convert a float to an integer in Python?',
            options: ['int(x)', 'Integer(x)', 'x.toInt()', 'floor(x)'],
            correct: 0,
            explanation: 'The int() function constructs an integer number from an integer literal, a float literal (by rounding down to the nearest whole integer), or a string literal.'
          },
          {
            question: 'Which mathematical operator is used for division that returns an integer (floor division)?',
            options: ['/', '//', '%', 'div'],
            correct: 1,
            explanation: 'The // operator performs floor division, dividing two values and returning the largest integer less than or equal to the result.'
          }
        ],
        medium: [
          {
            question: 'What is the correct syntax to output the type of a variable or object in Python?',
            options: ['print(typeof(x))', 'print(type(x))', 'print(x.type())', 'print(x.typeof)'],
            correct: 1,
            explanation: 'The built-in type() function returns the type of the specified object.'
          },
          {
            question: 'Which collection type in Python is ordered, changeable, and allows duplicate members?',
            options: ['List', 'Tuple', 'Set', 'Dictionary'],
            correct: 0,
            explanation: 'A List in Python is ordered, mutable, and allows duplicate elements.'
          },
          {
            question: 'How do you add an element to the end of a list in Python?',
            options: [
              'list.add(element)',
              'list.append(element)',
              'list.push(element)',
              'list.insert(element)'
            ],
            correct: 1,
            explanation: 'The append() method adds an item to the end of the list.'
          },
          {
            question: 'What does the range(5) function generate in Python 3?',
            options: [
              'A list containing [1, 2, 3, 4, 5]',
              'An iterator that generates numbers from 0 to 4',
              'A tuple containing (0, 1, 2, 3, 4)',
              'A string representation of numbers'
            ],
            correct: 1,
            explanation: 'In Python 3, range() returns a lazy range object (an iterable/iterator) representing numbers from 0 up to 4.'
          },
          {
            question: 'What is the output of the expression print("Hello" + "World") in Python?',
            options: ['HelloWorld', 'Hello World', 'Hello+World', 'Error'],
            correct: 0,
            explanation: 'The + operator concatenates (joins) two string operands end-to-end.'
          },
          {
            question: 'Which function is used to get the numeric ASCII value of a character in Python?',
            options: ['chr()', 'ord()', 'ascii()', 'val()'],
            correct: 1,
            explanation: 'The ord() function returns an integer representing the Unicode code point of the given character (inverse of chr()).'
          },
          {
            question: 'How do you write a function parameter that accepts an arbitrary number of keyword arguments in Python?',
            options: ['*args', '**kwargs', '*kwargs', '&args'],
            correct: 1,
            explanation: 'The ** prefix allows a function to collect arbitrary keyword arguments into a dictionary.'
          },
          {
            question: 'What is the output of len("Python") in Python?',
            options: ['5', '6', '7', '0'],
            correct: 1,
            explanation: 'The len() function returns the number of characters in a string. "Python" has exactly 6 characters.'
          },
          {
            question: 'What will the code print("a" in ["a", "b", "c"]) output?',
            options: ['True', 'False', 'None', 'Error'],
            correct: 0,
            explanation: 'The in operator checks membership in a list, returning True if the item is present.'
          },
          {
            question: 'How do you convert a string "10" into an integer in Python?',
            options: ['int("10")', 'integer("10")', 'str(10)', 'cast("10", int)'],
            correct: 0,
            explanation: 'The built-in int() function converts a string representation of a number into its integer value.'
          },
          {
            question: 'Which list method removes and returns the last element of the list?',
            options: ['remove()', 'pop()', 'delete()', 'discard()'],
            correct: 1,
            explanation: 'The pop() method removes and returns the last item in the list if no index is specified.'
          },
          {
            question: 'What does the dictionary .get(key, default) method accomplish in Python?',
            options: [
              'Throws an error if the key does not exist',
              'Returns the value for the key if it exists, otherwise returns the specified default value without raising a KeyError',
              'Adds the key-value pair to the dictionary',
              'Deletes the key'
            ],
            correct: 1,
            explanation: 'The .get() method provides a safe way to retrieve values from dictionaries, returning a fallback default instead of crashing if the key is missing.'
          },
          {
            question: 'How do you open a file for reading in Python and ensure it is closed automatically afterwards?',
            options: [
              'open(\'file.txt\', \'r\')',
              'with open(\'file.txt\', \'r\') as f:',
              'try f = open(\'file.txt\')',
              'file.read(\'file.txt\')'
            ],
            correct: 1,
            explanation: 'Using the with statement (context manager) guarantees that resource clean-up (closing the file) is performed automatically.'
          },
          {
            question: 'What is the output of "Hello".find("z") in Python?',
            options: ['False', 'Error', '-1', 'None'],
            correct: 2,
            explanation: 'The find() method returns the lowest index of the substring if it is found, and -1 if it is not found.'
          },
          {
            question: 'What will the expression set([1, 2, 2, 3]) return in Python?',
            options: ['{1, 2, 2, 3}', '{1, 2, 3}', '[1, 2, 3]', 'Error'],
            correct: 1,
            explanation: 'The set() constructor creates a set object, which automatically filters out duplicate values, yielding {1, 2, 3}.'
          },
          {
            question: 'How do you access the last element of a list x in Python using negative indexing?',
            options: ['x[-0]', 'x[-1]', 'x[len(x)]', 'x[-last]'],
            correct: 1,
            explanation: 'Python supports negative indexing where -1 represents the last item, -2 the second last, etc.'
          },
          {
            question: 'What does the string .join() method do?',
            options: [
              'Concatenates two strings together',
              'Joins elements of an iterable (like a list of strings) into a single string separated by the string on which it was called',
              'Splits a string into a list',
              'Combines lists'
            ],
            correct: 1,
            explanation: 'The join() method joins elements of an iterable into a single string.'
          },
          {
            question: 'What is the output of the expression 10 % 3 in Python?',
            options: ['3', '1', '3.33', '0'],
            correct: 1,
            explanation: 'The % (modulo) operator returns the remainder of the division. 10 divided by 3 is 3 with a remainder of 1.'
          },
          {
            question: 'Which module in the Python standard library is used for mathematical operations like square roots or trigonometric functions?',
            options: ['math', 'maths', 'numpy', 'calc'],
            correct: 0,
            explanation: 'The built-in math module provides access to mathematical functions defined by the C standard.'
          },
          {
            question: 'In Python, what is the output of bool(0)?',
            options: ['True', 'False', 'None', 'Error'],
            correct: 1,
            explanation: 'In boolean evaluation, 0, empty collections, and None evaluate to False.'
          },
          {
            question: 'What is the output of the expression print("Hello" * 3) in Python?',
            options: ['HelloHelloHello', 'Hello 3', 'Error', "['Hello', 'Hello', 'Hello']"],
            correct: 0,
            explanation: 'In Python, the * operator can be used on strings to repeat them a specified number of times.'
          },
          {
            question: 'How do you add an item to a set in Python?',
            options: ['set.add(item)', 'set.append(item)', 'set.push(item)', 'set.insert(item)'],
            correct: 0,
            explanation: 'The add() method adds an element to the set. If the element already exists, it does not add it again.'
          },
          {
            question: 'Which dictionary method returns a view object containing all the keys in the dictionary?',
            options: ['keys()', 'values()', 'items()', 'get()'],
            correct: 0,
            explanation: 'The keys() method returns a view object that contains the keys of the dictionary.'
          },
          {
            question: 'What is the output of the expression type([]) in Python?',
            options: ["<class 'list'>", "<class 'array'>", "<class 'dict'>", "<class 'tuple'>"],
            correct: 0,
            explanation: 'The square brackets [] denote an empty list literal, so its type is list.'
          },
          {
            question: 'How do you delete a key "name" from a dictionary "user" in Python?',
            options: ["del user['name']", "user.remove('name')", "user.delete('name')", "del(user, 'name')"],
            correct: 0,
            explanation: 'The del keyword removes the key-value pair associated with the specified key from a dictionary.'
          },
          {
            question: 'Which function is used to load a JSON string into a Python object?',
            options: ['json.loads()', 'json.dumps()', 'json.load()', 'json.parse()'],
            correct: 0,
            explanation: 'json.loads() ("load string") deserializes a JSON-formatted string into a Python dictionary or list.'
          },
          {
            question: 'What is the correct syntax to open a file "data.txt" in read mode?',
            options: ['open("data.txt", "r")', 'open("data.txt", "read")', 'file("data.txt", "r")', 'open("data.txt", "w")'],
            correct: 0,
            explanation: 'The open() function opens a file. Passing "r" as the second argument opens the file in read-only mode.'
          },
          {
            question: 'What is the output of the expression list(range(1, 6, 2)) in Python?',
            options: ['[1, 3, 5]', '[1, 2, 3, 4, 5]', '[1, 5]', '[2, 4]'],
            correct: 0,
            explanation: 'range(1, 6, 2) generates integers from 1 up to (but not including) 6, incrementing by 2. Thus it generates 1, 3, and 5.'
          },
          {
            question: 'Which keyword is used to handle exceptions (catch errors) in Python?',
            options: ['try', 'except', 'catch', 'throw'],
            correct: 1,
            explanation: 'Python uses try-except blocks to catch and handle exceptions, similar to try-catch blocks in other languages.'
          },
          {
            question: 'What does the built-in zip() function do in Python?',
            options: [
              'Combines multiple iterables into a single iterator of tuples',
              'Compresses files into a zip folder',
              'Unzips variables inside the memory stack',
              'Multiplies matching elements of two lists'
            ],
            correct: 0,
            explanation: 'The zip() function returns an iterator of tuples, where the i-th tuple contains the i-th element from each of the argument iterables.'
          }
        ],
        hard: [
          {
            question: 'What is the output of the expression [x for x in range(5) if x % 2 == 0] in Python?',
            options: ['[0, 2, 4]', '[2, 4]', '[1, 3]', '[0, 1, 2, 3, 4]'],
            correct: 0,
            explanation: 'This is a list comprehension that filters numbers in range(5) (0 to 4), keeping only those that are divisible by 2 with zero remainder.'
          },
          {
            question: 'In Python, what is the primary purpose of the __init__ method in a class?',
            options: [
              'To import external modules',
              'To initialize the state of a newly created class object',
              'To destroy the object when garbage collected',
              'To convert the object to a string representation'
            ],
            correct: 1,
            explanation: '__init__ is the constructor method in Python classes, run automatically when a new instance of the class is instantiated.'
          },
          {
            question: 'What is the output of type(lambda x: x) in Python?',
            options: [
              '<class \'lambda\'>',
              '<class \'function\'>',
              '<class \'object\'>',
              '<class \'code\'>'
            ],
            correct: 1,
            explanation: 'A lambda expression creates an anonymous function. In Python, all functions (including lambdas) are instances of the function class.'
          },
          {
            question: 'How does Python handle variable scopes in nested functions? What is the search order?',
            options: [
              'Global, Local, Enclosing, Built-in (GLEB)',
              'Local, Enclosing, Global, Built-in (LEGB)',
              'Local, Global, Enclosing, Built-in (LGEB)',
              'Built-in, Global, Enclosing, Local (BGEL)'
            ],
            correct: 1,
            explanation: 'Python searches for variables using the LEGB rule: first the Local scope, then the Enclosing scopes, then the Global scope, and finally the Built-in scope.'
          },
          {
            question: 'What is a generator in Python?',
            options: [
              'A script that compiles Python to C',
              'A function that returns an iterator using the yield keyword instead of return',
              'A CPU optimization mechanism',
              'A class that generates random numbers'
            ],
            correct: 1,
            explanation: 'A generator is a special type of function that returns a generator iterator. It uses the yield keyword to produce a sequence of values lazily, pausing execution between yields.'
          },
          {
            question: 'What is the correct syntax for catching exceptions in Python?',
            options: ['try ... except ...', 'try ... catch ...', 'attempt ... except ...', 'try ... handle ...'],
            correct: 0,
            explanation: 'Python uses the try and except block keywords to handle exceptions and catch errors.'
          },
          {
            question: 'What is the output of 3 * 1 ** 3 in Python?',
            options: ['27', '9', '3', '1'],
            correct: 2,
            explanation: 'Operator precedence rules state that exponentiation (**) has higher priority than multiplication (*).'
          },
          {
            question: 'In Python, what is the difference between the is operator and the == operator?',
            options: [
              'is checks for value equality, while == checks for identity',
              'is checks for object identity (same memory address), while == checks for value equality',
              'They are exactly identical in all contexts',
              'is is used for numbers, and == is used for strings'
            ],
            correct: 1,
            explanation: 'is evaluates to True if both variables point to the exact same object in memory, while == evaluates to True if the objects have equal values.'
          },
          {
            question: 'What is a decorator in Python?',
            options: [
              'A design tool for desktop GUIs',
              'A function that takes another function as an argument and extends its behavior without explicitly modifying it',
              'A comment block that labels files',
              'A method to clean up memory'
            ],
            correct: 1,
            explanation: 'Decorators are a powerful Python feature that allows you to wrap another function to extend its behavior dynamically, typically written using the @decorator_name syntax.'
          },
          {
            question: 'What does the nonlocal keyword do in Python?',
            options: [
              'Declares a variable as global across the entire project',
              'Declares that a variable inside a nested function belongs to the enclosing (outer) function scope, rather than local scope',
              'Disables local memory allocation',
              'Allows importing modules from outer folders'
            ],
            correct: 1,
            explanation: 'The nonlocal keyword is used in nested functions to indicate that a variable resides in the enclosing (outer) function\'s scope, allowing you to modify it.'
          },
          {
            question: 'What is the output of the code a = [1, 2]; b = a; b.append(3); print(a) in Python?',
            options: ['[1, 2]', '[1, 2, 3]', '[1, 2, 3, 3]', 'Error'],
            correct: 1,
            explanation: 'In Python, lists are mutable objects, and variables hold references. Assigning b = a copies the reference, so changes made through b affect the same object pointed to by a.'
          },
          {
            question: 'What does the zip() function do in Python?',
            options: [
              'Compresses files into a .zip archive',
              'Combines multiple iterables into an iterator of tuples where elements from each iterable are grouped by index',
              'Extracts dictionary items',
              'Encrypts data packets'
            ],
            correct: 1,
            explanation: 'The zip() function combines elements of multiple iterables into tuples based on index.'
          },
          {
            question: 'In Python, what is the purpose of the __str__ method in a class definition?',
            options: [
              'To load strings from disk',
              'To define the user-friendly string representation of a class instance when print() or str() is called',
              'To search for substrings in a class',
              'To cast values to strings'
            ],
            correct: 1,
            explanation: '__str__ is used to define a readable, user-friendly string representation of an object.'
          },
          {
            question: 'What does the enumerate() function return when looping over an iterable?',
            options: [
              'Only the elements of the iterable',
              'Pairs of indices and elements (index, element) as you loop',
              'A count of all elements',
              'An encrypted list'
            ],
            correct: 1,
            explanation: 'enumerate() yields index-value tuples for each item in the iterable.'
          },
          {
            question: 'In Python, what is a key difference between a List and a Tuple in terms of memory overhead?',
            options: [
              'Tuples require more memory because they are immutable',
              'Lists require more memory because they are mutable and pre-allocate extra space to accommodate future appends (over-allocation)',
              'They have identical memory usage',
              'Tuples do not reside in RAM'
            ],
            correct: 1,
            explanation: 'Because lists can grow dynamically, Python allocates extra memory slots to speed up appending. Tuples are fixed size and have lower memory overhead.'
          },
          {
            question: 'What is the output of the expression [x * 2 for x in range(3)]?',
            options: ['[0, 2, 4]', '[2, 4, 6]', '[0, 1, 2]', '[0, 2, 6]'],
            correct: 0,
            explanation: 'This list comprehension iterates through range(3) (0, 1, 2), multiplying each item by 2, resulting in [0, 2, 4].'
          },
          {
            question: 'What does the * operator do when used in a function call argument, like my_func(*my_list)?',
            options: [
              'Multiplies the arguments',
              'Unpacks the elements of the list as separate positional arguments for the function',
              'Passes a copy of the list',
              'Encrypts the arguments'
            ],
            correct: 1,
            explanation: 'The * prefix in a function call argument list unpacks iterable elements into separate arguments.'
          },
          {
            question: 'What is the purpose of the __repr__ method in Python?',
            options: [
              'To print class definitions',
              'To define the official, unambiguous string representation of an object (typically used for debugging/developers)',
              'To represent mathematical equations',
              'To reset the class parameters'
            ],
            correct: 1,
            explanation: '__repr__ returns a string that represents the code needed to recreate the object. It is a fallback for print if __str__ is not defined.'
          },
          {
            question: 'How do you create a deep copy of a nested list x in Python?',
            options: [
              'copy = x[:]',
              'copy = list(x)',
              'import copy; copy = copy.deepcopy(x)',
              'copy = x.copy()'
            ],
            correct: 2,
            explanation: 'Standard copy operations (slice [:], .copy(), list()) are shallow copies. To duplicate nested structures completely, use copy.deepcopy().'
          },
          {
            question: 'In Python, what does the dunder attribute __slots__ accomplish inside a class declaration?',
            options: [
              'Adds database columns',
              'Restricts the dynamic creation of new attributes by replacing the instance __dict__ with a fixed set of attributes, saving memory',
              'Speeds up function imports',
              'Declares global variables'
            ],
            correct: 1,
            explanation: '__slots__ prevents the creation of __dict__ and __weakref__ for class instances, saving memory when many instances are instantiated.'
          },
          {
            question: 'What is a generator in Python and how does it save memory?',
            options: [
              'A function containing yield statements that produces values lazily as an iterator, keeping only one state in memory at a time',
              'A compiler optimizer that converts scripts to executable binaries',
              'A background thread scheduler that executes parallel code blocks',
              'A serialization protocol that compresses dictionaries'
            ],
            correct: 0,
            explanation: 'Generators generate items on the fly (lazily) using yield, rather than creating and storing the entire list in memory.'
          },
          {
            question: 'What does the @classmethod decorator do in Python?',
            options: [
              'Declares a method that receives the class (cls) as its first argument instead of the instance (self)',
              'Restricts class properties from being modified at runtime',
              'Declares a class-level variable',
              'Runs the decorated method automatically during imports'
            ],
            correct: 0,
            explanation: 'The @classmethod decorator transforms a method into a class method. A class method receives the class itself as the implicit first argument.'
          },
          {
            question: 'What is the difference between __str__ and __repr__ in Python?',
            options: [
              '__repr__ provides an unambiguous string representation (typically for developers/debugging), while __str__ provides a readable, user-friendly representation',
              '__str__ works only for string variables, and __repr__ works only for numbers',
              '__str__ is executed by the compiler, and __repr__ is executed by layout rendering engines',
              '__str__ is slow and legacy, while __repr__ is modern and optimized'
            ],
            correct: 0,
            explanation: 'The goal of __repr__ is to be unambiguous, whereas __str__ is designed to be readable. If __str__ is not defined, python falls back to __repr__.'
          },
          {
            question: 'How do you implement a class decorator in Python?',
            options: [
              'Define a class with a __call__ method to process and return instance classes',
              'Inherit from the base class Decorator',
              'Add the class definition to the global @class_decorator registry',
              'Define a class with __init__ parameters only'
            ],
            correct: 0,
            explanation: 'To use a class as a decorator, the class needs to define a __call__ method, which makes the instances of the class callable.'
          },
          {
            question: 'What is Method Resolution Order (MRO) in Python?',
            options: [
              'The order in which Python searches base classes in inheritance using the C3 linearization algorithm',
              'The order of function executions inside a single script file',
              'The sorting of keys inside a dictionary object',
              'The compiled stack order of active call frames'
            ],
            correct: 0,
            explanation: 'MRO determines the order in which base classes are searched when looking for a method, resolved using the C3 linearization algorithm.'
          },
          {
            question: 'In Python, what is a closure?',
            options: [
              'A nested function that retains access to variables from its enclosing scope even after the outer function has returned',
              'A system call to close file streams',
              'A compiler optimization step that compiles nested loops',
              'A block layout formatting model'
            ],
            correct: 0,
            explanation: 'A closure is a function object that remembers values in enclosing scopes even if they are not present in memory.'
          },
          {
            question: 'How does Python\'s Global Interpreter Lock (GIL) affect multi-threaded programs?',
            options: [
              'It prevents multiple native threads from executing Python bytecodes at once, limiting CPU-bound speedups on multi-core chips',
              'It locks system memory from leaking during allocations',
              'It speeds up execution of multi-core CPU code paths',
              'It forces multiple threads to run in complete isolation sandboxes'
            ],
            correct: 0,
            explanation: 'The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once.'
          },
          {
            question: 'What is the behavior of the else clause in a Python try-except block?',
            options: [
              'It executes only if no exceptions were raised in the try block',
              'It executes in all cases, regardless of errors',
              'It executes only if an exception is successfully caught and processed',
              'It launches code execution in a separate process thread'
            ],
            correct: 0,
            explanation: 'The code in the else block runs if and only if the code in the try block does not raise an exception.'
          },
          {
            question: 'What does the nonlocal keyword do inside a nested function in Python?',
            options: [
              'Declares that a variable refers to a variable in the nearest enclosing scope that is not global',
              'Imports variables dynamically from other modules',
              'Allocates memory directly on the system heap',
              'Clears all local variables inside the current stack frame'
            ],
            correct: 0,
            explanation: 'The nonlocal keyword causes the variable to refer to previously bound variables in the nearest enclosing scope (excluding globals).'
          },
          {
            question: 'What is the output of the expression print(2 == 2.0) in Python?',
            options: ['True', 'False', 'TypeError', 'None'],
            correct: 0,
            explanation: 'Python compares numerical values by casting them to a common type. Since 2 and 2.0 represent the same mathematical value, the expression evaluates to True.'
          }
        ]
      },
      tally: tallyQuestions,
      dfa: dfaQuestions,
      adfa: adfaQuestions,
      pdfa: pdfaQuestions,
      taxation: taxationQuestions,
      
      graphic_design: graphicDesignQuestions,
      coreldraw: coreldrawQuestions,
      photoshop: photoshopQuestions,
      illustrator: illustratorQuestions,
      three_d_effects: threeDEffectsQuestions,
      
      react: reactQuestions,
      gsap: gsapQuestions,
      lenis: lenisQuestions,
      c_lang: cLangQuestions,
      cpp: cppQuestions,
      php: phpQuestions,
      java: javaQuestions,
      javascript: javascriptQuestions,
      sql: sqlQuestions,
      linux: linuxQuestions,
      
      web_design_quiz: webDesignQuizQuestions,
      o_level: oLevelQuestions,
      a_level: aLevelQuestions,
      data_scientist: dataScientistQuestions,
      google_ads: googleAdsQuestions,
      seo: seoQuestions,
      wordpress: wordpressQuestions,
      
      excel_mis: excelMisQuestions,
      excel_macro: excelMacroQuestions,
      excel_dashboard: excelDashboardQuestions,
      advanced_excel: advancedExcelQuestions,
      
      niit: niitQuestions,
      dit: ditQuestions,
      adca: adcaQuestions,
      dca: dcaQuestions,
      
      pandas: pandasQuestions,
      numpy: numpyQuestions,
      machine_learning: machineLearningQuestions,
      power_bi: powerBiQuestions,
      tableau: tableauQuestions,
      
      basic: basicQuestions,
      ccc: cccQuestions,
      ip_it: ipItQuestions
    }
  }
};
