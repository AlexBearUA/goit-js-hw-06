const listWithCategoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", listWithCategoriesEl.length);
listWithCategoriesEl.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.querySelectorAll("li").length);
});
