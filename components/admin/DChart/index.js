import dynamic from "next/dynamic"

const DChart = dynamic(()=> import('./DChart'),{
    ssr:false
});

export default DChart