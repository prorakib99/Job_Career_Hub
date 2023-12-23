import CategoryList from "../CategoryList/CategoryList";
import Featured from "../Featured/Featured";
import Hero from "../Hero/Hero";

const HomePage = () => {
    return (
        <>
            <Hero></Hero>
            <CategoryList></CategoryList>
            <Featured></Featured>
        </>
    );
};

export default HomePage;