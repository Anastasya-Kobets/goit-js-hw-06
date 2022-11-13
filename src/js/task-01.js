const numbersCategories =  document.querySelectorAll('li.item');

console.log('Number of categories:', numbersCategories.length)


numbersCategories.forEach(myFunction);
function myFunction(category){
    const category1 = category.firstElementChild;
    console.log('Category:', category1.textContent);
    const category2 = category1.nextElementSibling;
    console.log('Elements:', category2.childElementCount);

}

