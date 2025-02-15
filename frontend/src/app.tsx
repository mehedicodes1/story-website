import { Layout } from "./layouts/layout.tsx";
import { HomePage } from "./pages/home.tsx";
import { NotFoundPage } from "./pages/404.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StoryPage } from "./pages/story.tsx";
import ContentPage from "./pages/contentPage.tsx";

const routes = [
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            {
             path: '/',
             element: <HomePage />
            },
            {
                path: '/story',
                element: <StoryPage />
            },
            {
                path: '/story/:name',
                element: <ContentPage/>
            }
        ]
    }
];

const router = createBrowserRouter(routes);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
