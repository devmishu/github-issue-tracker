# JavaScript Basic Concepts

## 1. What is the difference between var, let, and const?

**Ans:**  
var হলো function scope এবং global scope।  
var কে redeclare এবং reassign করা যায়।  

let হলো block scope।  
let কে redeclare করা যায় না, কিন্তু reassign করা যায়।  

const হলো block scope।  
const কে redeclare করা যায় না এবং reassign করা যায় না।  


## 2. What is the spread operator (...)?

**Ans:**  
Spread operator array বা object এর elements গুলোকে ছড়িয়ে দেওয়ার জন্য ব্যবহার করা হয়।  

কখনও কখনও বিভিন্ন array method main array কে পরিবর্তন করে ফেলে।  
তাই main array পরিবর্তন না করার জন্য spread operator ব্যবহার করে array বা object এর কপি তৈরি করা হয়।  


## 3. What is the difference between map(), filter(), and forEach()?

**Ans:**  
এই সবগুলো হলো array method.  

**map()**  
map() ব্যবহার করা হয় array এর প্রতিটি element পরিবর্তন করে নতুন array তৈরি করার জন্য।  
নতুন array return করে মেইন array পরিবর্তন করে না।  

**filter()**  
filter() ব্যবহার করা হয় কোন শর্ত অনুযায়ী কিছু element বাছাই করে নতুন array তৈরি করার জন্য।  
নতুন array return করে মেইন array পরিবর্তন করে না।  

**forEach()**  
forEach() ব্যবহার করা হয় array এর প্রতিটি element এর উপর loop চালানোর জন্য।  
কোন নতুন array return করে না।  


## 4. What is an arrow function?

**Ans:**  
arrow ফাংশন মূলত short syntax function.  
এটা JavaScript এর ES6 version থেকে এসেছে।  
এই ফাংশনে function keyword ব্যবহার না করে => (arrow) চিহ্ন ব্যবহার করা হয়।  


## 5. What are template literals?

**Ans:**  
Template literals হলো JavaScript এ string লেখার একটি আধুনিক পদ্ধতি, যা ES6 এ এসেছে।  

এতে backtick \` ` ব্যবহার করে যেকোনো string লেখা যায় এবং এর ভিতরে **${ }** দিয়ে যেকোনো JavaScript expression লেখা যায়।