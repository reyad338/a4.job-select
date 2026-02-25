
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
query selector better then getelement by idd...
query te direct nodelist pawa jay ata ..
get element by id te html collection pawa jay
### 2. How do you create and insert a new element into the DOM?

const div= document.createlement("div/any tag")

### 3. What is Event Bubbling? And how does it work?
document.getElementById("parent").addEventListener("click", function(){
    console.log("Parent Clicked");
});
Event bubbling holo DOM er ekta process jekhane kono event (click) prothome target element e hoy, tarpor step by step tar parent → grandparent → document dike propagate kore.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation holo ekta technique jekhane amra child elements er upor direct event listener na diye, tar parent element e listener diye event handle kori.
### 5. What is the difference between preventDefault() and stopPropagation() methods?

---

