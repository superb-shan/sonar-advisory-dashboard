import TableRow from "./TableRow";

export default function Table({headers, tenData=[], setActive}) {

    let type, schemeData;
    if (headers[0] == "Invoice Month-Year") type = 'downloadInvoice';
    if(headers[3]=='Systematic Plans') type = 'sip';
    if(headers[0]=='Portfolio Name'){
        type = 'portfolio';
    }
    if(headers[2]=='Rating') type = 'rating';
    if(headers[1]=='Scheme Name') type = 'schemes';    

    return(
        <div className=" flex flex-col bg-white p-[20px] rounded-[15px] text-left ">
            {
                (tenData.length === 0) ?
                <h1 className="text-[24px] font-bold text-center">
                    No Data Found !
                </h1>
                :
                <table cellPadding={'15px'} >
                    <tr className="border-b-[2px] border-[#E2E2E2] ">
                        {headers.map( ele =><th className={`pb-[20px] pt-[5px] font-medium `}>{ele}</th>)}
                    </tr>
                    {
                        tenData.map( (ele, index) =>{
                            if (type=='schemes' && ele[0] != index+1){
                                if (typeof ele[0] == 'number') ele.shift()
                                ele.unshift(index+1);
                            }
                            return <TableRow data={ele} setActive={setActive} type={type} />
                        })
                    }
                </table>
            }
        </div>
    );
}