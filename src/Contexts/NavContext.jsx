import React, {
  useContext,
  useState,
  useEffect,
  useReducer,
  useRef,
} from "react";

const NavContext = React.createContext();

export function useNav() {
  return useContext(NavContext);
}

export function NavProvider({ children }) {
  const [activeNav, setActiveNav] = useState("chat");

  function replaceIdentifiersWithHTML(inputString) {
    let secondaryString = inputString;

    // function extractWordAfterInt(input) {
    //   const match = input.match(/\bint\s+(\w+)/);
    //   if (match && match[1]) {
    //     const regex = new RegExp("\\b" + match[1] + "\\b", "g");
    //     secondaryString = secondaryString.replace(
    //       regex,
    //       `<a class="r">${match[1]}</a>`
    //     );
    //   } else {
    //     return null;
    //   }
    // }

    function extractWordAfterInt(input) {
      const regex = /\bint\s+(\w+)/g;
      let output = input;

      let match;
      while ((match = regex.exec(input)) !== null) {
        const word = match[1];
        const wordRegex = new RegExp("\\b" + word + "\\b", "g");
        output = output.replace(wordRegex, `<a class="r">${word}<a>`);
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
        output = output.replace(wordRegex, `<a class="y">${word}<a>`);
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
        output = output.replace(wordRegex, `<a class="r">${word}<a>`);
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
        output = output.replace(wordRegex, `<a class="r">${word}<a>`);
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
        output = output.replace(wordRegex, `<a class="db">${word}<a>`);
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
        output = output.replace(wordRegex, `<a class="db">${word}<a>`);
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
        output = output.replace(wordRegex, `<a class="db">${word}<a>`);
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
        output = output.replace(wordRegex, `<a class="db">${word}<a>`);
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
        output = output.replace(wordRegex, `<a class="dr">${word}<a>`);
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
        output = output.replace(wordRegex, `<a class="db">${word}<a>`);
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
        output = output.replace(wordRegex, `<a class="r">${word}<a>`);
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
        output = output.replace(wordRegex, `<a class="r">${word}<a>`);
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
        output = output.replace(wordRegex, `<a class="r">${word}</a>`);
      }

      return output;
    }

    function extractWordAfterClass(input) {
      const regex = /\bclass\s+(\w+)/g;
      let output = input;

      let match;
      while ((match = regex.exec(input)) !== null) {
        const word = match[1];
        const wordRegex = new RegExp("\\b" + word + "\\b", "g");
        output = output.replace(wordRegex, `<a class="db">${word}<a>`);
      }

      return output;
    }

    function replaceNumbersWithString(string) {
      var regex = /\d+/g;
      var replacedString = string.replace(regex, function (match) {
        return '<a class="r">' + match + "</a>";
      });

      return replacedString;
    }

    function escapeHTMLTags(inputString) {
      const keywords = ["LinkedList", "HashMap", "ArrayList", "Map"];
      const keywordPattern = new RegExp(keywords.join("|"), "gi");
      const escapedString = inputString.replace(
        keywordPattern,
        function (match) {
          return match.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
      );

      return escapedString;
    }

    function replaceWithAnchorTags(inputString) {
      const pattern = /"([^"]+)"/g;

      const replacedString = inputString.replace(
        pattern,
        '<a class="g"> "$1" </a>'
      );

      return replacedString;
    }

    secondaryString = escapeHTMLTags(secondaryString);
    secondaryString = replaceWithAnchorTags(secondaryString);
    secondaryString = extractWordAfterVoid(secondaryString);
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
    secondaryString = replaceNumbersWithString(secondaryString);

    secondaryString = secondaryString
      .replace(/\bconst\b/g, '<a class="p">const</a>')
      .replace(/\breturn\b/g, '<a class="p">return</a>')
      .replace(/\blet\b/g, '<a class="p">let</a>')
      .replace(/\bfunction\b/g, '<a class="p">function</a>')
      .replace(/\buseState\b/g, '<a class="db">useState</a>')
      .replace(/\buseEffect\b/g, '<a class="db">useEffect</a>')
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
      .replace(/\bhypot\b/g, '<a class="db"hypot</a>')
      .replace(/\bimul\b/g, '<a class="db">imul</a>')
      .replace(/\blog\b/g, '<a class="db">log</a>')
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
      .replace(/\bvoid\b/g, '<a class="p">void</a>')
      .replace(/\bint\b/g, '<a class="p">int</a>')
      .replace(/\bdouble\b/g, '<a class="p">double</a>')
      .replace(/\bboolean\b/g, '<a class="p">boolean</a>')
      .replace(/\bSystem\b/g, '<a class="y">System</a>')
      .replace(/\bout\b/g, '<a class="r">out</a>')
      .replace(/\bprintln\b/g, '<a class="db">println</a>')
      .replace(/\bprint\b/g, '<a class="db">print</a>')
      .replace(/\bString\b/g, '<a class="p">String</a>')
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
      .replace(/\bStack\b/g, '<a class="y">Stack</a>')
      .replace(/{/g, '<a class="p">{</a>')
      .replace(/}/g, '<a class="p">}</a>')

      .replace(/\[/g, '<a class="p">[</a>')
      .replace(/\]/g, '<a class="p">]</a>');

    return { __html: secondaryString };
  }

  const value = {
    activeNav,
    setActiveNav,
    replaceIdentifiersWithHTML,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}
