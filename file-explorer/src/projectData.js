export const projectData = {
	id: 1,
	name: 'root',
	isFolder: true,
	items: [
		{
			id: 2,
			name: 'public',
			isFolder: true,
			items: [
				{
					id: 7,
					name: 'Test',
					isFolder: true,
					items: [
						{
							id: 8,
							name: 'something',
							isFolder: false,
						},
					],
				},
			],
		},
		{
			id: 3,
			name: 'src',
			isFolder: true,
			items: [
				{
					id: 4,
					name: 'App.js',
					isFolder: false,
				},
				{
					id: 5,
					name: 'index.css',
					isFolder: false,
				},
			],
		},
		{
			id: 6,
			name: 'package.json',
			isFolder: false,
		},
	],
};
