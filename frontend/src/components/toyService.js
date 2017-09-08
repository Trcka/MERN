import axios from 'axios';

class ToyService{
	sendData(data){
		axios.post('http://localhost:4200/toys/add/post', {toy: data
		}).then(function(responce){
			console.log(responce);
		}).catch(function(err){
			console.log(err);
		})
	}
}

export default ToyService;