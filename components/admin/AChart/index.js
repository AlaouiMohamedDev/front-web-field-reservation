import dynamic from "next/dynamic"

const AChart = dynamic(()=> import('./AChart'),{
    ssr:false
});

export default AChart