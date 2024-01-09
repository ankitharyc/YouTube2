import React from 'react'

const commentsdata = [
    {
        name:'abc',
        text:'commented text',
        replies:[]
    },
    {
        name:'abcd',
        text:'commented text1',
        replies:[
        {
            name:'abc',
            text:'commented text',
            replies:[],
        },
        {
            name:'abc',
            text:'commented text',
            replies:[
                {
                    name:'abcd',
                    text:'commented text1',
                    replies:[], 
                },
                {
                    name:'abcd',
                    text:'commented text1',
                    replies:[], 
                }
            ],
        }
        ]
    },
    {
        name:'abcde',
        text:'commented text2',
        replies:[],
    },
    {
        name:'abcdef',
        text:'commented text3',
        replies:[]
    },
]

const CommentsList = ({comments})=>{
    return comments.map((comment,index)=> 
    <div key={index}>
        <Comment  data={comment} /> 
        <div className='pl-5 border border-l-black m-5'>
            <CommentsList comments={comment.replies}/>    
        </div>
    </div> 
    )
};

const Comment = ({data}) => {
    const {name,text} = data;
    return (
      <div className='bg-gray-200'>
        {/* <img src=">" alt="user"/> */}
        <div className='flex shadow-lg p-2 rounded-lg'>
            <p><span className='font-semibold'>Name:</span> {name}</p> &nbsp;
            <p><span className='font-semibold'>Comment:</span> {text}</p>
        </div>      
      </div>
    )
  }

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='font-bold'>Comments:</h1>
        <CommentsList comments={commentsdata}/>
    </div>
  )
}

export default CommentsContainer