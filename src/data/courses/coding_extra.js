// Coding & Web modules: React, GSAP, Lenis, C, C++, PHP, Java, JavaScript, SQL, Linux

export const reactQuestions = {
  title: 'React',
  easy: [
    {
      question: 'What is React?',
      options: ['A JavaScript library for building user interfaces', 'A relational database management system', 'A CSS styling framework', 'A backend web server environment'],
      correct: 0,
      explanation: 'React is a popular open-source front-end JavaScript library developed by Meta for building component-based user interfaces.'
    },
    {
      question: 'Who created and maintains React?',
      options: ['Google', 'Microsoft', 'Meta (Facebook)', 'Twitter'],
      correct: 2,
      explanation: 'React was created by Jordan Walke, a software engineer at Meta (Facebook), and is maintained by Meta and the open-source community.'
    },
    {
      question: 'What is the syntax extension used by React to write HTML-like markup in JavaScript?',
      options: ['JSX', 'HTML5', 'XML', 'Svelte'],
      correct: 0,
      explanation: 'JSX (JavaScript XML) allows writing HTML-like structure directly inside React JavaScript code.'
    },
    {
      question: 'What is a component in React?',
      options: ['A reusable, independent piece of UI code', 'A database connection string', 'A specific browser extension', 'A web host server parameter'],
      correct: 0,
      explanation: 'Components are the building blocks of a React application, acting like independent UI elements.'
    },
    {
      question: 'How do you pass data from a parent component to a child component in React?',
      options: ['Through Props', 'Using LocalStorage', 'Through States', 'Via direct DOM selectors'],
      correct: 0,
      explanation: 'Props (Properties) are custom inputs passed down from parent components to child components.'
    },
    {
      question: 'Which Hook is used to manage reactive state in functional React components?',
      options: ['useState', 'useEffect', 'useContext', 'useRef'],
      correct: 0,
      explanation: 'The useState hook returns a state value and a function to update it, trigger re-renders.'
    },
    {
      question: 'Which Hook is used to perform side effects (like API calls or subscriptions) in functional components?',
      options: ['useEffect', 'useState', 'useMemo', 'useReducer'],
      correct: 0,
      explanation: 'The useEffect hook lets you synchronize a component with an external system or perform side effects.'
    },
    {
      question: 'What represents the virtual DOM in React?',
      options: ['A lightweight, in-memory representation of the real DOM', 'A browser plug-in that renders websites', 'A database indexing layout', 'The node_modules directory structure'],
      correct: 0,
      explanation: 'React uses a virtual DOM to compare differences (diffing) and update only the modified nodes of the real browser DOM (reconciliation).'
    },
    {
      question: 'What are the rules of React Hooks?',
      options: ['Only call Hooks at the top level and only from React Function Components', 'Call hooks inside loops and nested conditions', 'Hooks must be called after return statements', 'Hooks can only be declared inside class constructors'],
      correct: 0,
      explanation: 'Hooks must only be called at the top level of React functions (not inside conditions/loops) and only from React functional components or custom hooks.'
    },
    {
      question: 'What is the purpose of the key prop when rendering lists of elements in React?',
      options: ['Helps React identify which items have changed, been added, or been removed', 'To encrypt data values in the DOM', 'To style individual list rows differently', 'To link pages via URLs'],
      correct: 0,
      explanation: 'Keys help React identify items uniquely, minimizing unnecessary DOM re-renders during array modifications.'
    },
    {
      question: 'What represents the default port of a local Vite-React dev server?',
      options: ['5173', '3000', '8080', '5000'],
      correct: 0,
      explanation: 'Vite defaults to port 5173 for local development servers.'
    },
    {
      question: 'How do you create a React application using Vite?',
      options: ['npm create vite@latest', 'npm install -g react-app', 'vite build --react', 'react-admin init'],
      correct: 0,
      explanation: 'Running "npm create vite@latest" allows initializing a project scaffolded with React and Vite.'
    },
    {
      question: 'Which of the following is used to handle styling in React dynamically?',
      options: ['Style attribute passing an object', 'CSS class string only', 'HTML direct inline tags', 'None of these'],
      correct: 0,
      explanation: 'React elements accept inline styling via a "style" attribute containing a JavaScript object with camelCased keys.'
    },
    {
      question: 'What is a controlled component in React forms?',
      options: ['A form input element whose value is controlled by React state', 'A component locked from user clicks', 'A component that runs behind database servers', 'An admin panel dashboard'],
      correct: 0,
      explanation: 'A controlled component has its input value bound to state and updated via an onChange handler.'
    },
    {
      question: 'Which tool is commonly used to bundle assets and compile React JSX code modernly?',
      options: ['Vite', 'Webpack', 'Babel', 'All of these'],
      correct: 3,
      explanation: 'Tools like Webpack, Vite, and compilers like Babel translate JSX and modern ES code into standard browser-compatible JS.'
    },
    {
      question: 'What does the dependency array of useEffect do if left empty []?',
      options: ['Runs the effect only once after the initial render', 'Runs the effect on every single re-render', 'Clears all states from the component', 'Triggers infinite rendering loops'],
      correct: 0,
      explanation: 'An empty dependency array [] tells React to execute the effect callback only once when the component mounts.'
    },
    {
      question: 'Which Hook is used to persist a mutable value across renders without triggering a re-render?',
      options: ['useRef', 'useState', 'useMemo', 'useCallback'],
      correct: 0,
      explanation: 'useRef returns a mutable ref object whose .current property persists values without triggering component updates.'
    },
    {
      question: 'What is JSX element container rules?',
      options: ['A JSX expression must have exactly one parent/wrapper element (or Fragment)', 'JSX elements can have multiple floating root elements', 'All JSX tags must be written in uppercase only', 'JSX elements cannot be nested'],
      correct: 0,
      explanation: 'A JSX block must return a single root element. Developers often use Fragments (<>...</>) to group siblings without adding nodes.'
    },
    {
      question: 'How do you handle event clicks on buttons in React?',
      options: ['onClick={handlerFunction}', 'onclick="handlerFunction()"', 'onButtonPress={handler}', 'click={handler}'],
      correct: 0,
      explanation: 'React uses camelCase event naming: onClick passes the handler function reference.'
    },
    {
      question: 'What is a React Fragment?',
      options: ['A component wrapper that lets you group list elements without adding extra nodes to the DOM', 'A broken React component with errors', 'A styling layout tool in CSS grid', 'A chunk of server database'],
      correct: 0,
      explanation: 'Fragments (<> or <React.Fragment>) let you group elements without rendering unnecessary parent tags (like <div>).'
    },
    {
      question: 'What is the purpose of React Router?',
      options: ['To enable navigation and page routing in Single Page Applications', 'To connect the server database to the frontend', 'To route styling sheets between files', 'To config network gateways'],
      correct: 0,
      explanation: 'React Router enables client-side routing, loading page components based on URL paths without full-page reloads.'
    },
    {
      question: 'What does "State" represent in React?',
      options: ['An object that holds mutable data specific to a component that can change over time', 'The server hosting location', 'The CSS configuration properties', 'The database indexes'],
      correct: 0,
      explanation: 'State is local, mutable component memory. Updating state causes React to re-render the component.'
    },
    {
      question: 'Which function is used to change the state variable in functional components (e.g. [count, setCount] = useState(0))?',
      options: ['setCount', 'count.update()', 'count = newValue', 'setState(count)'],
      correct: 0,
      explanation: 'You must use the state-setter function returned by useState to modify state and queue a re-render.'
    },
    {
      question: 'What is the full form of DOM?',
      options: ['Document Object Model', 'Data Output Management', 'Digital Operations Master', 'Database Object Module'],
      correct: 0,
      explanation: 'DOM stands for Document Object Model, the browser\'s hierarchical node structure of the web page.'
    },
    {
      question: 'What is the default file named for configurations of a Vite project?',
      options: ['vite.config.js', 'package.json', 'vite.json', 'webpack.config.js'],
      correct: 0,
      explanation: 'Vite reads configurations from vite.config.js (or vite.config.ts) in the root directory.'
    },
    {
      question: 'Which Hook is used to memoize/cache expensive calculations across renders?',
      options: ['useMemo', 'useCallback', 'useRef', 'useEffect'],
      correct: 0,
      explanation: 'useMemo caches/memoizes the result of a calculation between renders, recomputing only when dependencies change.'
    },
    {
      question: 'Which Hook returns a memoized version of a callback function?',
      options: ['useCallback', 'useMemo', 'useState', 'useLayoutEffect'],
      correct: 0,
      explanation: 'useCallback returns a memoized function reference, preventing child components from re-rendering due to changed function references.'
    },
    {
      question: 'What is prop drilling?',
      options: ['Passing props down through multiple layers of nested components to reach a deeply nested child', 'Injecting props directly into the DOM nodes', 'Verifying prop typing using TypeScript', 'Deleting props during project build'],
      correct: 0,
      explanation: 'Prop drilling occurs when props must pass through intermediate components that do not need the data, simply to reach lower nodes.'
    },
    {
      question: 'Which React feature helps solve prop drilling by sharing global state across components?',
      options: ['Context API / useContext', 'useRef Hook', 'props propagation', 'conditional rendering'],
      correct: 0,
      explanation: 'The Context API provides a way to pass data through the component tree without manually drilling props at every level.'
    },
    {
      question: 'How do you render an element conditionally in React JSX?',
      options: ['Using ternary operators or logical && short-circuiting', 'Using standard IF/ELSE statements inline directly', 'Writing separate CSS visibility rules', 'Through looping structures only'],
      correct: 0,
      explanation: 'JSX supports inline JS expressions like ternary operators (`condition ? <A /> : <B />`) or logical AND (`condition && <A />`).'
    }
  ]
};

