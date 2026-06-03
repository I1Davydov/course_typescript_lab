/* 
	Дописать функцию getUserPostsWithAuthor, которая получает посты пользователя, а затем информацию об авторе каждого поста.
*/

import { fetchUser, fetchUserPosts, type Post } from "./promises";
import type { User } from "./promises";

export function getUserPostsWithAuthor(userId: number): Promise<Array<Post & { author: User }>> {
  return fetchUserPosts(userId).then(async (posts) => {
    const postsWithAuthor = [];
    for (const post of posts) {
      const author = await fetchUser(post.userId);
      postsWithAuthor.push({ ...post, author });
    }
    return postsWithAuthor;
  });
}
