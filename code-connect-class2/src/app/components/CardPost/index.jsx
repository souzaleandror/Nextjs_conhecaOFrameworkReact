import Image from "next/image";
import { Avatar } from "../Avatar";

export const CardPost = ({ post }) => {
  return (
    <article>
      <header>
        <figure>
          <Image src={post.cover} width={438} height={133} alt={`Capa do post de titulo: ${post.title}`} />
        </figure>
      </header>
      <section>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </section>
      <footer>
        <Avatar imageSource={post.author.avatar} name={post.author.name} />
      </footer>
    </article>
  );
}