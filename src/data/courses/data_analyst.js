// Data Analyst courses: Pandas, NumPy, Machine Learning, Power BI, Tableau

export const pandasQuestions = {
  title: 'Pandas',
  easy: [
    {
      question: 'What is Pandas in Python?',
      options: ['A library for data manipulation and analysis', 'A database engine', 'A web development framework', 'A game development engine'],
      correct: 0,
      explanation: 'Pandas is a fast, powerful, flexible, and easy-to-use open-source data analysis and manipulation library written for Python.'
    },
    {
      question: 'What are the two primary data structures in Pandas?',
      options: ['Series and DataFrame', 'List and Dictionary', 'Array and Tuple', 'Matrix and Vector'],
      correct: 0,
      explanation: 'Pandas primarily uses Series (1D labeled array) and DataFrame (2D labeled tabular structure).'
    },
    {
      question: 'What represents a Pandas Series?',
      options: ['A one-dimensional labeled array capable of holding any data type', 'A two-dimensional table of rows and columns', 'A multidimensional matrix', 'A database connection pointer'],
      correct: 0,
      explanation: 'Series is a 1D array-like object containing data and associated labels (indices).'
    },
    {
      question: 'What represents a Pandas DataFrame?',
      options: ['A two-dimensional, size-mutable, potentially heterogeneous tabular data structure', 'A single row of labels', 'A collection of python scripts', 'A statistical plot graph'],
      correct: 0,
      explanation: 'DataFrame is a 2D labeled data structure, like a SQL table or Excel spreadsheet.'
    },
    {
      question: 'How do you import the Pandas library standardly in Python?',
      options: ['import pandas as pd', 'import pandas', 'from pandas import *', 'load pandas'],
      correct: 0,
      explanation: 'The convention is to import Pandas using the alias `pd`.'
    },
    {
      question: 'Which function is used to read a CSV file into a Pandas DataFrame?',
      options: ['pd.read_csv()', 'pd.open_csv()', 'pd.load_csv()', 'pd.csv_reader()'],
      correct: 0,
      explanation: '`pd.read_csv("file.csv")` parses CSV files and loads them into a DataFrame.'
    },
    {
      question: 'How do you display the first 5 rows of a DataFrame `df`?',
      options: ['df.head()', 'df.show()', 'df.first(5)', 'df.display()'],
      correct: 0,
      explanation: '`df.head(n)` returns the first n rows (defaults to 5) of the DataFrame.'
    },
    {
      question: 'How do you display the last 5 rows of a DataFrame `df`?',
      options: ['df.tail()', 'df.last()', 'df.show_end()', 'df.end()'],
      correct: 0,
      explanation: '`df.tail(n)` returns the final n rows.'
    },
    {
      question: 'Which method returns a summary of the DataFrame details (column names, non-null counts, types)?',
      options: ['df.info()', 'df.describe()', 'df.summary()', 'df.details()'],
      correct: 0,
      explanation: '`df.info()` prints index and column data types, memory usage, and non-null counts.'
    },
    {
      question: 'Which method generates descriptive statistics (mean, std, min, max, quartiles) for numeric columns?',
      options: ['df.describe()', 'df.info()', 'df.stats()', 'df.summary()'],
      correct: 0,
      explanation: '`df.describe()` returns a statistical summary of numeric data columns.'
    },
    {
      question: 'How do you check the dimensions (number of rows and columns) of a DataFrame `df`?',
      options: ['df.shape', 'df.size', 'df.length', 'df.dimensions'],
      correct: 0,
      explanation: '`df.shape` returns a tuple containing the counts of rows and columns: (rows, columns).'
    },
    {
      question: 'How do you select a single column named "Age" from a DataFrame `df`?',
      options: ['df["Age"] or df.Age', 'df.select("Age")', 'df.get("Age")', 'df.column("Age")'],
      correct: 0,
      explanation: 'Columns are accessed using bracket syntax `df["column_name"]` or attribute notation `df.column_name`.'
    },
    {
      question: 'Which method selects rows and columns by their labels/names?',
      options: ['df.loc[]', 'df.iloc[]', 'df.select()', 'df.filter()'],
      correct: 0,
      explanation: '`df.loc` is purely label-based indexing.'
    },
    {
      question: 'Which method selects rows and columns by integer positions/indices?',
      options: ['df.iloc[]', 'df.loc[]', 'df.at[]', 'df.index[]'],
      correct: 0,
      explanation: '`df.iloc` uses integer offsets (0-indexed) to slice rows and columns.'
    },
    {
      question: 'How do you drop columns (e.g. "Salary") from a DataFrame `df`?',
      options: ['df.drop(columns="Salary") or df.drop("Salary", axis=1)', 'df.delete("Salary")', 'df.remove("Salary")', 'df.drop("Salary", axis=0)'],
      correct: 0,
      explanation: 'Axis 1 represents columns; `df.drop("col", axis=1)` removes specified columns.'
    },
    {
      question: 'What does axis=0 represent in Pandas operations?',
      options: ['Rows', 'Columns', 'Index labels', 'None of these'],
      correct: 0,
      explanation: 'Axis 0 denotes row-wise operations, whereas axis 1 denotes column-wise operations.'
    },
    {
      question: 'How do you check for missing/null values in a DataFrame `df`?',
      options: ['df.isnull() or df.isna()', 'df.nulls()', 'df.check_empty()', 'df.has_null()'],
      correct: 0,
      explanation: 'Both `df.isnull()` and `df.isna()` return boolean DataFrames indicating null cells.'
    },
    {
      question: 'How do you delete all rows containing missing (NaN) values in a DataFrame `df`?',
      options: ['df.dropna()', 'df.remove_nulls()', 'df.clear_na()', 'df.delete_empty()'],
      correct: 0,
      explanation: '`df.dropna()` drops any rows containing null elements (configurable with how/thresh/subset parameters).'
    },
    {
      question: 'How do you fill missing/NaN values with a default value (like 0) in a DataFrame `df`?',
      options: ['df.fillna(0)', 'df.replace_null(0)', 'df.fill_na(0)', 'df.set_default(0)'],
      correct: 0,
      explanation: '`df.fillna(value)` replaces missing elements with the specified replacement.'
    },
    {
      question: 'Which method removes duplicate rows from a DataFrame `df`?',
      options: ['df.drop_duplicates()', 'df.remove_duplicates()', 'df.unique()', 'df.clear_duplicates()'],
      correct: 0,
      explanation: '`df.drop_duplicates()` drops duplicate records, keeping the first occurrence by default.'
    },
    {
      question: 'How do you rename columns in a Pandas DataFrame?',
      options: ['df.rename(columns={"old": "new"})', 'df.rename_column("old", "new")', 'df.columns = ["new"] only', 'df.set_names()'],
      correct: 0,
      explanation: '`df.rename(columns={mapping_dict})` updates matching column names.'
    },
    {
      question: 'Which method groups rows that share values in a column to compute aggregates (like sum or mean)?',
      options: ['df.groupby()', 'df.aggregate()', 'df.group()', 'df.pivot()'],
      correct: 0,
      explanation: '`df.groupby("col")` splits data, allowing aggregate functions to execute on grouped rows.'
    },
    {
      question: 'What does `df.groupby("City")["Sales"].sum()` do?',
      options: ['Calculates the total sales for each city grouping', 'Groups cities by sales volume', 'Filters cities with positive sales', 'None of these'],
      correct: 0,
      explanation: 'This groups the DataFrame by the "City" column and sums the "Sales" values for each group.'
    },
    {
      question: 'Which Pandas function combines two DataFrames along a column or row axis?',
      options: ['pd.concat()', 'pd.merge() only', 'pd.join() only', 'All of these'],
      correct: 3,
      explanation: 'Pandas supports merging (database joins), concatenating (stacking), and joining (index joins).'
    },
    {
      question: 'Which function performs database-style joins on DataFrames matching key columns?',
      options: ['pd.merge()', 'pd.concat()', 'pd.stack()', 'pd.combine()'],
      correct: 0,
      explanation: '`pd.merge(df1, df2, on="key")` performs database SQL-style inner/left/right/outer joins.'
    },
    {
      question: 'Which method applies a custom function to every element or row in a DataFrame column?',
      options: ['df["col"].apply(func)', 'df["col"].map(func) only', 'Both apply() and map()', 'df.execute(func)'],
      correct: 2,
      explanation: '`apply()` is highly flexible for Series/DataFrames, and `map()` is used on Series to map elements.'
    },
    {
      question: 'How do you export a DataFrame `df` to a CSV file?',
      options: ['df.to_csv("file.csv")', 'df.write_csv("file.csv")', 'df.save_csv("file.csv")', 'pd.export_csv(df, "file.csv")'],
      correct: 0,
      explanation: '`df.to_csv("path")` writes the DataFrame content to a CSV file.'
    },
    {
      question: 'How do you filter a DataFrame `df` to get rows where the column "Age" is greater than 30?',
      options: ['df[df["Age"] > 30]', 'df.filter("Age > 30")', 'df.select(df["Age"] > 30)', 'df.where("Age" > 30)'],
      correct: 0,
      explanation: 'Boolean indexing `df[boolean_condition]` extracts rows where the condition evaluates to True.'
    },
    {
      question: 'What does the `.value_counts()` method do on a Pandas Series?',
      options: ['Returns a Series containing counts of unique values in descending order', 'Counts total elements', 'Finds the average value', 'Lists unique indices'],
      correct: 0,
      explanation: '`series.value_counts()` reports the frequency of occurrence of unique category elements.'
    },
    {
      question: 'Which index attribute checks row labels of DataFrames?',
      options: ['df.index', 'df.columns', 'df.rows', 'df.labels'],
      correct: 0,
      explanation: '`df.index` references the row axis labels of the DataFrame.'
    }
  ]
};

