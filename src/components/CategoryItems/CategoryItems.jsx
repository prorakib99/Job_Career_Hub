

const CategoryItems = ({item}) => {
    const {logo, category_name, availability} = item
    return (
        <>
            <div className="bg-gradient-to-r from-indigo-100 to-violet-100 rounded-lg p-10">
                <img src={logo} alt="" />
                <div className="text-zinc-700 text-xl font-extrabold mt-8 mb-2">{category_name}</div>
                <div className="text-neutral-400 text-base font-medium leading-relaxed">{availability}</div>
            </div>
        </>
    );
};

export default CategoryItems;