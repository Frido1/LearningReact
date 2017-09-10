import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	state = { albums: [] };

	componentWillMount() {
		//html get with a javacript promise(callback success, callback fail)
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({ albums: response.data }), 
			response => console.warn(response));	
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album} />
			);
	}

	render() {
		console.log(this.state);
		return (
			<View>
			{this.renderAlbums()}
			</View>

			);
	}
}

export default AlbumList; 
