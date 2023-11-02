import { useState, useEffect } from "react";
import axios from "~/api/axios";

const Tickets = () => {


    const [ticketData, setTicketData] = useState([]);

    useEffect(() => {
      axios.get("/ticket/all").then((res) => setTicketData(res.data))
    }, []);

    
    return (
        <div className="relative overflow-x-auto mx-auto my-10 max-h-[678px] w-[900px] overflow-y-auto">
            <table className="w-full text-sm text-left text-black dark:text-gray-400 text-center">
                <thead className="sticky top-0 text-xs text-black uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Ticket ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Account ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ShowTime ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Seat
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ticketData.map((ticket) => (
                        <tr key={ticket.ticketId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {ticket.ticketId}
                            </th>
                            <td className="px-6 py-4">
                                {ticket.accountId}
                            </td>
                            <td className="px-6 py-4">
                                {ticket.showtimeId}
                            </td>
                            <td className="px-6 py-4">
                                {ticket.seatnumber}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default Tickets