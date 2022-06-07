# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)






### My

## My readme.md

# Super Sticky Notes

An app that lets you add, search and delete notes



## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

-Getting the typed values when creating a note 
I first implemented the note/setNote functionality inside the CreateArea.js component. Getting the typed values of title and content when creating a note via the handleChange function. So in my setote function I return a new object with the previous note and in addition I add the new name and value. This way when we start typing the title or content you'll see it being saved inside the state. 

+ New Note button will trigger this adding of the note functionality. The submitNote function is passed to this button when clicked.

- Passing a new created note back to App.js
We need to trigger a function that can pass this note back over to the App.js, passing in a function as a prop. I created a function called addNote in App.js which is going to receive a note object and then do something with it. AddNote is going to be added as a value called onAdd to one of the props for the createArea in App.js. It's set it to the value equal to addNote. And calling this onAdd() from the props is going to be equivalent to calling the addNote() from the App.jsx. So we passed addNote() as props to submitNote() in the createArea component via the onAdd() property/attribute. In onAdd() addNote() is passed over to createArea as a props.onAdd(note) in the submitNote function.


- Newly created note added to an array in App.js
Then this new note will be added to an array in App.js and as this array will need to be changed it will need state. I called the array notes as it will hold an array of all the notes and setNote() to update the array. The initial state is an empty array and only when the user adds a note the array will get populated. I used setNotes function inside addNote() so we can add notes to the empty array. To do this we will need to get hold of the previous notes once we have some notes in the array. I used the spread operator, ...prevNotes, and then added the 'new' note at the end. Note is being passed over from props.onAdd(note) inside SubmitNote function in CreateArea.js.

- Render a separate note component for each item
This was achieved by passing props from App.js to Note.js component
After this we to take the array and render a separate note components inside the <Note /> component further down in App.js which via props will pass the title and content into the separate Note.js component, props.title and props.content

- Clear the content of the note
Once a new note has been added then we clear the title and content from where we created the note in createArea component. We can clear out the note object by clearing it, setting note state of the title and content to an empty string. "".

- Implementing the delete note functionality
To do this we use props and add an onClick attribute to the delete button in the Note component. We add the function handleClick to trigger a function that gets passed over from the props that will delete this note from the array. I created this function called deleteNote in App.js where we will need an id of the note that needs to be deleted. This function will be passed over to each of these notes that gets rendered as a property, onDelete. The OnDelete property passes this function over to the handleClick function in the Note component.

So when you create a new note and then delete it afterwards you will see that the callback from the Note.js component triggered
the delete function. 

- Use the filter function to filter out the note that needs deleting
Inside the deleteNote function in App.js we have access to all of the previous notes array so we can then loop through it using the filter function. We iterate over each noteItem and it's index to check to see which ones we want to filter out. We need find the index that matches the id of the note to be deleted while returning all the notes where the index does not equal that id. We end up with an array that contains everything in the previus notes other than the ones that matches the id of the note to be deleted.

- Pass an id over to the Note component and then pass it back to App.js when deleting a note
We will be using the index in the map function both as the key and the id. When each of these note components are rendered the index of the noteItem of the notes array will be passed over as the id which will be picked up inside the Note component. When props.OnDelete(props.id) in handleClick in the Note component gets called we pass over the props.id and send it back when the onDelete gets triggered.
So now when you ceate a new note and click +New Note, and then click the delete button it will disappear from the array.


### The challenge



### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.



**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links


- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles



### What I learned





**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development


### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.



## Author

- Website - [Add your name here](https://www.annie-indreiten.com)



## Acknowledgments

