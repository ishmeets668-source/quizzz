// Advanced Excel courses: Advanced Excel (MIS), Advanced Excel (Macro), Advanced Excel (Dashboard), Advanced Excel

export const excelMisQuestions = {
  title: 'Advanced Excel (MIS)',
  easy: [
    {
      question: 'What does MIS stand for in business operations?',
      options: ['Management Information System', 'Macro Integration Structure', 'Master Inventory Sheet', 'Management Invoice System'],
      correct: 0,
      explanation: 'MIS (Management Information System) processes data into reports to help managers make decisions.'
    },
    {
      question: 'Which Excel feature is most vital for summarizing, analyzing, and presenting massive datasets for MIS reports?',
      options: ['Pivot Table', 'VLOOKUP', 'Conditional Formatting', 'Data Validation'],
      correct: 0,
      explanation: 'Pivot Tables are the cornerstone of MIS reporting, summarizing thousands of data points with ease.'
    },
    {
      question: 'What is VLOOKUP in Excel?',
      options: ['Vertical Lookup (searches for a value in the first column of a table array and returns a value in the same row)', 'A sorting algorithm for columns', 'A tool to lock spreadsheet sheets', 'An mathematical average calculator'],
      correct: 0,
      explanation: 'VLOOKUP searches vertically from top to bottom in a table, retrieving values from matching rows.'
    },
    {
      question: 'Which function is the modern, powerful successor to VLOOKUP and HLOOKUP, capable of looking up data in any direction?',
      options: ['XLOOKUP', 'INDEX/MATCH only', 'LOOKUP', 'FINDVALUE'],
      correct: 0,
      explanation: 'XLOOKUP (introduced in Office 365) performs vertical and horizontal searches without column order restrictions.'
    },
    {
      question: 'What is the syntax of the IF function in Excel?',
      options: ['=IF(logical_test, value_if_true, value_if_false)', '=IF(condition, value)', '=IF(value_if_true, value_if_false)', '=IF(logical_test, condition)'],
      correct: 0,
      explanation: 'The IF function evaluates a logic check and outputs specified values based on boolean results.'
    },
    {
      question: 'Which function calculates the arithmetic average of cells meeting a single criteria?',
      options: ['AVERAGEIF()', 'AVERAGE()', 'SUMIF()/COUNT()', 'AVERAGES()'],
      correct: 0,
      explanation: 'AVERAGEIF(range, criteria, [average_range]) averages values in cells that match a condition.'
    },
    {
      question: 'Which function is used to add all numbers in a range that meet a specific condition?',
      options: ['SUMIF()', 'SUM()', 'SUMIFS()', 'ADDIF()'],
      correct: 0,
      explanation: 'SUMIF(range, criteria, [sum_range]) adds cells matching a single specified condition.'
    },
    {
      question: 'What is the difference between SUMIF and SUMIFS in Excel?',
      options: ['SUMIF handles a single criteria, while SUMIFS allows multiple criteria criteria conditions', 'SUMIFS is faster during file compile', 'SUMIF is used for rows, SUMIFS for columns', 'They are identical'],
      correct: 0,
      explanation: 'SUMIFS supports summing cells that meet multiple criteria conditions concurrently.'
    },
    {
      question: 'Which feature in Excel highlights cells with specific colors based on their value?',
      options: ['Conditional Formatting', 'Cell Styles', 'Data Validation', 'Format Painter'],
      correct: 0,
      explanation: 'Conditional Formatting dynamically formats (fill color, font styles) cells that match rules.'
    },
    {
      question: 'What is the purpose of Data Validation in Excel?',
      options: ['To restrict the type of data or values users can enter into a cell', 'To encrypt worksheets with passwords', 'To check math calculations for errors', 'To link sheets together'],
      correct: 0,
      explanation: 'Data Validation enforces constraints (like date ranges, numbers, or dropdown lists) on user inputs.'
    },
    {
      question: 'Which shortcut key is used to apply absolute cell reference ($ locks) in Excel formulas?',
      options: ['F4', 'F2', 'F9', 'Alt + F4'],
      correct: 0,
      explanation: 'Pressing F4 while selecting a cell reference in a formula toggles absolute ($A$1), row ($A1), or column (A$1) locks.'
    },
    {
      question: 'What does a cell error "#DIV/0!" indicate?',
      options: ['A formula is attempting to divide a number by zero or an empty cell', 'The column width is too narrow', 'A cell reference is invalid', 'The formula name has a spelling error'],
      correct: 0,
      explanation: '#DIV/0! is thrown when formulas perform division by zero.'
    },
    {
      question: 'What does a cell display "#VALUE!" mean in Excel?',
      options: ['The formula contains the wrong type of argument (e.g. adding text to a number)', 'The value is too large for the cell', 'The reference sheet has been deleted', 'None of these'],
      correct: 0,
      explanation: '#VALUE! indicates incorrect data types inside formula arguments.'
    },
    {
      question: 'What does a cell display "#N/A" indicate in lookup formulas?',
      options: ['The lookup value was not found in the target range', 'The sheet is locked', 'The column index is out of bounds', 'The data type is numeric'],
      correct: 0,
      explanation: '#N/A (Not Available) represents lookup matching failures.'
    },
    {
      question: 'What does the "#NAME?" error in Excel mean?',
      options: ['Excel does not recognize text in the formula, usually due to a misspelled function name', 'The cell width is too narrow', 'A sheet tab name is missing', 'The file has not been named yet'],
      correct: 0,
      explanation: '#NAME? is displayed when function names are misspelled (e.g. typing "=SUMM(A1:A5)").'
    },
    {
      question: 'What does it mean when a cell displays a sequence of pound signs "###" in Excel?',
      options: ['The column is not wide enough to display the formatted number/date', 'The formula has a major error', 'The sheet has a security password lock', 'The cell contains a negative value'],
      correct: 0,
      explanation: 'Pound signs indicate text truncation due to insufficient column widths. Dragging column margins wider solves this.'
    },
    {
      question: 'Which tool is used to remove duplicate records from a table in Excel?',
      options: ['Remove Duplicates (under the Data tab)', 'Filter option', 'Find & Replace', 'Sort A-Z'],
      correct: 0,
      explanation: 'The Remove Duplicates tool deletes duplicate rows from selected columns.'
    },
    {
      question: 'Which Excel feature allows you to freeze rows/columns so they stay visible while scrolling?',
      options: ['Freeze Panes', 'Lock Cells', 'Split Screen', 'Format Table'],
      correct: 0,
      explanation: 'Freeze Panes (View tab) keeps headers visible when scrolling through large sheets.'
    },
    {
      question: 'What is the keyboard shortcut to insert a new Pivot Table in Excel?',
      options: ['Alt + N + V', 'Ctrl + T', 'Alt + P + T', 'Ctrl + Shift + P'],
      correct: 0,
      explanation: 'Alt + N + V is the standard Windows shortcut sequence to open the PivotTable creator.'
    },
    {
      question: 'Which tab in Excel contains tools like Text to Columns and Flash Fill?',
      options: ['Data Tab', 'Insert Tab', 'Formulas Tab', 'Home Tab'],
      correct: 0,
      explanation: 'The Data tab manages imports, validation, Text to Columns, and sorting.'
    },
    {
      question: 'What does the COUNTIF function do?',
      options: ['Counts the number of cells in a range that meet a specific condition', 'Adds values in cells matching a condition', 'Averages cell values', 'Counts all cells containing text only'],
      correct: 0,
      explanation: 'COUNTIF(range, criteria) counts cells matching one single condition.'
    },
    {
      question: 'Which function returns the serial number of the current date in Excel?',
      options: ['TODAY()', 'NOW()', 'DATE()', 'CURRENT()'],
      correct: 0,
      explanation: 'TODAY() returns the active calendar date (re-evaluates on sheet updates).'
    },
    {
      question: 'What is the difference between TODAY() and NOW() in Excel?',
      options: ['TODAY() returns the current date only, while NOW() returns both the current date and time', 'TODAY() is updated daily, NOW() is updated hourly', 'They are exact duplicates', 'NOW() is only used in VBA macros'],
      correct: 0,
      explanation: 'NOW() returns both date and time parameters, updated whenever formulas recalculate.'
    },
    {
      question: 'Which function is used to join text strings from multiple cells into one?',
      options: ['CONCATENATE() or CONCAT()', 'JOIN()', 'MERGE()', 'AND operator'],
      correct: 0,
      explanation: 'CONCAT() or CONCATENATE() joins multiple string parameters together.'
    },
    {
      question: 'What represents the text joining operator in Excel (alternative to CONCAT)?',
      options: ['&', '+', '|', '&&'],
      correct: 0,
      explanation: 'The ampersand (&) operator concatenates text cells directly (e.g. `=A1 & " " & B1`).'
    },
    {
      question: 'Which tool separates a single column of text (like "First Last") into two separate columns?',
      options: ['Text to Columns', 'Flash Fill only', 'Both Text to Columns and Flash Fill', 'Merge Cells'],
      correct: 2,
      explanation: 'Both Text to Columns and Flash Fill can split combined name strings into separate columns.'
    },
    {
      question: 'What is Flash Fill in Excel?',
      options: ['An AI-like tool that automatically senses patterns and fills data down columns', 'A formatting tool that colors cells quickly', 'A type of chart layout', 'A macro automation compiler'],
      correct: 0,
      explanation: 'Flash Fill (shortcut: Ctrl + E) matches patterns in neighboring columns to autofill data.'
    },
    {
      question: 'What is the shortcut key for Flash Fill in Excel?',
      options: ['Ctrl + E', 'Ctrl + F', 'Alt + F8', 'Ctrl + Shift + F'],
      correct: 0,
      explanation: 'Ctrl + E triggers Flash Fill.'
    },
    {
      question: 'Which function checks if all conditions are true, returning TRUE only if all are satisfied?',
      options: ['AND()', 'OR()', 'IF()', 'XOR()'],
      correct: 0,
      explanation: 'The AND() function returns TRUE if and only if all its logical arguments evaluate to TRUE.'
    },
    {
      question: 'Which function returns TRUE if at least one of its conditions evaluates to true?',
      options: ['OR()', 'AND()', 'IF()', 'NOT()'],
      correct: 0,
      explanation: 'The OR() function returns TRUE if any argument is true.'
    }
  ]
};

