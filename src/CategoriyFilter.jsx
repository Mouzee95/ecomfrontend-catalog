const CategoryFilter = ({ categories, onSelect }) => {
    return (
        <div className="row">
            <select className="form-control" id="categorySelect" onChange={(e) => onSelect(e.target.value)}>
                <option value="">All Categories</option>
                {categories.map(category => (
                    <option
                        key={category.id}
                        value={category.id}>
                        {category.name}

                    </option>
                ))}
            </select>
        </div>
    )

}
export default CategoryFilter;
