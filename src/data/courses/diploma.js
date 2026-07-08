// Diploma courses: NIIT, DIT, ADCA, DCA

export const niitQuestions = {
  title: 'NIIT Course',
  easy: [
    {
      question: 'What is the primary focus of standard vocational NIIT software courses?',
      options: ['Information Technology, programming, databases, and systems management', 'Filing physical company tax returns manually', 'Hardware mechanical assembly', 'Designing interior architectural floor plans'],
      correct: 0,
      explanation: 'NIIT curriculum focuses on programming languages, object-oriented concepts, database designs, and software engineering foundations.'
    },
    {
      question: 'Which of the following is a primary programming language taught in NIIT software tracks?',
      options: ['Java or C++', 'HTML inline styles only', 'Assembly language', 'Visual Basic 6 only'],
      correct: 0,
      explanation: 'Java and C++ are the classic core object-oriented programming languages covered in NIIT syllabus modules.'
    },
    {
      question: 'What is Object-Oriented Programming (OOP)?',
      options: ['A programming paradigm based on the concept of "objects" containing data and code', 'A procedural programming format', 'An assembly compiler parameter', 'A data entry system in databases'],
      correct: 0,
      explanation: 'OOP uses class and object templates to structure software around modular, reusable units.'
    },
    {
      question: 'Which of the following is a core pillar of OOP?',
      options: ['Encapsulation, Inheritance, Polymorphism, and Abstraction', 'Compilation, Execution, Linking, and Loading', 'Input, Processing, Output, and Storage', 'Normalizing tables and indexing keys'],
      correct: 0,
      explanation: 'The four cornerstones of OOP are Encapsulation, Inheritance, Polymorphism, and Abstraction.'
    },
    {
      question: 'In OOP, what is Polymorphism?',
      options: ['The ability of different classes to respond to the same message/method call in different ways', 'Hiding variable states from users', 'Creating a subclass from a parent', 'Allocating memory on the system heap'],
      correct: 0,
      explanation: 'Polymorphism allows methods to behave differently based on the object instance executing them.'
    },
    {
      question: 'What represents the compile phase of a program?',
      options: ['Translating high-level source code into machine/byte code', 'Executing the program file', 'Typing data inputs in terminal', 'None of these'],
      correct: 0,
      explanation: 'Compilers translate source code files into target binary or bytecodes that processors/virtual machines execute.'
    },
    {
      question: 'What represents the run-time phase of a program?',
      options: ['The phase during which the compiled program is executing in memory', 'Writing lines of code in editors', 'Parsing code for syntax errors', 'Saving files to the hard drive'],
      correct: 0,
      explanation: 'Runtime refers to the active execution window of software within system memory.'
    },
    {
      question: 'What is a bug in programming?',
      options: ['An error, flaw, or fault in a software program that causes it to produce incorrect results', 'A network connection failure', 'A computer virus', 'A hardware processor defect'],
      correct: 0,
      explanation: 'Bugs are logical or syntax errors in source code preventing correct execution behavior.'
    },
    {
      question: 'What is debugging?',
      options: ['The process of finding and resolving bugs/errors in source code', 'Writing code comments', 'Designing web interfaces', 'Running database backups'],
      correct: 0,
      explanation: 'Debugging systematically isolates and fixes software bugs.'
    },
    {
      question: 'Which tool is used to trace code execution step-by-step to isolate bugs?',
      options: ['Debugger', 'Compiler', 'Linker', 'Decompiler'],
      correct: 0,
      explanation: 'Debuggers allow developers to pause execution (breakpoints) and inspect variables dynamically.'
    },
    {
      question: 'Which data type represents true or false values in most languages?',
      options: ['Boolean', 'Integer', 'String', 'Float'],
      correct: 0,
      explanation: 'Booleans represent binary logical states: true or false.'
    },
    {
      question: 'Which loop structure executes actions a set number of times using counter variables?',
      options: ['For Loop', 'While Loop', 'Do-While Loop', 'Infinite Loop'],
      correct: 0,
      explanation: 'For loops iterate code blocks over a specified range or sequence.'
    },
    {
      question: 'What is an array?',
      options: ['A collection of elements of the same data type stored in contiguous memory locations', 'A single variable holding database coordinates', 'A loop control statement', 'A pointer reference location'],
      correct: 0,
      explanation: 'Arrays store homogeneous elements sequentially under a single identifier.'
    },
    {
      question: 'Which structure evaluates conditions and branches execution paths?',
      options: ['If-Else statement', 'For loop', 'Variable declaration', 'Method return statement'],
      correct: 0,
      explanation: 'If-Else blocks are conditional control structures routing flow based on logic checks.'
    },
    {
      question: 'What does the term "Syntax" mean in programming?',
      options: ['The set of rules defining correct character arrangements and commands in a language', 'The speed of compilation', 'The memory capacity of variables', 'The file folders organization'],
      correct: 0,
      explanation: 'Syntax rules dictate vocabulary and grammar structures required for valid compilations.'
    },
    {
      question: 'What is a syntax error?',
      options: ['An error caused by violating the grammatical rules of the programming language', 'A runtime logic miscalculation', 'A division by zero crash', 'A hardware memory leak'],
      correct: 0,
      explanation: 'Syntax errors occur when compilers encounter invalid character/command structures, halting compilation.'
    },
    {
      question: 'What is a logical error in programming?',
      options: ['The program compiles and runs but produces incorrect output due to faulty math/reasoning', 'The compiler fails to build the file', 'The system crashes on launch', 'The user database password is rejected'],
      correct: 0,
      explanation: 'Logical errors are conceptual bugs where syntax is valid but code logic yields incorrect behavior.'
    },
    {
      question: 'What is the full form of IDE in software development?',
      options: ['Integrated Development Environment', 'Internal Database Engine', 'Input Device Interface', 'Interactive Design Editor'],
      correct: 0,
      explanation: 'An IDE is a software suite providing editors, compilers, and debuggers in a single application (e.g. VS Code).'
    },
    {
      question: 'Which of the following represents an IDE?',
      options: ['Eclipse / NetBeans / VS Code', 'Chrome Browser', 'MySQL Database', 'Windows Terminal'],
      correct: 0,
      explanation: 'Eclipse and NetBeans are prominent IDEs, especially for Java developers.'
    },
    {
      question: 'What does "Compilation" do?',
      options: ['Translates high-level source code into low-level machine code or bytecode', 'Runs unit tests on the server', 'Organizes database indices', 'Aligns text spacing in files'],
      correct: 0,
      explanation: 'Compilation is the process of translating human-readable text code into executable files.'
    },
    {
      question: 'What is dynamic memory allocation?',
      options: ['Allocating memory space during program runtime/execution rather than compile time', 'Static variable allocations', 'Deleting files from hard drives', 'None of these'],
      correct: 0,
      explanation: 'Dynamic allocation assigns memory (on the heap) as needed during execution.'
    },
    {
      question: 'Which segment of memory is used for dynamic memory allocation?',
      options: ['Heap', 'Stack', 'Register', 'Cache'],
      correct: 0,
      explanation: 'The heap is the pool of system memory managed dynamically by programs.'
    },
    {
      question: 'What represents the term "Software Engineering"?',
      options: ['The systematic application of engineering principles to software development', 'Writing code without documentation', 'Designing computer processor chips', 'Running database servers'],
      correct: 0,
      explanation: 'Software engineering applies structured methodologies (design, coding, tests, management) to build reliable systems.'
    },
    {
      question: 'Which document lists software requirements agreed upon by clients and developers?',
      options: ['Software Requirements Specification (SRS)', 'Board Resolution Document', 'VBA Macro code list', 'Database Index Schema'],
      correct: 0,
      explanation: 'The SRS document details target software behaviors, functions, and constraints.'
    },
    {
      question: 'What is a Class Constructor in OOP?',
      options: ['A special method used to initialize new objects of a class', 'A tool to compile class files', 'An outline of class methods', 'A database relation key'],
      correct: 0,
      explanation: 'Constructors set up initial values and configurations for newly created object instances.'
    },
    {
      question: 'Which data type is best for storing decimal numbers like prices (e.g. 19.99)?',
      options: ['Float or Double', 'Integer', 'Char', 'Boolean'],
      correct: 0,
      explanation: 'Floating-point data types (float, double) store fractional/decimal numerical values.'
    },
    {
      question: 'What is a recursive function?',
      options: ['A function that calls itself to solve smaller sub-problems', 'A loop that never terminates', 'A function returning multiple values', 'A function deleted during compile'],
      correct: 0,
      explanation: 'Recursion occurs when functions call themselves, resolving base cases to terminate loops.'
    },
    {
      question: 'What is the base case in a recursive function?',
      options: ['The condition that terminates the recursive calls', 'The initial value passed to variables', 'The main compiled file path', 'None of these'],
      correct: 0,
      explanation: 'The base case provides exit conditions, preventing infinite stack overflows.'
    },
    {
      question: 'What represents the binary system base?',
      options: ['Base 2 (digits 0 and 1)', 'Base 10', 'Base 8', 'Base 16'],
      correct: 0,
      explanation: 'Computers operate on binary structures using base 2.'
    },
    {
      question: 'What represents the decimal system base?',
      options: ['Base 10 (digits 0-9)', 'Base 2', 'Base 16', 'Base 8'],
      correct: 0,
      explanation: 'Human mathematics typically utilizes decimal base 10 structures.'
    }
  ]
};