export const numpyQuestions = {
  title: 'NumPy',
  easy: [
    {
      question: 'What does NumPy stand for?',
      options: ['Numerical Python', 'Number Processing Utility', 'Numeric Python Library', 'Network Program Module'],
      correct: 0,
      explanation: 'NumPy stands for Numerical Python, providing support for large multidimensional arrays and math operations.'
    },
    {
      question: 'What represents the core data structure of NumPy?',
      options: ['ndarray (N-dimensional array)', 'DataFrame', 'List', 'Tuple'],
      correct: 0,
      explanation: 'The core of NumPy is `ndarray`, which manages homogeneous n-dimensional arrays.'
    },
    {
      question: 'What is the key advantage of NumPy arrays over standard Python lists?',
      options: ['Faster execution speed, less memory consumption, and support for vector operations', 'Support for multiple data types in a single array', 'Automatic file saving features', 'None of these'],
      correct: 0,
      explanation: 'NumPy arrays use contiguous memory and vectorization, executing calculations significantly faster than Python loops.'
    },
    {
      question: 'How do you import the NumPy library standardly?',
      options: ['import numpy as np', 'import numpy', 'from numpy import *', 'load numpy'],
      correct: 0,
      explanation: 'The convention is to import NumPy using the alias `np`.'
    },
    {
      question: 'How do you create a basic 1D NumPy array from a Python list?',
      options: ['np.array([1, 2, 3])', 'np.ndarray([1, 2, 3])', 'np.create_array(1, 2, 3)', 'new np.Array(1, 2, 3)'],
      correct: 0,
      explanation: '`np.array(list_obj)` converts standard iterables into NumPy arrays.'
    },
    {
      question: 'Which function creates an array of zeros with a specified shape?',
      options: ['np.zeros()', 'np.empty()', 'np.create_zeros()', 'np.fill_zeros()'],
      correct: 0,
      explanation: '`np.zeros(shape)` creates arrays filled with 0.0 values.'
    },
    {
      question: 'Which function creates an array of ones with a specified shape?',
      options: ['np.ones()', 'np.zeros()', 'np.fill_ones()', 'np.empty()'],
      correct: 0,
      explanation: '`np.ones(shape)` initializes arrays with 1.0 values.'
    },
    {
      question: 'Which function generates an array containing a range of evenly spaced values (similar to python range())?',
      options: ['np.arange()', 'np.range()', 'np.linspace()', 'np.seq()'],
      correct: 0,
      explanation: '`np.arange([start], stop, [step])` generates numeric ranges as arrays.'
    },
    {
      question: 'Which function returns an array of numbers spaced evenly on a log scale or linear scale (e.g. 50 points between 0 and 10)?',
      options: ['np.linspace()', 'np.arange()', 'np.logspace()', 'np.range()'],
      correct: 0,
      explanation: '`np.linspace(start, stop, num)` returns `num` evenly spaced samples over a specified interval.'
    },
    {
      question: 'How do you check the data type of elements inside a NumPy array `arr`?',
      options: ['arr.dtype', 'arr.type', 'type(arr)', 'arr.datatype'],
      correct: 0,
      explanation: 'The `dtype` attribute contains the data type of the array elements (e.g. int64, float32).'
    },
    {
      question: 'How do you check the number of dimensions of a NumPy array `arr`?',
      options: ['arr.ndim', 'arr.shape', 'arr.size', 'arr.dimensions'],
      correct: 0,
      explanation: '`arr.ndim` returns the count of dimensions (axes).'
    },
    {
      question: 'How do you check the total number of elements inside a NumPy array `arr`?',
      options: ['arr.size', 'arr.shape', 'arr.length', 'arr.count'],
      correct: 0,
      explanation: '`arr.size` returns the product of array shape elements, representing total items.'
    },
    {
      question: 'How do you change the shape of an array without changing its data elements?',
      options: ['arr.reshape()', 'arr.change_shape()', 'arr.resize()', 'arr.flatten()'],
      correct: 0,
      explanation: '`arr.reshape(new_shape)` returns a view of the array with different dimensions (must match size).'
    },
    {
      question: 'Which operation flattens a multi-dimensional array into a single 1D array?',
      options: ['arr.flatten() or arr.ravel()', 'arr.reshape(-1)', 'All of these', 'None of these'],
      correct: 2,
      explanation: 'Both `flatten()`, `ravel()`, and reshaping to `-1` collapse arrays to 1D.'
    },
    {
      question: 'What is vectorization (element-wise operations) in NumPy?',
      options: ['Performing operations on entire arrays at once without writing loops', 'Converting arrays to vector images', 'Encrypting array files', 'Sorting array elements'],
      correct: 0,
      explanation: 'Vectorization processes arithmetic operations on all elements in parallel using low-level compiled code.'
    },
    {
      question: 'If `a = np.array([1, 2])` and `b = np.array([3, 4])`, what does `a + b` output?',
      options: ['array([4, 6])', 'array([1, 2, 3, 4])', 'array([4, 4])', 'Error'],
      correct: 0,
      explanation: 'NumPy performs element-wise addition: [1+3, 2+4] = [4, 6].'
    },
    {
      question: 'How do you calculate the dot product of two matrices in NumPy?',
      options: ['np.dot(a, b) or a @ b', 'a * b', 'np.multiply(a, b)', 'a.dot_product(b)'],
      correct: 0,
      explanation: 'The `@` operator (or `np.dot()`) executes matrix multiplications. The `*` operator performs element-wise multiplication.'
    },
    {
      question: 'How do you find the mean value of elements in a NumPy array `arr`?',
      options: ['arr.mean() or np.mean(arr)', 'arr.average()', 'arr.sum()/arr.size', 'Both arr.mean() and np.mean(arr)'],
      correct: 3,
      explanation: 'Both methods calculate the mathematical average.'
    },
    {
      question: 'How do you find the maximum value in a NumPy array `arr`?',
      options: ['arr.max() or np.max(arr)', 'arr.maximum()', 'arr.top()', 'None of these'],
      correct: 0,
      explanation: '`arr.max()` returns the highest value in the array.'
    },
    {
      question: 'Which function returns the indices of the maximum values along an axis?',
      options: ['np.argmax()', 'np.max()', 'np.find_max()', 'np.index_max()'],
      correct: 0,
      explanation: '`np.argmax(arr)` returns the coordinate index of the largest value.'
    },
    {
      question: 'Which function returns the indices of the minimum values along an axis?',
      options: ['np.argmin()', 'np.min()', 'np.find_min()', 'np.index_min()'],
      correct: 0,
      explanation: '`np.argmin(arr)` returns the index of the lowest value.'
    },
    {
      question: 'How do you find the standard deviation of elements in an array `arr`?',
      options: ['arr.std() or np.std(arr)', 'arr.var()', 'arr.mean()', 'arr.deviation()'],
      correct: 0,
      explanation: '`std()` computes the standard deviation, measuring data spread.'
    },
    {
      question: 'How do you calculate the variance of elements in an array `arr`?',
      options: ['arr.var() or np.var(arr)', 'arr.std()', 'arr.cov()', 'arr.mean()'],
      correct: 0,
      explanation: '`var()` calculates statistical variance.'
    },
    {
      question: 'What is broadcasting in NumPy?',
      options: ['How NumPy treats arrays with different shapes during arithmetic operations', 'Transmitting array data over network connections', 'Converting arrays to strings', 'All of these'],
      correct: 0,
      explanation: 'Broadcasting replicates smaller arrays across larger dimensions to align shapes for element-wise operations.'
    },
    {
      question: 'How do you slice a 2D array to extract the first column?',
      options: ['arr[:, 0]', 'arr[0, :]', 'arr[0, 0]', 'arr[:, :]'],
      correct: 0,
      explanation: 'The colon (`:`) selects all rows, and `0` selects index column 0.'
    },
    {
      question: 'How do you select the first row of a 2D array?',
      options: ['arr[0, :]', 'arr[:, 0]', 'arr[0, 0]', 'arr[1, :]'],
      correct: 0,
      explanation: '`arr[0, :]` extracts row 0 and all its column elements.'
    },
    {
      question: 'Which module in NumPy contains functions to generate random numbers and arrays?',
      options: ['numpy.random', 'numpy.rand', 'numpy.math', 'numpy.noise'],
      correct: 0,
      explanation: '`numpy.random` handles random distributions (normal, uniform, random integers).'
    },
    {
      question: 'Which function in numpy.random generates random floats in the range [0.0, 1.0)?',
      options: ['np.random.random() or np.random.rand()', 'np.random.randint()', 'np.random.uniform()', 'None of these'],
      correct: 0,
      explanation: '`rand()` or `random()` returns float values between 0 and 1.'
    },
    {
      question: 'How do you generate an array of 5 random integers between 10 and 50?',
      options: ['np.random.randint(10, 50, 5)', 'np.random.rand(10, 50, 5)', 'np.random.random(10, 50, 5)', 'np.random.uniform(10, 50, 5)'],
      correct: 0,
      explanation: '`randint(low, high, size)` returns size-length arrays of random integers in the interval [low, high).'
    },
    {
      question: 'Which function transposes a matrix (swaps rows and columns) in NumPy?',
      options: ['arr.T or np.transpose(arr)', 'arr.transpose_matrix()', 'arr.swap()', 'arr.R'],
      correct: 0,
      explanation: 'The `.T` attribute or `np.transpose()` returns the transposed array coordinate view.'
    }
  ]
};

