import React, { Component } from "react";

export default class current_data extends Component {
    state = {
      isLoading: true,
      users: [],
      error: null
    }
    fetchUsers() {
        fetch(`https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole`)
          .then(response => response.json())
          .then(data =>
            this.setState({
              users: data,
              isLoading: false,
            })
          )
          .catch(error => this.setState({ error, isLoading: false }));
      }
      componentDidMount() {
        this.fetchUsers();
      }
    render() {
        const { isLoading, users, error } = this.state;
        return (
          <React.Fragment>
            {error ? <p>{error.message}</p> : null}
            {!isLoading ? (
              
              users.map(user => {
                const { first, last } = user;
                return (
                   
                  <div key={first}>
                    <p>Name: {first} {last}</p>
                    <hr />
                  </div>
                );
              })
            ) : (
              <h3>Loading...</h3>
            )}
          </React.Fragment>
        );
      }
  
    
  }