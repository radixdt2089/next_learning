import React from 'react'
import NewsServices from '../services/NewsServices'
import Link from 'next/link';

const News = ({news}) => {
  console.log(news);
    return (
        <div className="container mx-auto min-h-screen">   
  <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
  
  {
    news && news.map((blog) => {
      return (
        <Link href={`/blog/${blog.NavURL}`} key={blog.id}>
         <div className="rounded overflow-hidden shadow-lg cursor-pointer">
          <img className="w-full" src={`http://localhost:1337${blog.Image[0].url}`} alt="Mountain" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{blog.Title}</div>
            <p className="text-gray-700 text-base">
            {blog.ShortText}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
      </Link>
    )
    })
  }
   
  </div>
        </div>
    )
}

export default News

export async function getStaticProps(context) {

    const data = await NewsServices.getAllNews();
    if(!data){
      return {
        notFound : true
      }
    }
  
    return {
      props: {news : data}, 
    }
  }