export const machineLearningQuestions = {
  title: 'Machine Learning',
  easy: [
    {
      question: 'What is Machine Learning?',
      options: ['A branch of AI that enables systems to learn from data and improve without being explicitly programmed', 'Programming hardcoded IF/ELSE logic blocks', 'The physical assembly of server hard drives', 'Designing graphic interfaces for databases'],
      correct: 0,
      explanation: 'Machine Learning trains algorithms on datasets to predict outcomes or find structures automatically.'
    },
    {
      question: 'What represents the three main types of Machine Learning?',
      options: ['Supervised, Unsupervised, and Reinforcement Learning', 'Linear, Logistic, and Polynomial', 'Classification, Regression, and Trees', 'Compilation, Execution, and Linking'],
      correct: 0,
      explanation: 'The core paradigms are Supervised (labeled data), Unsupervised (unlabeled data), and Reinforcement (trial-and-error reward learning).'
    },
    {
      question: 'In Machine Learning, what are Features?',
      options: ['The input variables/attributes used to make predictions (denoted as X)', 'The target output variables we predict (denoted as y)', 'The total size of the database on disk', 'The compile errors during building code'],
      correct: 0,
      explanation: 'Features are the properties or dimensions of data feeds used by models (e.g. house size, location).'
    },
    {
      question: 'In Machine Learning, what is the Target?',
      options: ['The output variable we want the model to predict (denoted as y)', 'The input features used for training', 'The speed at which training runs', 'The network gateway address'],
      correct: 0,
      explanation: 'The target (label) is the variable modeled as output.'
    },
    {
      question: 'Which algorithm finds the straight line of best fit through data points to predict numeric outputs?',
      options: ['Linear Regression', 'Logistic Regression', 'K-Means Clustering', 'Decision Tree Classifier'],
      correct: 0,
      explanation: 'Linear Regression models linear relationships to predict numeric continuous outcomes.'
    },
    {
      question: 'Which algorithm is used to predict binary classification probabilities (like Spam or Not Spam) using a sigmoid curve?',
      options: ['Logistic Regression', 'Linear Regression', 'K-Means', 'Random Forest'],
      correct: 0,
      explanation: 'Logistic Regression uses the sigmoid/logistic function to map outputs between 0 and 1, indicating probabilities.'
    },
    {
      question: 'What is the Sigmoid Function equation range?',
      options: ['Between 0 and 1', 'Between -1 and 1', 'Any real number', 'Between 0 and infinity'],
      correct: 0,
      explanation: 'The sigmoid function maps any inputs to outputs strictly within the probability bounds [0, 1].'
    },
    {
      question: 'What represents the process of splitting data into Training and Test sets?',
      options: ['Training set trains the model, and Test set evaluates its performance on unseen data', 'Splitting data vertically between column keys', 'Deleting old records from databases', 'None of these'],
      correct: 0,
      explanation: 'Evaluating models on independent test sets reports accuracy on new, unseen data, highlighting overfitting.'
    },
    {
      question: 'What represents standard train-test split ratios?',
      options: ['80% Train, 20% Test (or 70/30)', '10% Train, 90% Test', '50% Train, 50% Test strictly', '100% Train, 0% Test'],
      correct: 0,
      explanation: 'Splits like 80/20 or 70/30 provide sufficient samples to train while keeping a solid validation subset.'
    },
    {
      question: 'What represents overfitting?',
      options: ['A model performs very well on training data but poorly on test data', 'A model performs poorly on both training and test data', 'The training process crashes due to memory limits', 'The model dataset is missing labels'],
      correct: 0,
      explanation: 'Overfitting occurs when models learn noise in training sets, failing to generalize to test sets.'
    },
    {
      question: 'What represents underfitting?',
      options: ['The model is too simple, performing poorly on both training and test sets', 'The model fits training data perfectly', 'The dataset has too many columns', 'The learning rate is too high'],
      correct: 0,
      explanation: 'Underfitting occurs when algorithms lack parameters to model core trends in data.'
    },
    {
      question: 'Which algorithm classifies data points based on the class labels of their nearest neighbors?',
      options: ['K-Nearest Neighbors (KNN)', 'K-Means', 'Naive Bayes', 'Linear Regression'],
      correct: 0,
      explanation: 'KNN classifies query points by voting the labels of the nearest K training points.'
    },
    {
      question: 'Which algorithm uses a tree-like structure of conditional splits to classify or regress data?',
      options: ['Decision Tree', 'K-Means', 'Neural Network', 'Support Vector Machine'],
      correct: 0,
      explanation: 'Decision Trees split datasets iteratively based on feature values to partition targets.'
    },
    {
      question: 'What is a Random Forest?',
      options: ['An ensemble method that combines multiple Decision Trees to improve prediction accuracy', 'A graphical vector directory map', 'A database index search engine', 'None of these'],
      correct: 0,
      explanation: 'Random Forest is an ensemble classifier that trains multiple decision trees (bagging) and aggregates their votes.'
    },
    {
      question: 'What does "Ensemble Learning" mean?',
      options: ['Combining predictions of multiple models to create a stronger, more accurate model', 'Training a model overnight', 'Evaluating database transaction logs', 'All of these'],
      correct: 0,
      explanation: 'Ensemble methods (bagging, boosting) aggregate weak learners to reduce variance and bias.'
    },
    {
      question: 'What is the bias-variance tradeoff?',
      options: ['Balancing model errors: reducing bias (underfitting) often increases variance (overfitting)', 'Balancing database columns', 'Balancing training and testing speed', 'None of these'],
      correct: 0,
      explanation: 'Simple models have high bias (underfit). Complex models have high variance (overfit). ML aims to balance them.'
    },
    {
      question: 'What is Cross-Validation (e.g. K-Fold)?',
      options: ['Splitting data into K folds, training K times using different folds as test sets to validate consistency', 'Validating data tables with SQL constraints', 'Encrypting datasets', 'Comparing model files'],
      correct: 0,
      explanation: 'K-Fold cross-validation reduces evaluation variance by training/testing across K unique partitions of the dataset.'
    },
    {
      question: 'Which metric measures the percentage of correct predictions in classification?',
      options: ['Accuracy', 'Mean Squared Error', 'R-Squared', 'Precision'],
      correct: 0,
      explanation: 'Accuracy is Correct Predictions / Total Predictions, suitable for balanced classes.'
    },
    {
      question: 'Which metric evaluates the proportion of actual positives that were correctly identified (True Positives / (True Positives + False Negatives))?',
      options: ['Recall (Sensitivity)', 'Precision', 'Accuracy', 'F1-Score'],
      correct: 0,
      explanation: 'Recall measures the model\'s ability to capture all positive cases.'
    },
    {
      question: 'Which metric evaluates the proportion of positive predictions that were actually correct (True Positives / (True Positives + False Positives))?',
      options: ['Precision', 'Recall', 'Accuracy', 'R-Squared'],
      correct: 0,
      explanation: 'Precision measures the accuracy of positive forecasts.'
    },
    {
      question: 'What is the F1-Score?',
      options: ['The harmonic mean of precision and recall', 'The ratio of correct classifications', 'The error margin in regression', 'The model training speed'],
      correct: 0,
      explanation: 'F1-score combines precision and recall into a single metric.'
    },
    {
      question: 'Which metric measures the proportion of variance in dependent variables explained by regression models?',
      options: ['R-Squared (Coefficient of Determination)', 'Mean Absolute Error', 'Accuracy', 'Precision'],
      correct: 0,
      explanation: 'R-Squared (R²) ranges from 0 to 1, indicating how well independent variables explain target variance.'
    },
    {
      question: 'Which algorithm is based on Bayes\' Theorem, assuming features are independent?',
      options: ['Naive Bayes', 'Support Vector Machines', 'Decision Trees', 'K-Means'],
      correct: 0,
      explanation: 'Naive Bayes classifiers apply probability calculations based on strong (naive) feature independence assumptions.'
    },
    {
      question: 'What does "Support Vector Machine" (SVM) aim to find in classification?',
      options: ['The hyperplane that maximizes the margin between different classes', 'The average value of coordinates', 'The total count of data clusters', 'None of these'],
      correct: 0,
      explanation: 'SVM finds the decision boundary (hyperplane) that maximizes separation margins between data categories.'
    },
    {
      question: 'What is a "Hyperparameter" in machine learning?',
      options: ['A configuration setting set before training begins (like learning rate or tree depth)', 'The outputs predicted by the model', 'The data variables inside datasets', 'The hardware specifications of the system'],
      correct: 0,
      explanation: 'Hyperparameters are parameters adjusted by developers to guide training structures (e.g. number of estimators).'
    },
    {
      question: 'What is the learning rate in training gradient descent?',
      options: ['A hyperparameter controlling step sizes taken toward local minima of loss functions', 'The speed at which data loads', 'The correlation coefficient of features', 'The accuracy percentage growth'],
      correct: 0,
      explanation: 'Learning rate (alpha) controls the step sizing in optimization iterations. Values too large overshoot; values too small crawl slowly.'
    },
    {
      question: 'What is the purpose of regularization (L1 Lasso, L2 Ridge) in ML?',
      options: ['To prevent overfitting by adding penalty terms to loss functions', 'To normalize database values', 'To speed up training cycles', 'To format layout tables'],
      correct: 0,
      explanation: 'Regularization adds penalty weights (L1 absolute values, L2 squared values) to cost functions, shrinking parameter weights to prevent overfitting.'
    },
    {
      question: 'What represents Clustering in unsupervised learning?',
      options: ['Grouping data points so points in the same group are more similar to each other than to those in other groups', 'Supervised regression lines', 'Formatting page grids', 'Classifying spam emails'],
      correct: 0,
      explanation: 'Clustering identifies natural partitions within unlabeled data.'
    },
    {
      question: 'What is the purpose of Dimensionality Reduction (like PCA)?',
      options: ['To reduce the number of input variables/features while keeping essential information', 'To compress image file formats', 'To delete rows in database tables', 'To reduce training iterations'],
      correct: 0,
      explanation: 'PCA (Principal Component Analysis) projects high-dimensional features onto lower dimensions, retaining maximum variance.'
    },
    {
      question: 'Which python library is standard for implementing machine learning algorithms?',
      options: ['Scikit-learn', 'Pandas', 'Flask', 'Django'],
      correct: 0,
      explanation: 'Scikit-learn is the standard library for classification, regression, clustering, and data preparation.'
    }
  ]
};

