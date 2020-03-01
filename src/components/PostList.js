import React from 'react'

class PostList extends React.Component {
    render() {
        const { posts }  = this.props

        return (
            <div className='postListContainer'>
                {
                    posts.map((_todo, _index) => {
                        return (
                        <div className="bg-primary w-50 mx-auto mb-3 p-5 rounded" key={_index}>{_todo} 
                        <button
                        className="btn btn-light ml-5"
                        >Claim</button></div>
                        )
                    })
                    
                }
            </div>
        )
    }
}

export default PostList;