export const gsapQuestions = {
  title: 'GSAP',
  easy: [
    {
      question: 'What does GSAP stand for?',
      options: ['GreenSock Animation Platform', 'Global System of Animation Parameters', 'Graphic Styling and Aesthetic Patterns', 'General Scroll Animation Plugin'],
      correct: 0,
      explanation: 'GSAP stands for GreenSock Animation Platform, a robust industry-standard JavaScript animation library.'
    },
    {
      question: 'Which GSAP method is used to animate an object FROM its current state TO a target state?',
      options: ['gsap.to()', 'gsap.from()', 'gsap.fromTo()', 'gsap.set()'],
      correct: 0,
      explanation: 'gsap.to() animates target elements from their current styles to the values specified in the vars object.'
    },
    {
      question: 'Which GSAP method animates an object FROM target values TO its current baseline state?',
      options: ['gsap.from()', 'gsap.to()', 'gsap.set()', 'gsap.fromTo()'],
      correct: 0,
      explanation: 'gsap.from() animates backward, initializing elements with target values and animating back to natural styles.'
    },
    {
      question: 'Which GSAP method sets properties instantly without any animation transition?',
      options: ['gsap.set()', 'gsap.to()', 'gsap.fromTo()', 'gsap.kill()'],
      correct: 0,
      explanation: 'gsap.set() applies values immediately, representing a zero-duration tween.'
    },
    {
      question: 'What is a GSAP Timeline used for?',
      options: ['Grouping and sequencing multiple animations in chronological order', 'Tracking project version releases', 'Timing database requests', 'Measuring website load performance'],
      correct: 0,
      explanation: 'gsap.timeline() creates a container to schedule, sequence, and manage collections of tweens easily.'
    },
    {
      question: 'Which parameter controls the rate of change of an animation over time (acceleration/deceleration)?',
      options: ['ease', 'duration', 'stagger', 'delay'],
      correct: 0,
      explanation: 'The "ease" property dictates the speed curve of the animation (e.g. "power2.out", "elastic").'
    },
    {
      question: 'How do you delay the start of a GSAP animation?',
      options: ['Using the delay property in the vars object', 'Calling a setTimeout function only', 'Calling gsap.wait()', 'Using CSS transition-delay property'],
      correct: 0,
      explanation: 'You pass "delay: seconds" in the configuration object to postpone tween execution.'
    },
    {
      question: 'What is the default duration of a GSAP tween if not specified?',
      options: ['0.5 seconds', '1 second', '0.1 second', '2 seconds'],
      correct: 0,
      explanation: 'If omit, GSAP defaults tween duration to 0.5 seconds.'
    },
    {
      question: 'Which GSAP feature offsets the start times of an animation across multiple target elements?',
      options: ['stagger', 'delay', 'repeat', 'timeline'],
      correct: 0,
      explanation: 'The "stagger" property creates a cascading effect by adding intervals between the start times of multiple targets.'
    },
    {
      question: 'How do you make a GSAP animation loop infinitely?',
      options: ['repeat: -1', 'repeat: true', 'loop: infinite', 'loop: -1'],
      correct: 0,
      explanation: 'Setting "repeat: -1" tells GSAP to repeat the animation indefinitely.'
    },
    {
      question: 'What does yoyo: true do in GSAP configuration?',
      options: ['Makes the animation play in reverse on alternate loops (backward/forward)', 'Enables bouncy gravity physics', 'Scales the element up and down', 'Applies random horizontal swing motions'],
      correct: 0,
      explanation: 'When yoyo is set to true alongside a repeat value, the tween alternates directions on successive runs.'
    },
    {
      question: 'Which GSAP plugin is widely used to link animations directly to scroll progression?',
      options: ['ScrollTrigger', 'ScrollToPlugin', 'Draggable', 'MotionPathPlugin'],
      correct: 0,
      explanation: 'ScrollTrigger allows developers to trigger and scrub GSAP animations based on scroll coordinates.'
    },
    {
      question: 'How do you import and register a GSAP plugin in code?',
      options: ['gsap.registerPlugin(ScrollTrigger)', 'gsap.use(ScrollTrigger)', 'gsap.plugin(ScrollTrigger)', 'import ScrollTrigger from GSAP'],
      correct: 0,
      explanation: 'Plugins must be registered via "gsap.registerPlugin(PluginName)" to prevent bundle treeshaking issues.'
    },
    {
      question: 'What is the scrub property in ScrollTrigger used for?',
      options: ['Links animation progression directly to the scrollbar movement', 'Cleans the browser cache on scroll', 'Triggers animations at scroll endings only', 'Animates elements sideways'],
      correct: 0,
      explanation: 'Setting "scrub: true" (or numeric lag times) binds tween progress directly to scroll positioning.'
    },
    {
      question: 'What does pin: true do in ScrollTrigger config?',
      options: ['Locks/freezes the target element in place during scroll animation', 'Pins a map pin on the viewport', 'Saves the element position to localStorage', 'Prevents scrollbars from moving'],
      correct: 0,
      explanation: 'Pinning locks the target element in place during scroll, preventing it from scrolling off-screen while animations run.'
    },
    {
      question: 'How do you clean up or cancel a GSAP animation in React component unmount?',
      options: ['tween.kill() or gsap.context() cleanup', 'delete gsap', 'gsap.stopAll()', 'window.reload()'],
      correct: 0,
      explanation: 'Calling tween.kill() terminates the tween. In React, gsap.context() is highly recommended to clean up all animations at once.'
    },
    {
      question: 'Which property in the vars object executes code when a tween completes?',
      options: ['onComplete', 'onStart', 'onUpdate', 'callback'],
      correct: 0,
      explanation: 'onComplete is a callback function that runs as soon as the animation completes.'
    },
    {
      question: 'What does the "defaults" setting in a GSAP timeline do?',
      options: ['Sets shared fallback values (like ease, duration) for all child tweens', 'Restores the browser layout configurations', 'Installs default CSS animation parameters', 'Resets scroll positions'],
      correct: 0,
      explanation: 'Passing "defaults: { ... }" in the timeline constructor automatically inherits those settings to child tweens, reducing code duplication.'
    },
    {
      question: 'Which of the following coordinates values animates translation on the X-axis in GSAP?',
      options: ['x', 'left', 'translateX', 'translateXVal'],
      correct: 0,
      explanation: 'GSAP uses shorthand "x" to animate CSS transform: translateX() efficiently.'
    },
    {
      question: 'Which of the following coordinates values animates translation on the Y-axis in GSAP?',
      options: ['y', 'top', 'translateY', 'translateYVal'],
      correct: 0,
      explanation: 'GSAP uses shorthand "y" to animate CSS transform: translateY().'
    },
    {
      question: 'Which property adjusts rotation in GSAP?',
      options: ['rotation', 'rotate', 'deg', 'angle'],
      correct: 0,
      explanation: 'The "rotation" key animates 2D rotation of elements (measured in degrees).'
    },
    {
      question: 'How do you target multiple elements in a single GSAP tween?',
      options: ['Pass a CSS selector string matching multiple elements (like ".box")', 'Pass an array of DOM nodes', 'All of these', 'None of these'],
      correct: 2,
      explanation: 'GSAP accepts CSS selector strings, arrays of elements, or direct DOM node references.'
    },
    {
      question: 'What represents the target of an animation in gsap.to(".logo", { duration: 1 })?',
      options: ['The element(s) matching class ".logo"', 'The timeline wrapper', 'The browser viewport', 'None of these'],
      correct: 0,
      explanation: 'The first parameter of GSAP tweens defines the target selector or element.'
    },
    {
      question: 'What is the purpose of ScrollToPlugin in GSAP?',
      options: ['Enables smooth scrolling to specific anchor targets or scroll positions', 'Measures scroll speeds', 'Triggers screen zoom animations', 'Saves scroll locations to cookies'],
      correct: 0,
      explanation: 'ScrollToPlugin allows animating window or div scroll coordinates to specific points.'
    },
    {
      question: 'What is the ease type "none" called in GSAP?',
      options: ['linear', 'power0.out', 'constant', 'steady'],
      correct: 0,
      explanation: 'An animation with no acceleration/deceleration is called a linear ease ("none").'
    },
    {
      question: 'What does gsap.fromTo() do?',
      options: ['Allows defining BOTH start values and end values for a tween', 'Sets an animation loop from start to end', 'Reverts a completed animation', 'Runs two animations in parallel'],
      correct: 0,
      explanation: 'gsap.fromTo() lets you explicitly define the exact starting styles and ending styles, ignoring current element states.'
    },
    {
      question: 'Which callback triggers on every frame update of a GSAP tween?',
      options: ['onUpdate', 'onStart', 'onComplete', 'onFrame'],
      correct: 0,
      explanation: 'onUpdate runs on every tick/frame of the animation, useful for updating canvas or WebGL scenes.'
    },
    {
      question: 'Which utility helps convert percentages or coordinates in GSAP?',
      options: ['gsap.utils', 'gsap.math', 'gsap.helper', 'gsap.tools'],
      correct: 0,
      explanation: 'gsap.utils provides helpful functions like pipe, wrap, mapRange, interpolate, and random.'
    },
    {
      question: 'Which ease type starts slowly and accelerates at the end?',
      options: ['easeIn', 'easeOut', 'easeInOut', 'linear'],
      correct: 0,
      explanation: 'An "easeIn" curve starts slow and gains speed toward the target value.'
    },
    {
      question: 'Which ease type starts quickly and decelerates at the end?',
      options: ['easeOut', 'easeIn', 'easeInOut', 'none'],
      correct: 0,
      explanation: 'An "easeOut" curve starts fast and slows down at the end, providing a natural deceleration feel.'
    }
  ]
};

