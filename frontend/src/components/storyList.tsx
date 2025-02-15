import { Link } from "react-router-dom";

interface StoryListProps {
  stories: Story[];
}
interface Story {
  name: string;
  title: string;
  content: string; // Change to string
}

const Story: React.FC<StoryListProps> = ({ stories }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {stories.map((story) => (
        <div
          key={story.name}
          className="flex flex-col gap-2 bg-[#1E2C4D] p-4 rounded-md shadow-[0_0_5px_0px_rgba(0,0,0,0.5)]"
        >
          <h1 className="font-bold text-xl">{story.title}</h1>
          <p>{story.content.substring(0, 100) + "..."}</p>
          <Link
            className="text-yellow-500 bg-[#0B192C] p-2 rounded-md"
            to={`/story/${story.name}`}
          >
            Read More
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Story;