export const powerBiQuestions = {
  title: 'Power BI',
  easy: [
    {
      question: 'What is Power BI?',
      options: ['A business analytics service by Microsoft to visualize data and share insights', 'A database server hardware', 'A compiled programming language', 'A browser search engine'],
      correct: 0,
      explanation: 'Power BI is Microsoft\'s business intelligence platform providing interactive visualization dashboards.'
    },
    {
      question: 'Which of the following is a primary component of the Power BI ecosystem?',
      options: ['Power BI Desktop, Power BI Service, and Power BI Mobile', 'Power Query only', 'Power Pivot only', 'None of these'],
      correct: 0,
      explanation: 'The core workflow involves creating reports in Power BI Desktop, publishing to Power BI Service (cloud), and viewing on Power BI Mobile.'
    },
    {
      question: 'What is Power BI Desktop used for?',
      options: ['Connecting to data sources, transforming data, modeling, and creating reports', 'Publishing final reports online only', 'Viewing dashboards on smartphones only', 'None of these'],
      correct: 0,
      explanation: 'Power BI Desktop is the local application where data extraction, modeling, DAX, and report layouts are designed.'
    },
    {
      question: 'What is the Power BI Service?',
      options: ['A cloud-based SaaS platform used to publish, share, and collaborate on reports', 'A database hosting engine', 'A network security protocol', 'A tool to format system hard drives'],
      correct: 0,
      explanation: 'Power BI Service is the online cloud hosting portal where dashboards are shared and refreshed.'
    },
    {
      question: 'What is Power Query Editor in Power BI used for?',
      options: ['Importing, cleaning, and transforming raw data (ETL operations)', 'Writing DAX measures', 'Creating chart visualizations', 'Setting up user permissions'],
      correct: 0,
      explanation: 'Power Query handles Extract-Transform-Load (ETL) actions, preparing messy data sources.'
    },
    {
      question: 'Which programming language is used to write queries in Power Query?',
      options: ['M Formula Language', 'DAX', 'SQL', 'Python'],
      correct: 0,
      explanation: 'Power Query writes and executes step steps using the "M" formula language.'
    },
    {
      question: 'What is DAX in Power BI?',
      options: ['Data Analysis Expressions (formula language used for calculations and measures)', 'Database Access eXtension', 'Digital Asset Exchange', 'A type of chart visualization'],
      correct: 0,
      explanation: 'DAX (Data Analysis Expressions) is the formula language for creating measures and calculated columns.'
    },
    {
      question: 'What is a "Measure" in Power BI DAX?',
      options: ['A calculation computed dynamically on the fly based on user filters/contexts', 'A static row values counter', 'A physical layout guide lines', 'A column of data values on disk'],
      correct: 0,
      explanation: 'Measures calculate values on demand, responding dynamically to slicers and visual filters.'
    },
    {
      question: 'What is a "Calculated Column" in Power BI?',
      options: ['A column added to tables during data refresh, computed row-by-row and stored in memory', 'A temporary visual guide column', 'A measure calculation', 'None of these'],
      correct: 0,
      explanation: 'Calculated columns are evaluated statically during model loads, consuming memory storage.'
    },
    {
      question: 'What is the key difference between a Measure and a Calculated Column?',
      options: ['Measures are calculated on the fly and don\'t consume memory, while Calculated Columns are stored in the database', 'Calculated Columns are faster to load', 'Measures are only used for text lists', 'They are identical'],
      correct: 0,
      explanation: 'Measures are computed dynamically during rendering; calculated columns are stored in memory.'
    },
    {
      question: 'Which DAX function evaluates an expression in a modified filter context (the most powerful function in DAX)?',
      options: ['CALCULATE()', 'SUM()', 'FILTER()', 'EVALUATE()'],
      correct: 0,
      explanation: '`CALCULATE(expression, filter1, ...)` overrides or extends active filter contexts.'
    },
    {
      question: 'What is a "Data Model" in Power BI?',
      options: ['A collection of tables and the relationships defining how they link together', 'A styling layout theme profile', 'A directory of files', 'A chart visual card'],
      correct: 0,
      explanation: 'Data models define the database schema, matching relationships (e.g. Star Schema).'
    },
    {
      question: 'Which database schema design is highly recommended for Power BI data models?',
      options: ['Star Schema', 'Snowflake Schema only', 'Flat Single Table strictly', 'None of these'],
      correct: 0,
      explanation: 'The Star Schema (central Fact table surrounded by Dimension tables) is the optimal schema for Power BI modeling.'
    },
    {
      question: 'In data modeling, what is a Fact Table?',
      options: ['A table containing observational/transactional metrics (numeric values like sales, quantities)', 'A table containing lookup attributes (like customer names, dates)', 'A table showing report settings', 'A log file of database errors'],
      correct: 0,
      explanation: 'Fact tables hold transactional records and quantitative metrics (e.g. sales invoices).'
    },
    {
      question: 'In data modeling, what is a Dimension Table?',
      options: ['A table containing descriptive attributes (like customer details, product details, dates)', 'A table holding only numbers to sum', 'A table managing layout designs', 'None of these'],
      correct: 0,
      explanation: 'Dimension tables (lookup tables) hold details describing business entities (e.g. customer addresses).'
    },
    {
      question: 'What is the default relationship cardinality standardly created between dimension and fact tables?',
      options: ['One-to-Many (1:*)', 'One-to-One (1:1)', 'Many-to-Many (*:*)', 'None of these'],
      correct: 0,
      explanation: 'Typically, relationships are 1-to-many (e.g., one customer record maps to many invoices).'
    },
    {
      question: 'What represents the file extension of a Power BI Desktop project?',
      options: ['.pbix', '.pbit', '.xlsx', '.pdf'],
      correct: 0,
      explanation: '`.pbix` is the native Power BI working document extension.'
    },
    {
      question: 'What represents the file extension of a Power BI Template?',
      options: ['.pbit', '.pbix', '.xlsx', '.xml'],
      correct: 0,
      explanation: '`.pbit` holds template schemas without loading data rows, reducing file sizes.'
    },
    {
      question: 'What is the purpose of a "Slicer" in Power BI reports?',
      options: ['An on-canvas visual filter enabling users to filter dashboard data dynamically', 'A tool to crop charts', 'A macro function code', 'A layout divider line'],
      correct: 0,
      explanation: 'Slicers are interactive visual controls letting users filter page visuals by clicking buttons/lists.'
    },
    {
      question: 'What does the "Visualizations" pane in Power BI Desktop allow you to do?',
      options: ['Select and customize chart types, fields, and formatting parameters', 'Manage data relationships', 'Write M scripts', 'Publish reports to the cloud'],
      correct: 0,
      explanation: 'The Visualizations pane houses chart options, formatting tabs, and fields mapping buckets.'
    },
    {
      question: 'What does "Gateway" do in Power BI Service?',
      options: ['Acts as a bridge to securely transfer data between on-premises data sources and cloud services', 'Provides network security firewalls', 'Animates dashboard charts', 'Encrypts user password profiles'],
      correct: 0,
      explanation: 'Power BI Gateways link cloud dashboards to local, on-premise databases, enabling scheduled data refreshes.'
    },
    {
      question: 'What is a "Dashboard" in Power BI Service compared to a "Report"?',
      options: ['A Dashboard is a single-page canvas pinning visual tiles from multiple Reports', 'They are exact duplicates', 'A Report is cloud only, a Dashboard is local', 'None of these'],
      correct: 0,
      explanation: 'Reports hold multi-page detailed analytical designs. Dashboards pin key visual tiles from reports onto a single tracking screen.'
    },
    {
      question: 'Which tool handles "Q&A" queries in Power BI Service?',
      options: ['A natural language query tool allowing users to ask questions and get auto-generated charts', 'An online technical support chat', 'A forum for database administrators', 'An SQL command-line prompt'],
      correct: 0,
      explanation: 'The Q&A visual uses NLP to translate typed questions (e.g. "sales by year") into charts dynamically.'
    },
    {
      question: 'How do you create a date table (Calendar table) dynamically in DAX?',
      options: ['CALENDAR() or CALENDARAUTO()', 'DATE()', 'TODAY()', 'new Table()'],
      correct: 0,
      explanation: '`CALENDAR(start, end)` or `CALENDARAUTO()` returns table arrays of contiguous dates, essential for time-intelligence functions.'
    },
    {
      question: 'Which DAX function calculates year-to-date values?',
      options: ['TOTALYTD()', 'SUM()', 'YTD()', 'CALCULATE_YTD()'],
      correct: 0,
      explanation: '`TOTALYTD(expression, dates, [filter])` computes cumulative metrics from year start to dates.'
    },
    {
      question: 'What represents time-intelligence functions in DAX?',
      options: ['Functions enabling calculations over calendar periods (YTD, QTD, same period last year)', 'Functions calculating system processor speeds', 'Functions managing database timing gates', 'None of these'],
      correct: 0,
      explanation: 'Time-intelligence DAX functions calculate values over time periods easily (e.g. `SAMEPERIODLASTYEAR`).'
    },
    {
      question: 'What does the "Tooltip" visual in Power BI do?',
      options: ['Displays extra details in a pop-up window when hovering over data points in a chart', 'Saves dashboard views to files', 'Filters page data columns', 'Plays sound effects on click'],
      correct: 0,
      explanation: 'Tooltips display contextual data popups on data point hovers.'
    },
    {
      question: 'What is "Drill Down" in charts?',
      options: ['Navigating from high-level summary categories down to detailed sub-categories within the same visual', 'Zooming in on pixels', 'Deleting data columns', 'None of these'],
      correct: 0,
      explanation: 'Drill down navigates hierarchical data levels (e.g. viewing Year -> Quarter -> Month details in columns).'
    },
    {
      question: 'Which connection mode in Power BI queries data sources in real-time without copying rows to memory?',
      options: ['DirectQuery or Live Connection', 'Import Mode', 'SQL database export', 'FTP transfer'],
      correct: 0,
      explanation: 'DirectQuery queries databases in real-time, sending queries on visuals interaction. Import Mode loads data copies into cache memory.'
    },
    {
      question: 'What is the default data storage connection mode in Power BI?',
      options: ['Import Mode', 'DirectQuery', 'Live Connection', 'Excel Link'],
      correct: 0,
      explanation: 'Import Mode is the default and fastest connection type, caching data in Power BI\'s analytical engine.'
    }
  ]
};