export const excelMacroQuestions = {
  title: 'Advanced Excel (Macro)',
  easy: [
    {
      question: 'What is an Excel Macro?',
      options: ['A set of recorded actions or code that automates repetitive tasks', 'A type of complex math function', 'A special sheet tab styling design', 'An external database connection module'],
      correct: 0,
      explanation: 'Macros automate repetitive tasks by recording mouse/keyboard sequences or running custom VBA code.'
    },
    {
      question: 'Which programming language is used to write or edit Excel Macros?',
      options: ['VBA (Visual Basic for Applications)', 'Python', 'C++', 'JavaScript'],
      correct: 0,
      explanation: 'VBA (Visual Basic for Applications) is the integrated programming language used to code macros in MS Office.'
    },
    {
      question: 'What is the default shortcut key to open the Visual Basic Editor (VBE) in Excel?',
      options: ['Alt + F11', 'Alt + F8', 'Ctrl + F11', 'Alt + F2'],
      correct: 0,
      explanation: 'Alt + F11 is the standard shortcut key sequence to open the VBE window.'
    },
    {
      question: 'What is the shortcut key to view the list of available Macros to run in Excel?',
      options: ['Alt + F8', 'Alt + F11', 'Ctrl + F8', 'Ctrl + M'],
      correct: 0,
      explanation: 'Alt + F8 opens the Macro dialog box, displaying available macros to run, edit, or delete.'
    },
    {
      question: 'Which file extension must be used to save an Excel workbook containing macros?',
      options: ['.xlsm', '.xlsx', '.csv', '.txt'],
      correct: 0,
      explanation: '.xlsm is the Excel Macro-Enabled Workbook extension. Saving as .xlsx deletes all macros.'
    },
    {
      question: 'What does VBE stand for in Macro development?',
      options: ['Visual Basic Editor', 'Visual Basic Environment', 'VBA Engine', 'Virtual Book Environment'],
      correct: 0,
      explanation: 'VBE stands for Visual Basic Editor, the workspace where VBA scripts are coded.'
    },
    {
      question: 'How do you declare a variable in Excel VBA?',
      options: ['Dim varName As DataType', 'var varName', 'let varName', 'define varName'],
      correct: 0,
      explanation: 'VBA uses the "Dim" statement (Dimension) to declare variables and their types.'
    },
    {
      question: 'What are the two keywords that wrap the start and end of a VBA macro subroutine?',
      options: ['Sub and End Sub', 'Function and End Function', 'Macro and End Macro', 'Start and Stop'],
      correct: 0,
      explanation: 'A macro script subroutine starts with `Sub MacroName()` and ends with `End Sub`.'
    },
    {
      question: 'How do you add comments inside a VBA code block?',
      options: ['Prefix the comment line with a single quote (\')', 'Use // characters', 'Wrap the comment in /* ... */', 'Use # comment tags'],
      correct: 0,
      explanation: 'In VBA, comments are created using a single quote (\') or the `Rem` keyword.'
    },
    {
      question: 'Which object represents the active sheet in a VBA script?',
      options: ['ActiveSheet', 'ThisSheet', 'CurrentSheet', 'Sheet1'],
      correct: 0,
      explanation: 'The ActiveSheet object represents the active worksheet in the active workbook.'
    },
    {
      question: 'Which object represents a cell or group of cells in VBA code?',
      options: ['Range', 'CellGroup', 'Block', 'Grid'],
      correct: 0,
      explanation: 'The `Range("A1")` object refers to cells, blocks, or non-contiguous selections.'
    },
    {
      question: 'How do you write a value (like 100) to cell A1 using VBA?',
      options: ['Range("A1").Value = 100', 'A1 = 100', 'Range(A1) = 100', 'Cells(1,1).SetValue(100)'],
      correct: 0,
      explanation: '`Range("A1").Value = 100` (or `Cells(1,1).Value = 100`) is the standard syntax to write to cells.'
    },
    {
      question: 'What represents the collection of all worksheets in the active workbook in VBA?',
      options: ['Sheets or Worksheets', 'AllSheets', 'SheetList', 'BookSheets'],
      correct: 0,
      explanation: 'The `Sheets` or `Worksheets` collections contain all worksheet objects.'
    },
    {
      question: 'How do you add a new worksheet using VBA?',
      options: ['Worksheets.Add', 'Worksheets.New', 'Sheets.Create', 'ActiveWorkbook.AddSheet'],
      correct: 0,
      explanation: '`Worksheets.Add` creates a new sheet and makes it the active sheet.'
    },
    {
      question: 'Which window in VBE displays the folders, sheets, and modules of the workbook?',
      options: ['Project Explorer', 'Properties Window', 'Immediate Window', 'Locals Window'],
      correct: 0,
      explanation: 'The Project Explorer (Ctrl + R) displays a tree layout of all loaded projects and modules.'
    },
    {
      question: 'Which window in VBE is used to run individual lines of VBA code instantly for testing?',
      options: ['Immediate Window', 'Locals Window', 'Project Explorer', 'Watches Window'],
      correct: 0,
      explanation: 'The Immediate Window (Ctrl + G) executes code lines immediately, or prints debug values via `Debug.Print`.'
    },
    {
      question: 'What is a Module in VBA?',
      options: ['A container folder where you write macro subroutines and functions', 'A sheet containing Pivot Tables', 'A settings panel in Excel options', 'An add-on plugin package'],
      correct: 0,
      explanation: 'VBA modules hold standard macro subroutines, custom functions, and global variable declarations.'
    },
    {
      question: 'Which loop is used to repeat code actions a specific number of times in VBA?',
      options: ['For ... Next loop', 'Do ... While loop', 'While ... Wend loop', 'Repeat ... Loop'],
      correct: 0,
      explanation: 'A `For i = 1 To N ... Next i` loop repeats blocks for a fixed counter duration.'
    },
    {
      question: 'Which loop repeats code actions while a condition remains true, or until a condition becomes true in VBA?',
      options: ['Do ... Loop', 'For ... Next', 'ForEach', 'None of these'],
      correct: 0,
      explanation: '`Do While ... Loop` or `Do Until ... Loop` handles loops based on conditional tests.'
    },
    {
      question: 'What is the purpose of "Option Explicit" at the top of a VBA module?',
      options: ['Forces explicit declaration of all variables, preventing typos/bugs', 'Speeds up macro rendering times', 'Allows sharing macros on network folders', 'Automatically encrypts macro scripts'],
      correct: 0,
      explanation: 'Option Explicit forces you to declare every variable with Dim, preventing spelling typos from creating new, empty variables.'
    },
    {
      question: 'How do you turn off screen flickering during macro execution to speed up code runtime?',
      options: ['Application.ScreenUpdating = False', 'Screen.Flicker = Off', 'Excel.Render = False', 'Application.UpdateScreen = False'],
      correct: 0,
      explanation: 'Setting Application.ScreenUpdating to False disables screen redraws, accelerating macro runtimes significantly.'
    },
    {
      question: 'How do you disable alert messages (like "Save changes?") during macro execution?',
      options: ['Application.DisplayAlerts = False', 'Alerts.Disable = True', 'Application.ShowAlerts = Off', 'Excel.IgnoreAlerts'],
      correct: 0,
      explanation: 'Setting DisplayAlerts to False suppresses default dialog prompts, auto-selecting default choices.'
    },
    {
      question: 'Which VBA error handling statement jumps to a specific label when an error occurs?',
      options: ['On Error GoTo Label', 'On Error Resume Next', 'Try ... Catch', 'If Error Then'],
      correct: 0,
      explanation: '`On Error GoTo Label` routes execution to an error-handling block when runtime exceptions occur.'
    },
    {
      question: 'What does the statement "On Error Resume Next" do in VBA?',
      options: ['Ignores the error and proceeds to execute the next line of code', 'Stops the macro immediately with a dialog box', 'Jumps to the beginning of the macro', 'Deletes variables with errors'],
      correct: 0,
      explanation: 'Resume Next ignores errors completely, useful when errors are anticipated or manually checked.'
    },
    {
      question: 'What is a User Defined Function (UDF) in Excel VBA?',
      options: ['A custom formula function written in VBA that can be used directly in Excel sheets', 'A macro assigned to a button', 'A default function like SUM or AVERAGE', 'A sheet layout profile template'],
      correct: 0,
      explanation: 'UDFs are custom calculation functions coded in VBA (e.g. `Function MyTax(salary)`) that run in sheet cells.'
    },
    {
      question: 'Which dialog box is used to assign a shortcut key to an existing Macro?',
      options: ['Macro Options Dialog (from Alt + F8 -> Options)', 'VBE Properties Window', 'Customize Ribbon settings', 'F11 Options panel'],
      correct: 0,
      explanation: 'In the Macro selection box (Alt + F8), clicking Options allows binding custom shortcuts (like Ctrl + Shift + M).'
    },
    {
      question: 'How do you run a macro automatically when a workbook is opened?',
      options: ['Name the macro Workbook_Open inside the ThisWorkbook object', 'Name the macro AutoOpen inside a module', 'Both methods are valid', 'None of these'],
      correct: 2,
      explanation: 'Both Workbook_Open event handlers and naming a standard module sub "Auto_Open()" trigger macros on workbook launch.'
    },
    {
      question: 'What does the MsgBox function do in VBA?',
      options: ['Displays a pop-up dialog box containing a message and buttons for user input', 'Clears cell value inputs', 'Creates a text comment in cells', 'Prints a report page'],
      correct: 0,
      explanation: '`MsgBox` displays standard dialog windows to alert users or capture basic button selections.'
    },
    {
      question: 'What does the InputBox function do in VBA?',
      options: ['Prompts the user to enter text or numerical values in a dialog input field', 'Inserts a new text block in worksheets', 'Imports external data tables', 'Creates a username profile'],
      correct: 0,
      explanation: '`InputBox` gathers user text or number inputs during macro runtimes.'
    },
    {
      question: 'Which tab on Excel ribbon bar houses the macro recording and VBE buttons?',
      options: ['Developer Tab', 'View Tab', 'Data Tab', 'Formulas Tab'],
      correct: 0,
      explanation: 'The Developer tab contains macro triggers, VBE, plugins, and form control buttons.'
    }
  ]
};

