import React, { useEffect, useState } from "react";
import "../CoursePage/CoursePage.css";
import NavBar from "../NavBar/NavBar";
import "../CoursePage/prism.css";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { useSnippet } from "../../Contexts/SnippetContext";
import { useAuth } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CoursePage({ Content }) {
  const [text, setText] = useState(`
  
    <h1> Welcome to the Introduction to Software Development course </h1>
    <h2 class="unitTitle" id="Unit1"> Unit 1: Beggining </h2><br>
    <button> this is a button </button>
    <strong> this is a bold text </strong>
    <pre> <code  id="codeSnippet1" class="language-javascript"> <a class="p">function</a> <a class="db">LookAtMouse</a> () {
        const [ <a class="y">elementPosition</a>, <a class="db">setElementPosition</a>] = useState({ <a class="y">x</a>: <a class="r">0</a>, <a class="y">y</a>: <a class="r">0</a> });
        const [<a class="y">angle</a>, <a class="db">setAngle</a>] = useState(<a class="r">0</a>);
      
        // Function to update element position and angle
        const <a class="db">updateElementPosition</a> = (<a class="r">e</a>) => {
          const <a class="y">mouseX</a> = <a class="r">e</a>.<a class="db">clientX</a>;
          const <a class="y">mouseY</a> = <a class="r">e</a>.<a class="db">clientY</a>;
      
          // Calculate the angle between the element and the mouse pointer
          const <a class="y">deltaX</a> = <a class="y">mouseX</a> - <a class="y">elementPosition</a>.<a class="y">x</a>;
          const <a class="y">deltaY</a> = <a class="y">mouseY</a> - <a class="y">elementPosition</a>.<a class="y">y</a>;
          const <a class="y">newAngle</a> = Math.atan2(<a class="y">deltaY</a>, <a class="y">deltaX</a>);
      
          // Convert radians to degrees and update the angle state
          <a class="db">setAngle</a>((<a class="y">newAngle</a> * <a class="r">180</a>) / Math.PI);
      
          // Update the element position
          <a class="db">setElementPosition</a>({ <a class="y">x</a>: <a class="r">mouseX</a>, <a class="y">y</a>: <a class="r">mouseY</a> });
        };
      
        // Add an event listener to track mouse movement
        useEffect(() => {
          document.addEventListener(<a class="g">'mousemove'</a>, <a class="db">updateElementPosition</a>);
      
          // Clean up the event listener when the component unmounts
          return () => {
            document.removeEventListener(<a class="g">'mousemove''</a>, <a class="db">updateElementPosition</a>);
          };
        }, []); </code> </pre>
    <span onclick="kur('codeSnippet1')" > Explain this snippet </span>
    <article>
    <p>We define a mapping of characters in the chars object.
    We have a sample string s that contains the patterns you want to replace.
    We use the <a class="db">replace</a>() method twice, first for the -bold- pattern and then for the -code- pattern.
    The regular expressions /-bold-(.*?)-bold-/g and /-code-(.*?)-code-/g match the patterns you provided.
    Inside the replacement functions, $1 refers to the content captured by (.*?), which will be replaced with the corresponding value from the chars object or wrapped in the appropriate HTML tags.
    This code will transform the input string s into:<p>
    <p>The ReplaceIdentifiersWithHTML component takes the input text as a prop.

    It splits the text by the identifiers -bold- and -code- using a regular expression and stores the resulting parts in the parts array.
    
    It then iterates through the parts array and generates JSX elements based on the content and identifiers encountered. When it encounters -bold-, it creates a <strong> element; when it encounters -code-, it creates a element; otherwise, it treats the part as plain text or other content.
    
    The resulting JSX elements are rendered within a <div>.
    
    This way, the function returns actual HTML elements based on the parsed content in the input text.</p>
    <p>this is a third parargraph</p>
    <h2 class="unitTitle" id="Unit2"> Unit 2: Beggining </h2><br>
    </article>
    
    `);

  const { userData } = useAuth();
  const nav = useNavigate();

  function replaceIdentifiersWithHTML(inputString) {
    function extractWordAfterInt(input) {
      const regex = /\bint\s+(\w+)/g;
      let output = input;

      let match;
      while ((match = regex.exec(input)) !== null) {
        const word = match[1];
        const wordRegex = new RegExp("\\b" + word + "\\b", "g");
        output = output.replace(wordRegex, `<a class="dr">${word}</a>`);
      }

      return output;
    }

    function extractWordAfterConst(input) {
      const regex = /\bconst\s+(\w+)/g;
      let output = input;

      let match;
      while ((match = regex.exec(input)) !== null) {
        const word = match[1];
        const wordRegex = new RegExp("\\b" + word + "\\b", "g");
        output = output.replace(wordRegex, `<a class="dy">${word}</a>`);
      }

      return output;
    }

    function extractWordAfterVar(input) {
      const regex = /\bvar\s+(\w+)/g;
      let output = input;

      let match;
      while ((match = regex.exec(input)) !== null) {
        const word = match[1];
        const wordRegex = new RegExp("\\b" + word + "\\b", "g");
        output = output.replace(wordRegex, `<a class="dr">${word}</a>`);
      }

      return output;
    }

    function extractWordAfterLet(input) {
      const regex = /\blet\s+(\w+)/g;
      let output = input;

      let match;
      while ((match = regex.exec(input)) !== null) {
        const word = match[1];
        const wordRegex = new RegExp("\\b" + word + "\\b", "g");
        output = output.replace(wordRegex, `<a class="dr">${word}</a>`);
      }

      return output;
    }

    function extractWordAfterVoid(input) {
      const regex = /\bvoid\s+(\w+)/g;
      let output = input;

      let match;
      while ((match = regex.exec(input)) !== null) {
        const word = match[1];
        const wordRegex = new RegExp("\\b" + word + "\\b", "g");
        output = output.replace(wordRegex, `<a class="ddb">${word}</a>`);
      }

      return output;
    }

    function extractWordAfterFunction(input) {
      const regex = /\bfunction\s+(\w+)/g;
      let output = input;

      let match;
      while ((match = regex.exec(input)) !== null) {
        const word = match[1];
        const wordRegex = new RegExp("\\b" + word + "\\b", "g");
        output = output.replace(wordRegex, `<a class="ddb">${word}</a>`);
      }

      return output;
    }

    function extractWordAfterBooleanFunction(input) {
      const regex1 = /\bpublic boolean\s+(\w+)/g;
      const regex2 = /\bclass boolean\s+(\w+)/g;
      const regex3 = /\bstatic boolean\s+(\w+)/g;

      let output = input;

      let match;
      while (
        (match = regex1.exec(input)) !== null ||
        (match = regex2.exec(input)) !== null ||
        (match = regex3.exec(input)) !== null
      ) {
        const word = match[1];
        const wordRegex = new RegExp("\\b" + word + "\\b", "g");
        output = output.replace(wordRegex, `<a class="ddb">${word}</a>`);
      }

      return output;
    }

    function extractWordAfterIntFunction(input) {
      const regex1 = /\bpublic int\s+(\w+)/g;
      const regex2 = /\bclass int\s+(\w+)/g;
      const regex3 = /\bstatic int\s+(\w+)/g;

      let output = input;

      let match;
      while (
        (match = regex1.exec(input)) !== null ||
        (match = regex2.exec(input)) !== null ||
        (match = regex3.exec(input)) !== null
      ) {
        const word = match[1];
        const wordRegex = new RegExp("\\b" + word + "\\b", "g");
        output = output.replace(wordRegex, `<a class="ddb">${word}</a>`);
      }

      return output;
    }

    function extractWordAfterStringFunction(input) {
      const regex1 = /\bpublic String\s+(\w+)/g;
      const regex2 = /\bclass String\s+(\w+)/g;
      const regex3 = /\bstatic String\s+(\w+)/g;

      let output = input;

      let match;
      while (
        (match = regex1.exec(input)) !== null ||
        (match = regex2.exec(input)) !== null ||
        (match = regex3.exec(input)) !== null
      ) {
        const word = match[1];
        const wordRegex = new RegExp("\\b" + word + "\\b", "g");
        output = output.replace(wordRegex, `<a class="ddb">${word}</a>`);
      }

      return output;
    }

    function extractWordAfterString(input) {
      const regex = /\bString\s+(\w+)/g;
      let output = input;

      let match;
      while ((match = regex.exec(input)) !== null) {
        const word = match[1];
        const wordRegex = new RegExp("\\b" + word + "\\b", "g");
        output = output.replace(wordRegex, `<a class="dr">${word}</a>`);
      }

      return output;
    }

    function extractWordAfterLong(input) {
      const regex = /\blong\s+(\w+)/g;
      let output = input;

      let match;
      while ((match = regex.exec(input)) !== null) {
        const word = match[1];
        const wordRegex = new RegExp("\\b" + word + "\\b", "g");
        output = output.replace(wordRegex, `<a class="dr">${word}</a>`);
      }

      return output;
    }

    function extractWordAfterBoolean(input) {
      const regex = /\bboolean\s+(\w+)/g;
      let output = input;

      let match;
      while ((match = regex.exec(input)) !== null) {
        const word = match[1];
        const wordRegex = new RegExp("\\b" + word + "\\b", "g");
        output = output.replace(wordRegex, `<a class="dr">${word}</a>`);
      }

      return output;
    }

    function extractWordAfterIntArray(input) {
      const regex = /\bint\[\]\s+(\w+)/g;
      let output = input;

      let match;
      while ((match = regex.exec(input)) !== null) {
        const word = match[1];
        const wordRegex = new RegExp("\\b" + word + "\\b", "g");
        output = output.replace(wordRegex, `<a class="dr">${word}</a>`);
      }

      return output;
    }

    function extractWordAfterClass(input) {
      const regex = /<a\s+class="p">class<\/a>\s+(\w+)/g;
      let output = input;

      let match;
      while ((match = regex.exec(input)) !== null) {
        const word = match[1];
        const wordRegex = new RegExp(`\\b${word}\\b`, "g");
        output = output.replace(wordRegex, `<a class="ddb">${word}</a>`);
      }

      return output;
    }

    let secondaryString = extractWordAfterVoid(inputString);

    secondaryString = extractWordAfterBooleanFunction(secondaryString);
    secondaryString = extractWordAfterIntFunction(secondaryString);
    secondaryString = extractWordAfterStringFunction(secondaryString);
    secondaryString = extractWordAfterInt(secondaryString);
    secondaryString = extractWordAfterVar(secondaryString);
    secondaryString = extractWordAfterConst(secondaryString);
    secondaryString = extractWordAfterLet(secondaryString);
    secondaryString = extractWordAfterFunction(secondaryString);
    secondaryString = extractWordAfterString(secondaryString);
    secondaryString = extractWordAfterLong(secondaryString);
    secondaryString = extractWordAfterClass(secondaryString);
    secondaryString = extractWordAfterIntArray(secondaryString);
    secondaryString = extractWordAfterBoolean(secondaryString);

    secondaryString = secondaryString
      .replace(/\bconst\b/g, '<a class="p">const</a>')
      .replace(/\breturn\b/g, '<a class="p">return</a>')
      .replace(/\blet\b/g, '<a class="p">let</a>')
      .replace(/\brender\b/g, '<a class="db">render</a>')
      .replace(/\bprops\b/g, '<a class="dr">props</a>')
      .replace(/\bexport\b/g, '<a class="dp">export</a>')
      .replace(/\bonClick\b/g, '<a class="y">onClick</a>')
      .replace(/\bfunction\b/g, '<a class="p">function</a>')
      .replace(/\buseState\b/g, '<a class="db">useState</a>')
      .replace(/\buseEffect\b/g, '<a class="db">useEffect</a>')
      .replace(/\bcreateContext\b/g, '<a class="db">createContext</a>')
      .replace(/\buseContext\b/g, '<a class="db">useContext </a>')
      .replace(/\bcreateStore\b/g, '<a class="db">createStore</a>')
      .replace(/\bProvider\b/g, '<a class="db">Provider</a>')
      .replace(/\bconnect\b/g, '<a class="ddb">connect</a>')
      .replace(/\buseMemo\b/g, '<a class="ddb">useMemo</a>')
      .replace(/\bBrowserRouter\b/g, '<a class="dy">BrowserRouter</a>')
      .replace(/\bRoute\b/g, '<a class="dy">Route</a>')
      .replace(/\bLink\b/g, '<a class="dy">Link</a>')
      .replace(/\bSwitch\b/g, '<a class="dy">Switch</a>')
      .replace(/\buseParams\b/g, '<a class="dy">useParams</a>')
      .replace(/\bObject\b/g, '<a class="dy">Object</a>')
      .replace(/\bonChange\b/g, '<a class="dy">onChange</a>')
      .replace(/\bonSubmit\b/g, '<a class="dy">onSubmit</a>')
      .replace(/\bclassName\b/g, '<a class="dy">className</a>')
      .replace(/\bdocument\b/g, '<a class="y">document</a>')
      .replace(/\bMath\b/g, '<a class="y">Math</a>')
      .replace(/\bLN10\b/g, '<a class="db">LN10</a>')
      .replace(/\bLN2\b/g, '<a class="db">LN2</a>')
      .replace(/\bLOG10E\b/g, '<a class="db">LOG10E</a>')
      .replace(/\bLOG2E\b/g, '<a class="db">LOG2E</a>')
      .replace(/\bPI\b/g, '<a class="db">PI</a>')
      .replace(/\bSQRT1_2\b/g, '<a class="db">SQRT1_2</a>')
      .replace(/\bSQRT2\b/g, '<a class="db">SQRT2</a>')
      .replace(/\babs\b/g, '<a class="db">abs</a>')
      .replace(/\bacos\b/g, '<a class="db">acos</a>')
      .replace(/\bacosh\b/g, '<a class="db">acosh</a>')
      .replace(/\basin\b/g, '<a class="db">asin</a>')
      .replace(/\basinh\b/g, '<a class="db">asinh</a>')
      .replace(/\batan\b/g, '<a class="db">atan</a>')
      .replace(/\batan2\b/g, '<a class="db">atan2</a>')
      .replace(/\batanh\b/g, '<a class="db">atanh</a>')
      .replace(/\bcbrt\b/g, '<a class="db">cbrt</a>')
      .replace(/\bceil\b/g, '<a class="db">ceil</a>')
      .replace(/\bclz32\b/g, '<a class="db">clz32</a>')
      .replace(/\bcos\b/g, '<a class="db">cos</a>')
      .replace(/\bcosh\b/g, '<a class="db">cosh</a>')
      .replace(/\bexp\b/g, '<a class="db">exp</a>')
      .replace(/\bexpm1\b/g, '<a class="db">expm1</a>')
      .replace(/\bfloor\b/g, '<a class="db">floor</a>')
      .replace(/\bfround\b/g, '<a class="db">fround</a>')
      .replace(/\bhypot\b/g, '<a class="db">hypot</a>')
      .replace(/\brequire\b/g, '<a class="db">require</a>')
      .replace(/\breadFile\b/g, '<a class="db">readFile</a>')
      .replace(/\bhandleError\b/g, '<a class="db">handleError</a>')
      .replace(/\bimul\b/g, '<a class="db">imul</a>')
      .replace(/\blog\b/g, '<a class="db">log</a>')
      .replace(/\bsetState\b/g, '<a class="db">setState</a>')
      .replace(/\buseState\b/g, '<a class="db">useState</a>')
      .replace(/\buseEffect\b/g, '<a class="db">useEffect</a>')
      .replace(/\btoDateString\b/g, '<a class="db">toDateString</a>')
      .replace(/\bDate\b/g, '<a class="dy">Date</a>')
      .replace(/\blog10\b/g, '<a class="db">log10</a>')
      .replace(/\blog1p\b/g, '<a class="db">log1p</a>')
      .replace(/\blog2\b/g, '<a class="db">log2</a>')
      .replace(/\bmax\b/g, '<a class="db">max</a>')
      .replace(/\bmin\b/g, '<a class="db">min</a>')
      .replace(/\bpow\b/g, '<a class="db">pow</a>')
      .replace(/\brandom\b/g, '<a class="db">random</a>')
      .replace(/\bround\b/g, '<a class="db">round</a>')
      .replace(/\bsign\b/g, '<a class="db">sign</a>')
      .replace(/\bsin\b/g, '<a class="db">sin</a>')
      .replace(/\bsinh\b/g, '<a class="db">sinh</a>')
      .replace(/\bfs\b/g, '<a class="r">fs</a>')
      .replace(/\bhttp\b/g, '<a class="y">http</a>')
      .replace(/\bcreateServer\b/g, '<a class="db">createServer</a>')
      .replace(/\bstatusCode\b/g, '<a class="y">statusCode</a>')
      .replace(/\bsetHeader\b/g, '<a class="db">setHeader</a>')
      .replace(/\bend\b/g, '<a class="db">end</a>')
      .replace(/\bcreatePool\b/g, '<a class="db">createPool</a>')
      .replace(/\bcreateConnection\b/g, '<a class="db">createConnection</a>')
      .replace(/\bsqrt\b/g, '<a class="db">sqrt</a>')
      .replace(/\btan\b/g, '<a class="db">tan</a>')
      .replace(/\btanh\b/g, '<a class="db">tanh</a>')
      .replace(/\btrunc\b/g, '<a class="db">trunc</a>')
      .replace(/\baddEventListener\b/g, '<a class="db">addEventListener</a>')
      .replace(/\bgetElementById\b/g, '<a class="db">getElementById</a>')
      .replace(
        /\bgetElementsByTagName\b/g,
        '<a class="db">getElementsByTagName</a>'
      )
      .replace(
        /\bgetElementsByClassName\b/g,
        '<a class="db">getElementsByClassName</a>'
      )
      .replace(/\bcreateElement\b/g, '<a class="db">createElement</a>')
      .replace(/\bremoveChild\b/g, '<a class="db">removeChild</a>')
      .replace(/\bwrite\b/g, '<a class="db">write</a>')
      .replace(/\bappendChild\b/g, '<a class="db">appendChild</a>')
      .replace(/\breplaceChild\b/g, '<a class="db">replaceChild</a>')
      .replace(
        /\bremoveEventListener\b/g,
        '<a class="db">removeEventListener</a>'
      )
      .replace(/\baddEventListener\b/g, '<a class="db">addEventListener</a>')
      .replace(/\baddEventListener\b/g, '<a class="db">addEventListener</a>')
      .replace(
        /\bgenerateRandomArray\b/g,
        '<a class="db">generateRandomArray</a>'
      )
      .replace(/\bcurrentTimeMillis\b/g, '<a class="db">currentTimeMillis</a>')
      .replace(/\baddEventListener\b/g, '<a class="db">addEventListener</a>')
      .replace(/\bvar\b/g, '<a class="p">var</a>')
      .replace(/\bconsole\b/g, '<a class="y">console</a>')
      .replace(/\blength\b/g, '<a class="db">length</a>')
      .replace(/\bfor\b/g, '<a class="p">for</a>')
      .replace(/\bdo\b/g, '<a class="p">do</a>')
      .replace(/\bwhile\b/g, '<a class="p">while</a>')
      .replace(/\btrue\b/g, '<a class="y">true</a>')
      .replace(/\bfalse\b/g, '<a class="y">false</a>')
      .replace(/\bif\b/g, '<a class="p">if</a>')
      .replace(/\belse\b/g, '<a class="p">else</a>')
      .replace(/\bpublic\b/g, '<a class="p">public</a>')
      .replace(/\bstatic\b/g, '<a class="p">static</a>')
      .replace(/\bReact\b/g, '<a class="dr">React</a>')
      .replace(/\bComponent\b/g, '<a class="dy">Component</a>')
      .replace(/\bvoid\b/g, '<a class="p">void</a>')
      .replace(/\bint\b/g, '<a class="p">int</a>')
      .replace(/\bdouble\b/g, '<a class="p">double</a>')
      .replace(/\bboolean\b/g, '<a class="p">boolean</a>')
      .replace(/\bSystem\b/g, '<a class="y">System</a>')
      .replace(/\bout\b/g, '<a class="r">out</a>')
      .replace(/\bprintln\b/g, '<a class="db">println</a>')
      .replace(/\bprint\b/g, '<a class="db">print</a>')
      .replace(/\bString\b/g, '<a class="p">String</a>')
      .replace(/\bfrom\b/g, '<a class="p">from</a>')
      .replace(/\bchar\b/g, '<a class="p">char</a>')
      .replace(/\binteger\b/g, '<a class="p">integer</a>')
      .replace(/\bcharacter\b/g, '<a class="p">character</a>')
      .replace(/\bbyte\b/g, '<a class="p">byte</a>')
      .replace(/\bshort\b/g, '<a class="p">short</a>')
      .replace(/\blong\b/g, '<a class="p">long</a>')
      .replace(/\bfloat\b/g, '<a class="p">float</a>')
      .replace(/\bswitch\b/g, '<a class="p">switch</a>')
      .replace(/\bcase\b/g, '<a class="p">case</a>')
      .replace(/\bdefault\b/g, '<a class="p">default</a>')
      .replace(/\bbreak\b/g, '<a class="p">break</a>')
      .replace(/\bcontinue\b/g, '<a class="p">continue</a>')
      .replace(/\bmethod\b/g, '<a class="p">method</a>')
      .replace(/\bprivate\b/g, '<a class="p">private</a>')
      .replace(/\bextends\b/g, '<a class="p">extends</a>')
      .replace(/\bprotected\b/g, '<a class="p">protected</a>')
      .replace(/\bthis\b/g, '<a class="p">this</a>')
      .replace(/\basync\b/g, '<a class="p">async</a>')
      .replace(/\bawait\b/g, '<a class="p">await</a>')
      .replace(/\btry\b/g, '<a class="p">try</a>')
      .replace(/\bcatch\b/g, '<a class="p">catch</a>')
      .replace(/\bfinally\b/g, '<a class="p">finally</a>')
      .replace(/\binterface\b/g, '<a class="p">interface</a>')
      .replace(/\bimplements\b/g, '<a class="p">implements</a>')
      .replace(/\beach\b/g, '<a class="p">each</a>')
      .replace(/\bArrayList\b/g, '<a class="y">ArrayList</a>')
      .replace(/\bCollections\b/g, '<a class="y">Collections</a>')
      .replace(/\bcontains\b/g, '<a class="db">contains</a>')
      .replace(/\bList\b/g, '<a class="y">List</a>')
      .replace(/\btime\b/g, '<a class="y">time</a>')
      .replace(/\bLocalDate\b/g, '<a class="y">LocalDate</a>')
      .replace(/\binnerHTML\b/g, '<a class="y">innerHTML</a>')
      .replace(/\bparentElement\b/g, '<a class="y">parentElement</a>')
      .replace(/\bHashSet\b/g, '<a class="y">HashSet</a>')
      .replace(/\bHashMap\b/g, '<a class="y">HashMap</a>')
      .replace(/\bLocalDateTime\b/g, '<a class="y">LocalDateTime</a>')
      .replace(/\bio\b/g, '<a class="y">io</a>')
      .replace(/\bBufferedReader\b/g, '<a class="y">BufferedReader</a>')
      .replace(/\bFileReader\b/g, '<a class="y">FileReader</a>')
      .replace(/\bURL\b/g, '<a class="y">URL</a>')
      .replace(/\bInputStreamReader\b/g, '<a class="y">InputStreamReader</a>')
      .replace(/\bFileWriter\b/g, '<a class="y">FileWriter</a>')
      .replace(/\bEntry\b/g, '<a class="y">Entry</a>')
      .replace(/\blang\b/g, '<a class="y">lang</a>')
      .replace(/\bopenStream\b/g, '<a class="db">openStream</a>')
      .replace(/\bclose\b/g, '<a class="db">close</a>')
      .replace(/\bnet\b/g, '<a class="y">net</a>')
      .replace(/\bregex\b/g, '<a class="y">regex</a>')
      .replace(/\bMatcher\b/g, '<a class="y">Matcher</a>')
      .replace(/\bPattern\b/g, '<a class="y">Pattern</a>')
      .replace(/\bMap\b/g, '<a class="y">Map</a>')
      .replace(/\bparse\b/g, '<a class="db">parse</a>')
      .replace(/\bfind\b/g, '<a class="db">find</a>')
      .replace(/\bgroup\b/g, '<a class="db">group</a>')
      .replace(/\bcompile\b/g, '<a class="db">compile</a>')
      .replace(/\baddLast\b/g, '<a class="db">addLast</a>')
      .replace(/\breadLine\b/g, '<a class="db">readLine</a>')
      .replace(/\badd\b/g, '<a class="db">add</a>')
      .replace(/\bput\b/g, '<a class="db">put</a>')
      .replace(/\bentrySet\b/g, '<a class="db">entrySet</a>')
      .replace(/\bgetKey\b/g, '<a class="db">getKey</a>')
      .replace(/\bgetValue\b/g, '<a class="db">getValue</a>')
      .replace(/\bprintStackTrace\b/g, '<a class="db">printStackTrace</a>')
      .replace(/\bformat\b/g, '<a class="db">format</a>')
      .replace(/\bDateTimeFormatter\b/g, '<a class="y">DateTimeFormatter</a>')
      .replace(/\bofPattern\b/g, '<a class="y">ofPattern</a>')
      .replace(/\bjava\b/g, '<a class="y">java</a>')
      .replace(/\bpush\b/g, '<a class="db">push</a>')
      .replace(/\bpop\b/g, '<a class="db">pop</a>')
      .replace(/\bsort\b/g, '<a class="db">sort</a>')
      .replace(/\breverse\b/g, '<a class="db">reverse</a>')
      .replace(/\bsetTimeout\b/g, '<a class="db">setTimeout</a>')
      .replace(/\bsplice\b/g, '<a class="db">splice</a>')
      .replace(/\bquerySelector\b/g, '<a class="db">querySelector</a>')
      .replace(/\bquerySelectorAll\b/g, '<a class="db">querySelectorAll</a>')
      .replace(/\bpreventDefault\b/g, '<a class="db">preventDefault</a>')
      .replace(/\bLinkedList\b/g, '<a class="y">LinkedList</a>')
      .replace(/\bObjects\b/g, '<a class="y">Objects</a>')
      .replace(/\bScanner\b/g, '<a class="y">Scanner</a>')
      .replace(/\bnextLine\b/g, '<a class="db">nextLine</a>')
      .replace(/\bequals\b/g, '<a class="db">equals</a>')
      .replace(/\butil\b/g, '<a class="y">util</a>')
      .replace(/\bimport\b/g, '<a class="p">import</a>')
      .replace(/\bthrow\b/g, '<a class="p">throw</a>')
      .replace(/\btoCharArray\b/g, '<a class="db">toCharArray</a>')
      .replace(
        /\bArithmeticException\b/g,
        '<a class="y">ArithmeticException</a>'
      )
      .replace(
        /\bNullPointerException\b/g,
        '<a class="y">NullPointerException</a>'
      )
      .replace(
        /\bArrayIndexOutOfBoundsException\b/g,
        '<a class="y">ArrayIndexOutOfBoundsException</a>'
      )
      .replace(
        /\bFileNotFoundException\b/g,
        '<a class="y">FileNotFoundException</a>'
      )
      .replace(/\bIOException\b/g, '<a class="y">IOException</a>')
      .replace(
        /\bNumberFormatException\b/g,
        '<a class="y">NumberFormatException</a>'
      )
      .replace(/\bSQLException\b/g, '<a class="y">SQLException</a>')
      .replace(/\bOutOfMemoryError\b/g, '<a class="y">OutOfMemoryError</a>')
      .replace(
        /\bIllegalArgumentException\b/g,
        '<a class="y">IllegalArgumentException</a>'
      )
      .replace(/\bFileInputStream\b/g, '<a class="y">FileInputStream</a>')
      .replace(/\bThrowable\b/g, '<a class="y">Throwable</a>')
      .replace(/\bInteger\b/g, '<a class="y">Integer</a>')
      .replace(/\berr\b/g, '<a class="r">err</a>')
      .replace(/\bparseInt\b/g, '<a class="db">parseInt</a>')
      .replace(/\bgetMessage\b/g, '<a class="db">getMessage</a>')
      .replace(/{/g, '<a class="p">{</a>')
      .replace(/}/g, '<a class="p">}</a>')

      .replace(/\[/g, '<a class="p">[</a>')
      .replace(/\]/g, '<a class="p">]</a>');

    return { __html: secondaryString };
  }

  function CustomComponent({ text }) {
    let modifiedHTML = replaceIdentifiersWithHTML(text);

    return <div dangerouslySetInnerHTML={modifiedHTML}></div>;
  }

  const scrollTo = (query) => {
    document
      .querySelector(query)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  function extractContent(str) {
    const startDelimiter = "///?///";
    const endDelimiter = "///?///";
    const startIndex = str.indexOf(startDelimiter);
    const endIndex = str.indexOf(
      endDelimiter,
      startIndex + startDelimiter.length
    );

    if (startIndex === -1 || endIndex === -1) {
      return "Delimiters not found";
    }

    const content = str.substring(startIndex + startDelimiter.length, endIndex);
    return content.trim();
  }

  const units = extractContent(Content).split(",");

  return (
    <>
      <NavBar position={"fixed"} />
      <div className="courseWrapper">
        <CustomComponent text={Content ? Content : text} />
      </div>
      <div className="navigation">
        {units.map((Unit, Id) => {
          return (
            <div key={Id} onClick={() => scrollTo(`#Unit${Unit}`)}>
              {Unit}
            </div>
          );
        })}
      </div>
    </>
  );
}