export const ditQuestions = {
  title: 'DIT',
  easy: [
    {
      question: 'What does DIT stand for?',
      options: ['Diploma in Information Technology', 'Director of Internet Technology', 'Digital Information Tracking', 'Detailed IT Analysis'],
      correct: 0,
      explanation: 'DIT stands for Diploma in Information Technology, a vocational course covering IT, web design, and office tools.'
    },
    {
      question: 'Which of the following is a primary subject taught in DIT?',
      options: ['Computer fundamentals, office automation, web design, and basic programming', 'Mechanical engine design', 'Filing corporate tax reports only', 'None of these'],
      correct: 0,
      explanation: 'DIT focuses on computer basics, Microsoft Office suites, Internet applications, and HTML/CSS web layout basics.'
    },
    {
      question: 'Which of the following is an input device of a computer?',
      options: ['Keyboard', 'Monitor', 'Printer', 'Speaker'],
      correct: 0,
      explanation: 'Keyboards feed character coordinates inputs to the system, making them input devices.'
    },
    {
      question: 'Which of the following is an output device?',
      options: ['Printer', 'Keyboard', 'Mouse', 'Scanner'],
      correct: 0,
      explanation: 'Printers render digital data into physical documents, acting as output devices.'
    },
    {
      question: 'What is the brain of the computer system?',
      options: ['CPU (Central Processing Unit)', 'RAM', 'Hard Drive', 'Motherboard'],
      correct: 0,
      explanation: 'The CPU executes instructions and processes system arithmetic logic.'
    },
    {
      question: 'What does CPU stand for?',
      options: ['Central Processing Unit', 'Computer Processing Utility', 'Central Protocol Unit', 'Core Processing Unit'],
      correct: 0,
      explanation: 'CPU stands for Central Processing Unit.'
    },
    {
      question: 'Which computer memory is volatile (loses data when power is turned off)?',
      options: ['RAM', 'ROM', 'Hard Disk', 'Flash Drive'],
      correct: 0,
      explanation: 'RAM is volatile memory; data is cleared when the computer is shut down.'
    },
    {
      question: 'Which computer storage is non-volatile (retains data without power)?',
      options: ['Hard Disk Drive (HDD) / SSD', 'RAM', 'Processor Cache', 'Registers'],
      correct: 0,
      explanation: 'Hard drives and SSDs provide persistent, non-volatile storage for files.'
    },
    {
      question: 'What does operating system (OS) do?',
      options: ['Manages hardware resources and provides services for software applications', 'Edits image files', 'Calculates accounting numbers only', 'Connects database tables'],
      correct: 0,
      explanation: 'The OS controls hardware interfaces, memory schedules, filesystems, and user programs.'
    },
    {
      question: 'Which of the following is a proprietary operating system developed by Microsoft?',
      options: ['Windows', 'Linux', 'macOS', 'Android'],
      correct: 0,
      explanation: 'Microsoft Windows is the leading proprietary desktop operating system.'
    },
    {
      question: 'Which of the following is a free, open-source operating system kernel?',
      options: ['Linux', 'Windows', 'iOS', 'MS-DOS'],
      correct: 0,
      explanation: 'Linux is a prominent open-source kernel project.'
    },
    {
      question: 'What is the purpose of Microsoft Word?',
      options: ['Word processing and document creation', 'Managing database tables', 'Calculating numeric spreadsheets', 'Editing videos'],
      correct: 0,
      explanation: 'MS Word is a word processor used to write, edit, and format documents.'
    },
    {
      question: 'What is the purpose of Microsoft Excel?',
      options: ['Creating spreadsheets, calculations, and data tables', 'Writing long text essays', 'Creating slide presentation shows', 'Designing vector logos'],
      correct: 0,
      explanation: 'MS Excel is a spreadsheet application optimized for numeric sorting, formulas, and data reporting.'
    },
    {
      question: 'What is the purpose of Microsoft PowerPoint?',
      options: ['Creating slideshow presentations', 'Calculating accounting ledgers', 'Editing raw photographs', 'Writing text letters'],
      correct: 0,
      explanation: 'PowerPoint is a presentation program used to design visual slides.'
    },
    {
      question: 'Which shortcut is used to copy selected elements in Windows?',
      options: ['Ctrl + C', 'Ctrl + V', 'Ctrl + X', 'Ctrl + Z'],
      correct: 0,
      explanation: 'Ctrl + C copies selections to the clipboard.'
    },
    {
      question: 'Which shortcut is used to paste copied elements in Windows?',
      options: ['Ctrl + V', 'Ctrl + C', 'Ctrl + P', 'Ctrl + X'],
      correct: 0,
      explanation: 'Ctrl + V pastes items from the clipboard.'
    },
    {
      question: 'Which shortcut cuts selected elements in Windows?',
      options: ['Ctrl + X', 'Ctrl + C', 'Ctrl + V', 'Ctrl + Z'],
      correct: 0,
      explanation: 'Ctrl + X cuts elements, removing them to the clipboard.'
    },
    {
      question: 'Which shortcut undoes the last action in Windows applications?',
      options: ['Ctrl + Z', 'Ctrl + Y', 'Ctrl + A', 'Ctrl + U'],
      correct: 0,
      explanation: 'Ctrl + Z is the universal undo command.'
    },
    {
      question: 'Which shortcut selects all content in a document or folder?',
      options: ['Ctrl + A', 'Ctrl + S', 'Ctrl + C', 'Ctrl + Shift + A'],
      correct: 0,
      explanation: 'Ctrl + A (Select All) highlights all items.'
    },
    {
      question: 'Which shortcut saves the active document in MS Office?',
      options: ['Ctrl + S', 'Ctrl + P', 'Ctrl + A', 'Ctrl + N'],
      correct: 0,
      explanation: 'Ctrl + S triggers the save file operation.'
    },
    {
      question: 'What is the full form of LAN in networks?',
      options: ['Local Area Network', 'Large Area Network', 'Link Access Node', 'Logical Address Network'],
      correct: 0,
      explanation: 'LAN connects computers within a limited physical boundary (like an office or home).'
    },
    {
      question: 'What is the full form of WAN?',
      options: ['Wide Area Network', 'Web Access Network', 'Wireless Area Node', 'Wide Address Network'],
      correct: 0,
      explanation: 'WAN spans large geographical areas, connecting networks globally (like the Internet).'
    },
    {
      question: 'What is the Internet?',
      options: ['A global network of interconnected computers exchanging data using TCP/IP', 'A software program on local computers', 'A database storage file', 'A type of operating system'],
      correct: 0,
      explanation: 'The Internet is a global network of networks connecting millions of devices.'
    },
    {
      question: 'What is a Web Browser?',
      options: ['A software application used to access and view websites on the Internet', 'A search engine', 'A database server', 'An operating system kernel'],
      correct: 0,
      explanation: 'Web browsers (Chrome, Edge, Firefox) translate HTML and JS into visual pages.'
    },
    {
      question: 'Which of the following is a web browser?',
      options: ['Google Chrome', 'Google Search', 'Windows Explorer', 'MySQL'],
      correct: 0,
      explanation: 'Google Chrome is a web browser developed by Google.'
    },
    {
      question: 'What does HTML stand for in web publishing?',
      options: ['Hypertext Markup Language', 'High Technology Modern Language', 'Hybrid Text Model Layout', 'Hyperlink Text Markup Language'],
      correct: 0,
      explanation: 'HTML stands for HyperText Markup Language.'
    },
    {
      question: 'Which tag is used to create a hyperlink in HTML?',
      options: ['<a>', '<link>', '<href>', '<url>'],
      correct: 0,
      explanation: 'The anchor tag `<a>` defines links between pages.'
    },
    {
      question: 'Which HTML element displays an image on a webpage?',
      options: ['<img>', '<image>', '<pic>', '<src>'],
      correct: 0,
      explanation: 'The `<img>` tag embeds image files.'
    },
    {
      question: 'What is a computer virus?',
      options: ['A malicious software program designed to duplicate itself and damage computer files', 'A biological disease', 'A hardware cooling defect', 'A database error statement'],
      correct: 0,
      explanation: 'Computer viruses attach to programs, multiplying to corrupt systems or steal data.'
    },
    {
      question: 'Which software is designed to detect and remove computer viruses?',
      options: ['Antivirus', 'Firewall', 'Web browser', 'Operating system'],
      correct: 0,
      explanation: 'Antivirus utilities monitor systems and scan files to isolate malware infections.'
    }
  ]
};

