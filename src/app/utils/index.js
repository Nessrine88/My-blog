import { compareDesc } from "date-fns";
import parseISO from "date-fns/parseISO";
export const cx = (...classNames) => classNames.filter(Boolean).join(" ");
export const sortBlogs = (blogs)=> {
    return blogs
    .slice()
    .sort((a,b) => 
        compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)));
}