export const excelDashboardQuestions = {
  title: 'Advanced Excel (Dashboard)',
  easy: [
    {
      question: 'What is a Dashboard in Excel?',
      options: ['A visual representation of key performance indicators (KPIs) and data summaries on a single page', 'A sheet containing only raw data columns', 'The configuration panel of Excel worksheets', 'An online portal for sharing files'],
      correct: 0,
      explanation: 'Dashboards consolidate data metrics visually, allowing executives to monitor key trends at a glance.'
    },
    {
      question: 'What represents the core goal of designing an Excel dashboard?',
      options: ['To simplify complex data analysis and help users make quick decisions visually', 'To write long macro code scripts', 'To use as many bright colors as possible', 'To maximize the count of formulas in cells'],
      correct: 0,
      explanation: 'A good dashboard simplifies data reporting by highlighting key performance indicators (KPIs) cleanly.'
    },
    {
      question: 'What is a Slicer in Excel?',
      options: ['An interactive button tool to filter Pivot Tables and Pivot Charts easily', 'A formula that cuts strings into pieces', 'A tool to delete columns', 'A macro editor function'],
      correct: 0,
      explanation: 'Slicers are visual filters that link to Pivot Tables, letting users filter reports by clicking interactive buttons.'
    },
    {
      question: 'How do you insert a Slicer for a Pivot Table?',
      options: ['PivotTable Analyze tab > Insert Slicer', 'Data tab > Slicer', 'Home tab > Conditional Formatting > Slicer', 'Insert tab > Illustrations > Slicer'],
      correct: 0,
      explanation: 'Slicers are added from the PivotTable Analyze or Insert tabs when a Pivot Table is active.'
    },
    {
      question: 'What is a Timeline filter in Excel?',
      options: ['A visual filter designed specifically to filter date fields in Pivot Tables', 'An animation timeline in macros', 'A chart tracking project schedules', 'A sheet layout tracking history'],
      correct: 0,
      explanation: 'Timelines let users filter dates interactively across years, quarters, months, or days.'
    },
    {
      question: 'Which chart type is best for showing trends over time (e.g. monthly sales trends)?',
      options: ['Line Chart', 'Pie Chart', 'Bar Chart', 'Scatter Plot'],
      correct: 0,
      explanation: 'Line charts are optimal for displaying continuous trends or variations across intervals.'
    },
    {
      question: 'Which chart type is best for comparing parts of a whole (limited categories, summing to 100%)?',
      options: ['Pie Chart', 'Line Chart', 'Gantt Chart', 'Radar Chart'],
      correct: 0,
      explanation: 'Pie charts display contributions of components relative to a single total.'
    },
    {
      question: 'Why are Pie Charts generally restricted to 5 or fewer categories in dashboards?',
      options: ['Too many slices make the chart difficult to read and compare sizes', 'Excel limits pie slices to 5', 'Pie charts occupy too much RAM memory', 'Pie charts do not support slicers'],
      correct: 0,
      explanation: 'Large numbers of slices complicate comparison, rendering bar charts a cleaner choice.'
    },
    {
      question: 'Which chart type is ideal for comparing values across different categories?',
      options: ['Column or Bar Chart', 'Line Chart', 'Scatter Plot', 'Area Chart'],
      correct: 0,
      explanation: 'Column and bar charts make visual comparisons of discrete category metrics simple.'
    },
    {
      question: 'What is a Combo Chart in Excel?',
      options: ['A chart combining two different chart types (like Column and Line) with a secondary axis', 'A chart containing multiple colors', 'A chart linked to database networks', 'A chart showing 3D dimensions'],
      correct: 0,
      explanation: 'Combo charts display varying metric types (e.g., Sales Volume as columns, and Profit Margin % as a line) on primary and secondary axes.'
    },
    {
      question: 'What is a Sparkline in Excel?',
      options: ['A tiny chart placed inside a single cell, showing data trends next to values', 'A bright visual border line', 'A highlight color in conditional formatting', 'A button triggering macros'],
      correct: 0,
      explanation: 'Sparklines (Insert tab) are miniature, single-cell charts displaying trend lines, columns, or win/loss markers.'
    },
    {
      question: 'Which feature allows you to link a single Slicer to multiple Pivot Tables on a dashboard?',
      options: ['Report Connections (Slicer settings)', 'Data Validation', 'Pivot Connections', 'Format Slicer'],
      correct: 0,
      explanation: 'Right-clicking a Slicer and selecting "Report Connections" links it to other Pivot Tables, syncing dashboard filtering.'
    },
    {
      question: 'What is a KPI block in dashboards?',
      options: ['Key Performance Indicator card displaying a critical metric in large, bold text', 'A locked database cell', 'A macro code block', 'A grid spacing guideline'],
      correct: 0,
      explanation: 'KPI cards (or metric callouts) display key numbers (e.g. "Total Sales: $5M") in prominent, clear layouts.'
    },
    {
      question: 'Why is it recommended to use a curated, harmonious color palette in dashboard design?',
      options: ['To look professional, avoid distraction, and improve readability', 'To test monitor displays', 'To make files larger', 'To comply with database structures'],
      correct: 0,
      explanation: 'Curated color schemes look clean and professional, focusing eyes on critical indicators without creating visual noise.'
    },
    {
      question: 'What represents the gridlines visibility recommendation for clean dashboard layouts?',
      options: ['Hide gridlines (View tab > uncheck Gridlines) to look clean like an application', 'Keep all gridlines visible and bold', 'Color gridlines in bright primary colors', 'Gridlines cannot be hidden in Excel'],
      correct: 0,
      explanation: 'Hiding standard gridlines creates a polished canvas layout, making elements pop like stand-alone software screens.'
    },
    {
      question: 'Which function is used to dynamically extract summarized values from a Pivot Table instead of direct cell referencing?',
      options: ['GETPIVOTDATA()', 'VLOOKUP()', 'INDEX()', 'SUMPIVOT()'],
      correct: 0,
      explanation: 'GETPIVOTDATA() retrieves specific metrics from Pivot Tables, maintaining accurate values even if structures shift.'
    },
    {
      question: 'How do you create a dynamic chart title in Excel dashboard?',
      options: ['Select the chart title box, type "=" in the formula bar, and select a cell containing text', 'Macros are required', 'Double click the title and type formulas directly inside it', 'Dynamic titles are not supported'],
      correct: 0,
      explanation: 'Linking the title text box to cell references dynamically updates the chart header when cells change.'
    },
    {
      question: 'What does "Data Density" refer to in dashboard layouts?',
      options: ['The balance of informative data relative to empty white space', 'The size of files on disk', 'The count of rows in the source sheet', 'The opacity of chart lines'],
      correct: 0,
      explanation: 'Data density balances layouts, ensuring dashboards are packed with key insights without overwhelming users.'
    },
    {
      question: 'What is a Pivot Chart in Excel?',
      options: ['A chart built from and linked directly to Pivot Table summaries', 'A chart that rotates on mouse click', 'A 3D chart displaying columns', 'A chart showing macro codes'],
      correct: 0,
      explanation: 'Pivot Charts are visual representations of Pivot Tables, dynamically updating when fields or filters change.'
    },
    {
      question: 'Which tool handles "What-If Analysis" in Excel, finding inputs required to reach specific results?',
      options: ['Goal Seek', 'Data Table', 'Scenario Manager', 'Solver'],
      correct: 0,
      explanation: 'Goal Seek determines the input value required to achieve a target output value in formulas.'
    },
    {
      question: 'Which tool handles complex What-If scenarios with multiple variable bounds?',
      options: ['Solver', 'Goal Seek', 'Data Validation', 'Pivot Table'],
      correct: 0,
      explanation: 'Solver (Excel Add-in) handles optimization problems, maximizing or minimizing targets under multiple constraints.'
    },
    {
      question: 'Which tab contains the Group, Ungroup, and Subtotal options?',
      options: ['Data Tab', 'Home Tab', 'Insert Tab', 'Review Tab'],
      correct: 0,
      explanation: 'The Outline section under the Data tab manages grouping rows/columns and auto-subtotaling lists.'
    },
    {
      question: 'What represents the primary benefit of converting raw data ranges into an official Excel Table (Ctrl + T)?',
      options: ['Enables dynamic ranges that automatically expand when new rows are added', 'Saves the file in PDF format', 'Clears cell formatting styles', 'Locks the columns from edits'],
      correct: 0,
      explanation: 'Excel Tables (Ctrl + T) support structured references, auto-expanding to include new data rows in linked charts and Pivot Tables.'
    },
    {
      question: 'What represents a structured reference in Excel tables?',
      options: ['Using column names in formulas (e.g. =SUM(Table1[Sales])) instead of cell coordinates', 'Using row numbers in uppercase', 'VBA code cell pointers', 'None of these'],
      correct: 0,
      explanation: 'Structured references use bracketed column headers, making formulas legible and dynamic.'
    },
    {
      question: 'How do you hide sheet tabs and ribbon bars to make a dashboard feel like a standalone web application?',
      options: ['File > Options > Advanced > Display options for this workbook', 'Use VBA macros only', 'Delete sheet names', 'They cannot be hidden'],
      correct: 0,
      explanation: 'Workbook display settings in Excel Options allow toggling sheet tabs, row/column headers, scrollbars, and gridlines.'
    },
    {
      question: 'Which chart type is useful for displaying progress toward a single goal (like target vs actual)?',
      options: ['Gauge or Thermometer Chart (Bullet Chart)', 'Pie Chart', 'Scatter Plot', 'Area Chart'],
      correct: 0,
      explanation: 'Gauge or bullet charts display linear/radial progress metrics relative to target thresholds.'
    },
    {
      question: 'What is a Treemap chart in Excel?',
      options: ['A chart displaying hierarchical data as nested rectangles of varying sizes', 'A chart showing database structures', 'A chart tracking system files', 'A line chart branching out'],
      correct: 0,
      explanation: 'Treemaps display hierarchical data categories as size-based nested rectangles.'
    },
    {
      question: 'What is a Waterfall chart in Excel?',
      options: ['A chart showing cumulative effects of positive and negative values (running totals)', 'A vertical line trend chart', 'A chart linked to animations', 'A circular flow chart'],
      correct: 0,
      explanation: 'Waterfall charts display running totals as increments or decrements (e.g. net cash flows).'
    },
    {
      question: 'Which chart displays relationships between two variables as coordinate points?',
      options: ['Scatter Plot (XY Chart)', 'Bar Chart', 'Line Chart', 'Pie Chart'],
      correct: 0,
      explanation: 'Scatter plots map numerical coordinates on X and Y axes to display relationships and patterns.'
    },
    {
      question: 'What is a Map Chart in Excel?',
      options: ['A chart that visualizes values across geographical regions (countries, states)', 'A directory mapping sheet folders', 'A chart showing macro routes', 'A blueprint outline layout'],
      correct: 0,
      explanation: 'Map charts use geographical data columns to color-map metrics across locations dynamically.'
    }
  ]
};