export const adcaQuestions = {
  title: 'ADCA',
  easy: [
    {
      question: 'What does ADCA stand for in computer diplomas?',
      options: ['Advanced Diploma in Computer Applications', 'Assistant Director of Computer Audit', 'Analytical Design of Computer Architectures', 'Applied Diploma in Code Analysis'],
      correct: 0,
      explanation: 'ADCA stands for Advanced Diploma in Computer Applications.'
    },
    {
      question: 'Which topics are covered in ADCA over basic DCA?',
      options: ['Advanced Excel, Tally ERP, Web Design, and Database Concepts', 'Assembly code design only', 'Hardware structural soldering', 'None of these'],
      correct: 0,
      explanation: 'ADCA expands on basic computing by teaching business applications like Tally, advanced spreadsheets, database administration, and basic HTML.'
    },
    {
      question: 'Which software is used for professional desktop publishing (DTP) in ADCA?',
      options: ['CorelDRAW & Photoshop', 'MS Word only', 'Notepad', 'Excel'],
      correct: 0,
      explanation: 'DTP modules in ADCA utilize CorelDRAW, Photoshop, and PageMaker to design prints.'
    },
    {
      question: 'What is the shortcut key to search for a word in a document in MS Word?',
      options: ['Ctrl + F', 'Ctrl + H', 'Ctrl + S', 'Ctrl + G'],
      correct: 0,
      explanation: 'Ctrl + F opens the Navigation pane to search for text.'
    },
    {
      question: 'What is the shortcut key to Find and Replace a word in MS Word?',
      options: ['Ctrl + H', 'Ctrl + F', 'Ctrl + R', 'Ctrl + G'],
      correct: 0,
      explanation: 'Ctrl + H opens the Find and Replace dialog window.'
    },
    {
      question: 'Which Excel function searches for values in the left column and pulls matching data from columns to the right?',
      options: ['VLOOKUP', 'HLOOKUP', 'INDEX', 'LOOKUP'],
      correct: 0,
      explanation: 'VLOOKUP searches vertically down the first column of a table to retrieve data.'
    },
    {
      question: 'In Excel, what does the dollar sign ($) do in formula references (e.g. $A$1)?',
      options: ['Locks row and column references (absolute reference) so they do not shift when copied', 'Converts values to currency format', 'Indicates data values are errors', 'Locks the sheet tab'],
      correct: 0,
      explanation: '$ locks coordinate references, stopping them from changing when dragging formulas.'
    },
    {
      question: 'Which features in Excel summarizes data using filters, groupings, and sums dynamically?',
      options: ['Pivot Table', 'VLOOKUP', 'Conditional Formatting', 'Data validation'],
      correct: 0,
      explanation: 'Pivot Tables summarize large datasets based on rows, columns, and metric filters.'
    },
    {
      question: 'What is a database?',
      options: ['An organized collection of structured data stored electronically', 'A folder containing image files', 'A loop script in programming', 'A network connection gateway'],
      correct: 0,
      explanation: 'Databases store structured records, managed by DBMS engines for rapid querying.'
    },
    {
      question: 'Which software is a popular RDBMS taught in ADCA?',
      options: ['MS Access / MySQL', 'MS Word', 'CorelDRAW', 'Photoshop'],
      correct: 0,
      explanation: 'MS Access (Office suite) and MySQL are the entry relational databases taught in ADCA.'
    },
    {
      question: 'What represents a Primary Key in database tables?',
      options: ['A column containing unique values to identify each row', 'The password to open database files', 'The first column index of any table', 'None of these'],
      correct: 0,
      explanation: 'Primary keys enforce row uniqueness, preventing duplicates and nulls.'
    },
    {
      question: 'Which SQL statement retrieves data columns from tables?',
      options: ['SELECT', 'GET', 'RETRIEVE', 'SHOW'],
      correct: 0,
      explanation: 'The SELECT command queries databases.'
    },
    {
      question: 'Which of the following is a database query language?',
      options: ['SQL', 'HTML', 'CSS', 'HTTP'],
      correct: 0,
      explanation: 'SQL (Structured Query Language) manages data updates and queries.'
    },
    {
      question: 'What does Tally software help businesses manage?',
      options: ['Accounting, inventory, and tax compliance (GST, TDS)', 'Graphic animations', 'Web server hosting', 'Video editing'],
      correct: 0,
      explanation: 'Tally is a prominent ERP accounting application.'
    },
    {
      question: 'Which voucher type in Tally records bank deposits and cash withdrawals?',
      options: ['Contra Voucher (F4)', 'Payment Voucher', 'Receipt Voucher', 'Journal Voucher'],
      correct: 0,
      explanation: 'Contra (F4) records cash/bank adjustments.'
    },
    {
      question: 'Which voucher type in Tally is used for direct payments of expenses in cash?',
      options: ['Payment Voucher (F5)', 'Receipt Voucher', 'Journal Voucher', 'Sales Voucher'],
      correct: 0,
      explanation: 'Payment (F5) tracks all cash/bank outflows.'
    },
    {
      question: 'What represents the golden rule for Real Accounts in bookkeeping?',
      options: ['Debit what comes in, Credit what goes out', 'Debit the receiver, credit the giver', 'Debit all expenses, credit all incomes', 'None of these'],
      correct: 0,
      explanation: 'Real accounts (assets) rule is: Debit what comes in, Credit what goes out.'
    },
    {
      question: 'Which HTML tag displays the largest primary heading on pages?',
      options: ['<h1>', '<h6>', '<heading>', '<head>'],
      correct: 0,
      explanation: '`<h1>` sets the primary, largest heading.'
    },
    {
      question: 'Which HTML tag creates a paragraph block?',
      options: ['<p>', '<para>', '<text>', '<paragraph>'],
      correct: 0,
      explanation: '`<p>` defines paragraphs.'
    },
    {
      question: 'Which CSS property alters background colors?',
      options: ['background-color', 'color', 'bgcolor', 'fill-color'],
      correct: 0,
      explanation: '`background-color` sets backgrounds.'
    },
    {
      question: 'Which CSS property changes the text color?',
      options: ['color', 'text-color', 'font-color', 'style-color'],
      correct: 0,
      explanation: 'The `color` property sets text color.'
    },
    {
      question: 'What is local area network (LAN)?',
      options: ['A network connecting devices within a small area (like an office)', 'A global internet network', 'A satellite network connection', 'None of these'],
      correct: 0,
      explanation: 'LANs connect local office/home networks.'
    },
    {
      question: 'What does URL stand for?',
      options: ['Uniform Resource Locator', 'Universal Resource Link', 'Unified Register Layout', 'None of these'],
      correct: 0,
      explanation: 'URL represents the unique web page address.'
    },
    {
      question: 'What represents phishing in cyber security?',
      options: ['Scam emails designed to steal credentials by mimicking real brands', 'Searching data tables', 'Clearing cache memory', 'Bidding on search ads'],
      correct: 0,
      explanation: 'Phishing mimics authentic entities to steal user profiles.'
    },
    {
      question: 'Which key is used to refresh the active web page in browsers?',
      options: ['F5', 'F1', 'F11', 'F2'],
      correct: 0,
      explanation: 'F5 (or Ctrl + R) refreshes browser pages.'
    },
    {
      question: 'What is the shortcut key to print documents in Windows?',
      options: ['Ctrl + P', 'Ctrl + S', 'Ctrl + N', 'Ctrl + O'],
      correct: 0,
      explanation: 'Ctrl + P opens the print dialog.'
    },
    {
      question: 'What is the shortcut key to open a new file or document?',
      options: ['Ctrl + N', 'Ctrl + O', 'Ctrl + S', 'Ctrl + P'],
      correct: 0,
      explanation: 'Ctrl + N opens new files/pages.'
    },
    {
      question: 'What is the shortcut key to open an existing file?',
      options: ['Ctrl + O', 'Ctrl + N', 'Ctrl + S', 'Ctrl + P'],
      correct: 0,
      explanation: 'Ctrl + O (Open) prompts for file selection.'
    },
    {
      question: 'Which memory resides directly on the CPU chip for ultra-fast access?',
      options: ['Cache Memory', 'RAM', 'ROM', 'Hard Disk'],
      correct: 0,
      explanation: 'Cache memory is static RAM built inside CPU cores for instant instructions access.'
    },
    {
      question: 'What is the main function of an Antivirus software?',
      options: ['To identify and remove malicious software from computer systems', 'To compile programs faster', 'To design web layouts', 'To calculate tax sheets'],
      correct: 0,
      explanation: 'Antiviruses block, isolate, and clean malware infections.'
    }
  ]
};

