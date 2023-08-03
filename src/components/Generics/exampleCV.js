import { v4 as uuidv4 } from "uuid";

const exampleCV = {
    profile: {
        photo: "",
        name: "John",
        surname: "Doe",
        email: "johndoe@doejohn.com",
        adress: "1234 Avenue of the Cypres, Megalopolis",
        city: "Megalopolis",
        postalCode: "666 999",
    },
    professions: [
        {
            id: uuidv4(),
            title: "Assistant manager",
            establishment: "XANAX Corp.",
            place: "Megalopolis",
            startDate: "01/01/1969",
            endDate: "03/04/2023",
            description: "It was long. Not fun. A bit weird. It's like i've done that all my life now",
            open: false,
        },
        {
            id: uuidv4(),
            title: "Farmer",
            establishment: "At my house",
            place: "Mouse City",
            startDate: "03/05/2023",
            endDate: "Now",
            description: "A bit more fun i think",
            open: false,
        },
    ],
    educations: [
        {
            id: uuidv4(),
            title: "Managment Degree",
            establishment: "Megalopolis WireHouse College",
            place: "Megalopolis",
            startDate: "01/01/1967",
            endDate: "01/01/1969",
            description: "I had what looked like friends at that time",
            open: false,
        },
    ]
}

export default exampleCV;