export const tableauQuestions = {
  title: 'Tableau',
  easy: [
    {
      question: 'What is Tableau?',
      options: ['A powerful data visualization and business intelligence software', 'A spreadsheet program by Microsoft', 'A relational database engine', 'A web browser interface'],
      correct: 0,
      explanation: 'Tableau is a leading data visualization tool used to analyze and present business data.'
    },
    {
      question: 'What is the primary workspace where you build individual charts/visuals in Tableau?',
      options: ['Worksheet', 'Dashboard', 'Story', 'Canvas'],
      correct: 0,
      explanation: 'Worksheets are the individual canvas sheets where single charts/visualizations are constructed.'
    },
    {
      question: 'What is a Dashboard in Tableau?',
      options: ['A collection of multiple worksheets arranged on a single page for monitoring data', 'A single worksheet tab', 'A compiled project file', 'The server configuration panel'],
      correct: 0,
      explanation: 'Dashboards combine multiple worksheets, allowing interactive dashboard actions.'
    },
    {
      question: 'What is a Story in Tableau?',
      options: ['A sequence of worksheets or dashboards arranged to present a data narrative walkthrough', 'A text document describing data', 'A backup file path', 'A category description index'],
      correct: 0,
      explanation: 'Tableau Stories contain sheets or dashboards arranged chronologically to walk users through data narratives.'
    },
    {
      question: 'How does Tableau categorize data fields when importing data sources?',
      options: ['Dimensions and Measures', 'Columns and Rows', 'Tables and Keys', 'Strings and Numbers only'],
      correct: 0,
      explanation: 'Tableau categorizes columns as Dimensions (qualitative/categorical) and Measures (quantitative/numerical).'
    },
    {
      question: 'What are "Dimensions" in Tableau?',
      options: ['Qualitative/categorical values (like names, dates, geographical locations) that slice data', 'Quantitative numerical values that sum', 'The physical pixel size of charts', 'The database storage limits'],
      correct: 0,
      explanation: 'Dimensions slice data, creating headers in views.'
    },
    {
      question: 'What are "Measures" in Tableau?',
      options: ['Quantitative, numerical values that can be aggregated (like sales, profits, quantities)', 'Category labels', 'Layout rulers guidelines', 'None of these'],
      correct: 0,
      explanation: 'Measures hold values that are aggregated (summed, averaged) in charts.'
    },
    {
      question: 'Which color represents a continuous field in Tableau\'s shelf blocks?',
      options: ['Green', 'Blue', 'Red', 'Gray'],
      correct: 0,
      explanation: 'Green pill blocks represent continuous fields (infinite values ranges).'
    },
    {
      question: 'Which color represents a discrete field in Tableau?',
      options: ['Blue', 'Green', 'Yellow', 'Purple'],
      correct: 0,
      explanation: 'Blue pill blocks represent discrete fields (distinct, finite category items).'
    },
    {
      question: 'What is a "Pill" in Tableau workspace terms?',
      options: ['The rounded draggable blocks representing data columns placed on shelves', 'A button triggering macros', 'A type of circular chart', 'An error checking icon'],
      correct: 0,
      explanation: 'Data fields are dragged onto Rows/Columns shelves as capsule-shaped blocks called "pills".'
    },
    {
      question: 'What is the file extension of a Tableau Workbook containing worksheets and connection parameters?',
      options: ['.twb', '.twbx', '.tds', '.tde'],
      correct: 0,
      explanation: '`.twb` is the standard Tableau Workbook file (does not package raw data rows).'
    },
    {
      question: 'What is the file extension of a Tableau Packaged Workbook containing both sheets and the raw local data file?',
      options: ['.twbx', '.twb', '.tdsx', '.hyper'],
      correct: 0,
      explanation: '`.twbx` packages worksheets, styles, and raw data files together, making sharing simple.'
    },
    {
      question: 'What represents a Tableau Extract (.hyper)?',
      options: ['A compressed snapshot of data stored in memory to improve performance and work offline', 'An export to PDF files', 'A backup log file', 'None of these'],
      correct: 0,
      explanation: 'Extracts (.hyper files) are optimized in-memory data snapshots, accelerating chart rendering.'
    },
    {
      question: 'Which shelf in Tableau controls colors, sizes, labels, details, and tooltips of visual marks?',
      options: ['Marks Card', 'Filter Shelf', 'Rows/Columns Shelves', 'Pages Shelf'],
      correct: 0,
      explanation: 'The Marks card customizes the visual appearance of chart elements.'
    },
    {
      question: 'What is the "Show Me" card in Tableau used for?',
      options: ['Displays a panel of alternative chart types available based on selected data columns', 'Shows help tutorial pages', 'Displays database connections list', 'None of these'],
      correct: 0,
      explanation: 'Show Me displays recommended charts based on the selected combination of dimensions and measures.'
    },
    {
      question: 'What represents a calculated field in Tableau?',
      options: ['A new data column created using formulas based on existing fields', 'A cell displaying sum totals', 'A macro code trigger', 'A format styling property'],
      correct: 0,
      explanation: 'Calculated fields evaluate customized formulas (e.g. `[Sales] - [Cost]`) to yield new metrics.'
    },
    {
      question: 'What is a Parameter in Tableau?',
      options: ['A user-generated constant value (like a dial/input box) that can replace hardcoded values in calculations', 'The columns headers of tables', 'The server hosting path', 'The size boundaries of dashboards'],
      correct: 0,
      explanation: 'Parameters let users input values dynamically, changing calculations or thresholds on dashboards.'
    },
    {
      question: 'Which Tableau feature allows you to group related data points into subsets (e.g. top performing products)?',
      options: ['Sets', 'Groups', 'Filters', 'Bins'],
      correct: 0,
      explanation: 'Sets are custom fields defining subsets of data based on conditions (e.g. In/Out classifications).'
    },
    {
      question: 'What is a "Group" in Tableau?',
      options: ['Combines multiple members of a dimension into higher-level categories (e.g. merging cities into regions)', 'A cluster of charts', 'A folder of files', 'None of these'],
      correct: 0,
      explanation: 'Groups combine specific dimension members to clean up category items.'
    },
    {
      question: 'What are Bins in Tableau?',
      options: ['Slices a continuous measure into equal-sized ranges to build Histograms', 'Trash bins to delete fields', 'Database table folders', 'A type of line chart'],
      correct: 0,
      explanation: 'Bins partition numerical metrics into structured ranges, essential to plot histograms.'
    },
    {
      question: 'Which chart type displays data distributions as vertical bars categorized in bins?',
      options: ['Histogram', 'Scatter Plot', 'Bullet Chart', 'TreeMap'],
      correct: 0,
      explanation: 'Histograms display data frequency counts across equal-sized numeric bins.'
    },
    {
      question: 'What is a Dual Axis Chart in Tableau?',
      options: ['A chart overlaying two measures on different axes within a single view', 'A chart displaying 3D perspective', 'A chart showing data coordinates', 'A chart tracking two sheets'],
      correct: 0,
      explanation: 'Dual Axis charts compare different metrics using independent Y-axes (e.g. Sales columns and Profit % line).'
    },
    {
      question: 'What is the purpose of "Blended Data" (Data Blending) in Tableau?',
      options: ['Combining data from different independent databases on a single worksheet based on common fields', 'Merging rows in CSV files', 'Clearing cache tables', 'None of these'],
      correct: 0,
      explanation: 'Data Blending queries separate data sources independently, aggregating results on matching dimensions in sheets.'
    },
    {
      question: 'What does LOD stand for regarding advanced calculations in Tableau?',
      options: ['Level of Detail', 'Log Of Data', 'Logical Operations Directory', 'Layout Organizer Dashboard'],
      correct: 0,
      explanation: 'LOD (Level of Detail) expressions compute values at specific dimensional granularities (FIXED, INCLUDE, EXCLUDE) independent of visual filters.'
    },
    {
      question: 'Which LOD expression computes values at the exact dimension specified, ignoring sheet coordinates?',
      options: ['FIXED', 'INCLUDE', 'EXCLUDE', 'GLOBAL'],
      correct: 0,
      explanation: '`{ FIXED [Dim] : Expression }` computes metrics at specific dimensions, unaffected by other visual parameters.'
    },
    {
      question: 'What represents the tooltip in Tableau?',
      options: ['Text boxes displaying details when hovering over data marks in views', 'A search tool to find fields', 'A dashboard button template', 'None of these'],
      correct: 0,
      explanation: 'Tooltips display contextual data popups on mouse hovers.'
    },
    {
      question: 'What is a "Filter Action" on a Tableau Dashboard?',
      options: ['Clicking a data point in one chart filters other charts on the dashboard automatically', 'A script that deletes data', 'A search engine filter query', 'An ad campaign bidding model'],
      correct: 0,
      explanation: 'Dashboard Actions allow interactive worksheets to act as dynamic filters for other dashboard panels.'
    },
    {
      question: 'What is Tableau Public?',
      options: ['A free service allowing users to publish interactive visualizations online to the public web', 'An enterprise database server', 'An open-source scripting language', 'A browser developer extension'],
      correct: 0,
      explanation: 'Tableau Public is a free cloud registry where authors share data visualizations publicly.'
    },
    {
      question: 'Which chart type displays hierarchical data categories as size-based nested rectangles?',
      options: ['TreeMap', 'Bubble Chart', 'Bullet Chart', 'Gantt Chart'],
      correct: 0,
      explanation: 'Treemaps display nested rectangles representing proportions and hierarchies.'
    },
    {
      question: 'Which visual represents project tasks and timelines along horizontal bars?',
      options: ['Gantt Chart', 'Scatter Plot', 'Pie Chart', 'Area Chart'],
      correct: 0,
      explanation: 'Gantt charts display tasks, durations, start/end dates, and milestones chronologically.'
    }
  ]
};
