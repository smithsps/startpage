export interface ILibrary {
	categories: ICategory[];
}

export interface ICategory {
	name: string;
	class: string;
	bookmarks: IBookmark[];
}

export interface IBookmark {
	name: string;
	icon: string;
	href: string;
}

export const library = {
	categories: [
		{
			name: 'Email',
			class: 'text-emerald-500 border-emerald-500',
			bookmarks: [
				{
					name: 'Gmail',
					href: 'https://mail.google.com/mail/u/0/'
				},
				{
					name: 'Outlook',
					href: 'https://outlook.office.com/mail/'
				},
				{
					name: 'Runbox',
					href: 'https://runbox.com/app/'
				}
			]
		},

		{
			name: 'Home Lab',
			class: 'text-indigo-600 border-indigo-600',
			bookmarks: [
				{
					name: 'Unraid',
					href: ''
				},
				{
					name: 'Seedbox',
					href: ''
				}
			]
		},
		{
			name: 'Discussion',
			class: 'text-amber-700 border-amber-700',
			bookmarks: [
				{
					name: 'Hacker News',
					href: 'https://news.ycombinator.com'
				},
				{
					name: 'Lobste.rs',
					href: 'https://lobste.rs/'
				},
				{
					name: 'Reddit',
					href: 'https://www.reddit.com/'
				}
			]
		},
		{
			name: 'Media',
			class: 'text-rose-600 border-rose-600',
			bookmarks: [
				{
					name: 'Twitch',
					href: 'https://www.twitch.tv/'
				},
				{
					name: 'Youtube',
					href: 'https://www.youtube.com/'
				}
			]
		}
	]
};
