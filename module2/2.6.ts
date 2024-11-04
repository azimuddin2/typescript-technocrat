{
    // constraints
    const addCourseToStudent = <
        T extends { id: number; name: string; email: string }
    >(
        student: T
    ) => {
        const course = 'Next Level Web Development'

        return {
            ...student,
            course
        }
    };

    const student1 = addCourseToStudent({
        id: 101,
        name: 'AZIM',
        email: 'azim@gmail.com',
        devType: 'Full Stack Dev'
    });

    const student2 = addCourseToStudent({
        id: 102,
        name: 'Ayman',
        email: 'ayman@gmail.com',
        laptop: 'HP'
    });


}