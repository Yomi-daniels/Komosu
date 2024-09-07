import { compareDesc, parseISO } from "date-fns";

export const sortedBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");
