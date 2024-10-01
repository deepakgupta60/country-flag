import React, { useEffect, useState } from 'react'

const CountryFlag = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch("https://xcountries-backend.azurewebsites.net/all");
            let data = await response.json();
            setCountry(data)
        }
        fetchData()
    }, [])

    const CountryData = ({ name, flag }) => {

        return (
            <>

           
                <div style={{

                    height: "200px",
                    width: "200px",
                    border: "0.5px solid",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius:"5px",
                    margin: "10px"

                }}>
                    <img src={flag} height={100} width={100} alt='text' />
                    <p>{name}</p>
                </div>
            </>
        )

    }
    return (
        <>
 <h1>List of Countries</h1>
            <div style={{ display: "flex", flexWrap: "wrap", margin: "auto", width: "1920px" }}>

                {
                    country.map(({ name, flag, abbr }, index) => (
                        <div key={index} >

                            <CountryData name={name} flag={flag} />
                        </div>


                    ))
                }

            </div>
        </>
    )
}

export default CountryFlag