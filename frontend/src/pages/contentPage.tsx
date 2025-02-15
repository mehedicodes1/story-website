import { useParams } from "react-router-dom";
import stories from "../data/content";

function ContentPage() {
  const { name } = useParams<{ name: string }>();
  const story = stories.find((story) => story.name === name);

  if (!story) {
    return <h1>Story not found</h1>; // Handle case where story is not found
  }

  // Split the content into sentences
  const contentArray = story.content
    .split(".")
    .filter((sentence) => sentence.trim() !== "");

  return (
    <>
      <h1 className="text-center text-3xl font-bold">{story.title}</h1>
      <section className="flex flex-col gap-3">
        {contentArray.map((sentence, index) => (
          <p className="text-xl" key={index}>
            {sentence.trim()}.
          </p>
        ))}
      </section>
    </>
  );
}

export default ContentPage;
