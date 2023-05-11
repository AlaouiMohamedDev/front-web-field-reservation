import dynamic from "next/dynamic"

const Destination = dynamic(()=> import('./Destinations'),{
    ssr:false
});

export default Destination