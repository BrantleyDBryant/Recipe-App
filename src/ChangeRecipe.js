import React from 'react';
//define and export our function that takes in state variables as arguments
export default function ChangeRecipe({ recipes, setRecipes }) {
  //create delete handler by filtering using an index 
    const handleDelete = (id) => {
        setRecipes([...recipes].filter((recipe, index) => id  !== index));
    };
    // Mapping the data to the recipeItems variable 
    const recipeItems = recipes.map(({ name, cuisine, photo, ingredients, preparation }, index) => (
      //creating the table
        <tr key={index}>
             <td>{name}</td>
        <td>{cuisine}</td>
        <td>
          <img src={photo} alt={photo} />
        </td>
        <td className="content_td"><p>{ingredients}</p></td>
        <td className="content_td"><p>{preparation}</p></td>
        <td>
          <button name="delete" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </td>
        </tr>
    )
    );
    //return the table as a prop 
    return (
    <>
    {recipeItems}
    </>
    );
}