export const lenisQuestions = {
  title: 'Lenis',
  easy: [
    {
      question: 'What is Lenis?',
      options: ['A lightweight, high-performance smooth scroll library', 'A CSS compilation engine', 'An SVG layout builder', 'A server routing plugin'],
      correct: 0,
      explanation: 'Lenis is a popular open-source, lightweight smooth scrolling library designed to normalize and smooth scroll behavior across devices.'
    },
    {
      question: 'Who developed the Lenis scroll library?',
      options: ['Studio Freight (Darkroom)', 'Meta developers', 'Google Chrome team', 'Vercel designers'],
      correct: 0,
      explanation: 'Lenis is created and maintained by Studio Freight (now Darkroom).'
    },
    {
      question: 'What is the primary benefit of using Lenis smooth scroll on a webpage?',
      options: ['Normalizes scrolling mechanics and enables smooth, scroll-based animations', 'Speeds up server response time', 'Compiles JavaScript modules faster', 'Validates form inputs automatically'],
      correct: 0,
      explanation: 'Lenis smooths scroll movements, allowing scroll-driven animations (like GSAP ScrollTrigger) to look incredibly fluid.'
    },
    {
      question: 'How do you initialize a basic Lenis instance in JS?',
      options: ['const lenis = new Lenis()', 'const lenis = Lenis.init()', 'const lenis = startLenis()', 'const lenis = createScroll()'],
      correct: 0,
      explanation: 'To set up Lenis, you instantiate the constructor: "const lenis = new Lenis()".'
    },
    {
      question: 'Which method must be called repeatedly inside a requestAnimationFrame loop to update Lenis scroll positions?',
      options: ['lenis.raf(time)', 'lenis.update()', 'lenis.scroll()', 'lenis.tick()'],
      correct: 0,
      explanation: 'Lenis relies on a Request Animation Frame (RAF) loop, requiring "lenis.raf(time)" to calculate scroll steps.'
    },
    {
      question: 'How do you destroy a Lenis instance to release memory?',
      options: ['lenis.destroy()', 'lenis.kill()', 'lenis.close()', 'delete lenis'],
      correct: 0,
      explanation: 'lenis.destroy() cleans up event listeners and kills the scroll instance, useful on React component unmount.'
    },
    {
      question: 'Which property in the Lenis configuration controls scroll responsiveness/inertia weight?',
      options: ['lerp', 'duration', 'smoothTouch', 'infinite'],
      correct: 0,
      explanation: 'The "lerp" property (Linear Interpolation) accepts values between 0 and 1, determining how fast the scroll catches up to the wheel input.'
    },
    {
      question: 'What is the default value of lerp in Lenis if not specified?',
      options: ['0.1', '0.5', '1', '0.05'],
      correct: 0,
      explanation: 'Lenis defaults lerp to 0.1, offering a balanced smooth scroll speed.'
    },
    {
      question: 'Which property in Lenis config enables smooth scrolling on touch screens (smartphones)?',
      options: ['smoothTouch', 'lerp', 'touchSmooth', 'mobileScroll'],
      correct: 0,
      explanation: 'Setting "smoothTouch: true" (or enabling mobile options) smooths scroll events generated by swipe gestures.'
    },
    {
      question: 'What is the callback event listener name used to track scroll coordinates in Lenis?',
      options: ['lenis.on("scroll", callback)', 'lenis.scroll(callback)', 'lenis.listen(callback)', 'lenis.scrollEvent = callback'],
      correct: 0,
      explanation: 'You listen to scroll events using "lenis.on(\'scroll\', (e) => { ... })" which provides details like scroll velocity, direction, and coordinates.'
    },
    {
      question: 'How do you scroll to a specific coordinate or DOM element using Lenis?',
      options: ['lenis.scrollTo(target)', 'lenis.scroll(target)', 'lenis.goTo(target)', 'lenis.moveTo(target)'],
      correct: 0,
      explanation: 'The lenis.scrollTo() method smoothly animates the scroll position to target coordinates, anchors, or elements.'
    },
    {
      question: 'How do you temporarily stop/freeze the Lenis scroll?',
      options: ['lenis.stop()', 'lenis.lock()', 'lenis.freeze()', 'lenis.pause()'],
      correct: 0,
      explanation: 'Calling lenis.stop() disables scroll inputs, freezing the page position. Useful for modal popups.'
    },
    {
      question: 'How do you resume Lenis scrolling after calling lenis.stop()?',
      options: ['lenis.start()', 'lenis.resume()', 'lenis.unlock()', 'lenis.play()'],
      correct: 0,
      explanation: 'lenis.start() re-enables scroll controls and listener events.'
    },
    {
      question: 'Which option in the scrollTo() method controls the animation duration in seconds?',
      options: ['duration', 'speed', 'time', 'lerp'],
      correct: 0,
      explanation: 'You pass "duration: seconds" inside the scrollTo config object to control the scrolling animation length.'
    },
    {
      question: 'What does lenis.direction represent in a scroll callback event data?',
      options: ['The scroll direction: 1 for down, -1 for up', 'The scroll speed velocity', 'The horizontal vs vertical angle', 'The browser screen orientation'],
      correct: 0,
      explanation: 'The event parameter direction returns 1 when scrolling downward, and -1 when scrolling upward.'
    },
    {
      question: 'Which property in Lenis config makes scrolling loop endlessly?',
      options: ['infinite: true', 'loop: true', 'endless: true', 'repeat: -1'],
      correct: 0,
      explanation: 'Setting "infinite: true" allows wrapping page scrolling from bottom to top and vice-versa.'
    },
    {
      question: 'Does Lenis require any CSS dependencies to work correctly?',
      options: ['Yes, a basic recommended layout stylesheet to normalize scroll behavior', 'No, it is strictly pure JS', 'Yes, it requires Bootstrap CSS', 'Yes, it only works with Tailwind CSS'],
      correct: 0,
      explanation: 'Lenis recommends adding specific layout styling rules (like html.lenis { height: auto; } or .lenis-smooth) to optimize browser compatibility.'
    },
    {
      question: 'What is virtual scrolling in relation to Lenis?',
      options: ['Calculates scroll inputs programmatically, manually translating the wrapper viewport via CSS transforms', 'Rendering elements only when visible', 'A VR headset controller scroll mechanism', 'A background thread scroll simulation'],
      correct: 0,
      explanation: 'Lenis intercepts native scroll signals and translates them into smooth mathematical coordinate steps, updating DOM positions.'
    },
    {
      question: 'Which element is scrolled by default if no wrapper element is specified in Lenis options?',
      options: ['window', 'body', 'document.documentElement', 'All of these'],
      correct: 0,
      explanation: 'By default, Lenis operates smooth scroll calculations on the main window viewport.'
    },
    {
      question: 'Which property in Lenis config enables smooth scrolling inside specific scrollable divs instead of the main page?',
      options: ['wrapper', 'content', 'container', 'scrollParent'],
      correct: 0,
      explanation: 'The "wrapper" option defines the outer scrollable container element, and "content" defines the inner content container.'
    },
    {
      question: 'What does lenis.velocity represent in scroll event callback data?',
      options: ['The current scroll speed rate', 'The direction of scrolling', 'The pixel offset from the top', 'The loading speed of CSS assets'],
      correct: 0,
      explanation: 'The velocity property outputs the current speed of scrolling in pixels per frame.'
    },
    {
      question: 'Is Lenis compatible with GSAP ScrollTrigger?',
      options: ['Yes, they work perfectly together to create high-end animations', 'No, they clash and cause rendering loops', 'Yes, but only on Safari browsers', 'No, GSAP has its own built-in smooth scroll that overrides it'],
      correct: 0,
      explanation: 'Lenis is explicitly designed to be fully compatible with GSAP ScrollTrigger, creating clean scroll-scrub animations.'
    },
    {
      question: 'How do you coordinate Lenis scroll events with GSAP ScrollTrigger?',
      options: ['Update ScrollTrigger on Lenis scroll events', 'Inject GSAP timeline directly into Lenis', 'Register Lenis as a GSAP plugin', 'No coordination is needed at all'],
      correct: 0,
      explanation: 'Adding "lenis.on(\'scroll\', ScrollTrigger.update)" synchronizes ScrollTrigger with the custom scroll coordinates calculated by Lenis.'
    },
    {
      question: 'What happens to browser scroll anchors (like hash tags #section) when using Lenis?',
      options: ['They still work, but need manual event handling for smooth transitions', 'They are completely disabled', 'They trigger a full browser refresh', 'They bypass Lenis completely and run jerky'],
      correct: 0,
      explanation: 'Native anchors work but might snap. Developers use lenis.scrollTo("#target") in click handlers for a smooth scroll transition.'
    },
    {
      question: 'Can you override wheel events inside a specific element to bypass Lenis smooth scroll?',
      options: ['Yes, by adding the "data-lenis-prevent" attribute on the container element', 'No, Lenis captures all events globally', 'Yes, by uninstalling Lenis dynamically', 'Yes, by setting scroll-behavior: smooth in CSS'],
      correct: 0,
      explanation: 'Adding the HTML attribute `data-lenis-prevent` on an element (like an iframe or scrollable map) stops Lenis from smoothing its wheel input.'
    },
    {
      question: 'What is the package name used to install Lenis via npm?',
      options: ['@studio-freight/lenis', 'lenis-scroll', 'smooth-lenis', 'gsap-lenis'],
      correct: 0,
      explanation: 'The standard npm package registry path for Lenis is `@studio-freight/lenis` (or modern `@darkroom.engineering/lenis`).'
    },
    {
      question: 'Which method returns the current scroll coordinates of a Lenis instance?',
      options: ['lenis.scroll', 'lenis.getScroll()', 'lenis.y', 'lenis.getOffset()'],
      correct: 0,
      explanation: 'The property `lenis.scroll` contains the current scroll position value.'
    },
    {
      question: 'What does the easing configuration option in Lenis do?',
      options: ['Customizes the velocity speed curve function for scrolling (e.g. cubic bezier)', 'Locks scrolling coordinates', 'Sets default CSS fonts', 'Clears GPU render buffers'],
      correct: 0,
      explanation: 'The "easing" setting accepts a mathematical function defining the scroll movement acceleration/deceleration curve.'
    },
    {
      question: 'Which wheel event property does Lenis monitor to calculate scrolling inputs?',
      options: ['deltaY', 'clientY', 'screenY', 'pageY'],
      correct: 0,
      explanation: 'Lenis listens to mouse wheel inputs, reading `deltaY` to compute scroll distance and speed.'
    },
    {
      question: 'Why is Lenis preferred over CSS scroll-behavior: smooth for scroll animations?',
      options: ['CSS smooth scroll does not support custom easing, scrubbing, or timeline integration', 'CSS smooth scroll is not supported by any browser', 'Lenis is faster to download', 'Lenis is written in assembly language'],
      correct: 0,
      explanation: 'CSS smooth scroll only affects clicking anchors, whereas Lenis intercepts all scrolling gestures, allowing timeline synchronization.'
    }
  ]
};

