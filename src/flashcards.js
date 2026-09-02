const chapters = [
  {
    id: 1,
    title: "Introduction to Communication Studies",
    subchapters: [
      {
        id: "1.1",
        title: "Communication - History and forms",
        cards: [
          { id: "1.1.1", question: "Define communication", answer: "Communication is the process of generating meaning by sending and receiving verbal and non-verbal symbolic cues that are influenced by multiple contexts" },
          { id: "1.1.2", question: "Discuss the history of communication from ancient to modern times?", answer: "Ancient Greeks like Aristotle and Plato started a rich tradition of the study of rhetoric in the Western world more than two thousand years ago. Communication did not become a distinct field of study with academic departments until the 1900s, but it is now a thriving discipline with many subfields of study." },
          { id: "1.1.3", question: "List the five forms of communication", answer: "There are five forms of communication: intrapersonal, interpersonal, group, public, and mass communication" },
          { id: "1.1.4", question: "Distinguish among the five forms of communication", answer: "Intrapersonal communication - communication with oneself inside our heads. Interpersonal communication - between people whose lives mutually influence one another and typically occurs in dyads. Group communication - three or more people communicate to achieve a shared goal. Public communication - sender focused, occurs when one person conveys information to an audience. Mass communication - messages are sent to large audiences using print or electronic media." },
        ],
      },
      {
        id: "1.2",
        title: "The communication process",
        cards: [
          { id: "1.2.1", question: "Identify and define the components of the transmission model of communication", answer: "The transmission model of communication describes communication as a one-way, linear process in which a sender encodes a message and transmits it through a channel to a receiver who decodes it. The transmission of the message many be disrupted by environmental or semantic noise. This model is usually too simple to capture FtF interactions but can be usefully applied to computer-mediated communication." },
          { id: "1.2.2", question: "Identify and define the components of the interaction model of communication", answer: "The interaction model of communication describes communication as a two-way process in which participants alternate positions as sender and receiver and generate meaning by sending and receiving feedback within physical and psychological contexts. This model captures the interactive aspects of communication but still doesn’t account for how communication constructs our realities and is influenced by social and cultural contexts." },
          { id: "1.2.3", question: "Identify and define the components of the transaction model of communication", answer: "The transaction model of communication describes communication as a process in which communicators generate social realities within social, relational, and cultural contexts. This model includes participants who are simultaneously senders and receivers and accounts for how communication constructs our realities, relationships, and communities." },
          { id: "1.2.4", question: "Compare and contrast the three models of communication", answer: "padding" },
        ],
      },
      {
        id: "1.3",
        title: "Communication Principles",
        cards: [
          { id: "1.3.1", question: "What four areas make up the CSS box model?", answer: "Content, Padding, Border, Margin" },
          { id: "1.3.2", question: "Which property sets space outside the border?", answer: "margin" },
          { id: "1.3.3", question: "What value of box-sizing includes padding in the element's width?", answer: "border-box" },
          { id: "1.3.4", question: "Which property controls the space between the content and the border?", answer: "padding" },
          { id: "1.3.5", question: "What CSS property makes an element invisible but still occupies space?", answer: "visibility: hidden" },
        ],
      },
      {
        id: "1.4",
        title: "Communication Competence",
        cards: [
          { id: "1.4.1", question: "Which CSS property enables flexbox on a container?", answer: "display: flex" },
          { id: "1.4.2", question: "Which property aligns items along the main axis?", answer: "justify-content" },
          { id: "1.4.3", question: "Which property aligns items along the cross axis?", answer: "align-items" },
          { id: "1.4.4", question: "What value of flex-direction stacks items vertically?", answer: "column" },
          { id: "1.4.5", question: "Which property allows flex items to wrap onto multiple lines?", answer: "flex-wrap: wrap" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Communication and Perception",
    subchapters: [
      {
        id: "2.1",
        title: "Perception Process",
        cards: [
          { id: "2.1.1", question: "What are the three keywords for declaring variables in JS?", answer: "var, let, const" },
          { id: "2.1.2", question: "What is the type of null in JavaScript?", answer: "object (a historical bug in JS)" },
          { id: "2.1.3", question: "What does typeof undefined return?", answer: "\"undefined\"" },
          { id: "2.1.4", question: "Which keyword declares a block-scoped variable?", answer: "let" },
          { id: "2.1.5", question: "What is the difference between == and ===?", answer: "== checks value with type coercion; === checks value and type strictly" },
        ],
      },
      {
        id: "2.2",
        title: "Perceiving Others",
        cards: [
          { id: "2.2.1", question: "What is an arrow function syntax in JS?", answer: "const fn = () => {}" },
          { id: "2.2.2", question: "What does a function return if there is no return statement?", answer: "undefined" },
          { id: "2.2.3", question: "What is a closure?", answer: "A function that retains access to its outer scope even after the outer function has returned" },
          { id: "2.2.4", question: "What is a higher-order function?", answer: "A function that takes or returns another function" },
          { id: "2.2.5", question: "What does the rest parameter (...args) do?", answer: "Collects all remaining arguments into an array" },
        ],
      },
      {
        id: "2.3",
        title: "Perceiving and Presenting Self",  
        cards: [
          { id: "2.3.1", question: "Which array method creates a new array from transformed elements?", answer: "map()" },
          { id: "2.3.2", question: "Which method returns only elements that pass a test?", answer: "filter()" },
          { id: "2.3.3", question: "Which method reduces an array to a single value?", answer: "reduce()" },
          { id: "2.3.4", question: "How do you copy all properties from one object into another?", answer: "Object.assign() or the spread operator {...obj}" },
          { id: "2.3.5", question: "What does Array.isArray() do?", answer: "Returns true if the value is an array" },
        ],
      },
      {
        id: "2.4",
        title: "Improving Perception",
        cards: [
          { id: "2.4.1", question: "What is a Promise?", answer: "An object representing the eventual result (or failure) of an async operation" },
          { id: "2.4.2", question: "Which keyword pauses execution until a Promise resolves?", answer: "await" },
          { id: "2.4.3", question: "What must a function be declared as to use await inside it?", answer: "async" },
          { id: "2.4.4", question: "What does fetch() return?", answer: "A Promise that resolves to a Response object" },
          { id: "2.4.5", question: "How do you handle errors in an async/await function?", answer: "With a try/catch block" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Verbal Communication",
    subchapters: [
      {
        id: "3.1",
        title: "Language and Meaning",
        cards: [
          { id: "3.1.1", question: "What is JSX?", answer: "A syntax extension that lets you write HTML-like code inside JavaScript" },
          { id: "3.1.2", question: "What is a React component?", answer: "A reusable piece of UI, defined as a function or class that returns JSX" },
          { id: "3.1.3", question: "How do you pass data to a child component?", answer: "Via props" },
          { id: "3.1.4", question: "What is the Virtual DOM?", answer: "A lightweight in-memory representation of the real DOM that React uses to batch and optimize updates" },
          { id: "3.1.5", question: "What does React.StrictMode do?", answer: "Highlights potential problems by running extra checks in development" },
        ],
      },
      {
        id: "3.2",
        title: "Functions of Language",
        cards: [
          { id: "3.2.1", question: "Which hook manages local state in a function component?", answer: "useState" },
          { id: "3.2.2", question: "Which hook runs side effects after render?", answer: "useEffect" },
          { id: "3.2.3", question: "Which hook lets you share values without prop drilling?", answer: "useContext" },
          { id: "3.2.4", question: "Which hook caches the result of an expensive calculation?", answer: "useMemo" },
          { id: "3.2.5", question: "What does the dependency array in useEffect control?", answer: "When the effect re-runs — only when listed values change" },
        ],
      },
      {
        id: "3.3",
        title: "Using Words Well",
        cards: [
          { id: "3.3.1", question: "How do you update state in a function component?", answer: "Call the setter function returned by useState" },
          { id: "3.3.2", question: "Why should you not mutate state directly in React?", answer: "React won't detect the change and won't re-render the component" },
          { id: "3.3.3", question: "What prop attaches a click handler in JSX?", answer: "onClick" },
          { id: "3.3.4", question: "What is lifting state up?", answer: "Moving shared state to the closest common ancestor component" },
          { id: "3.3.5", question: "What does the key prop do in a list?", answer: "Helps React identify which items changed, added, or removed" },
        ],
      },
      {
        id: "3.4",
        title: "Language, Society and Culture",
        cards: [
          { id: "3.4.1", question: "When does a component mount?", answer: "When it is first inserted into the DOM" },
          { id: "3.4.2", question: "How do you run code only once after mount with useEffect?", answer: "Pass an empty dependency array []" },
          { id: "3.4.3", question: "What is the cleanup function in useEffect used for?", answer: "To cancel subscriptions, timers, or other side effects when the component unmounts" },
          { id: "3.4.4", question: "When does a component re-render?", answer: "When its state or props change" },
          { id: "3.4.5", question: "What hook replaces componentDidUpdate in class components?", answer: "useEffect with a dependency array" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Databases",
    subchapters: [
      {
        id: "4.1",
        title: "SQL Basics",
        cards: [
          { id: "4.1.1", question: "What does SQL stand for?", answer: "Structured Query Language" },
          { id: "4.1.2", question: "Which SQL keyword retrieves data from a table?", answer: "SELECT" },
          { id: "4.1.3", question: "Which clause filters rows in a query?", answer: "WHERE" },
          { id: "4.1.4", question: "Which SQL statement adds a new row?", answer: "INSERT INTO" },
          { id: "4.1.5", question: "Which SQL statement removes rows from a table?", answer: "DELETE FROM" },
        ],
      },
      {
        id: "4.2",
        title: "Joins & Relations",
        cards: [
          { id: "4.2.1", question: "What is a primary key?", answer: "A column (or set of columns) that uniquely identifies each row in a table" },
          { id: "4.2.2", question: "What is a foreign key?", answer: "A column that references the primary key of another table" },
          { id: "4.2.3", question: "What does an INNER JOIN return?", answer: "Only rows that have matching values in both tables" },
          { id: "4.2.4", question: "What does a LEFT JOIN return?", answer: "All rows from the left table, plus matching rows from the right table (NULL if no match)" },
          { id: "4.2.5", question: "What is normalization?", answer: "Organizing a database to reduce redundancy and improve data integrity" },
        ],
      },
      {
        id: "4.3",
        title: "NoSQL",
        cards: [
          { id: "4.3.1", question: "What type of database is MongoDB?", answer: "A NoSQL document database" },
          { id: "4.3.2", question: "What format are MongoDB documents stored in?", answer: "BSON (Binary JSON)" },
          { id: "4.3.3", question: "What is the equivalent of a SQL table in MongoDB?", answer: "A collection" },
          { id: "4.3.4", question: "What does BASE stand for in NoSQL?", answer: "Basically Available, Soft state, Eventually consistent" },
          { id: "4.3.5", question: "When would you choose NoSQL over SQL?", answer: "When you need horizontal scaling, flexible schemas, or high write throughput" },
        ],
      },
      {
        id: "4.4",
        title: "Indexes & Performance",
        cards: [
          { id: "4.4.1", question: "What is a database index?", answer: "A data structure that speeds up data retrieval at the cost of extra storage" },
          { id: "4.4.2", question: "What is a query execution plan?", answer: "The strategy the database engine uses to execute a query" },
          { id: "4.4.3", question: "What SQL keyword groups rows sharing a value?", answer: "GROUP BY" },
          { id: "4.4.4", question: "What does EXPLAIN do in SQL?", answer: "Shows the query execution plan so you can identify performance bottlenecks" },
          { id: "4.4.5", question: "What is an N+1 query problem?", answer: "Making one query then N additional queries in a loop — very inefficient" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Computer Science",
    subchapters: [
      {
        id: "5.1",
        title: "Data Structures",
        cards: [
          { id: "5.1.1", question: "What is a stack?", answer: "A LIFO (Last In, First Out) data structure" },
          { id: "5.1.2", question: "What is a queue?", answer: "A FIFO (First In, First Out) data structure" },
          { id: "5.1.3", question: "What is a linked list?", answer: "A sequence of nodes where each node holds data and a pointer to the next node" },
          { id: "5.1.4", question: "What is a hash map?", answer: "A data structure that maps keys to values using a hash function for O(1) average lookup" },
          { id: "5.1.5", question: "What is a binary tree?", answer: "A tree where each node has at most two children (left and right)" },
        ],
      },
      {
        id: "5.2",
        title: "Algorithms",
        cards: [
          { id: "5.2.1", question: "What is the time complexity of binary search?", answer: "O(log n)" },
          { id: "5.2.2", question: "What is the time complexity of bubble sort?", answer: "O(n²)" },
          { id: "5.2.3", question: "What sorting algorithm has O(n log n) average time?", answer: "Merge sort and Quick sort" },
          { id: "5.2.4", question: "What does Big O notation describe?", answer: "The worst-case growth rate of an algorithm's time or space usage" },
          { id: "5.2.5", question: "What is a greedy algorithm?", answer: "An algorithm that makes the locally optimal choice at each step" },
        ],
      },
      {
        id: "5.3",
        title: "Networking",
        cards: [
          { id: "5.3.1", question: "What does HTTP stand for?", answer: "HyperText Transfer Protocol" },
          { id: "5.3.2", question: "What is the difference between HTTP and HTTPS?", answer: "HTTPS encrypts the connection using TLS/SSL" },
          { id: "5.3.3", question: "What HTTP status code means 'Not Found'?", answer: "404" },
          { id: "5.3.4", question: "What is a REST API?", answer: "An API that uses HTTP methods and stateless requests to operate on resources" },
          { id: "5.3.5", question: "What does DNS do?", answer: "Translates domain names into IP addresses" },
        ],
      },
      {
        id: "5.4",
        title: "Version Control",
        cards: [
          { id: "5.4.1", question: "What does git commit do?", answer: "Saves a snapshot of staged changes to the local repository" },
          { id: "5.4.2", question: "What is a branch in git?", answer: "A lightweight pointer to a commit, used to develop features in isolation" },
          { id: "5.4.3", question: "What does git merge do?", answer: "Integrates changes from one branch into another" },
          { id: "5.4.4", question: "What is the difference between git pull and git fetch?", answer: "fetch downloads changes; pull downloads and merges them into the current branch" },
          { id: "5.4.5", question: "What does git rebase do?", answer: "Moves or replays commits onto a new base commit, creating a linear history" },
        ],
      },
    ],
  },
];

export default chapters;
