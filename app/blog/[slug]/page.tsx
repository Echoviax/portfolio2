import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

async function getPostData(slug: string) {
  const fullPath = path.join(process.cwd(), 'content/blog', `${slug}.md`);
  let fileContents;
  
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch (e) {
    return null;
  }

  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return { slug, contentHtml, ...(matterResult.data as { date: string; title: string }) };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const postData = await getPostData(resolvedParams.slug);

  if (postData === null) return (
    <div>
      Oopsies!
    </div>
  );

  return (
    <article>
      <h1>{postData.title}</h1>
      <p>{postData.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}