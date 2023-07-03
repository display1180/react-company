import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Department() {
	const [Vids, setVids] = useState([]);

	useEffect(() => {
		const key = 'AIzaSyCF8SOz4Cchg53VOMXZe0un2AC7zEP2apU';
		const list = 'PLw7h_PSATrFsUKd0EJLE9yF8S1NdmrdJK';
		const num = 10;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${list}&key=${key}&maxResults=${num}`;

		axios.get(url).then((data) => {
			console.log(data.data.items);
			setVids(data.data.items);
		});
	}, []);

	return (
		<Layout name={'Department'}>
			{Vids.map((vid, idx) => {
				return (
					<article key={idx}>
						<img src={vid.snippet.thumbnails.standard.url} alt={vid.snippet.title} />
						<h2>
							{vid.snippet.title.length > 50
								? vid.snippet.title.substr(0, 50) + '...'
								: vid.snippet.title}
						</h2>
						<p>
							{vid.snippet.description.length > 200
								? vid.snippet.description.substr(0, 200) + '...'
								: vid.snippet.description}
						</p>
						<span>{vid.snippet.publishedAt.split('T')[0].split('-').join('.')}</span>
						{vid.snippet.publishedAt.split('T')[0].split('-').join('.')}
						
					</article>
				);
			})}
		</Layout>
	);
}

export default Department;
