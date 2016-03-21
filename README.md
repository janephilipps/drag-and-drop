# Box to Box Drag & Drop

By [Jane Philipps](mailto:jane.philipps@gmail.com)

[janephilipps.github.io](http://janephilipps.github.io)

## Instructions

1. Navigate to [repo](https://github.com/janephilipps/drag-and-drop)
2. Clone locally using `git clone git@github.com:janephilipps/drag-and-drop.git`
3. Open `index.html` in browser
4. Enjoy!


## Discussion

The technologies I used to build this app are: HTML, CSS, and jQuery. The app has been tested in the latest versions of Chrome and Safari.

## Requirements

#### Any small box dragged and dropped over another small box should swap positions with each other

I used the jQuery UI draggable and droppable methods to accomplish this.

#### Any small box dragged and dropped on the other large square should be moved to that square and swapped with any small box already there

#### Add a button to allow the user to reset the small box positions

I had to cache the original box set-up and rebuild the DOM on reset to correctly reposition all of the boxes.

#### Add a button or input to allow the user to randomize the layout and positioning of the small boxes in both large squares

I added a `randomize` function that initalized one array for each larger container. When run on click of the button, the function loops through the boxes, randomly pushes each box into one of the two arrays, then empties the containers and resets them with the arrays of new boxes.

