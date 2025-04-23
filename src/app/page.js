import {allBlogs} from 'contentlayer/generated'
import HomeCoverSection from './components/Header/Home/HomeCoverSection';
import FeaturedPosts from './components/Header/Home/FeaturedPosts';
import RecentPosts from './components/Header/Home/RecentPosts';

export default function Home() {
  console.log(allBlogs);
  
  return (
    <main className="flex flex-col items-center justify-center">
     <HomeCoverSection blogs={allBlogs} />
     <FeaturedPosts blogs={allBlogs} />
     <RecentPosts blogs={allBlogs} />
    </main>
  )
}
