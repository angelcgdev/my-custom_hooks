import { useEffect, useRef, useState } from "react"


export const useFetch = ( url ) => {

    const defaultData = {data: null, loading: true, error: null};
    
    
    
    const isMounted = useRef(true);
    const [state, setState] = useState(defaultData);

    //solo se llama cuando el componente se desmonta
    useEffect( ()=> {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        setState(defaultData);
              
        fetch ( url )
        .then( resp => resp.json() )
        .then( data => {
            console.log(typeof data);
            if(isMounted.current){
                setState({
                    loading: false,
                    error: null,
                    data
                })
            }
            // setTimeout(()=>{
            // }, 4000 );

        }).catch( ()=>{
            setState({
                data: null,
                loading: false,
                error: 'No de pudo cargar la info'
            })
        } );
    }, [url])
    
    return state;
}
