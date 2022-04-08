class IndexedDB_class {
    get(props) {
        var db = [
            {
                id: '0',
                img: '/public/img/logo.jpg',
                userName: 'Ivan Bogaevski',
                type: 'text',
                lastMess: 'Hello))',
                time: '11:45',
                missed: '200',
                lastLogin: '21.12.2006',
            },
            {
                id: '1',
                img: '/public/img/logo1.jpg',
                userName: 'Mehail Roschakov',
                type: 'voice',
                time: '07:14',
                missed: '3',
                lastLogin: 'online',
            },
            {
                id: '2',
                img: '/public/img/logo2.jpg',
                userName: 'Amadeus Mozart',
                type: 'text',
                lastMess: 'You: Hello',
                time: '11:45',
                lastLogin: 'last seen 20 minutes ago',
            },
            {
                id: '3',
                img: '/public/img/logo3.jpg',
                userName: 'Marusia Churai',
                type: 'video',
                time: 'day ago',
                missed: '53',
                lastLogin: '5 minutes ago',
            },
            {
                id: '4',
                img: '/public/img/logo4.jpg',
                userName: 'Daniel Toretto',
                type: 'text',
                lastMess: 'u with me?',
                time: 'now',
                lastLogin: '1 minute ago',
            },
            {
                id: '5',
                img: '/public/img/logo5.jpg',
                userName: '𝓘 𝓛𝓸𝓿𝓮 𝓢𝓾𝓻𝓯',
                type: 'video',
                time: '03:52',
                missed: '2',
                lastLogin: 'online',
            },
            {
                id: '6',
                img: '/public/img/logo6.jpg',
                userName: 'Violet Evergarden',
                type: 'text',
                lastMess: "I'm back!!!!",
                time: '5 minutes ago',
                lastLogin: 'last seen 5 minutes ago',
            },
            {
                id: '7',
                img: '/public/img/logo7.jpg',
                userName: 'New Channel Name',
                type: 'video',
                text: 'Lol Day:0',
                time: 'day ago',
                missed: '53',
                lastLogin: 'today',
            },
        ];
        if (props === undefined) {
            return db;
        } else {
            return db[props.id];
        }
    }
}

export var IndexedDB = new IndexedDB_class();