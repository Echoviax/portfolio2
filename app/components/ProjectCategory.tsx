export type ProjectCategory = 'webdev' | 'gamedev' | 'gamedes' | 'webdes' | 'dev';
const CategoryToName = {'webdev': "Web Dev", 'gamedev': "Game Dev", 'gamedes': "Game Design", 'webdes': "Web Design", 'dev': "Development"}

export default function CategoryTag({ category }: {
    category: ProjectCategory;
}) {
    return (
        <div className={`category-tag category-${category}`}>
            {CategoryToName[category]}
        </div>
    );
}

export function MiniCategoryTag({ category }: {
    category: ProjectCategory;
}) {
    return (
        <div className={`mini-category-tag category-${category}`}>
            {CategoryToName[category]}
        </div>
    );
}