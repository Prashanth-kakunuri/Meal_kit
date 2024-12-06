// Function to handle the "Explore Categories" button click
function showCategories() {
    alert("Redirecting to meal categories...");
    // Add functionality to redirect to categories page or section if needed
    // For example: window.location.href = 'categories.html';
}

// Function to handle adding a meal kit to the cart
function addToCart(mealName) {
    alert(`${mealName} has been added to your cart!`);
    // Logic to actually add the meal to the cart can be added here
    // For example: addMealToCart(mealName);
}

// Function to view a specific category of meal kits
function viewCategory(category) {
    alert(`You selected the ${category} category!`);
    // Logic to filter or display meal kits based on selected category
    // For example: showCategoryMeals(category);
}
//--------------------------------------------------------------------------------
//cateries page
// Function to handle category clicks
function categoryClick(categoryName) {
    alert("You clicked on the " + categoryName + " category!");
    // Here you can redirect to specific category pages or load more content dynamically
    // For example, redirecting to a category page:
    // window.location.href = categoryName.toLowerCase() + '.html';
}
