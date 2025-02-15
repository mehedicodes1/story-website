import Story from "../components/storyList"
import stories from "../data/content"

export const StoryPage =()  =>  {
    return (
        <Story stories={stories} />
    )
}