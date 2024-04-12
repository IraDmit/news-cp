import axios from 'axios'

export const fetchData = async () => {
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
	return data
}

export const deletePost = async (id) => {
	await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
}