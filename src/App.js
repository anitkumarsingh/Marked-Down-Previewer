import React, { Component } from 'react';
import './App.css';
import Editor from './Components/Editor/Editor';
import Preview from './Components/Previewer/Preview';
import marked from 'marked';
import Toolbar from './Components/Toolbar/Toolbar';
import Footerbar from './Components/FooterBar/Footerbar';
import Particles from 'react-particles-js';


marked.setOptions({
  breaks: true,
  tables: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
});

const placeholder = `# Welcome to mark down preview
## Coded by Anit Kumar
![](https://avatars1.githubusercontent.com/u/24611589?s=460&v=4)
**Bold Text**
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

###### Links
[My github account](http://github.com/anitkumarsingh)

###### Blockquotes
As Kanye West said:

> We're living the future so
> the present is our past.
- - -
Table
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.
- - -
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

- - -
Code and Syntax Highlighting
Inline \`code\` has \`back-ticks around\` it.

- - -
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

_You **can** combine them_
* Bullet 1
* Bullet 2
  * Bullet 2a
  * Bullet 2b
* Bullet 3
`;

class App extends Component {
  constructor(){
    super();
    this.state ={
      marked: placeholder,
    }
  }
  changeHandler = (e) =>{
    this.setState({
      marked:e.target.value
    })
    // console.log(e.target.value);
  }
  
  
  render() {
    return (
      <div className="container-fluid" id="container-root">
       <Particles className="Particle"
                  params={{
                        particles: {
                            number:{
                                value:30,
                                density:{
                                    enable:true,
                                    value_area:150
                                }
                            }
                        }
                    }}
                />
        <div className="row">
        <div className="col">
            <Toolbar text="Editor" icon="fas fa-edit"/>
            <Editor 
            onChange ={this.changeHandler}
            marked ={this.state.marked}
            />
            <Footerbar/>
        </div>
        <div className="col-8">
            <Toolbar text="Preview" icon="far fa-thumbs-up"/>
            <Preview  marked={this.state.marked}/>
            <Footerbar/>
        </div>
       </div>
      </div>
    );
  }
}

export default App;
