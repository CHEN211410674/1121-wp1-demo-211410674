import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarsonn';
    const T31_74_MultipleReturns = () => {
        const[isLoading, setIsLoading] = useState(true);
        const[isError, setIsError] = useState(false);
        const [user, setUser] = useState(null);

        useEffect(() => {
            const fetchUser = async () => {
              try {
                const resp = await fetch(url);
                console.log('resp', resp);
                if(!resp.ok){
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                const data = await resp.json();
                console.log(`user data`, data);
                setIsLoading(false);
                setIsError(false);
                setUser(data);

              }catch(error){
                console.log(error);
              }
            }
            fetchUser();
        }, []);

        if(isLoading) {
            return <h2>Loading...</h2>
        }

        if (isError) {
            return <h2>There was error ...</h2>
        }
        const {name} = user;

        return (
          <>
             <h2>{name}</h2>
          </>
        );
    };

export default T31_74_MultipleReturns;
