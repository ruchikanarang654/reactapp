import React from 'react';
import unsplash from '../api/unsplash'
import regeneratorRuntime from 'regenerator-runtime';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component{
  state = {imgList:[]};

  //Method to handle promise, async call of the axios
  // onSearchSubmit(term){
  //   axios.get('https://api.unsplash.com/search/photos', {
  //     params : {
  //       query: term
  //     },
  //     headers:{
  //       Authorization: 'Client-ID bbad290bd34ff6eb6ca66700d04f10aa43b66e4376b2fd750329b72fee8b90eb'
  //     }
  //   }).then(response =>{
  //     console.log(response.data.results);
  //   })
  // }

  //Method with async await to handle async network request.
// onSearchSubmit = async (term) =>{
//     const response = await axios.get('https://api.unsplash.com/search/photos', {
//       params : {
//         query: term
//       },
//       headers:{
//         Authorization: 'Client-ID bbad290bd34ff6eb6ca66700d04f10aa43b66e4376b2fd750329b72fee8b90eb'
//       }
//     })
//     // console.log(response.data.results);

//     this.setState({  List: response.data.results})
//   }
///* Found: {this.state.imgList.length} images */

onSearchSubmit = async (term) =>{
  
    const response = await unsplash.get('/search/photos', {
      params : {
        query: term
      }
    })

    this.setState({imgList: response.data.results})
  }


  render() {
    return (
    <div className="ui container" style={{marginTop: '10px'}}>
    <SearchBar onSubmit= {this.onSearchSubmit} />
    <ImageList images={this.state.imgList} />
    </div>
  );
  }
}

  
// export default class App extends Component {
//   render() {
//     return (
//       <div>React simple starter</div>
//     );
//   }
// }
export default App;