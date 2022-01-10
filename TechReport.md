# Documentation

## Intro
Fantasy Keycaps is a store that needed to have an online front due to business requirements. My task as a web developer is to make a fullstack web application to suit this company's purpose, as such it needs to have all the features that a typical web store has including products, carts, ordering, payment system, account system, etc. The store must have backend functionality so that the admins/business owners can register, update, and delete records of users, products, and orders. All this has been provided in this repository.

## Personal overview
This project uses the MERN stack to deliver an online store with a complete working backend and frontend.
I originally was doing my project completely from scratch from the start of the semester, however there was issue after issue in getting it to work, I had about 3 different versions of it which have since all been deleted except for the first one, which by the end was the only one somewhat working. You can find this repo along with all the commit history and work I have done on it [here](https://github.com/NMIT-GITHUB/web601-assessment-one-milestone-one-d3aths).  
The backend was working fine but then the frontend I had problems with since in class we were first off taught how to use Pug with it, then told to use React instead. It was too annoying to install and convert everything to React within that repo and set it all up properly when it was already half a project, as well as being able to link up the backend to the frontend, so have moved onto the repo given from [here](https://github.com/DevilsDev/WEB601_fullstack).

## Backend
MongoDB linked up to the project  
![db](/uploads/1.png)

New users can be registered on the website interface or with Postman at localhost:5000/api/users

A JSON formatted list of products
![jsonz](/uploads/9.png)

### Admin area
If a user has admin privileges, a new section becomes available from the navbar. From here an admin can view a list of products, orders, and users, and edit and remove them as they please.  
![adminstuffz](/uploads/2.png)

List of currently added users  
![users](/uploads/3.png)  
When you edit a user, you can change their name, email address, or admin status. A user must change their own password by themselves from their profile page.

User's passwords are also encrypted within the database  
![passes](/uploads/8.png)  

List of currently added products  
![caps](/uploads/4.png)  
You can edit and remove products from here as well

Adding a new product  
![addprod](/uploads/5.png)  
Product images automatically get hosted on the repo's uploads folder, very easy interface to use.

Viewing orders  
![orders](/uploads/6.png)  
List of the orders that have been placed, from the details screen we can get more information about it

Order details  
![deetz](/uploads/7.png)

## Frontend

Product Details 
![acap](/uploads/10.png)  
Each item can be added to the cart depending on how many products are in stock (which can be updated by admins). Can also add a review if logged into an account. Top rated products appear on the carousel on the main homepage.

Shopping cart has the ability to change quantity, remove items, view total cost then proceed to the checkout where the infomation will be filled in and order placed
![cart](/uploads/11.png)

Customer's profile page displays editable information and any orders their account has placed
![info](/uploads/12.png)

Products are searchable
![search](/uploads/13.png)

## Code functionality

### Backend

#### Controllers
The controllers for orders, products, and models, hold the code for all the functions that each category needs to have. For example, in user, we have these functions to execute different features that an account system needs to have.  
![userc](/uploads/14.png)  
Each section on the controllers has its description, route that it uses, and accessibility on it. Some functions are protected to be only accessed by admin users, or are private so they can only be called when something on the website is interacted with when a user is logged in.  
These routes are the URLs you will see in your browser when you do different things, and can also be accessed with a tool such as Postman, and can be done completely outside of interacting with the website at all, as long as the server is online.

#### Models
The models are the schemas, or blueprints, that Mongo uses to create its collections.  
![modelz](/uploads/15.png)  
Every user, product, review, and order in there is using a schema to tell the database what information it needs to have. These all get input when they are created, and in some cases created automatically. Anything that interacts with a user, product, review, or order, must hook into the model for it in order to display the information associated with the object.

#### Routes
The routes are used to tell express where exactly to go when doing interacting with objects. It uses all the information that was defined in the controller, and then tells us what method we can use to execute the controller's functions, so for example  
![routez](/uploads/16.png)  
This is telling us that the POST method is the one that gets called when registering a user, then to navigate to ../login to authenticate the user logging in, and so on.

### Frontend
Frontend/src is where the visual interface of the website is created. This website is using React, so every part of the website is in components, and JSX scripts, which are put together to make a dynamic, reusable code for the website. A lot of this stuff comes prebuilt when you install react on your project. Here we're using a combination of react, redux, and bootstrap. All these libraries are prebuilt and you can just import them into your project and take what you want from them.

## Milestone 2 UX Tasks

A1. Briefly explain with examples the techniques which are used to get information from the user to develop user experience:
- Questioning
- Listening
Answer in 80-120 words

1. The questioning technique is about asking the right question to get the right answer, that is, getting specific and assertive answers, which collaborate to solve a problem. An example is the "how might we" questions. These questions are the actual problems the UX design solution should be focused on. For instance, the how might we question could sound like "How might we provide appropriate information to the international graduates so they can find a job faster?"
2. The listening technique is about paying close attention to what the user is saying to find out exactly what they need. Listening to the customers feedback and adjusting the solution to be more exclusive makes the customer feel more important and special.

A2. List and explain any three UX principles  
Answer in 100-150 words.  
1.Focus on the user: this principle is at the heart of UX design because it helps to address a commonproblem in website design: as designers become more adept at working with complex web designframeworks,  they  may  find themselves designing sites that are more concerned with impressing fellow web designers than with providing a great experience to real-life users.  
2.Consistency: is a more particular element of UX design that is highly crucial when it comes to creating a  successful website. Consistency, in its broadest sense, implies that your designs and functionality are consistent throughout all of your pages and products.  
3.Accessibility: it involves making your designs accessible to all users, including those with impairments.  It's critical to prioritize accessibility in your design approach for at least two reasons:  
1) It will give a positive experience for your users;  
2) There are several rules mandating you to provide equal access.

