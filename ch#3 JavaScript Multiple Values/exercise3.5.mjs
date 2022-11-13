/*Practice exercise 3.5
    1. Create an object named people that contains an empty array that
    is called friends .
    2. Create three variables, each containing an object, that contain
    one of your friend's first names, last names, and an ID value.
    3. Add the three friends to the friend array.
    4. Output it to the console. */

    let people={
        friends:[],
    }
    let friend1={
        firstName: "Ali",
        lastName: "Hamza",
        idCode: 36501
    }
    let friend2={
        firstName: "Kashif",
        lastName: "Niaz",
        idCode: 36502
    }
    let friend3={
        firstName: "Ali",
        lastName: "Faisal",
        idCode: 36503
    }

    people.friends.push(friend1,friend2,friend3);
    let output1=people.friends[0];
    let output2=people.friends[1];
    let output3=people.friends[2];

    console.log(output1,output2,output3,);