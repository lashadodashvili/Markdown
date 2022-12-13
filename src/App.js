import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {

  const [markdown, setMarkDown] = useState('## markdown preview')



  return (<main>
    <seciton className="markdown" >
      <textarea className='input'
        value={markdown}
        onChange={(e) => setMarkDown(e.target.value)} >

      </textarea>
      <article className='result'>
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
      </article>
    </seciton>

  </main>
  )
}

export default App