A3. Provide a brief description of the following UX values:   •Usefulness•Aesthetics•Desirability•Useability•Function  
in 100-150 words.  
1.Usefulness: every product is designed to solve any particular user problem. The usefulness of aproduct can be determined by the capacity of that solution to meet user needs and accomplish acertain task.  
2.Aesthetics: it refers to the emotions and sensations that a user experiences when using a system. It has the power to create or shatter any established solution's emotional appeal. To build a lasting relationship  between a user and the system, it is critical to have an appealing and memorable interface.  
3.Desirability: it refers to the component of the system that is entertaining and engaging. It’s the process of persuading a user to do a certain action via the use of appropriate design. It's one ofthe characteristics that distinguishes market leaders from their rivals. A page may be made more attractive and engaging for    customers by including graphics, information, and other aspects.  
4.Usability: it refers to the easiness of the product to be used and complete all the goals and taskseasily.
5.Functionality: it refers to whether or not the design works and assists the user in achieving their objectives and needs. When a design is properly capable of doing the tasks, it is supposed to complete, it   is deemed to have optimum functionality. The system must be dependable, consistent,and capable of doing the essential duties whenever the user requires it.

A4. List any five methods which are used to gather information from users regarding the user experience.  Briefly describe each one. Answer in 100-150 words.  
1.Contextual Interviews: allows you to observe users in their natural setting, allowing you to gain adeeper knowledge of how they function.  
2.First Click Testing: is a navigation-focused testing approach that may be applied on a live website, a  prototype, or a  wireframe.  
3.Focus  Groups: a moderated conversation with a group of users that provides insight into the attitudes, ideas, and wants of the users.  
4.Personas: a persona is a representation of a user based on data and user interviews. The information used to generate the user type is not fictitious, even if the persona's personal characteristics are.  
5.Prototyping: creating  a mock-up of the site allows the design team to test ideas before implementing  them. A prototype might be anything from a simple paper mock-up to a series of interactive HTML pages.

A5. Describe what is meant by wireframes in user experience. Answer in 50-100 words.  
Wireframes are a type of web page layout that shows which interface components will be included onthe main pages. One of the most crucial parts of the interface design process is wireframing. The basicgoal  of  wireframes is to visualize how a web page might appear. It is quite beneficial to obtain stakeholder permission so that the development team may begin developing the solution. Wireframing is a stage in the product life cycle that takes place at the beginning. It's when developers are putting the project's scope to the test, collaborating on ideas, and figuring out what the business needs are. During the development of a   web page, a wireframe is an initial iteration.