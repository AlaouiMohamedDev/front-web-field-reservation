import dynamic from "next/dynamic"

const RadicalChart = dynamic(()=> import('./RadicalChart'),{
    ssr:false
});

export default RadicalChart