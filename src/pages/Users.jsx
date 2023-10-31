import sampleData from "~/data/sampleData";

const Users = () => {
    return (
        <div className="flex w-full">
        <div className="relative overflow-x-auto mx-auto my-auto max-h-[678px] w-[900px] overflow-y-auto">
            <table className="w-full text-sm text-left text-black dark:text-gray-400">
                <thead className="sticky top-0 text-xs text-black uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Account ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nick Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Balance
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sampleData.users.map((user) => (
                        <tr key={user.accountId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {user.accountId}
                            </th>
                            <td className="px-6 py-4">
                                {user.username}
                            </td>
                            <td className="px-6 py-4">
                                {user.nickname}
                            </td>
                            <td className="px-6 py-4">
                                {user.email}
                            </td>
                            <td className="px-6 py-4">
                                {user.balance}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    )
};

export default Users