export const advancedExcelQuestions = {
  title: 'Advanced Excel',
  easy: [
    {
      question: 'What represents the maximum number of rows in a single Excel worksheet (since Excel 2007)?',
      options: ['1,048,576', '65,536', '500,000', '10,000,000'],
      correct: 0,
      explanation: 'Excel supports exactly 1,048,576 rows and 16,384 columns per worksheet.'
    },
    {
      question: 'What is the maximum number of columns in a single Excel worksheet?',
      options: ['16,384 (column XFD)', '256', '1,000', '65,536'],
      correct: 0,
      explanation: 'Excel columns range from A to XFD (exactly 16,384 columns).'
    },
    {
      question: 'Which key is used to edit the active cell in Excel?',
      options: ['F2', 'F4', 'F1', 'F12'],
      correct: 0,
      explanation: 'F2 places the cursor inside the active cell for editing.'
    },
    {
      question: 'What is the keyboard shortcut to insert a new worksheet in Excel?',
      options: ['Shift + F11', 'Ctrl + N', 'Alt + F2', 'Ctrl + Shift + N'],
      correct: 0,
      explanation: 'Shift + F11 inserts a new sheet directly before the active sheet.'
    },
    {
      question: 'What is the keyboard shortcut to create a table in Excel?',
      options: ['Ctrl + T', 'Ctrl + Tab', 'Alt + T', 'Ctrl + Alt + T'],
      correct: 0,
      explanation: 'Ctrl + T (or Ctrl + L) opens the Create Table dialog box.'
    },
    {
      question: 'Which function returns the number of characters in a text string in Excel?',
      options: ['LEN()', 'LENGTH()', 'COUNT()', 'CHARS()'],
      correct: 0,
      explanation: 'LEN(text) returns the count of characters (including spaces).'
    },
    {
      question: 'Which function converts all letters in a text string to uppercase?',
      options: ['UPPER()', 'CAPS()', 'CASE()', 'PROPER()'],
      correct: 0,
      explanation: 'UPPER(text) capitalizes all text characters.'
    },
    {
      question: 'Which function converts all letters in a text string to lowercase?',
      options: ['LOWER()', 'SMALL()', 'MIN()', 'PROPER()'],
      correct: 0,
      explanation: 'LOWER(text) converts text to lowercase.'
    },
    {
      question: 'Which function capitalizes the first letter of each word in a text string?',
      options: ['PROPER()', 'UPPER()', 'CAPITALIZE()', 'TITLE()'],
      correct: 0,
      explanation: 'PROPER(text) formats text into title case.'
    },
    {
      question: 'Which function removes all leading, trailing, and duplicate spaces from text?',
      options: ['TRIM()', 'CLEAN()', 'CLEAR()', 'REPLACE()'],
      correct: 0,
      explanation: 'TRIM(text) removes excess spacing, leaving single spaces between words.'
    },
    {
      question: 'What is the syntax of the INDEX function in Excel (array form)?',
      options: ['=INDEX(array, row_num, [column_num])', '=INDEX(value, array)', '=INDEX(range, criteria)', '=INDEX(lookup_value, table)'],
      correct: 0,
      explanation: 'INDEX returns a value at the intersection of a row and column within a range.'
    },
    {
      question: 'What is the MATCH function used for in Excel?',
      options: ['Returns the relative position of a specified value in a range', 'Finds matching cells and colors them', 'Compares if two text strings are equal', 'Sums matching records'],
      correct: 0,
      explanation: 'MATCH(lookup_value, lookup_array, [match_type]) returns the index coordinate (position) of a value.'
    },
    {
      question: 'Why is INDEX/MATCH often preferred over VLOOKUP in older Excel versions?',
      options: ['It can search left or right, and doesn\'t break when columns are inserted', 'It is faster to type', 'It does not require F4 absolute references', 'It works on locked sheets'],
      correct: 0,
      explanation: 'INDEX/MATCH is highly flexible, searching columns in any order and preventing formula breakage during structural updates.'
    },
    {
      question: 'What does the HLOOKUP function do?',
      options: ['Horizontal Lookup (searches for a value in the top row of a table and returns a value in the same column)', 'Highlights cells horizontally', 'Calculates horizontal margins', 'None of these'],
      correct: 0,
      explanation: 'HLOOKUP searches the top row of a table and retrieves values from matching columns below.'
    },
    {
      question: 'What is the purpose of the transposing feature in Excel?',
      options: ['Swaps rows to columns, or columns to rows', 'Translates text to another language', 'Transfers files to server directories', 'Calculates transaction logs'],
      correct: 0,
      explanation: 'Paste Transpose rotates cell arrays from horizontal to vertical layouts or vice-versa.'
    },
    {
      question: 'Which function returns the largest value in a numeric range?',
      options: ['MAX()', 'LARGE()', 'TOP()', 'MAXIMUM()'],
      correct: 0,
      explanation: 'MAX(range) returns the highest value.'
    },
    {
      question: 'Which function returns the smallest value in a numeric range?',
      options: ['MIN()', 'SMALL()', 'BOTTOM()', 'MINIMUM()'],
      correct: 0,
      explanation: 'MIN(range) returns the lowest value.'
    },
    {
      question: 'What is the difference between MAX and LARGE in Excel?',
      options: ['MAX returns the absolute highest value, while LARGE returns the k-th largest value (e.g. 2nd largest)', 'LARGE is used for text lists', 'MAX only works on columns, LARGE on rows', 'They are exact duplicates'],
      correct: 0,
      explanation: 'LARGE(array, k) returns the k-th largest value, enabling finding runners-up.'
    },
    {
      question: 'Which function returns the k-th smallest value in a range?',
      options: ['SMALL()', 'MIN()', 'BOTTOM()', 'LOW()'],
      correct: 0,
      explanation: 'SMALL(array, k) returns the k-th smallest value.'
    },
    {
      question: 'Which function counts the number of cells in a range that contain numbers?',
      options: ['COUNT()', 'COUNTA()', 'COUNTBLANK()', 'NUMCOUNT()'],
      correct: 0,
      explanation: 'COUNT(range) counts cells containing numerical values (ignores text and blanks).'
    },
    {
      question: 'Which function counts the number of non-empty cells (contains numbers, text, or errors) in a range?',
      options: ['COUNTA()', 'COUNT()', 'COUNTBLANK()', 'NONEMPTY()'],
      correct: 0,
      explanation: 'COUNTA(range) counts all cells containing data of any type.'
    },
    {
      question: 'Which function counts the number of empty/blank cells in a range?',
      options: ['COUNTBLANK()', 'COUNTA()', 'COUNT()', 'BLANKCOUNT()'],
      correct: 0,
      explanation: 'COUNTBLANK(range) counts empty cells.'
    },
    {
      question: 'Which tab on Excel ribbon holds the Pivot Table and Slicer options?',
      options: ['Insert Tab', 'Home Tab', 'Data Tab', 'View Tab'],
      correct: 0,
      explanation: 'The Insert tab houses tables, Pivot Tables, illustrations, charts, slicers, and links.'
    },
    {
      question: 'Which tool allows users to import, clean, and transform data from external databases before loading it into Excel?',
      options: ['Power Query', 'Power Pivot', 'Data validation', 'Text to Columns'],
      correct: 0,
      explanation: 'Power Query (Get & Transform Data) is an ETL tool integrated into Excel for data cleaning and preparation.'
    },
    {
      question: 'What is Power Pivot in Excel?',
      options: ['An advanced data modeling tool used to build relationships between multiple tables and create Data Models', 'A giant pivot table', 'A macro editor program', 'A chart layout dashboard'],
      correct: 0,
      explanation: 'Power Pivot imports millions of rows, creating data models with relational links between tables.'
    },
    {
      question: 'What language is used to write calculations in Power Pivot Data Models?',
      options: ['DAX (Data Analysis Expressions)', 'VBA', 'SQL', 'Python'],
      correct: 0,
      explanation: 'DAX (Data Analysis Expressions) is the formula language used in Power Pivot and Power BI.'
    },
    {
      question: 'What represents the keyboard shortcut to auto-sum a column of numbers in Excel?',
      options: ['Alt + =', 'Ctrl + S', 'Alt + S', 'Ctrl + Shift + S'],
      correct: 0,
      explanation: 'Pressing Alt + = automatically inserts the SUM formula targeting neighboring ranges.'
    },
    {
      question: 'How do you insert the current date static value in Excel using a shortcut?',
      options: ['Ctrl + ;', 'Ctrl + Shift + ;', 'Alt + D', 'TODAY()'],
      correct: 0,
      explanation: 'Ctrl + ; inserts the current date as a static, non-updating value. Ctrl + Shift + ; inserts the current time.'
    },
    {
      question: 'What is the shortcut key to insert the current time as a static value?',
      options: ['Ctrl + Shift + ;', 'Ctrl + ;', 'Alt + T', 'NOW()'],
      correct: 0,
      explanation: 'Ctrl + Shift + ; (or Ctrl + Shift + :) inserts the static current system time.'
    },
    {
      question: 'Which tool is used to forecast outcomes by changing values in variables?',
      options: ['Scenario Manager', 'Goal Seek', 'Solver', 'All of these'],
      correct: 3,
      explanation: 'Excel\'s What-If Analysis menu houses Scenario Manager, Goal Seek, and Data Tables, along with the Solver add-in.'
    }
  ]
};
