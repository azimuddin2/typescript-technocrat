{
    // function with generics

    const createArray = (param: string): string[] => {
        return [param]
    }
    const result = createArray('Bangladesh');


    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    };
    const resultGeneric = createArrayWithGeneric<string>('Bangladesh')

    interface User {
        id: number,
        name: string
    }

    const resultGenericObj = createArrayWithGeneric<User>({ id: 101, name: 'azim' });


    const createArrayWithTuple = <X, Y>(param1: X, param2: Y): [X, Y] => {
        return [param1, param2];
    };

    const resultWithTuple = createArrayWithTuple<string, number>('Bangladesh', 2024);


    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next Level Web Development'

        return {
            ...student,
            course
        }
    };

    const student1 = addCourseToStudent<{ id: number, name: string, devType: string }>({ id: 101, name: 'AZIM', devType: 'Full Stack Dev' })
    const student2 = addCourseToStudent<{ id: number, name: string, laptop: string }>({ id: 102, name: 'Ayman', laptop: 'HP' })


}