export const cLangQuestions = {
  title: 'C',
  easy: [
    {
      question: 'Who developed the C programming language?',
      options: ['Dennis Ritchie', 'Bjarne Stroustrup', 'James Gosling', 'Guido van Rossum'],
      correct: 0,
      explanation: 'C was developed by Dennis Ritchie at Bell Labs in the early 1970s.'
    },
    {
      question: 'Which file extension is used for C source files?',
      options: ['.c', '.cpp', '.h', '.obj'],
      correct: 0,
      explanation: 'C program source code files are saved with a `.c` extension.'
    },
    {
      question: 'Which of the following is the correct structure of the main function in C?',
      options: ['int main() { return 0; }', 'void main() { return 0; }', 'main{}', 'function main()'],
      correct: 0,
      explanation: 'The standard entry point in C is "int main()", returning 0 to signify successful execution.'
    },
    {
      question: 'Which keyword is used to declare a constant variable in C?',
      options: ['const', 'constant', 'final', 'define'],
      correct: 0,
      explanation: 'The "const" keyword prevents variables from being modified after declaration.'
    },
    {
      question: 'What is the correct format specifier for printing an integer in C?',
      options: ['%d', '%f', '%c', '%s'],
      correct: 0,
      explanation: '%d is the format specifier for decimal integers in C input/output functions.'
    },
    {
      question: 'What is the correct format specifier for printing a float in C?',
      options: ['%f', '%d', '%c', '%s'],
      correct: 0,
      explanation: '%f is used as the format specifier for floating-point numbers.'
    },
    {
      question: 'What is the format specifier for printing a single character in C?',
      options: ['%c', '%s', '%d', '%f'],
      correct: 0,
      explanation: '%c is the format specifier for printing single characters.'
    },
    {
      question: 'What is the format specifier for printing a string in C?',
      options: ['%s', '%c', '%str', '%d'],
      correct: 0,
      explanation: '%s is the format specifier for outputting character arrays (strings).'
    },
    {
      question: 'How do you insert a single-line comment in C?',
      options: ['// comment', '/* comment */', '# comment', '-- comment'],
      correct: 0,
      explanation: '// is used for single-line comments in modern C/C++.'
    },
    {
      question: 'Which function is used to write formatted output to the console in C?',
      options: ['printf()', 'scanf()', 'print()', 'cout'],
      correct: 0,
      explanation: 'printf() (print formatted) is the standard output function in the stdio.h library.'
    },
    {
      question: 'Which standard library header file contains printf() and scanf() declarations?',
      options: ['stdio.h', 'conio.h', 'string.h', 'math.h'],
      correct: 0,
      explanation: 'stdio.h (Standard Input Output header) contains the declarations for input/output functions.'
    },
    {
      question: 'Which function is used to read formatted input from the keyboard in C?',
      options: ['scanf()', 'printf()', 'input()', 'cin'],
      correct: 0,
      explanation: 'scanf() reads formatted values from the standard input stream.'
    },
    {
      question: 'What is a pointer in C?',
      options: ['A variable that stores the memory address of another variable', 'A symbol pointing to data structures', 'An index value of an array', 'A code compiling warning'],
      correct: 0,
      explanation: 'Pointers are special variables that store raw memory addresses of other variables.'
    },
    {
      question: 'Which operator is used to get the address of a variable in C?',
      options: ['&', '*', '->', '.'],
      correct: 0,
      explanation: 'The address-of operator (&) returns the memory location of a variable.'
    },
    {
      question: 'Which operator is used to dereference a pointer (retrieve value at address)?',
      options: ['*', '&', '->', '.'],
      correct: 0,
      explanation: 'The asterisk (*) operator dereferences pointers to access values stored at the address.'
    },
    {
      question: 'What is the index of the first element in a C array?',
      options: ['0', '1', '-1', 'any value'],
      correct: 0,
      explanation: 'Arrays in C are 0-indexed, meaning the first element resides at index 0.'
    },
    {
      question: 'Which keyword is used to define a custom structure in C?',
      options: ['struct', 'class', 'union', 'typedef'],
      correct: 0,
      explanation: 'The "struct" keyword defines custom, user-defined structures of heterogeneous variables.'
    },
    {
      question: 'What is a Union in C?',
      options: ['A data type where all members share the same memory location', 'A collection of structures grouped together', 'A framework for database queries', 'A compiler macro definition'],
      correct: 0,
      explanation: 'Unions allow storing different data types in the same memory location, taking the size of the largest member.'
    },
    {
      question: 'What represents the size of an int data type on standard 32-bit/64-bit systems in C?',
      options: ['4 bytes', '2 bytes', '1 byte', '8 bytes'],
      correct: 0,
      explanation: 'Integers typically occupy 4 bytes of memory on standard modern compilers.'
    },
    {
      question: 'What represents the size of a char data type in C?',
      options: ['1 byte', '2 bytes', '4 bytes', '8 bytes'],
      correct: 0,
      explanation: 'A char (character) data type is guaranteed to be 1 byte in size.'
    },
    {
      question: 'Which keyword is used to allocate memory dynamically on the heap in C?',
      options: ['malloc', 'new', 'alloc', 'heap'],
      correct: 0,
      explanation: 'malloc() (memory allocation) allocates specified bytes on the heap, returning a void pointer.'
    },
    {
      question: 'Which function is used to free dynamically allocated heap memory in C?',
      options: ['free()', 'delete()', 'clear()', 'release()'],
      correct: 0,
      explanation: 'free() releases heap allocations back to the system to prevent memory leaks.'
    },
    {
      question: 'What value represents boolean false in C (prior to C99 _Bool)?',
      options: ['0', '1', 'any non-zero value', 'null'],
      correct: 0,
      explanation: 'Historically, C treats 0 as false, and any non-zero integer value as true.'
    },
    {
      question: 'Which loop is guaranteed to execute at least once?',
      options: ['do-while loop', 'while loop', 'for loop', 'none of these'],
      correct: 0,
      explanation: 'A do-while loop evaluates its condition after running the loop body, guaranteeing at least one execution.'
    },
    {
      question: 'What does the break statement do inside a loop in C?',
      options: ['Terminates the loop immediately and jumps to subsequent code', 'Skips the current iteration and goes to next loop check', 'Suspends system execution', 'Resets loop counter variables'],
      correct: 0,
      explanation: 'The break statement exits the innermost loop or switch block immediately.'
    },
    {
      question: 'What does the continue statement do inside a loop in C?',
      options: ['Skips the remaining body code and proceeds directly to the next iteration loop check', 'Exits the loop entirely', 'Restarts the entire main function', 'Clears local stack frames'],
      correct: 0,
      explanation: 'The continue statement skips the rest of the current iteration loop body and triggers the next condition check.'
    },
    {
      question: 'Which of the following defines a string in C?',
      options: ['An array of characters terminated by a null character \\0', 'A special native String object', 'A collection of integers', 'A file descriptor pointer'],
      correct: 0,
      explanation: 'C does not have a native string class; strings are character arrays terminating with the null character (`\\0`).'
    },
    {
      question: 'What is the purpose of the typedef keyword in C?',
      options: ['Allows users to define custom alias names for existing data types', 'Defines a structural class', 'Checks compiler configurations', 'Performs dynamic memory allocations'],
      correct: 0,
      explanation: 'The "typedef" keyword creates new alias names for types (e.g. typedef unsigned long ulong).'
    },
    {
      question: 'What is standard return value of main function representing an error?',
      options: ['Non-zero value (usually 1 or -1)', '0', 'Null pointer', 'Boolean false'],
      correct: 0,
      explanation: 'While returning 0 represents success, returning any non-zero value indicates error or failures.'
    },
    {
      question: 'Which header file contains math library functions like sqrt() and pow()?',
      options: ['math.h', 'stdio.h', 'stdlib.h', 'maths.h'],
      correct: 0,
      explanation: 'math.h provides mathematical operations and functions.'
    }
  ]
};

export const cppQuestions = {
  title: 'C++',
  easy: [
    {
      question: 'Who created the C++ programming language?',
      options: ['Bjarne Stroustrup', 'Dennis Ritchie', 'James Gosling', 'Linus Torvalds'],
      correct: 0,
      explanation: 'Bjarne Stroustrup designed C++ at Bell Labs during the late 1970s as an extension of C.'
    },
    {
      question: 'Which file extension is standard for C++ source files?',
      options: ['.cpp', '.c', '.h', '.ccp'],
      correct: 0,
      explanation: '.cpp is the standard extension for C++ source code files.'
    },
    {
      question: 'What represents the standard output stream in C++?',
      options: ['std::cout', 'std::cin', 'printf', 'System.out.println'],
      correct: 0,
      explanation: 'std::cout (character output stream) is the standard output stream in C++.'
    },
    {
      question: 'What is the insertion operator used alongside std::cout?',
      options: ['<<', '>>', '::', '->'],
      correct: 0,
      explanation: 'The insertion operator (<<) pushes data into the output stream.'
    },
    {
      question: 'What is the extraction operator used alongside std::cin?',
      options: ['>>', '<<', '::', '.'],
      correct: 0,
      explanation: 'The extraction operator (>>) reads data from the input stream std::cin.'
    },
    {
      question: 'Which header file must be included to use cout and cin in C++?',
      options: ['<iostream>', '<stdio.h>', '<conio.h>', '<ostream>'],
      correct: 0,
      explanation: '<iostream> contains declarations for standard input/output stream objects.'
    },
    {
      question: 'What is standard namespace used for utility headers in C++?',
      options: ['std', 'main', 'cpp', 'io'],
      correct: 0,
      explanation: 'std (standard) is the namespace containing the C++ Standard Library classes and utilities.'
    },
    {
      question: 'What is a Class in C++?',
      options: ['A user-defined blueprint/template containing data members and functions', 'An array of strings', 'A database connection table', 'A compiler compiler utility'],
      correct: 0,
      explanation: 'Classes define custom data types containing variables (attributes) and methods (behaviors).'
    },
    {
      question: 'What is an Object in C++?',
      options: ['An instance of a class', 'A compiled executable file', 'A pointer address value', 'A custom header file'],
      correct: 0,
      explanation: 'An object is a concrete, memory-allocated instantiation of a class template.'
    },
    {
      question: 'Which constructor is called automatically when an object is instantiated without arguments?',
      options: ['Default Constructor', 'Copy Constructor', 'Parameterized Constructor', 'Destructor'],
      correct: 0,
      explanation: 'The Default Constructor is invoked automatically when creating an object without passing parameters.'
    },
    {
      question: 'Which member function is called automatically when an object goes out of scope and is destroyed?',
      options: ['Destructor', 'Constructor', 'Deallocator', 'Finalizer'],
      correct: 0,
      explanation: 'Destructors (prefixed with `~`) handle cleanup actions when an object\'s lifecycle ends.'
    },
    {
      question: 'Which OOP concept refers to combining variables and functions into a single class unit?',
      options: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction'],
      correct: 0,
      explanation: 'Encapsulation wraps data and operations inside a class, shielding inner states from direct outside access.'
    },
    {
      question: 'Which OOP concept allows a new class to acquire properties and methods of an existing class?',
      options: ['Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction'],
      correct: 0,
      explanation: 'Inheritance enables a derived class to reuse and extend code defined in a base class.'
    },
    {
      question: 'Which access specifier makes members accessible only inside the class and its derived classes?',
      options: ['protected', 'private', 'public', 'friend'],
      correct: 0,
      explanation: '"protected" restricts access to the declaring class and its child subclasses.'
    },
    {
      question: 'Which access specifier limits member accessibility strictly to the declaring class itself?',
      options: ['private', 'protected', 'public', 'internal'],
      correct: 0,
      explanation: '"private" hidden members cannot be read or written outside the class body.'
    },
    {
      question: 'What operator is used to allocate dynamic memory on the heap in C++?',
      options: ['new', 'malloc', 'alloc', 'create'],
      correct: 0,
      explanation: 'The "new" operator allocates memory on the heap and runs constructor initialization.'
    },
    {
      question: 'What operator is used to deallocate memory allocated with the new operator in C++?',
      options: ['delete', 'free', 'release', 'remove'],
      correct: 0,
      explanation: 'The "delete" operator runs destructors and frees heap memory allocated via "new".'
    },
    {
      question: 'How do you allocate a dynamic array of integers using the new operator?',
      options: ['int* arr = new int[size];', 'int* arr = new int(size);', 'int arr[] = new int[size];', 'int* arr = malloc(size * sizeof(int));'],
      correct: 0,
      explanation: 'The bracket syntax `new int[size]` allocates contiguous array elements on the heap.'
    },
    {
      question: 'How do you delete a dynamically allocated array in C++?',
      options: ['delete[] arr;', 'delete arr;', 'free(arr);', 'delete arr[];'],
      correct: 0,
      explanation: 'You must use the bracket delete syntax `delete[]` when freeing dynamic arrays to trigger destructors on all elements.'
    },
    {
      question: 'What is the size of the bool data type in C++ (typically)?',
      options: ['1 byte', '1 bit', '2 bytes', '4 bytes'],
      correct: 0,
      explanation: 'A boolean variable typically occupies 1 byte of addressable memory.'
    },
    {
      question: 'Which C++ keyword declares a function that can be overridden in a derived class?',
      options: ['virtual', 'override', 'abstract', 'polymorphic'],
      correct: 0,
      explanation: 'Declaring a base class method "virtual" enables dynamic dispatch/polymorphism, allowing derived classes to override it.'
    },
    {
      question: 'What represents a class with at least one pure virtual function in C++?',
      options: ['Abstract Class', 'Interface Class', 'Concrete Class', 'Static Class'],
      correct: 0,
      explanation: 'An abstract class cannot be instantiated directly and serves to define interfaces for subclasses.'
    },
    {
      question: 'What is the syntax for a pure virtual function declaration?',
      options: ['virtual void draw() = 0;', 'virtual void draw();', 'void draw() = abstract;', 'abstract void draw();'],
      correct: 0,
      explanation: 'A virtual function set to `= 0` defines a pure virtual function, making the enclosing class abstract.'
    },
    {
      question: 'Which STL container represents a dynamic, automatically-resizing array?',
      options: ['std::vector', 'std::list', 'std::array', 'std::forward_list'],
      correct: 0,
      explanation: 'std::vector is a sequence container managing a dynamically sized array under the hood.'
    },
    {
      question: 'How do you insert an element at the end of a std::vector in C++?',
      options: ['vec.push_back(value);', 'vec.add(value);', 'vec.insert(value);', 'vec.append(value);'],
      correct: 0,
      explanation: 'The `.push_back()` method appends elements to the end of vectors.'
    },
    {
      question: 'What represents the scope resolution operator in C++?',
      options: ['::', ':', '->', '.'],
      correct: 0,
      explanation: 'The double colon (::) is the scope resolution operator, used to specify namespaces or class scopes.'
    },
    {
      question: 'What is a Reference in C++?',
      options: ['An alias name for an existing variable', 'A pointer address variable', 'A code compiling warning', 'A documentation reference comment'],
      correct: 0,
      explanation: 'References (declared with `&`) act as alternative names for existing variables, avoiding copies during function calls.'
    },
    {
      question: 'What is standard library header for string objects in C++?',
      options: ['<string>', '<cstring>', '<string.h>', '<iostream>'],
      correct: 0,
      explanation: '<string> defines the modern std::string class template.'
    },
    {
      question: 'Which of the following represents function overloading?',
      options: ['Multiple functions in the same scope sharing the same name but having different parameter signatures', 'A function that executes too fast', 'Overwriting class files in build', 'A function returning multiple values'],
      correct: 0,
      explanation: 'Function overloading allows defining multiple variants of a function based on varying parameter counts or types.'
    },
    {
      question: 'What is the purpose of the inline keyword in C++?',
      options: ['Suggests the compiler to replace function calls directly with the function body code during compilation to reduce call overhead', 'Declares functions inside the main entry loop', 'Enables code style alignment', 'Compiles code in a single line'],
      correct: 0,
      explanation: 'Inline functions advise the compiler to expand code inline, bypassing function stack call overheads for short, fast operations.'
    }
  ]
};

