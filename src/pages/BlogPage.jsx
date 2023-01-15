import React, { useState, useEffect } from 'react';

import MarkDown from 'markdown-to-jsx';
import { useParams, Link } from 'react-router-dom';

function BlogPage () {
    const [post, setPost] = useState('');
    const {id} = useParams()
    useEffect(() => {
      import(`../blogs/${id}.mdx`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err)) 
    })

    return (
        <div>
            <Link to="/blogs"><h2 className="app-heading4" style={{opacity: 0.8}}><u><i className="fa fa-angle-left"></i> Back</u></h2></Link>
            <MarkDown>
                {post}
            </MarkDown>
        </div>
    )
}
export default BlogPage;