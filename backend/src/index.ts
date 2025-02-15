import express, { Express, Request, Response } from "express";
import { MongoClient, Db, Collection, ServerApiVersion } from "mongodb";

interface Comment {
  writenBy: string;
  comment: string;
}

interface Story {
  name: string;
  likes: number;
  comments: Comment[];
}

const stories: Story[] = [
  { name: "AdventureOfJohn", likes: 0, comments: [] },
  { name: "MysteryOfTheLake", likes: 0, comments: [] },
  { name: "SpaceOdyssey", likes: 0, comments: [] },
];

let db: Db;
let collection: Collection<Story>;

async function dbconnection() {
    const uri = "mongodb+srv://mehedidev:BI1xbrl09u5ZvALw@cluster0.1pctw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true
        }
    });

    try {
        await client.connect();
        db = client.db("mern-storis-app");
        collection = db.collection<Story>("stories");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
}

const app: Express = express();
const port = 3000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/story/:name", (req: Request, res: Response) => {
  const name = req.params.name;
  res.send(`Story Name: ${name}`);
});

app.post("/api/story/:name/like", async (req: Request, res: Response) => {
  const story = await collection.findOne({ name: req.params.name });

  if (story) {
    await collection.updateOne({ name: req.params.name }, { $inc: { likes: 1 } });
    res.send(`Likes for ${story.name}: ${story.likes + 1}`);
  } else {
    res.status(404).send("Story not found");
  }
});

app.post("/api/story/:name/comments", async (req: Request, res: Response) => {
  const { writenBy, comment } = req.body;
  const story = await collection.findOne({ name: req.params.name });

  if (story) {
    await collection.updateOne({ name: req.params.name }, { $push: { comments: { writenBy, comment } } });
    res.send(`Comments for ${story.name}: ${JSON.stringify(story.comments)}`);
  } else {
    res.status(404).send("Story not found");
  }
});

dbconnection().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
});