export const phpQuestions = {
  title: 'PHP',
  easy: [
    {
      question: 'What does PHP stand for?',
      options: ['PHP: Hypertext Preprocessor', 'Personal Home Page', 'Private Hypertext Processor', 'Public Host Portal'],
      correct: 0,
      explanation: 'PHP is a recursive acronym standing for PHP: Hypertext Preprocessor.'
    },
    {
      question: 'Which character prefix designates variable names in PHP?',
      options: ['$', '@', '#', '&'],
      correct: 0,
      explanation: 'All variables in PHP start with the dollar sign ($).'
    },
    {
      question: 'Which file extension is standard for PHP files?',
      options: ['.php', '.html', '.php5', '.js'],
      correct: 0,
      explanation: '.php is the standard extension for PHP files.'
    },
    {
      question: 'What is the default delimiter tags for wrapping PHP code?',
      options: ['<?php ... ?>', '<script> ... </script>', '<? ... ?>', '<% ... %>'],
      correct: 0,
      explanation: 'PHP blocks are wrapped between `<?php` and `?>` tags.'
    },
    {
      question: 'Which statement is used to print text or data to the browser in PHP?',
      options: ['echo', 'print', 'Both echo and print', 'console.log'],
      correct: 2,
      explanation: 'Both "echo" and "print" output data, though echo is slightly faster as it does not return a value.'
    },
    {
      question: 'How do you insert a single-line comment in PHP?',
      options: ['// or #', '/* ... */', '--', '<!-- ... -->'],
      correct: 0,
      explanation: 'PHP supports C-style single-line comments (`//`) and Unix shell style comments (`#`).'
    },
    {
      question: 'Which superglobal array contains values submitted via HTTP GET requests?',
      options: ['$_GET', '$_POST', '$_REQUEST', '$_SERVER'],
      correct: 0,
      explanation: '$_GET is an associative array of variables passed to the current script via URL parameters.'
    },
    {
      question: 'Which superglobal array contains values submitted via HTTP POST requests?',
      options: ['$_POST', '$_GET', '$_REQUEST', '$_SESSION'],
      correct: 0,
      explanation: '$_POST is an associative array of variables passed via HTTP POST payload.'
    },
    {
      question: 'What does PHP\'s strlen() function do?',
      options: ['Returns the length of a string', 'Checks string characters', 'Converts string characters to uppercase', 'Slices strings'],
      correct: 0,
      explanation: 'strlen($string) returns the number of characters/bytes in a string.'
    },
    {
      question: 'Which function is used to check if a variable is set and is not NULL in PHP?',
      options: ['isset()', 'empty()', 'is_null()', 'check()'],
      correct: 0,
      explanation: 'isset() checks if a variable exists and has a value other than null.'
    },
    {
      question: 'How do you define a constant in PHP?',
      options: ['define() or const', 'constant()', '$const', 'let'],
      correct: 0,
      explanation: 'Constants can be defined using the define() function or the "const" keyword.'
    },
    {
      question: 'What is the concatenation operator for strings in PHP?',
      options: ['.', '+', '&', 'concat()'],
      correct: 0,
      explanation: 'PHP uses the dot (.) operator to join/concatenate two string variables.'
    },
    {
      question: 'Which function is used to redirect the browser to another page in PHP?',
      options: ['header("Location: url")', 'redirect("url")', 'window.location = url', 'href("url")'],
      correct: 0,
      explanation: 'The header() function sends raw HTTP headers to the browser, with "Location: url" causing a redirect.'
    },
    {
      question: 'What is the difference between require and include in PHP?',
      options: ['require stops execution on failure (fatal error), while include only throws a warning', 'include stops execution, require does not', 'They are exact duplicates', 'require is only used for classes'],
      correct: 0,
      explanation: 'Both load external files, but require throws a fatal compile-time E_COMPILE_ERROR and stops execution if the file cannot be loaded.'
    },
    {
      question: 'Which superglobal array stores session variables across different pages?',
      options: ['$_SESSION', '$_COOKIE', '$_SERVER', '$_REQUEST'],
      correct: 0,
      explanation: '$_SESSION is an associative array storing session data available across page requests.'
    },
    {
      question: 'Which function must be called at the very beginning of a script to enable session support in PHP?',
      options: ['session_start()', 'session_init()', 'start_session()', 'session_open()'],
      correct: 0,
      explanation: 'session_start() initializes a new session or resumes an existing one, sending session cookies.'
    },
    {
      question: 'How do you get the number of elements in an array in PHP?',
      options: ['count()', 'size()', 'length()', 'array_len()'],
      correct: 0,
      explanation: 'The count() function returns the total number of elements inside an array.'
    },
    {
      question: 'Which database driver extension is standard for connecting to MySQL in modern PHP?',
      options: ['PDO or mysqli', 'mysql', 'db_mysql', 'sqlite'],
      correct: 0,
      explanation: 'Modern PHP uses PDO (PHP Data Objects) or the mysqli (MySQL Improved) extension. The old mysql extension is deprecated and removed.'
    },
    {
      question: 'What does PDO stand for?',
      options: ['PHP Data Objects', 'Public Database Operation', 'Private Driver Option', 'Programmed Data Outputs'],
      correct: 0,
      explanation: 'PDO stands for PHP Data Objects, providing a database-access abstraction layer.'
    },
    {
      question: 'Which array type in PHP uses named string keys to store values?',
      options: ['Associative Array', 'Indexed Array', 'Multi-dimensional Array', 'Object Array'],
      correct: 0,
      explanation: 'Associative arrays use named string keys instead of numeric indices.'
    },
    {
      question: 'How do you create an array in PHP?',
      options: ['array() or [ ]', 'new Array()', 'create_array()', 'list()'],
      correct: 0,
      explanation: 'Arrays are declared using the array() construct or brackets [] (short array syntax).'
    },
    {
      question: 'Which function is used to hash passwords securely in PHP?',
      options: ['password_hash()', 'md5()', 'sha1()', 'hash()'],
      correct: 0,
      explanation: 'password_hash() is the recommended method to generate strong, secure, one-way bcrypt/argon2 hashes.'
    },
    {
      question: 'What represents the superglobal array $_SERVER?',
      options: ['An array containing headers, paths, and script locations', 'A list of registered users on the server', 'The database connection parameters', 'The server operating system files'],
      correct: 0,
      explanation: '$_SERVER holds server metadata, headers, client IP addresses, and script paths.'
    },
    {
      question: 'How do you delete a session variable in PHP?',
      options: ['unset($_SESSION["key"])', 'session_delete("key")', 'delete($_SESSION["key"])', 'session_clear()'],
      correct: 0,
      explanation: 'unset() is a core function used to delete specific keys/variables, including session indices.'
    },
    {
      question: 'How do you destroy an active PHP session completely?',
      options: ['session_destroy()', 'session_unset()', 'unset($_SESSION)', 'session_stop()'],
      correct: 0,
      explanation: 'session_destroy() destroys all data registered to the active session.'
    },
    {
      question: 'Which function encodes data into JSON format in PHP?',
      options: ['json_encode()', 'json_decode()', 'to_json()', 'serialize()'],
      correct: 0,
      explanation: 'json_encode($data) converts PHP values (like arrays or objects) into a JSON representation.'
    },
    {
      question: 'Which function decodes a JSON string into PHP variables?',
      options: ['json_decode()', 'json_encode()', 'from_json()', 'unserialize()'],
      correct: 0,
      explanation: 'json_decode($jsonString) parses JSON strings into PHP objects or associative arrays.'
    },
    {
      question: 'What is the default port for PHP built-in web server (e.g. php -S localhost:8000)?',
      options: ['8000', '80', '8080', '3000'],
      correct: 0,
      explanation: 'While configurable, developers commonly use port 8000 for PHP\'s built-in web server testing.'
    },
    {
      question: 'How do you write output directly inside HTML tags in PHP?',
      options: ['<?= $val ?> or <?php echo $val; ?>', '<? $val ?>', '<php>echo $val</php>', 'None of these'],
      correct: 0,
      explanation: '`<?= $val ?>` is the short-open echo tag syntax, equivalent to `<?php echo $val; ?>`.'
    },
    {
      question: 'Which function deletes a file from the server filesystem in PHP?',
      options: ['unlink()', 'delete()', 'remove()', 'rmfile()'],
      correct: 0,
      explanation: 'unlink($filepath) is the standard function used to delete files in PHP.'
    }
  ]
};

