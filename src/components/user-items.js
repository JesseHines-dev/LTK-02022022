import { compareAsc, format } from 'date-fns';
format(new Date(2014, 1, 11), 'yyyy-MM-dd')

        const UserItems = [
    {
        id: 1,
        name: "User 1",
        createdDate: new Date('2021-07-15'),
    },
    {
        id: 2,
        name: "User 2",
        createdDate: new Date('2021-09-12'),
    },
    {
        id: 3,
        name: "User 3",
        createdDate: new Date('2021-07-25'),
    }
]

let docType = [
    {
        id: 1,
        name: "Health Document"
    },
    {
        id: 2,
        name: "Heart Document"
    },
    {
        id: 3,
        name: "Diet Document"
    }
];

let documents = [
    {
        id: 1,
        userId: 1,
        typeId: 1,
        status: "Approved",
        uploadedDate: new Date('2022-01-15'),
    },
    {
        id: 2,
        userId: 2,
        typeId: 2,
        status: "Approved",
        uploadedDate: new Date('2022-02-02'),
    },
    {
        id: 3,
        userId: 3,
        typeId: 3,
        status: "Submitted",
        uploadedDate: new Date('2022-02-02'),
    }
]

export default UserItems;