/*var GalleryItem = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.image.name),
        React.createElement('img', {src: this.props.image.src})
      )
    )
  },
});
var element = React.createElement(GalleryItem);
var image = {
  name: 'Kotek',
  src: 'http://imgur.com/n8OYCzR.png'
};

var element = React.createElement(GalleryItem, {image: image});
ReactDOM.render(element, document.getElementById('app'));
*/


var Movie = React.createClass({
	propTypes: {
      key: React.PropTypes.number.isRequired,
      title: React.PropTypes.string.isRequired,
      desc: React.PropTypes.string.isRequired,
      photo: React.PropTypes.string.isRequired,
    },
	
	render: function() {
		return (
 	      React.createElement('li', {key: this.props.key},
			React.createElement('h2', {}, this.props.title),
			React.createElement('p', {}, this.props.desc),
			React.createElement('img', {src: this.props.photo})
		  )
		);
	}
	
});	


	
	 var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
	photo:''
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
	photo:''
  },
  {
    id: 3,
    title: 'Dzień świstaka',
    desc: 'Film wcale nie o świstaku',
	photo:''
  },
  {
    id: 4,
    title: 'Titanic',
    desc: 'Film o pechowym statku',
	photo:''
  },
  {
    id: 5,
    title: 'Chicago',
    desc: 'Film o strasznych babach',
	photo:'pobrane.jpg'
  },
    
 ];

var moviesElements = movies.map(function(movie) {
  return React.createElement(Movie, {
	  key: movie.id,
	  title: movie.title,
	  desc: movie.desc,
	  photo: movie.photo
  });
});


var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
	);
 

 ReactDOM.render(element, document.getElementById('app'));
 
  //MovieTitle, MovieDescription, MoviesList; 