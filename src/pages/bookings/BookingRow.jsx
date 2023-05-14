import React from 'react';

const BookingRow = ({ booking,handleDelete,handleCofirm}) => {
    const { _id,name, date, title, price, img,status  } = booking
    return (
        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="w-24 h-24">
                        <img src={img} alt="Avatar " />
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                </div>
            </td>
            <td>
                <div className="font-bold">{title}</div>
            </td>
            <td>
                <div className="font-bold">{date}</div>
            </td>
            <td>
                <div className="font-bold">{price}</div>
            </td>
            <th>
                { status==='confirm'? <span className='text-blod text-primary'>confirmed</span> :<button onClick={()=>handleCofirm(_id)} className="btn btn-ghost btn-xs">reload dile confirm cole jsse eita thik korte hobe kal</button>}
            </th>
        </tr >
    );
};

export default BookingRow;