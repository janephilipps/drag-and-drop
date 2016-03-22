# Box to Box Drag & Drop

By [Jane Philipps](mailto:jane.philipps@gmail.com)

[janephilipps.github.io](http://janephilipps.github.io)

## Instructions

1. Unzip `drag-and-drop.zip`
2. Open `index.html` in browser
3. Enjoy!


## Discussion

The technologies I used to build this app are: HTML, CSS, and jQuery. The app has been tested in the latest versions of Chrome and Safari.

## Requirements

#### Any small box dragged and dropped over another small box should swap positions with each other

I used the jQuery UI `draggable` and `droppable` methods to accomplish this. When a `draggable` box is dropped on top of another `draggable` box, their positions are swapped using the invisible `droppable` boxes (mentioned below) as guides.

#### Any small box dragged and dropped on the other large square should be moved to that square and swapped with any small box already there

I created invisible `droppable` boxes to catch any `draggable` boxes being dropped. Note: there are a couple possible ways to interpret "any small box already there" - I implemented it this way to allow multiple boxes to be dropped into the second container into any position in the grid.

#### Add a button to allow the user to reset the small box positions

I cached the original box set-up, including the invisible `droppable` boxes, and rebuilt the DOM on reset to correctly reposition all of the boxes.

#### Add a button or input to allow the user to randomize the layout and positioning of the small boxes in both large squares

I added a `randomize` function that initalized one array for each larger container. When run on click of the button, the function loops through the `droppable` 
boxes, randomly pushes each box into one of the two arrays, then empties the containers and resets them with the arrays of new boxes.