export const javaQuestions = {
  title: 'Java',
  easy: [
    {
      question: 'Which company originally created the Java programming language?',
      options: ['Sun Microsystems', 'Microsoft', 'Oracle', 'Apple'],
      correct: 0,
      explanation: 'Java was developed by James Gosling and his team at Sun Microsystems and released in 1995. Sun was later acquired by Oracle.'
    },
    {
      question: 'Which statement accurately describes Java\'s portability motto?',
      options: ['Write Once, Run Anywhere (WORA)', 'Compile Once, Run Everywhere', 'Code Locally, Execute Remotely', 'Write Free, Share Globally'],
      correct: 0,
      explanation: 'Java\'s primary goal is portability, enabling compiled bytecode to execute on any system with a JVM.'
    },
    {
      question: 'What is the virtual machine that executes compiled Java bytecode?',
      options: ['JVM (Java Virtual Machine)', 'JRE (Java Runtime Environment)', 'JDK (Java Development Kit)', 'JIT (Just In Time compiler)'],
      correct: 0,
      explanation: 'The JVM (Java Virtual Machine) translates compiled bytecode (.class files) into native machine instructions.'
    },
    {
      question: 'Which compiler tool compiles Java source code (.java) into bytecode (.class)?',
      options: ['javac', 'java', 'javadoc', 'jar'],
      correct: 0,
      explanation: '`javac` is the command-line Java compiler included in the JDK.'
    },
    {
      question: 'Which file extension is used for Java source code files?',
      options: ['.java', '.class', '.jar', '.js'],
      correct: 0,
      explanation: 'Java source files must be saved with a `.java` extension.'
    },
    {
      question: 'Which file extension is used for compiled Java bytecode files?',
      options: ['.class', '.java', '.jar', '.bin'],
      correct: 0,
      explanation: 'The compiler outputs `.class` files containing JVM bytecode.'
    },
    {
      question: 'What is the entry point method signature for all Java applications?',
      options: ['public static void main(String[] args)', 'public void main(String args[])', 'static void main()', 'void main()'],
      correct: 0,
      explanation: 'Java requires the exact signature "public static void main(String[] args)" as the starting point.'
    },
    {
      question: 'Which keyword is used to import classes or packages into a Java file?',
      options: ['import', 'include', 'require', 'package'],
      correct: 0,
      explanation: 'The "import" keyword makes classes from other packages available to your code.'
    },
    {
      question: 'What is the base class from which all classes in Java inherit (directly or indirectly)?',
      options: ['java.lang.Object', 'java.lang.Class', 'java.lang.System', 'Root'],
      correct: 0,
      explanation: '`java.lang.Object` is the root of the Java class hierarchy.'
    },
    {
      question: 'Which of the following is NOT a primitive data type in Java?',
      options: ['String', 'int', 'boolean', 'char'],
      correct: 0,
      explanation: 'String is a class (reference type) in Java, whereas int, boolean, and char are primitive types.'
    },
    {
      question: 'Which keyword is used to create a subclass or inherit from a class in Java?',
      options: ['extends', 'implements', 'inherits', 'extends class'],
      correct: 0,
      explanation: 'The "extends" keyword establishes class inheritance in Java.'
    },
    {
      question: 'Which keyword is used to inherit/implement an interface in Java?',
      options: ['implements', 'extends', 'implements interface', 'uses'],
      correct: 0,
      explanation: 'The "implements" keyword is used by classes to conform to interface contracts.'
    },
    {
      question: 'What does the final keyword do when applied to a class in Java?',
      options: ['Prevents the class from being subclassed (inherited)', 'Prevents the class from being instantiated', 'Makes all class methods private', 'Clears class memory'],
      correct: 0,
      explanation: 'A final class cannot be extended/inherited by another class.'
    },
    {
      question: 'What does the final keyword do when applied to a variable in Java?',
      options: ['Makes the variable a constant (cannot be reassigned)', 'Makes the variable private', 'Deletes the variable after use', 'Saves the variable to heap'],
      correct: 0,
      explanation: 'A final variable acts as a constant and cannot be reassigned once initialized.'
    },
    {
      question: 'What is the default value of a boolean instance variable in Java?',
      options: ['false', 'true', 'null', '0'],
      correct: 0,
      explanation: 'Boolean instance fields are initialized to false by default.'
    },
    {
      question: 'What is the default value of an object reference variable in Java?',
      options: ['null', 'void', 'false', '0'],
      correct: 0,
      explanation: 'All object references (non-primitive variables) default to null if not assigned.'
    },
    {
      question: 'Which operator is used to instantiate an object in Java?',
      options: ['new', 'create', 'instantiate', 'malloc'],
      correct: 0,
      explanation: 'The "new" operator allocates heap space and runs constructors to create objects.'
    },
    {
      question: 'Which memory section stores local variables and method execution frames in Java?',
      options: ['Stack Memory', 'Heap Memory', 'Static Register', 'Garbage Collector'],
      correct: 0,
      explanation: 'Stack memory holds local variables, parameters, and active method call frames.'
    },
    {
      question: 'Which memory section stores objects and instance variables in Java?',
      options: ['Heap Memory', 'Stack Memory', 'Static Register', 'Code Segment'],
      correct: 0,
      explanation: 'All instantiated objects and their instance fields are allocated on the garbage-collected heap.'
    },
    {
      question: 'What is the process of reclaiming unused heap memory automatically in Java?',
      options: ['Garbage Collection', 'Deallocation', 'Stack cleanup', 'Refactoring'],
      correct: 0,
      explanation: 'The JVM\'s Garbage Collector automatically identifies and frees unreferenced objects from the heap.'
    },
    {
      question: 'Which class is used to read text input from the keyboard in console programs?',
      options: ['java.util.Scanner', 'java.io.Reader', 'System.in.Reader', 'ConsoleInput'],
      correct: 0,
      explanation: 'The Scanner class is standard for parsing primitive types and strings from system input.'
    },
    {
      question: 'How do you check string value equality in Java?',
      options: ['str1.equals(str2)', 'str1 == str2', 'str1 === str2', 'str1.compare(str2)'],
      correct: 0,
      explanation: 'You must use the `.equals()` method to check content equality. The `==` operator compares reference locations.'
    },
    {
      question: 'Which statement prints text and appends a newline to the console in Java?',
      options: ['System.out.println()', 'System.out.print()', 'Console.writeLine()', 'printf()'],
      correct: 0,
      explanation: 'System.out.println() outputs formatting and moves the cursor to a new line.'
    },
    {
      question: 'What represents an Exception in Java?',
      options: ['An event that disrupts the normal flow of instructions during runtime', 'A compile-time syntax error', 'A hardware processor failure', 'An optimization compiler flag'],
      correct: 0,
      explanation: 'Exceptions are runtime events signaling errors, handled using try-catch blocks.'
    },
    {
      question: 'Which block executes regardless of whether an exception is thrown or caught?',
      options: ['finally', 'catch', 'try', 'always'],
      correct: 0,
      explanation: 'The "finally" block is guaranteed to execute after exiting try-catch, used for resource cleanup.'
    },
    {
      question: 'What is the size of an int primitive type in Java?',
      options: ['4 bytes (32-bit)', '2 bytes', '8 bytes', '1 byte'],
      correct: 0,
      explanation: 'In Java, an int is strictly defined as 4 bytes (32-bit signed integer) across all platforms.'
    },
    {
      question: 'What is the size of a double primitive type in Java?',
      options: ['8 bytes (64-bit)', '4 bytes', '2 bytes', '16 bytes'],
      correct: 0,
      explanation: 'A double is a double-precision 64-bit IEEE 754 floating point, occupying 8 bytes.'
    },
    {
      question: 'Which keyword is used to access members of the parent/base class in Java?',
      options: ['super', 'this', 'parent', 'base'],
      correct: 0,
      explanation: 'The "super" keyword is used to call parent constructor or parent method implementations.'
    },
    {
      question: 'Which keyword refers to the current object instance in Java?',
      options: ['this', 'super', 'self', 'me'],
      correct: 0,
      explanation: 'The "this" keyword represents the active executing instance of the class.'
    },
    {
      question: 'Which package is imported automatically into every Java file?',
      options: ['java.lang', 'java.util', 'java.io', 'java.net'],
      correct: 0,
      explanation: '`java.lang` containing core classes (Object, System, String, Math) is implicitly imported.'
    }
  ]
};

