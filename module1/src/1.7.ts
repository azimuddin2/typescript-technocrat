{
    // spread operator, rest operator
    const skillList1: string[] = ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS']
    const skillList2: string[] = ['JavaScript', 'React.js', 'React Router', 'Firebase']

    skillList1.push(...skillList2);

    const mentors1 = {
        javascript: 'Jhankar',
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tonmoy',
        cloud: 'Nahid',
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }


    // learn rest operator
    const greetFriends = (...friends: string[]) => {

        friends.forEach((friend: string) => console.log(`Hi ${friend}`));

    }
    greetFriends('Jhankar', 'Anisul', 'Ayman', 'Mezba', 'Azim')


}