export const dcaQuestions = {
  title: 'DCA',
  easy: [
    {
      question: 'What does DCA stand for?',
      options: ['Diploma in Computer Applications', 'Director of Computer Analytics', 'Detailed Computer Analysis', 'Degree in Computer Applications'],
      correct: 0,
      explanation: 'DCA stands for Diploma in Computer Applications, a foundational course in computing.'
    },
    {
      question: 'Which of the following is covered in standard DCA courses?',
      options: ['Computer fundamentals, MS Office, internet usage, and basic accounting', 'Advanced network routing architecture', 'Building CPU microchips', 'None of these'],
      correct: 0,
      explanation: 'DCA introduces basic computer parts, operating systems, Word, Excel, PowerPoint, and basic internet tools.'
    },
    {
      question: 'Which of the following is the main operating system software developed by Microsoft?',
      options: ['Windows', 'Linux', 'macOS', 'Android'],
      correct: 0,
      explanation: 'Microsoft Windows is the leading desktop operating system covered in DCA.'
    },
    {
      question: 'What is the short form for Central Processing Unit?',
      options: ['CPU', 'RAM', 'ALU', 'OS'],
      correct: 0,
      explanation: 'The Central Processing Unit is abbreviated as CPU.'
    },
    {
      question: 'Which key is used to erase characters to the left of the cursor?',
      options: ['Backspace', 'Delete', 'Enter', 'Spacebar'],
      correct: 0,
      explanation: 'Backspace deletes characters preceding the cursor. The Delete key deletes characters after the cursor.'
    },
    {
      question: 'Which key is used to erase characters to the right of the cursor?',
      options: ['Delete', 'Backspace', 'Escape', 'Tab'],
      correct: 0,
      explanation: 'The Delete key erases characters directly after the cursor.'
    },
    {
      question: 'What is MS Word?',
      options: ['A word processing program', 'A spreadsheet program', 'A slide presentation program', 'A database engine'],
      correct: 0,
      explanation: 'MS Word is designed for typing, editing, formatting, and saving documents.'
    },
    {
      question: 'What is MS Excel?',
      options: ['A spreadsheet program', 'A word processor', 'A design program', 'An operating system'],
      correct: 0,
      explanation: 'MS Excel manages columns, rows, formulas, charts, and numeric data.'
    },
    {
      question: 'What is MS PowerPoint?',
      options: ['A presentation slide program', 'A spreadsheet program', 'A database table manager', 'A text editor'],
      correct: 0,
      explanation: 'MS PowerPoint builds slide shows.'
    },
    {
      question: 'Which shortcut copies selected elements?',
      options: ['Ctrl + C', 'Ctrl + V', 'Ctrl + X', 'Ctrl + S'],
      correct: 0,
      explanation: 'Ctrl + C copies items to the clipboard.'
    },
    {
      question: 'Which shortcut pastes copied clipboard items?',
      options: ['Ctrl + V', 'Ctrl + C', 'Ctrl + X', 'Ctrl + P'],
      correct: 0,
      explanation: 'Ctrl + V executes paste commands.'
    },
    {
      question: 'Which shortcut cuts selected elements?',
      options: ['Ctrl + X', 'Ctrl + C', 'Ctrl + V', 'Ctrl + Z'],
      correct: 0,
      explanation: 'Ctrl + X cuts elements, preparing them for moving.'
    },
    {
      question: 'Which shortcut undoes the last typing step?',
      options: ['Ctrl + Z', 'Ctrl + Y', 'Ctrl + S', 'Ctrl + U'],
      correct: 0,
      explanation: 'Ctrl + Z undoes the last command.'
    },
    {
      question: 'Which shortcut selects all items in folders or files?',
      options: ['Ctrl + A', 'Ctrl + S', 'Ctrl + C', 'Ctrl + N'],
      correct: 0,
      explanation: 'Ctrl + A selects everything.'
    },
    {
      question: 'Which shortcut saves documents?',
      options: ['Ctrl + S', 'Ctrl + A', 'Ctrl + N', 'Ctrl + O'],
      correct: 0,
      explanation: 'Ctrl + S saves progress.'
    },
    {
      question: 'What is the full form of RAM?',
      options: ['Random Access Memory', 'Read Access Memory', 'Running Active Module', 'Rapid Application Memory'],
      correct: 0,
      explanation: 'RAM stands for Random Access Memory.'
    },
    {
      question: 'What is the full form of ROM?',
      options: ['Read Only Memory', 'Random Operations Master', 'Running Option Matrix', 'Rapid Output Module'],
      correct: 0,
      explanation: 'ROM stands for Read Only Memory.'
    },
    {
      question: 'Is RAM volatile or non-volatile?',
      options: ['Volatile (erases when power is off)', 'Non-volatile (retains data)', 'Depends on the CPU manufacturer', 'None of these'],
      correct: 0,
      explanation: 'RAM clears completely when system power is cut.'
    },
    {
      question: 'What does formatting a drive do in Windows?',
      options: ['Deletes all files and structures the drive for new data', 'Speeds up the CPU processing speed', 'Updates the system drivers online', 'Changes the color theme of folders'],
      correct: 0,
      explanation: 'Formatting prepares drives for use by wiping existing files and rebuilding filesystems.'
    },
    {
      question: 'Which of the following represents a hardware component?',
      options: ['Motherboard / Hard Disk', 'Chrome Browser', 'MS Word', 'Windows 11'],
      correct: 0,
      explanation: 'Hardware represents physical computer components (e.g. motherboard, memory cards, casing).'
    },
    {
      question: 'Which of the following represents software?',
      options: ['Operating System / Applications', 'Monitor', 'Keyboard', 'Cables'],
      correct: 0,
      explanation: 'Software represents program files and code executed by hardware.'
    },
    {
      question: 'What is the global network of computers sharing information called?',
      options: ['Internet', 'Intranet', 'LAN', 'Server'],
      correct: 0,
      explanation: 'The Internet is the global network connecting devices.'
    },
    {
      question: 'What is the main function of web browsers?',
      options: ['To access and display web pages from the Internet', 'To edit spreadsheets', 'To verify local databases', 'To compile programming code'],
      correct: 0,
      explanation: 'Browsers parse and display web pages.'
    },
    {
      question: 'Which of the following is a web browser?',
      options: ['Mozilla Firefox', 'Google Search', 'MS Excel', 'MySQL'],
      correct: 0,
      explanation: 'Mozilla Firefox is a browser application.'
    },
    {
      question: 'What does WWW stand for in websites?',
      options: ['World Wide Web', 'World Wide Word', 'Web Wireless Window', 'Western Web Works'],
      correct: 0,
      explanation: 'WWW stands for World Wide Web.'
    },
    {
      question: 'Which shortcut is used to print files?',
      options: ['Ctrl + P', 'Ctrl + S', 'Ctrl + N', 'Ctrl + O'],
      correct: 0,
      explanation: 'Ctrl + P triggers print dialogs.'
    },
    {
      question: 'What is the shortcut key to close active windows in Windows OS?',
      options: ['Alt + F4', 'Ctrl + W', 'Both Alt + F4 and Ctrl + W', 'Ctrl + Alt + Delete'],
      correct: 2,
      explanation: 'Ctrl + W closes current tabs/windows, and Alt + F4 shuts the entire application.'
    },
    {
      question: 'What is the function of the Recycle Bin in Windows?',
      options: ['Temporarily stores deleted files, allowing recovery', 'Permanently deletes files instantly', 'Cleans up system RAM memory', 'Saves file attachments from emails'],
      correct: 0,
      explanation: 'Deleted files are moved to the Recycle Bin, letting users restore them if deleted by accident.'
    },
    {
      question: 'What is standard unit to measure CPU speed?',
      options: ['Gigahertz (GHz)', 'Megabytes (MB)', 'Pixels (px)', 'Bytes (B)'],
      correct: 0,
      explanation: 'CPU clock speeds are measured in Gigahertz (billion clock cycles per second).'
    },
    {
      question: 'What represents the storage capacity unit larger than Megabyte (MB)?',
      options: ['Gigabyte (GB)', 'Kilobyte (KB)', 'Byte (B)', 'Bit'],
      correct: 0,
      explanation: '1 Gigabyte (GB) equals 1024 Megabytes (MB).'
    }
  ]
};
