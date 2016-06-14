import React, { Component } from 'react';
import Admin from './admin.view'
import User from './user.view'
import Loading from './loading'



const style = {
	
}

export default class MainView extends Component {

  constructor(props){
		super(props)
		this.state = {
			cy : null,
			view : false,
			currentNode: null,
      previousNode: null
		}
  }

  componentDidMount() {

  	var bind = this
    
  	var cy = cytoscape({

  	container: document.getElementById('cy'),
  	autoungrabify: true, // container to render in

  	elements: [
      {
        group: 'edges',
        data: {
          id: "JavaScriptJavaScript2",
          source : "JavaScript",
          target: "JavaScript2"
        }
      },
       {
        group: 'edges',
        data: {
          id: "JavaScript5JavaScript6",
          source : "JavaScript5",
          target: "JavaScript6"
        }
      },
       {
        group: 'edges',
        data: {
          id: "JavaScript6JavaScript7",
          source : "JavaScript6",
          target: "JavaScript7"
        }
      },
       {
        group: 'edges',
        data: {
          id: "JavaScript7JavaScript8",
          source : "JavaScript7",
          target: "JavaScript8"
        }
      },
        {
        group: 'edges',
        data: {
          id: "JavaScript7JavaScript9",
          source : "JavaScript7",
          target: "JavaScript9"
        }
      },
        {
        group: 'edges',
        data: {
          id: "JavaScript7JavaScript10",
          source : "JavaScript7",
          target: "JavaScript10"
        }
      },
       {
        group: 'edges',
        data: {
          id: "JavaScriptJavaScript2",
          source : "JavaScript",
          target: "JavaScript2"
        }
      },
      {
        group: 'edges',
        data: {
          id: "JavaScriptJavaScript3",
          source : "JavaScript",
          target: "JavaScript3"
        }
      },
      {
        group: 'edges',
        data: {
          id: "JavaScriptJavaScript4",
          source : "JavaScript",
          target: "JavaScript4"
        }
      },
      {
        group: 'edges',
        data: {
          id: "JavaScriptJavaScript5",
          source : "JavaScript",
          target: "JavaScript5"
        }
      }, 
      { // node a
        group: 'nodes',
        data: { 
          id: 'JavaScript10',
          videos: [{
            name: "Introduction into Javascript",
            key: "jkTzHEtHd54",
            video: "jkTzHEtHd54",
            markdown: "# Non neu sive \n## Venite longos ambiguum tollere reliquit quia Phocaica\nLorem markdownum cacumina es corpus belloque forma haberet videri, pendere saepe, talem nomine invictus quiete *quae*: mors. Metuit quod, non de suo tui consolante orbem, qui per indulgere linquit fera; umbra. Enim sentit laqueosque hastam Bacchei. Ante census observata ipsum, e quamvis quod invitus firmas; sunt, ille venerem si: Iuppiter visa trahendo. \n Nimbos populo dicitur. Haustis tuas, sum resilire illa certa! **Quod Quodsi** labefecit venefica tecta hoc [me pendebat](http://seenly.com/) natura quae! Quoniam fetus movit sororum aliorum indueret et virtute laetis primo Phoebe, deorum haud, ire, esse. \n ## Sit saxa vates indoctum \n et auro ecce Discedens illa, [sanguine supersint](http://example.com/) confusaque duae, innixa? Huic habenti huic. Non leves umeris *sola dea oppositas* corpora restant Quae tangi exstabant in caeso cingens pervenit! Non parvo loquenti; ecce sic \n ## Venite longos ambiguum tollere reliquit quia \nPhocaica Lorem markdownum cacumina es corpus belloque forma haberet videri, pendere popularis fera videri. Discedentem stratum remitti iuvenes sociati secutae"
          },
          {
            name: "10 Things",
            video: "6MaOPdQPvow",
            key: "E6MaOPdQPvow",
            markdown:""
          }],
          articles: [],
          description: "JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles. JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behaviour. Contrary to popular misconception, JavaScript is not 'Interpreted Java'. In a nutshell, JavaScript is a dynamic scripting language supporting prototype based object construction. The basic syntax is intentionally similar to both Java and C++ to reduce the number of new concepts required to learn the language. Language constructs, such as if statements, for and while loops, and switch and try ... catch blocks function the same as in these languages (or nearly so.) JavaScript can function as both a procedural and an object oriented language. Objects are created programmatically in JavaScript, by attaching methods and properties to otherwise empty objects at run time, as opposed to the syntactic class definitions common in compiled languages like C++ and Java. Once an object has been constructed it can be used as a blueprint (or prototype) for creating similar objects. JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for ... in), and source code recovery (JavaScript programs can decompile function bodies back into their source text). For a more in depth discussion of JavaScript programming follow the JavaScript resources links below."
        }
      },
      { // node a
        group: 'nodes',
        data: { 
          id: 'JavaScript9',
          videos: [{
            name: "Introduction into Javascript",
            key: "jkTzHEtHd54",
            video: "jkTzHEtHd54",
            markdown: "# Non neu sive \n## Venite longos ambiguum tollere reliquit quia Phocaica\nLorem markdownum cacumina es corpus belloque forma haberet videri, pendere saepe, talem nomine invictus quiete *quae*: mors. Metuit quod, non de suo tui consolante orbem, qui per indulgere linquit fera; umbra. Enim sentit laqueosque hastam Bacchei. Ante census observata ipsum, e quamvis quod invitus firmas; sunt, ille venerem si: Iuppiter visa trahendo. \n Nimbos populo dicitur. Haustis tuas, sum resilire illa certa! **Quod Quodsi** labefecit venefica tecta hoc [me pendebat](http://seenly.com/) natura quae! Quoniam fetus movit sororum aliorum indueret et virtute laetis primo Phoebe, deorum haud, ire, esse. \n ## Sit saxa vates indoctum \n et auro ecce Discedens illa, [sanguine supersint](http://example.com/) confusaque duae, innixa? Huic habenti huic. Non leves umeris *sola dea oppositas* corpora restant Quae tangi exstabant in caeso cingens pervenit! Non parvo loquenti; ecce sic \n ## Venite longos ambiguum tollere reliquit quia \nPhocaica Lorem markdownum cacumina es corpus belloque forma haberet videri, pendere popularis fera videri. Discedentem stratum remitti iuvenes sociati secutae"
          },
          {
            name: "10 Things",
            video: "6MaOPdQPvow",
            key: "E6MaOPdQPvow",
            markdown:""
          }],
          articles: [],
          description: "JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles. JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behaviour. Contrary to popular misconception, JavaScript is not 'Interpreted Java'. In a nutshell, JavaScript is a dynamic scripting language supporting prototype based object construction. The basic syntax is intentionally similar to both Java and C++ to reduce the number of new concepts required to learn the language. Language constructs, such as if statements, for and while loops, and switch and try ... catch blocks function the same as in these languages (or nearly so.) JavaScript can function as both a procedural and an object oriented language. Objects are created programmatically in JavaScript, by attaching methods and properties to otherwise empty objects at run time, as opposed to the syntactic class definitions common in compiled languages like C++ and Java. Once an object has been constructed it can be used as a blueprint (or prototype) for creating similar objects. JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for ... in), and source code recovery (JavaScript programs can decompile function bodies back into their source text). For a more in depth discussion of JavaScript programming follow the JavaScript resources links below."
        }
      },
      { // node a
        group: 'nodes',
        data: { 
          id: 'JavaScript8',
          videos: [{
            name: "Introduction into Javascript",
            key: "jkTzHEtHd54",
            video: "jkTzHEtHd54",
            markdown: "# Non neu sive \n## Venite longos ambiguum tollere reliquit quia Phocaica\nLorem markdownum cacumina es corpus belloque forma haberet videri, pendere saepe, talem nomine invictus quiete *quae*: mors. Metuit quod, non de suo tui consolante orbem, qui per indulgere linquit fera; umbra. Enim sentit laqueosque hastam Bacchei. Ante census observata ipsum, e quamvis quod invitus firmas; sunt, ille venerem si: Iuppiter visa trahendo. \n Nimbos populo dicitur. Haustis tuas, sum resilire illa certa! **Quod Quodsi** labefecit venefica tecta hoc [me pendebat](http://seenly.com/) natura quae! Quoniam fetus movit sororum aliorum indueret et virtute laetis primo Phoebe, deorum haud, ire, esse. \n ## Sit saxa vates indoctum \n et auro ecce Discedens illa, [sanguine supersint](http://example.com/) confusaque duae, innixa? Huic habenti huic. Non leves umeris *sola dea oppositas* corpora restant Quae tangi exstabant in caeso cingens pervenit! Non parvo loquenti; ecce sic \n ## Venite longos ambiguum tollere reliquit quia \nPhocaica Lorem markdownum cacumina es corpus belloque forma haberet videri, pendere popularis fera videri. Discedentem stratum remitti iuvenes sociati secutae"
          },
          {
            name: "10 Things",
            video: "6MaOPdQPvow",
            key: "E6MaOPdQPvow",
            markdown:""
          }],
          articles: [],
          description: "JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles. JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behaviour. Contrary to popular misconception, JavaScript is not 'Interpreted Java'. In a nutshell, JavaScript is a dynamic scripting language supporting prototype based object construction. The basic syntax is intentionally similar to both Java and C++ to reduce the number of new concepts required to learn the language. Language constructs, such as if statements, for and while loops, and switch and try ... catch blocks function the same as in these languages (or nearly so.) JavaScript can function as both a procedural and an object oriented language. Objects are created programmatically in JavaScript, by attaching methods and properties to otherwise empty objects at run time, as opposed to the syntactic class definitions common in compiled languages like C++ and Java. Once an object has been constructed it can be used as a blueprint (or prototype) for creating similar objects. JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for ... in), and source code recovery (JavaScript programs can decompile function bodies back into their source text). For a more in depth discussion of JavaScript programming follow the JavaScript resources links below."
        }
      },
      { // node a
        group: 'nodes',
        data: { 
          id: 'JavaScript7',
          videos: [{
            name: "Introduction into Javascript",
            key: "jkTzHEtHd54",
            video: "jkTzHEtHd54",
            markdown: "# Non neu sive \n## Venite longos ambiguum tollere reliquit quia Phocaica\nLorem markdownum cacumina es corpus belloque forma haberet videri, pendere saepe, talem nomine invictus quiete *quae*: mors. Metuit quod, non de suo tui consolante orbem, qui per indulgere linquit fera; umbra. Enim sentit laqueosque hastam Bacchei. Ante census observata ipsum, e quamvis quod invitus firmas; sunt, ille venerem si: Iuppiter visa trahendo. \n Nimbos populo dicitur. Haustis tuas, sum resilire illa certa! **Quod Quodsi** labefecit venefica tecta hoc [me pendebat](http://seenly.com/) natura quae! Quoniam fetus movit sororum aliorum indueret et virtute laetis primo Phoebe, deorum haud, ire, esse. \n ## Sit saxa vates indoctum \n et auro ecce Discedens illa, [sanguine supersint](http://example.com/) confusaque duae, innixa? Huic habenti huic. Non leves umeris *sola dea oppositas* corpora restant Quae tangi exstabant in caeso cingens pervenit! Non parvo loquenti; ecce sic \n ## Venite longos ambiguum tollere reliquit quia \nPhocaica Lorem markdownum cacumina es corpus belloque forma haberet videri, pendere popularis fera videri. Discedentem stratum remitti iuvenes sociati secutae"
          },
          {
            name: "10 Things",
            video: "6MaOPdQPvow",
            key: "E6MaOPdQPvow",
            markdown:""
          }],
          articles: [],
          description: "JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles. JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behaviour. Contrary to popular misconception, JavaScript is not 'Interpreted Java'. In a nutshell, JavaScript is a dynamic scripting language supporting prototype based object construction. The basic syntax is intentionally similar to both Java and C++ to reduce the number of new concepts required to learn the language. Language constructs, such as if statements, for and while loops, and switch and try ... catch blocks function the same as in these languages (or nearly so.) JavaScript can function as both a procedural and an object oriented language. Objects are created programmatically in JavaScript, by attaching methods and properties to otherwise empty objects at run time, as opposed to the syntactic class definitions common in compiled languages like C++ and Java. Once an object has been constructed it can be used as a blueprint (or prototype) for creating similar objects. JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for ... in), and source code recovery (JavaScript programs can decompile function bodies back into their source text). For a more in depth discussion of JavaScript programming follow the JavaScript resources links below."
        }
      },
      { // node a
        group: 'nodes',
        data: { 
          id: 'JavaScript6',
          videos: [{
            name: "Introduction into Javascript",
            key: "jkTzHEtHd54",
            video: "jkTzHEtHd54",
            markdown: "# Non neu sive \n## Venite longos ambiguum tollere reliquit quia Phocaica\nLorem markdownum cacumina es corpus belloque forma haberet videri, pendere saepe, talem nomine invictus quiete *quae*: mors. Metuit quod, non de suo tui consolante orbem, qui per indulgere linquit fera; umbra. Enim sentit laqueosque hastam Bacchei. Ante census observata ipsum, e quamvis quod invitus firmas; sunt, ille venerem si: Iuppiter visa trahendo. \n Nimbos populo dicitur. Haustis tuas, sum resilire illa certa! **Quod Quodsi** labefecit venefica tecta hoc [me pendebat](http://seenly.com/) natura quae! Quoniam fetus movit sororum aliorum indueret et virtute laetis primo Phoebe, deorum haud, ire, esse. \n ## Sit saxa vates indoctum \n et auro ecce Discedens illa, [sanguine supersint](http://example.com/) confusaque duae, innixa? Huic habenti huic. Non leves umeris *sola dea oppositas* corpora restant Quae tangi exstabant in caeso cingens pervenit! Non parvo loquenti; ecce sic \n ## Venite longos ambiguum tollere reliquit quia \nPhocaica Lorem markdownum cacumina es corpus belloque forma haberet videri, pendere popularis fera videri. Discedentem stratum remitti iuvenes sociati secutae"
          },
          {
            name: "10 Things",
            video: "6MaOPdQPvow",
            key: "E6MaOPdQPvow",
            markdown:""
          }],
          articles: [],
          description: "JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles. JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behaviour. Contrary to popular misconception, JavaScript is not 'Interpreted Java'. In a nutshell, JavaScript is a dynamic scripting language supporting prototype based object construction. The basic syntax is intentionally similar to both Java and C++ to reduce the number of new concepts required to learn the language. Language constructs, such as if statements, for and while loops, and switch and try ... catch blocks function the same as in these languages (or nearly so.) JavaScript can function as both a procedural and an object oriented language. Objects are created programmatically in JavaScript, by attaching methods and properties to otherwise empty objects at run time, as opposed to the syntactic class definitions common in compiled languages like C++ and Java. Once an object has been constructed it can be used as a blueprint (or prototype) for creating similar objects. JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for ... in), and source code recovery (JavaScript programs can decompile function bodies back into their source text). For a more in depth discussion of JavaScript programming follow the JavaScript resources links below."
        }
      },   // list of graph elements to start with
    	{ // node a
    		group: 'nodes',
      	data: { 
          id: 'JavaScript',
          videos: [{
            name: "Introduction into Javascript",
            key: "jkTzHEtHd54",
            video: "jkTzHEtHd54",
            markdown: "# Non neu sive \n## Venite longos ambiguum tollere reliquit quia Phocaica\nLorem markdownum cacumina es corpus belloque forma haberet videri, pendere saepe, talem nomine invictus quiete *quae*: mors. Metuit quod, non de suo tui consolante orbem, qui per indulgere linquit fera; umbra. Enim sentit laqueosque hastam Bacchei. Ante census observata ipsum, e quamvis quod invitus firmas; sunt, ille venerem si: Iuppiter visa trahendo. \n Nimbos populo dicitur. Haustis tuas, sum resilire illa certa! **Quod Quodsi** labefecit venefica tecta hoc [me pendebat](http://seenly.com/) natura quae! Quoniam fetus movit sororum aliorum indueret et virtute laetis primo Phoebe, deorum haud, ire, esse. \n ## Sit saxa vates indoctum \n et auro ecce Discedens illa, [sanguine supersint](http://example.com/) confusaque duae, innixa? Huic habenti huic. Non leves umeris *sola dea oppositas* corpora restant Quae tangi exstabant in caeso cingens pervenit! Non parvo loquenti; ecce sic \n ## Venite longos ambiguum tollere reliquit quia \nPhocaica Lorem markdownum cacumina es corpus belloque forma haberet videri, pendere popularis fera videri. Discedentem stratum remitti iuvenes sociati secutae"
          },
          {
            name: "10 Things",
            video: "6MaOPdQPvow",
            key: "E6MaOPdQPvow",
            markdown:""
          }],
          articles: [],
          description: "JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles. JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behaviour. Contrary to popular misconception, JavaScript is not 'Interpreted Java'. In a nutshell, JavaScript is a dynamic scripting language supporting prototype based object construction. The basic syntax is intentionally similar to both Java and C++ to reduce the number of new concepts required to learn the language. Language constructs, such as if statements, for and while loops, and switch and try ... catch blocks function the same as in these languages (or nearly so.) JavaScript can function as both a procedural and an object oriented language. Objects are created programmatically in JavaScript, by attaching methods and properties to otherwise empty objects at run time, as opposed to the syntactic class definitions common in compiled languages like C++ and Java. Once an object has been constructed it can be used as a blueprint (or prototype) for creating similar objects. JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for ... in), and source code recovery (JavaScript programs can decompile function bodies back into their source text). For a more in depth discussion of JavaScript programming follow the JavaScript resources links below."
        }
    	},
      { // node a
        group: 'nodes',
        data: { 
          id: 'JavaScript2',
          videos: [{
            name: "Introduction into Javascript",
            key: "jkTzHEtHd54",
            video: "jkTzHEtHd54",
            markdown: "# Non neu sive \n## Venite longos ambiguum tollere reliquit quia Phocaica\nLorem markdownum cacumina es corpus belloque forma haberet videri, pendere saepe, talem nomine invictus quiete *quae*: mors. Metuit quod, non de suo tui consolante orbem, qui per indulgere linquit fera; umbra. Enim sentit laqueosque hastam Bacchei. Ante census observata ipsum, e quamvis quod invitus firmas; sunt, ille venerem si: Iuppiter visa trahendo. \n Nimbos populo dicitur. Haustis tuas, sum resilire illa certa! **Quod Quodsi** labefecit venefica tecta hoc [me pendebat](http://seenly.com/) natura quae! Quoniam fetus movit sororum aliorum indueret et virtute laetis primo Phoebe, deorum haud, ire, esse. \n ## Sit saxa vates indoctum \n et auro ecce Discedens illa, [sanguine supersint](http://example.com/) confusaque duae, innixa? Huic habenti huic. Non leves umeris *sola dea oppositas* corpora restant Quae tangi exstabant in caeso cingens pervenit! Non parvo loquenti; ecce sic \n ## Venite longos ambiguum tollere reliquit quia \nPhocaica Lorem markdownum cacumina es corpus belloque forma haberet videri, pendere popularis fera videri. Discedentem stratum remitti iuvenes sociati secutae"
          },
          {
            name: "10 Things",
            video: "6MaOPdQPvow",
            key: "E6MaOPdQPvow",
            markdown:""
          }],
          articles: [],
          description: "JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles. JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behaviour. Contrary to popular misconception, JavaScript is not 'Interpreted Java'. In a nutshell, JavaScript is a dynamic scripting language supporting prototype based object construction. The basic syntax is intentionally similar to both Java and C++ to reduce the number of new concepts required to learn the language. Language constructs, such as if statements, for and while loops, and switch and try ... catch blocks function the same as in these languages (or nearly so.) JavaScript can function as both a procedural and an object oriented language. Objects are created programmatically in JavaScript, by attaching methods and properties to otherwise empty objects at run time, as opposed to the syntactic class definitions common in compiled languages like C++ and Java. Once an object has been constructed it can be used as a blueprint (or prototype) for creating similar objects. JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for ... in), and source code recovery (JavaScript programs can decompile function bodies back into their source text). For a more in depth discussion of JavaScript programming follow the JavaScript resources links below."
        }
      },
      { // node a
        group: 'nodes',
        data: { 
          id: 'JavaScript3',
          videos: [{
            name: "Introduction into Javascript",
            key: "jkTzHEtHd54",
            video: "jkTzHEtHd54",
            markdown: "# Non neu sive \n## Venite longos ambiguum tollere reliquit quia Phocaica\nLorem markdownum cacumina es corpus belloque forma haberet videri, pendere saepe, talem nomine invictus quiete *quae*: mors. Metuit quod, non de suo tui consolante orbem, qui per indulgere linquit fera; umbra. Enim sentit laqueosque hastam Bacchei. Ante census observata ipsum, e quamvis quod invitus firmas; sunt, ille venerem si: Iuppiter visa trahendo. \n Nimbos populo dicitur. Haustis tuas, sum resilire illa certa! **Quod Quodsi** labefecit venefica tecta hoc [me pendebat](http://seenly.com/) natura quae! Quoniam fetus movit sororum aliorum indueret et virtute laetis primo Phoebe, deorum haud, ire, esse. \n ## Sit saxa vates indoctum \n et auro ecce Discedens illa, [sanguine supersint](http://example.com/) confusaque duae, innixa? Huic habenti huic. Non leves umeris *sola dea oppositas* corpora restant Quae tangi exstabant in caeso cingens pervenit! Non parvo loquenti; ecce sic \n ## Venite longos ambiguum tollere reliquit quia \nPhocaica Lorem markdownum cacumina es corpus belloque forma haberet videri, pendere popularis fera videri. Discedentem stratum remitti iuvenes sociati secutae"
          },
          {
            name: "10 Things",
            video: "6MaOPdQPvow",
            key: "E6MaOPdQPvow",
            markdown:""
          }],
          articles: [],
          description: "JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles. JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behaviour. Contrary to popular misconception, JavaScript is not 'Interpreted Java'. In a nutshell, JavaScript is a dynamic scripting language supporting prototype based object construction. The basic syntax is intentionally similar to both Java and C++ to reduce the number of new concepts required to learn the language. Language constructs, such as if statements, for and while loops, and switch and try ... catch blocks function the same as in these languages (or nearly so.) JavaScript can function as both a procedural and an object oriented language. Objects are created programmatically in JavaScript, by attaching methods and properties to otherwise empty objects at run time, as opposed to the syntactic class definitions common in compiled languages like C++ and Java. Once an object has been constructed it can be used as a blueprint (or prototype) for creating similar objects. JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for ... in), and source code recovery (JavaScript programs can decompile function bodies back into their source text). For a more in depth discussion of JavaScript programming follow the JavaScript resources links below."
        }
      },
      { // node a
        group: 'nodes',
        data: { 
          id: 'JavaScript4',
          videos: [{
            name: "Introduction into Javascript",
            key: "jkTzHEtHd54",
            video: "jkTzHEtHd54",
            markdown: "# Non neu sive \n## Venite longos ambiguum tollere reliquit quia Phocaica\nLorem markdownum cacumina es corpus belloque forma haberet videri, pendere saepe, talem nomine invictus quiete *quae*: mors. Metuit quod, non de suo tui consolante orbem, qui per indulgere linquit fera; umbra. Enim sentit laqueosque hastam Bacchei. Ante census observata ipsum, e quamvis quod invitus firmas; sunt, ille venerem si: Iuppiter visa trahendo. \n Nimbos populo dicitur. Haustis tuas, sum resilire illa certa! **Quod Quodsi** labefecit venefica tecta hoc [me pendebat](http://seenly.com/) natura quae! Quoniam fetus movit sororum aliorum indueret et virtute laetis primo Phoebe, deorum haud, ire, esse. \n ## Sit saxa vates indoctum \n et auro ecce Discedens illa, [sanguine supersint](http://example.com/) confusaque duae, innixa? Huic habenti huic. Non leves umeris *sola dea oppositas* corpora restant Quae tangi exstabant in caeso cingens pervenit! Non parvo loquenti; ecce sic \n ## Venite longos ambiguum tollere reliquit quia \nPhocaica Lorem markdownum cacumina es corpus belloque forma haberet videri, pendere popularis fera videri. Discedentem stratum remitti iuvenes sociati secutae"
          },
          {
            name: "10 Things",
            video: "6MaOPdQPvow",
            key: "E6MaOPdQPvow",
            markdown:""
          }],
          articles: [],
          description: "JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles. JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behaviour. Contrary to popular misconception, JavaScript is not 'Interpreted Java'. In a nutshell, JavaScript is a dynamic scripting language supporting prototype based object construction. The basic syntax is intentionally similar to both Java and C++ to reduce the number of new concepts required to learn the language. Language constructs, such as if statements, for and while loops, and switch and try ... catch blocks function the same as in these languages (or nearly so.) JavaScript can function as both a procedural and an object oriented language. Objects are created programmatically in JavaScript, by attaching methods and properties to otherwise empty objects at run time, as opposed to the syntactic class definitions common in compiled languages like C++ and Java. Once an object has been constructed it can be used as a blueprint (or prototype) for creating similar objects. JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for ... in), and source code recovery (JavaScript programs can decompile function bodies back into their source text). For a more in depth discussion of JavaScript programming follow the JavaScript resources links below."
        }
      },
      { // node a
        group: 'nodes',
        data: { 
          id: 'JavaScript5',
          videos: [{
            name: "Introduction into Javascript",
            key: "jkTzHEtHd54",
            video: "jkTzHEtHd54",
            markdown: "# Non neu sive \n## Venite longos ambiguum tollere reliquit quia Phocaica\nLorem markdownum cacumina es corpus belloque forma haberet videri, pendere saepe, talem nomine invictus quiete *quae*: mors. Metuit quod, non de suo tui consolante orbem, qui per indulgere linquit fera; umbra. Enim sentit laqueosque hastam Bacchei. Ante census observata ipsum, e quamvis quod invitus firmas; sunt, ille venerem si: Iuppiter visa trahendo. \n Nimbos populo dicitur. Haustis tuas, sum resilire illa certa! **Quod Quodsi** labefecit venefica tecta hoc [me pendebat](http://seenly.com/) natura quae! Quoniam fetus movit sororum aliorum indueret et virtute laetis primo Phoebe, deorum haud, ire, esse. \n ## Sit saxa vates indoctum \n et auro ecce Discedens illa, [sanguine supersint](http://example.com/) confusaque duae, innixa? Huic habenti huic. Non leves umeris *sola dea oppositas* corpora restant Quae tangi exstabant in caeso cingens pervenit! Non parvo loquenti; ecce sic \n ## Venite longos ambiguum tollere reliquit quia \nPhocaica Lorem markdownum cacumina es corpus belloque forma haberet videri, pendere popularis fera videri. Discedentem stratum remitti iuvenes sociati secutae"
          },
          {
            name: "10 Things",
            video: "6MaOPdQPvow",
            key: "E6MaOPdQPvow",
            markdown:""
          }],
          articles: [],
          description: "JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles. JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behaviour. Contrary to popular misconception, JavaScript is not 'Interpreted Java'. In a nutshell, JavaScript is a dynamic scripting language supporting prototype based object construction. The basic syntax is intentionally similar to both Java and C++ to reduce the number of new concepts required to learn the language. Language constructs, such as if statements, for and while loops, and switch and try ... catch blocks function the same as in these languages (or nearly so.) JavaScript can function as both a procedural and an object oriented language. Objects are created programmatically in JavaScript, by attaching methods and properties to otherwise empty objects at run time, as opposed to the syntactic class definitions common in compiled languages like C++ and Java. Once an object has been constructed it can be used as a blueprint (or prototype) for creating similar objects. JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for ... in), and source code recovery (JavaScript programs can decompile function bodies back into their source text). For a more in depth discussion of JavaScript programming follow the JavaScript resources links below."
        }
      }],
      style: [{
        selector: 'node',
        style: {
          'background-opacity': 0,
          'label': 'data(id)',
          'text-valign': 'top',
          'font-size': 40,
          'color': 'white',
          'width' : 100,
          'height' : 100,
          'background-fit' : 'contain',
          'background-image' : './components/star (1).png'
        }
      },
      {
        selector: 'edge',
        style: {
          'width': 1,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
          'curve-style': 'haystack',
          'overlay-color': '#ccc',
          'overlay-padding': 1,
          'overlay-opacity': 0


        }
      }],
    layout: {
      name: 'cose'
    },
  });

  	bind.setState({
  		cy : cy
  	})

  	cy.on('tap', function(event){

      
      var evtTarget = event.cyTarget;
      var holder = bind.state.currentNode
      
      if(evtTarget._private.ready || evtTarget._private.group === 'edges'){
        return
      }

      if(bind.state.previousNode){
        bind.state.previousNode._private.edges.forEach((value)=>{
          value.style({
          'line-color' : '#ccc',
          'overlay-color' : '#ccc',
          'overlay-opacity' : 0,
          'width' : 1,
          'overlay-padding': 1
          })
        })
      }
  
      evtTarget.style({
        'font-size': 80
      })
      evtTarget._private.edges.forEach((value)=>{
        value.style({
        'line-color' : [102,255,0],
        'overlay-color' : [102,255,0],
        'overlay-opacity' : .5,
        'width' : 4,
        'overlay-padding': 2
      })
      })

      // cy.animate({
      //   center: {
      //     eles : evtTarget
      //   },
      //   zoom: 5,
      //   easing: 'ease-in-sine'
      // }, {
      //   duration: 500
      // });

      const findPath = () => {
        var aStar = bind.state.cy.elements().aStar({ root: "#JavaScript2", goal: "#JavaScript10" });
        var map = aStar.path.select()
        for (var i = 0; i < map.length; i++){
          if(map[i]._private.group === 'edges'){
            map[i].style({
              'line-color' : '#0289d5',
              'overlay-color' : '#0289d5',
              'overlay-opacity' : .9,
              'width' : 10,
              'overlay-padding': 3
            })
          }
        }
      }

      


      setTimeout(()=>{
  		bind.setState({
  			currentNode : evtTarget,
        previousNode : holder,
  			view       : true
  		},()=>{
        if(bind.state.previousNode){
        bind.state.previousNode._private.edges.forEach((value)=>{
          bind.state.previousNode.style({
            'font-size' : 40
          })
          if( (value._private.data.source !== bind.state.currentNode._private.data.id) && (value._private.data.target !== bind.state.currentNode._private.data.id ))
          value.style({
          'line-color' : '#ccc',
          'overlay-color' : '#ccc',
          'overlay-opacity' : 0,
          'width' : 1
          })
        })
        findPath()
      }
      }



      )}, 0)
  	});
  }

	
	render () {
		return <div id="cy">
			<Admin props={this.state} />
      <User props={this.state} />
		</div>
	}
}





