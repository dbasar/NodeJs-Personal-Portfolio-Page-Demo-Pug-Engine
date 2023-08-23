const content = {
    title: 'Industrial Designs',
    pageHead: 'INDUSTRIAL DESIGN',
    products: [
        {
            src: 'images/industrial-design/design-1.jpeg',
            alt: 'First Design',
            description: 'Some English content. Arrays have another related method, findIndex(), that returns the index of the element we find using the find() method. If no elements match the condition, the findIndex() method returns -1.'
        },
        {
            src: 'images/industrial-design/design-2.jpeg',
            alt: 'Second Design',
            description: 'In the example below, we pass a function to the find() method that checks for the age of each of the student. It returns the matched student when the condition satisfies.'
        },
        {
            src: 'images/industrial-design/design-3.jpeg',
            alt: 'Third Design',
            description: 'To do that, we will use the find() method. It returns the first matched element from the array that satisfies the condition in the function. '
        },
        {
            src: 'images/industrial-design/design-4.jpeg',
            alt: 'Fourth Design',
            description: 'Using the some() method, we have seen that there is a student below age 30. Let us find out who that student is. '
        },
        {
            src: 'images/industrial-design/design-5.jpeg',
            alt: 'Fifth Design',
            description: 'The some() method returns a boolean value (true/false) based on at least one element in the array passing the condition in the function. Let us see if there are any students below the age 30.'
        },
        {
            src: 'images/industrial-design/design-6.jpeg',
            alt: 'Sixth Design',
            description: 'The reduce() method applies a reducer function on each of the array elements and returns an output value. We will apply a reducer function on the students array to compute the total amount paid by all the students.'
        }
    ]
}

module.exports = content;