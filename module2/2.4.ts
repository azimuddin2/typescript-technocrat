{
    // interface - generic

    interface Developer<T, X> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?: X
    }

    type Watch = {
        brand: string;
        model: string;
        display: string
    }

    const developer1: Developer<Watch, null> = {
        name: 'Azim',
        computer: {
            brand: 'HP',
            model: 'Inter core i5',
            releaseYear: 2018
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'kw66',
            display: 'OLED'
        }
    };

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean
    }

    interface Bike {
        model: string;
        engineCapacity: string;
    }

    const developer2: Developer<AppleWatch, Bike> = {
        name: 'Anisul',
        computer: {
            brand: 'Apple',
            model: 'MacBook Air',
            releaseYear: 2018
        },
        smartWatch: {
            brand: 'Apple watch',
            model: 'MacBook watch',
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            model: 'Yamaha',
            engineCapacity: '100cc'
        }
    };


}