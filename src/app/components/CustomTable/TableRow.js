
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TableRow ({data}) {

    const [selected, setSelected] = useState(false);
    const router = useRouter()

    return(
        <tr class="even:bg-white odd:bg-[#F9FBFF]  text-[14px] font-medium">
            {data.map((ele)=>{
                return <td>{ele}</td>
            })}
        </tr>
    );
}