export const javascriptQuestions = {
  title: 'JavaScript',
  easy: [
    {
      question: 'What is JavaScript?',
      options: ['A lightweight, interpreted programming language with first-class functions', 'A compiled database query markup language', 'A styling framework used for page layout', 'An operating system kernel'],
      correct: 0,
      explanation: 'JavaScript is a dynamic programming language commonly used for web client scripting.'
    },
    {
      question: 'Which HTML tag is used to embed JavaScript code?',
      options: ['<script>', '<javascript>', '<js>', '<code type="js">'],
      correct: 0,
      explanation: 'The `<script>` tag is used to define client-side scripts.'
    },
    {
      question: 'How do you print a message to the browser developer console in JS?',
      options: ['console.log()', 'print()', 'alert()', 'document.write()'],
      correct: 0,
      explanation: 'console.log() prints text and debug data inside the browser\'s developer tools console.'
    },
    {
      question: 'Which keyword declares a block-scoped variable that CAN be reassigned in JS?',
      options: ['let', 'const', 'var', 'def'],
      correct: 0,
      explanation: 'The "let" keyword declares block-scoped variables that can be modified later.'
    },
    {
      question: 'Which keyword declares a block-scoped variable that CANNOT be reassigned?',
      options: ['const', 'let', 'var', 'final'],
      correct: 0,
      explanation: 'The "const" keyword declares constants that cannot be reassigned after declaration.'
    },
    {
      question: 'Which keyword declares a function-scoped variable, which is hoisted in JS?',
      options: ['var', 'let', 'const', 'variable'],
      correct: 0,
      explanation: 'The "var" keyword declares function-scoped variables, which are hoisted to the top of their scope.'
    },
    {
      question: 'What is the value of an uninitialized variable in JavaScript?',
      options: ['undefined', 'null', 'NaN', '0'],
      correct: 0,
      explanation: 'Variables declared without values automatically default to the type and value of `undefined`.'
    },
    {
      question: 'What is the output of typeof null in JavaScript?',
      options: ['"object"', '"null"', '"undefined"', '"string"'],
      correct: 0,
      explanation: 'In JavaScript, typeof null returns "object", which is a historical bug in the language.'
    },
    {
      question: 'Which operator checks for equality of both value and data type (strict equality)?',
      options: ['===', '==', '=', '!=:'],
      correct: 0,
      explanation: 'The triple equals (===) comparison check compares values without converting/coercing types.'
    },
    {
      question: 'What is the difference between == and === in JavaScript?',
      options: ['== compares values with type coercion, while === compares values and types strictly', '=== is older syntax', '== checks pointers, === checks contents', 'They are identical'],
      correct: 0,
      explanation: '== compares values after casting types, whereas === requires both type and value to match.'
    },
    {
      question: 'What is NaN in JavaScript?',
      options: ['Not-a-Number (a numeric value representing undefined/invalid math)', 'New Array Network', 'Null and Void status', 'Not an Object'],
      correct: 0,
      explanation: 'NaN stands for Not-a-Number, representing the result of undefined mathematical calculations (e.g. 0/0).'
    },
    {
      question: 'How do you write a multi-line comment in JavaScript?',
      options: ['/* comment */', '// comment', '# comment', '<!-- comment -->'],
      correct: 0,
      explanation: 'C-style block comments `/* ... */` are used for multi-line comments in JS.'
    },
    {
      question: 'Which built-in array method adds one or more elements to the end of an array?',
      options: ['push()', 'pop()', 'shift()', 'unshift()'],
      correct: 0,
      explanation: '`.push()` appends elements to arrays, returning the new array length.'
    },
    {
      question: 'Which array method removes the last element from an array?',
      options: ['pop()', 'push()', 'shift()', 'unshift()'],
      correct: 0,
      explanation: '`.pop()` removes and returns the final element of an array.'
    },
    {
      question: 'Which array method removes the first element from an array?',
      options: ['shift()', 'unshift()', 'pop()', 'slice()'],
      correct: 0,
      explanation: '`.shift()` removes and returns the first element of an array.'
    },
    {
      question: 'Which array method adds one or more elements to the beginning of an array?',
      options: ['unshift()', 'shift()', 'push()', 'splice()'],
      correct: 0,
      explanation: '`.unshift()` inserts elements at index 0 of the array.'
    },
    {
      question: 'What represents arrow function syntax in ES6?',
      options: ['const func = () => { }', 'function func() => {}', 'const func = function() => {}', 'def func() -> {}'],
      correct: 0,
      explanation: '`() => { ... }` is the ES6 arrow function shorthand, which retains lexical "this".'
    },
    {
      question: 'What does the map() method do on arrays in JS?',
      options: ['Creates a new array populated with the results of calling a function on every element', 'Filters out elements', 'Reduces array to a single value', 'Sorts array keys'],
      correct: 0,
      explanation: 'map() runs a callback on each element, returning a new array of matching sizes containing results.'
    },
    {
      question: 'Which array method returns a new array containing elements that pass a conditional test?',
      options: ['filter()', 'map()', 'reduce()', 'find()'],
      correct: 0,
      explanation: '`.filter()` creates a shallow copy of an array, filtered down to elements that return true in the callback.'
    },
    {
      question: 'What is a Promise in JavaScript?',
      options: ['An object representing the eventual completion or failure of an asynchronous operation', 'A loop control keyword', 'A parameter definition syntax', 'A class constructor type'],
      correct: 0,
      explanation: 'Promises handle asynchronous operations, resolving to values or rejecting with errors.'
    },
    {
      question: 'Which keywords are used to write asynchronous code resembling synchronous code in ES8?',
      options: ['async and await', 'promise and then', 'try and catch', 'setTimeout and delay'],
      correct: 0,
      explanation: 'async/await is built on promises, providing a cleaner syntax for handling asynchronous tasks.'
    },
    {
      question: 'What is the DOM in web development?',
      options: ['Document Object Model', 'Data Operations Manager', 'Digital Output Master', 'Domain Organization Module'],
      correct: 0,
      explanation: 'DOM stands for Document Object Model.'
    },
    {
      question: 'Which document method is used to select an element by its ID attribute?',
      options: ['document.getElementById()', 'document.selectId()', 'document.querySelector("#id") only', 'Both document.getElementById() and querySelector("#id")'],
      correct: 3,
      explanation: 'Both methods return the element matching the ID.'
    },
    {
      question: 'How do you register an event listener on a DOM element in JS?',
      options: ['element.addEventListener("click", handler)', 'element.onclick(handler)', 'element.listen("click", handler)', 'element.event("click", handler)'],
      correct: 0,
      explanation: '`addEventListener("event", callback)` is the standard modern method to handle DOM events.'
    },
    {
      question: 'What does JSON stand for?',
      options: ['JavaScript Object Notation', 'Java Source Object Network', 'Joint System Operations Node', 'JavaScript Output Manager'],
      correct: 0,
      explanation: 'JSON stands for JavaScript Object Notation.'
    },
    {
      question: 'Which method converts a JavaScript object into a JSON string?',
      options: ['JSON.stringify()', 'JSON.parse()', 'Object.toJSON()', 'JSON.encode()'],
      correct: 0,
      explanation: 'JSON.stringify(object) serializes JavaScript values into JSON text.'
    },
    {
      question: 'Which method parses a JSON string into a JavaScript object?',
      options: ['JSON.parse()', 'JSON.stringify()', 'Object.fromJSON()', 'JSON.decode()'],
      correct: 0,
      explanation: 'JSON.parse(jsonText) deserializes JSON strings into JavaScript objects/values.'
    },
    {
      question: 'What is the purpose of the localStorage object in browsers?',
      options: ['Allows storing key-value pairs in the browser with no expiration date', 'Saves server files locally', 'Caches CSS styles temporarily', 'Tracks user location coordinates'],
      correct: 0,
      explanation: 'localStorage stores string-based data across browser sessions (persistent cache).'
    },
    {
      question: 'What is the scope of a variable declared inside a function using let?',
      options: ['Local / Function scope', 'Global scope', 'Block scope inside that function', 'Both Local and Block scope'],
      correct: 3,
      explanation: '`let` is block-scoped, meaning it is local to the block (and function) where it is defined.'
    },
    {
      question: 'Which function parses string text into an integer in JS?',
      options: ['parseInt()', 'parseFloat()', 'Number.toInt()', 'Math.floor()'],
      correct: 0,
      explanation: 'parseInt(string, radix) parses string inputs and returns an integer of the specified base.'
    }
  ]
};

