{
    // union types

    // type FrontendDeveloper = 'expertFrontendDeveloper' | 'juniorFrontendDeveloper'
    // type fullStackDeveloper = 'expertFullStackDeveloper' | 'juniorFullStackDeveloper'

    // type Developer = FrontendDeveloper | fullStackDeveloper

    type User = {
        name: string;
        email: string;
        gender: "male" | 'female';
        contactNo?: string;
        bloodGroup: "A+" | "B+" | "O+" | "AB+"
    };

    const user1: User = {
        name: 'Azim',
        email: 'azimuddin@gamil.com',
        gender: 'male',
        bloodGroup: 'A+'
    };


    // 
    type FrontendDeveloper = {
        skills: string[];
        designation1: 'Frontend Developer'
    };

    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'
    };

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullStackDeveloper: FullStackDeveloper = {
        skills: ['HTML', 'CSS', 'Javascript', 'React', 'Node.js', 'Express.js', 'MongoDB'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer',
    };


}