export class exploreJson {

    exploreJson = [{
        id: '1',
        folder: 'root',
        isFolder: true,
        item: [
            {
                id: '2',
                folder: 'app',
                isFolder: true,
                item: [
                    {
                        id: '1',
                        file: 'package.json',
                        isFolder: false,
                    },
                    {
                        id: '1',
                        file: 'tsconfig.json',
                        isFolder: false,
                    }
                ]
            },
            {
                id: '3',
                folder: 'src',
                isFolder: true,
                item: [
                    {
                        id: '3',
                        folder: 'assets',
                        isFolder: true,
                        item:[

                        ]
                    },
                    {
                        id: '2',
                        file: 'index.html',
                        isFolder: false,
                    }
                ]
            }   

        ]
    }]

}