export const sqlQuestions = {
  title: 'SQL',
  easy: [
    {
      question: 'What does SQL stand for?',
      options: ['Structured Query Language', 'Sequential Query Location', 'Structured Queue Layout', 'Server Query Link'],
      correct: 0,
      explanation: 'SQL stands for Structured Query Language, the standard programming language for relational databases.'
    },
    {
      question: 'Which SQL statement is used to retrieve data from a database?',
      options: ['SELECT', 'GET', 'RETRIEVE', 'OPEN'],
      correct: 0,
      explanation: 'The SELECT statement is used to query and pull columns or rows from database tables.'
    },
    {
      question: 'Which SQL statement is used to add new records to a table?',
      options: ['INSERT INTO', 'ADD RECORD', 'UPDATE', 'CREATE RECORD'],
      correct: 0,
      explanation: 'The INSERT INTO statement is used to add new rows of data into a table.'
    },
    {
      question: 'Which SQL statement is used to modify existing records in a database table?',
      options: ['UPDATE', 'MODIFY', 'CHANGE', 'ALTER'],
      correct: 0,
      explanation: 'The UPDATE statement modifies values in existing rows.'
    },
    {
      question: 'Which SQL statement is used to delete records/rows from a table?',
      options: ['DELETE', 'REMOVE', 'DROP', 'TRUNCATE'],
      correct: 0,
      explanation: 'The DELETE FROM statement removes matching rows from a table.'
    },
    {
      question: 'Which SQL clause is used to filter records based on a condition?',
      options: ['WHERE', 'IF', 'FILTER', 'HAVING'],
      correct: 0,
      explanation: 'The WHERE clause filters results, extracting only records that fulfill the specified condition.'
    },
    {
      question: 'What is a Primary Key in SQL?',
      options: ['A column that uniquely identifies each row in a table', 'The password key to unlock database servers', 'The first column of any table', 'A key linking sibling database tables'],
      correct: 0,
      explanation: 'A primary key is a field containing unique, non-null values to identify rows uniquely.'
    },
    {
      question: 'What is a Foreign Key in SQL?',
      options: ['A column that links two tables together by referencing a primary key in another table', 'A primary key from an external company', 'An encrypted access token', 'None of these'],
      correct: 0,
      explanation: 'A foreign key is a column or group of columns in one table that references the primary key of another table.'
    },
    {
      question: 'Which SQL keyword is used to return only distinct (different) values?',
      options: ['DISTINCT', 'UNIQUE', 'DIFFERENT', 'SINGLE'],
      correct: 0,
      explanation: 'The DISTINCT keyword eliminates duplicate rows from SELECT results.'
    },
    {
      question: 'Which SQL clause is used to sort the result-set in ascending or descending order?',
      options: ['ORDER BY', 'SORT BY', 'GROUP BY', 'ARRANGE BY'],
      correct: 0,
      explanation: 'The ORDER BY clause sorts query outputs (defaults to ascending order).'
    },
    {
      question: 'Which keyword sorts results in descending order when using ORDER BY?',
      options: ['DESC', 'DOWN', 'DECR', 'REVERSE'],
      correct: 0,
      explanation: 'DESC is appended to column names in ORDER BY to sort descending.'
    },
    {
      question: 'Which keyword sorts results in ascending order when using ORDER BY?',
      options: ['ASC', 'UP', 'INCR', 'DEFAULT'],
      correct: 0,
      explanation: 'ASC is used to sort ascending (default behavior).'
    },
    {
      question: 'Which SQL JOIN returns all records when there is a match in either left or right table?',
      options: ['FULL OUTER JOIN', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN'],
      correct: 0,
      explanation: 'FULL OUTER JOIN returns all rows from both tables, matching columns where possible and filling NULLs otherwise.'
    },
    {
      question: 'Which SQL JOIN returns records that have matching values in both tables?',
      options: ['INNER JOIN', 'OUTER JOIN', 'LEFT JOIN', 'CROSS JOIN'],
      correct: 0,
      explanation: 'INNER JOIN selects records that have matching values in both tables.'
    },
    {
      question: 'Which SQL JOIN returns all records from the left table, and matching records from the right table?',
      options: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL JOIN'],
      correct: 0,
      explanation: 'LEFT JOIN (or LEFT OUTER JOIN) returns all records from the left table alongside matching rows from the right table.'
    },
    {
      question: 'Which SQL JOIN returns all records from the right table, and matching records from the left table?',
      options: ['RIGHT JOIN', 'LEFT JOIN', 'INNER JOIN', 'CROSS JOIN'],
      correct: 0,
      explanation: 'RIGHT JOIN (or RIGHT OUTER JOIN) returns all records from the right table alongside matching rows from the left table.'
    },
    {
      question: 'Which SQL operator is used to search for a specified pattern in a column?',
      options: ['LIKE', 'IN', 'BETWEEN', 'MATCH'],
      correct: 0,
      explanation: 'The LIKE operator combined with wildcards (% and _) performs pattern matching searches.'
    },
    {
      question: 'Which wildcard character represents zero, one, or multiple characters in a LIKE pattern?',
      options: ['%', '_', '*', '?'],
      correct: 0,
      explanation: 'In SQL LIKE query syntax, the percent sign (%) matches string sequences of any length.'
    },
    {
      question: 'Which wildcard character represents a single character in a LIKE pattern?',
      options: ['_', '%', '?', '#'],
      correct: 0,
      explanation: 'The underscore (_) represents exactly one character in SQL pattern matching.'
    },
    {
      question: 'Which SQL aggregate function returns the total number of rows matching a criteria?',
      options: ['COUNT()', 'SUM()', 'TOTAL()', 'ROWS()'],
      correct: 0,
      explanation: 'COUNT(column) returns the number of non-null records.'
    },
    {
      question: 'Which SQL aggregate function calculates the average value of a numeric column?',
      options: ['AVG()', 'AVERAGE()', 'MEAN()', 'SUM()/COUNT()'],
      correct: 0,
      explanation: 'The AVG() function returns the average/mean of values.'
    },
    {
      question: 'Which SQL aggregate function returns the sum of numeric values in a column?',
      options: ['SUM()', 'ADD()', 'TOTAL()', 'COUNT()'],
      correct: 0,
      explanation: 'SUM() calculates the total sum of numerical columns.'
    },
    {
      question: 'Which SQL statement deletes a table completely (its structure and data) from the database?',
      options: ['DROP TABLE', 'DELETE TABLE', 'TRUNCATE TABLE', 'REMOVE TABLE'],
      correct: 0,
      explanation: 'DROP TABLE permanently deletes the table structure, indices, and all rows from the database.'
    },
    {
      question: 'What is the difference between DROP TABLE and TRUNCATE TABLE?',
      options: ['DROP deletes the table structure and data, while TRUNCATE deletes only the data rows keeping the table structure', 'TRUNCATE deletes the database completely', 'They are exact aliases', 'DROP only deletes rows matching WHERE filters'],
      correct: 0,
      explanation: 'TRUNCATE TABLE quickly removes all rows in a table but retains the table definition (structure) for future inserts.'
    },
    {
      question: 'Which SQL clause is used to group rows that have the same values into summary rows (like finding count per city)?',
      options: ['GROUP BY', 'ORDER BY', 'SORT BY', 'HAVING'],
      correct: 0,
      explanation: 'The GROUP BY statement groups rows into summary rows, often used with aggregate functions (COUNT, MAX, MIN, SUM, AVG).'
    },
    {
      question: 'Which SQL clause is used to filter group summaries since WHERE cannot be used with aggregate functions?',
      options: ['HAVING', 'WHERE', 'FILTER', 'GROUP WHERE'],
      correct: 0,
      explanation: 'The HAVING clause filters grouped records created by the GROUP BY clause.'
    },
    {
      question: 'Which SQL constraint prevents null values from being inserted into a column?',
      options: ['NOT NULL', 'UNIQUE', 'PRIMARY KEY', 'DEFAULT'],
      correct: 0,
      explanation: 'The NOT NULL constraint forces a column to always contain a value.'
    },
    {
      question: 'Which SQL operator allows specifying multiple values in a WHERE clause?',
      options: ['IN', 'BETWEEN', 'LIKE', 'OR list'],
      correct: 0,
      explanation: 'The IN operator is shorthand for multiple OR conditions, checking if values match elements in a list.'
    },
    {
      question: 'Which SQL operator selects values within a inclusive range?',
      options: ['BETWEEN', 'IN', 'WITHIN', 'RANGE'],
      correct: 0,
      explanation: 'The BETWEEN operator filters values within a start and end range (inclusive).'
    },
    {
      question: 'What represents the default port for MySQL database connections?',
      options: ['3306', '5432', '80', '1433'],
      correct: 0,
      explanation: 'MySQL default server listener is port 3306 (PostgreSQL uses 5432, MSSQL uses 1433).'
    }
  ]
};

export const linuxQuestions = {
  title: 'Linux',
  easy: [
    {
      question: 'Who created the Linux kernel?',
      options: ['Linus Torvalds', 'Richard Stallman', 'Bill Gates', 'Steve Jobs'],
      correct: 0,
      explanation: 'Linus Torvalds released the initial Linux kernel in 1991 as a free, open-source UNIX-like kernel.'
    },
    {
      question: 'What is the core of a Linux operating system that manages system resources and hardware communication?',
      options: ['Kernel', 'Shell', 'Terminal', 'Desktop Environment'],
      correct: 0,
      explanation: 'The kernel is the lowest-level software interface connecting system hardware resources to user applications.'
    },
    {
      question: 'Which Linux command is used to list directory contents?',
      options: ['ls', 'cd', 'dir', 'list'],
      correct: 0,
      explanation: '`ls` lists files and subfolders inside the current working directory.'
    },
    {
      question: 'Which command is used to change the current working directory in Linux?',
      options: ['cd', 'ls', 'pwd', 'mv'],
      correct: 0,
      explanation: '`cd` (change directory) moves the shell focus to another directory path.'
    },
    {
      question: 'Which command prints the absolute path of the current working directory to the terminal?',
      options: ['pwd', 'cd', 'whoami', 'path'],
      correct: 0,
      explanation: '`pwd` stands for Print Working Directory.'
    },
    {
      question: 'Which command is used to create a new empty file or update timestamps of existing files?',
      options: ['touch', 'mkdir', 'cat', 'new'],
      correct: 0,
      explanation: '`touch filename` creates a new empty file if it doesn\'t exist, or updates its modification time.'
    },
    {
      question: 'Which command is used to create a new folder/directory?',
      options: ['mkdir', 'touch', 'rmdir', 'cd'],
      correct: 0,
      explanation: '`mkdir` (make directory) creates new folder nodes.'
    },
    {
      question: 'Which command copies files or directories?',
      options: ['cp', 'mv', 'rm', 'copy'],
      correct: 0,
      explanation: '`cp source destination` copies files.'
    },
    {
      question: 'Which command moves or renames files and folders?',
      options: ['mv', 'cp', 'rn', 'rename'],
      correct: 0,
      explanation: '`mv` (move) moves files to new directories or renames them.'
    },
    {
      question: 'Which command is used to delete files in Linux?',
      options: ['rm', 'delete', 'remove', 'erase'],
      correct: 0,
      explanation: '`rm` (remove) deletes files. Caution: deleting files in terminal is usually permanent.'
    },
    {
      question: 'Which flag is added to `rm` to recursively delete a directory and its contents?',
      options: ['-r', '-f', '-d', '-a'],
      correct: 0,
      explanation: 'The `-r` (or `-R`, recursive) flag is required to delete directories and their subdirectories.'
    },
    {
      question: 'Which command prints the contents of a text file directly to the terminal?',
      options: ['cat', 'ls', 'echo', 'print'],
      correct: 0,
      explanation: '`cat` (concatenate) prints file contents to the standard output stream.'
    },
    {
      question: 'Which command displays the first few lines of a file (10 lines by default)?',
      options: ['head', 'tail', 'cat', 'less'],
      correct: 0,
      explanation: '`head` outputs the initial lines of text files.'
    },
    {
      question: 'Which command displays the last few lines of a file?',
      options: ['tail', 'head', 'cat', 'less'],
      correct: 0,
      explanation: '`tail` displays the final lines of a file, useful for monitoring log updates (via `tail -f`).'
    },
    {
      question: 'Which command is used to search for specific text patterns inside files using regular expressions?',
      options: ['grep', 'find', 'search', 'locate'],
      correct: 0,
      explanation: '`grep` (Global Regular Expression Print) searches files for lines matching query strings.'
    },
    {
      question: 'Which command changes file permissions (read, write, execute) in Linux?',
      options: ['chmod', 'chown', 'perm', 'chgrp'],
      correct: 0,
      explanation: '`chmod` (change mode) modifies read/write/execute permissions for owner, group, and others.'
    },
    {
      question: 'Which command changes the owner of a file or directory?',
      options: ['chown', 'chmod', 'owner', 'chgrp'],
      correct: 0,
      explanation: '`chown` (change owner) changes user/group ownership of files.'
    },
    {
      question: 'What is the superuser account name in Linux, possessing absolute system privileges?',
      options: ['root', 'admin', 'supervisor', 'sudo'],
      correct: 0,
      explanation: 'The `root` user is the administrative superuser account in Unix/Linux.'
    },
    {
      question: 'Which command runs a command with administrative/root privileges?',
      options: ['sudo', 'root', 'runas', 'su'],
      correct: 0,
      explanation: '`sudo` (superuser do) executes commands with root/administrator privileges, prompting for user password.'
    },
    {
      question: 'What does the `df` command do in Linux?',
      options: ['Displays free disk space on filesystems', 'Deletes files', 'Displays running processes', 'Defines functions'],
      correct: 0,
      explanation: '`df` (disk free) displays disk space usage statistics for mounted filesystems.'
    },
    {
      question: 'What does the `free` command display in Linux?',
      options: ['Amount of free and used physical memory (RAM) and swap', 'Free hard drive space', 'Processor speeds', 'Network connection ports'],
      correct: 0,
      explanation: 'The `free` command shows total, used, and available physical memory and swap allocation.'
    },
    {
      question: 'Which command displays active, running system processes dynamically in real time?',
      options: ['top or htop', 'ps', 'process', 'tasklist'],
      correct: 0,
      explanation: '`top` (or interactive `htop`) displays a real-time view of system resource usage and running processes.'
    },
    {
      question: 'Which command displays a snapshot of current running processes?',
      options: ['ps', 'top', 'jobs', 'process'],
      correct: 0,
      explanation: '`ps` (process status) outputs static lists of active shell processes.'
    },
    {
      question: 'How do you terminate a running process in Linux using its PID (Process ID)?',
      options: ['kill PID', 'stop PID', 'terminate PID', 'exit PID'],
      correct: 0,
      explanation: 'The `kill` command sends signals (like SIGTERM or SIGKILL) to stop active process IDs.'
    },
    {
      question: 'Which package manager is standard for Debian and Ubuntu-based Linux distributions?',
      options: ['apt (or apt-get)', 'yum', 'pacman', 'dnf'],
      correct: 0,
      explanation: 'Debian-based OS use `apt` (Advanced Package Tool) to install, update, and remove software packages.'
    },
    {
      question: 'Which package manager is standard for Red Hat, CentOS, and Fedora-based systems?',
      options: ['dnf (or yum)', 'apt', 'pacman', 'apk'],
      correct: 0,
      explanation: 'Red Hat family distros use `dnf` (or older `yum`) to manage packages.'
    },
    {
      question: 'What represents the root directory in the Linux directory structure?',
      options: ['/', '~', '/root', '/home'],
      correct: 0,
      explanation: 'The single slash (/) represents the base root directory containing all system paths.'
    },
    {
      question: 'What represents the current user\'s home directory shortcut in Linux?',
      options: ['~', '/', '.', '..'],
      correct: 0,
      explanation: 'The tilde character (~) is shorthand for the active user\'s home directory path (e.g. /home/username).'
    },
    {
      question: 'What is the command-line text editor that runs inside the terminal and is famous for modal editing?',
      options: ['vim (or vi)', 'nano', 'VS Code', 'notepad'],
      correct: 0,
      explanation: 'Vim/Vi is a highly popular terminal-based text editor using modes (Insert, Normal, Visual).'
    },
    {
      question: 'Which command prints text strings to the terminal console?',
      options: ['echo', 'print', 'write', 'cat'],
      correct: 0,
      explanation: '`echo` displays lines of text or variables on the standard output.'
    }
  ]
};
