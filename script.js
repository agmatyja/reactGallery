var MoviePhoto = React.createClass({
  propTypes: {
    photo: React.PropTypes.string.isRequired
  },
  
  render: function() {
    return (
      React.createElement('img', {src: this.props.photo})
    )
  }
});  
var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired 
  },
  
  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    )
  }
});  

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },
  
  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  }
});  
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
        React.createElement(MovieTitle, {title: this.props.title}),
        React.createElement(MovieDescription, {desc: this.props.desc}),
        React.createElement(MoviePhoto, {photo: this.props.photo})
      )
    );
  }
});  
var MoviesList = React.createClass({
  propTypes: {
      movies: React.PropTypes.array.isRequired
    },
  
  render: function() {
    var moviesElements = this.props.movies.map(function(movie) {
      return React.createElement(Movie, {
        key: movie.id,
        title: movie.title,
        desc: movie.desc,
        photo: movie.photo
      });
    });
 
    return (
      React.createElement('div', {},
      React.createElement('h1', {}, 'Lista filmów'),
      React.createElement('ul', {}, moviesElements)
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
var element = React.createElement(MoviesList, {movies: movies});
ReactDOM.render(element, document.getElementById('app'));
 
 