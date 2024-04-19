import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from '@inertiajs/react'; 
import TableHeading from "@/Components/TableHeading";

export default function Index({auth, users, queryParams = null, success}){
    queryParams = queryParams || {}
    const searchFieldChanged = (name, value) =>
    {
        if (value){
            queryParams[name] = value
        } else
        {
            delete queryParams[name]
        }
        router.get(route('user.index'), queryParams)
    }

        const onKeyPress = (name, e) => {
            if(e.key !== 'Enter') return;

            searchFieldChanged(name, e.target.value);
        }

        const sortChanged = (name) =>   {

            if (name === queryParams.sort_field){
                if (queryParams.sort_direction === 'asc')
                {
                    queryParams.sort_direction = 'desc'
                }
                else
                {
                    queryParams.sort_direction = 'asc'
                }
            }
            else
            {
                queryParams.sort_field = name;
                queryParams.sort_direction = 'asc';
            }
            router.get(route('user.index'), queryParams)
        };

        const deleteUser = (user) => {
            if (user.id === 1) {
                alert("The admin account cannot be deleted.");
                return;
            }
            
            if (!window.confirm("You are about to delete this user, are you sure?"))
            {
                return;
            }
           router.delete(route("user.destroy", user.id))

          // href={route("user.destroy", user.id)}; 
        };

        const editUserCheck = (user) => {
            if (user.id === 1) {
                alert("The admin account cannot be edited.");
                return;
            }
        
            // Proceed with the edit functionality
            window.location.href = route("user.edit", user.id);
        };
    

    return(
        <AuthenticatedLayout
        user={auth.user}
        header={
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Users
            </h2>


            
            <Link 
            href={route("user.create")}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"> 
            Add New
            </Link>
            </div>
        }
        >


    <Head title="Users" />

        {success && (
        <div className="bg-emerald-500 py-2 px-4 text-white rounded">
          <div className="text-center"> {success} **demo picture upload disabled**</div>
        </div>
        )}
        <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {/* <pre>{JSON.stringify(users, undefined, 2)}</pre> */}
                            <div className="overflow-auto">
                            <table className="w-full text-sm text-left rtl:text-right
                            text-gray-500 dark:text-gray-400" >
                                 <thead className="text-xs text-gray-700 uppercase
                                bg-gray-50 dark:bg-gray-500" > 
                                <tr className="text-nowrap">
                                    <TableHeading 
                                    name="id"
                                    sort_field={ queryParams.sort_field}
                                    sort_direction={queryParams.sort_direction} 
                                    sortChanged={sortChanged}
                                    >
                                        ID
                                    </TableHeading>
                                        <TableHeading 
                                    name="name"
                                    sort_field={ queryParams.sort_field}
                                    sort_direction={queryParams.sort_direction} 
                                    sortChanged={sortChanged}
                                    >
                                        Name
                                    </TableHeading>
                                    <TableHeading 
                                    name="email"
                                    sort_field={ queryParams.sort_field}
                                    sort_direction={queryParams.sort_direction} 
                                    sortChanged={sortChanged}
                                    >
                                        Email
                                    </TableHeading>
                                    <TableHeading 
                                    name="create_date"
                                    sort_field={ queryParams.sort_field}
                                    sort_direction={queryParams.sort_direction} 
                                    sortChanged={sortChanged}
                                    >
                                        Create Date
                                    </TableHeading>
                                     <th className="px-2 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <thead className="text-xs text-gray-700 uppercase
                                bg-gray-50 dark:bg-gray-500" > 
                                    <tr className="text-nowrap">
                                        <td className="px-3 py-2">
                                           {/* ID */}
                                        </td>
                                        <td className="px-3 py-2">
                                           {/* Name */}
                                           <TextInput className="w-full"
                                           defaultValue={queryParams.name}
                                           placeholder="User Name"
                                           onBlur={e=> searchFieldChanged('name', e.target.value)}
                                           onKeyPress={e => onKeyPress('name', e)}
                                           />
                                        </td>
                                        <th className="px-3 py-2">
                                        <TextInput className="w-full"
                                           defaultValue={queryParams.email}
                                           placeholder="User Email"
                                           onBlur={e=> searchFieldChanged('email', e.target.value)}
                                           onKeyPress={e => onKeyPress('email', e)}
                                           />
                                           {/* Status */}
                                        </th>
                                        <th className="px-3 py-2">
                                        {/* Created Date */}
                                        </th>
                                        <th className="px-3 py-2 text-right">
                                           {/* Actions */}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.data.map(user => (
                                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={user.id}>
                                       <td className="px-3 py-2">
                                        {user.id}
                                       </td>
                                       <td className="px-3 py-2 text-gray-100 text-nowrap">
                                        {user.name}
                                       </td>
                                       <td className="px-3 py-2">
                                       {user.email}
                                       </td>
                                       <td className="px-3 py-2 text-nowrap">
                                       {user.created_at}
                                       </td>
                                       <td className="px-3 py-2 text-nowrap">
                                       <button 
                                       //href={route('user.edit', user.id)}
                                        className="font-medium text-blue-600
                                        dark:text-blue-500 hover:underline mx-1"
                                        onClick={(e) => editUserCheck(user)}
                                        >
                                        Edit
                                       </button>
                                       <button href={route('user.destroy', user.id)}
                                        className="font-medium text-red-600
                                        dark:text-red-500 hover:underline mx-1"
                                        onClick={(e) => deleteUser(user)}
                                        >
                                        Delete
                                       </button>
                                       {/* <Link href={route('user.edit', user.id)}
                                        className="font-medium text-blue-600
                                        dark:text-blue-500 hover:underline mx-1"
                                        >
                                        Edit
                                       </Link> */}
                                       </td>
                                   </tr>
                                    ))}
                                </tbody>
                            </table>
                            </div>
                            <Pagination links={users.meta.links} />
                            </div>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    )
}