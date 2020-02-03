import * as React from 'react';

interface Beer {
  id: number;
  name: string;
}

interface BeerListProps {
}

interface BeerListState {
  beers: Array<Beer>;
  isLoading: boolean;
}

class LandingPage extends React.Component<BeerListProps, BeerListState> {

  constructor(props: BeerListProps) {
    super(props);

    this.state = {
      beers: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://localhost:8080/good-beers')
      .then(response => response.json())
      .then(data => this.setState({beers: data, isLoading: false}));
  }

  render() {
    const {beers, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h2>Beer List</h2>
        {beers.map((beer: Beer) =>
          <div key={beer.id}>
            {beer.name}
          </div>
        )}
      </div>
    );
  }
}

export default LandingPage;