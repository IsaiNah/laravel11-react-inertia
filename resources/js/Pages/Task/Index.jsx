import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants.jsx";
import { Head, Link, router } from '@inertiajs/react'; 

import TableHeading from "@/Components/TableHeading";

export default function Index({auth, tasks, queryParams = null}){
    queryParams = queryParams || {}
    const searchFieldChanged = (name, value) =>
    {
        if (value){
            queryParams[name] = value
        } else
        {
            delete queryParams[name]
        }
        router.get(route('task.index'), queryParams)
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
            router.get(route('task.index'), queryParams)
        }
    

    return(
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Tasks
            </h2>}
        >

    <Head title="Tasks" />

        <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {/* <pre>{JSON.stringify(tasks, undefined, 2)}</pre> */}
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
                                    <th 
                                    className="px-2 py-3">
                                        Image
                                        </th>
                                        <TableHeading 
                                    name="name"
                                    sort_field={ queryParams.sort_field}
                                    sort_direction={queryParams.sort_direction} 
                                    sortChanged={sortChanged}
                                    >
                                        Name
                                    </TableHeading>
                                    <TableHeading 
                                    name="status"
                                    sort_field={ queryParams.sort_field}
                                    sort_direction={queryParams.sort_direction} 
                                    sortChanged={sortChanged}
                                    >
                                        Status
                                    </TableHeading>
                                    <TableHeading 
                                    name="create_date"
                                    sort_field={ queryParams.sort_field}
                                    sort_direction={queryParams.sort_direction} 
                                    sortChanged={sortChanged}
                                    >
                                        Create Date
                                    </TableHeading>
                                    <TableHeading 
                                    name="due_date"
                                    sort_field={ queryParams.sort_field}
                                    sort_direction={queryParams.sort_direction} 
                                    sortChanged={sortChanged}
                                    >
                                        Due Date
                                    </TableHeading>
                                    <th className="px-2 py-3">Created By</th>
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
                                           {/* Image */}
                                        </td>
                                        <td className="px-3 py-2">
                                           {/* Name */}
                                           <TextInput className="w-full"
                                           defaultValue={queryParams.name}
                                           placeholder="Task Name"
                                           onBlur={e=> searchFieldChanged('name', e.target.value)}
                                           onKeyPress={e => onKeyPress('name', e)}
                                           />
                                        </td>
                                        <th className="px-3 py-2">
                                          <SelectInput className="w-full" 
                                             defaultValue={queryParams.status}
                                             onChange={e =>
                                            searchFieldChanged("status", e.target.value)
                                        }>
                                            <option value="">All</option>
                                            <option value="pending">Pending</option>
                                            <option value="in_progress">In Progress</option>
                                            <option value="completed">Completed</option>
                                            </SelectInput>
                                           {/* Status */}
                                        </th>
                                        <th className="px-3 py-2">
                                        {/* Created Date */}
                                        </th>
                                        <th className="px-3 py-2">
                                           {/* Due date */}
                                        </th>
                                        <th className="px-3 py-2">
                                           {/* Created By */}
                                        </th>
                                        <th className="px-3 py-2 text-right">
                                           {/* Actions */}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tasks.data.map(task => (
                                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={task.id}>
                                       <td className="px-3 py-2">
                                        {task.id}
                                       </td>
                                       <td className="px-3 py-2">
                                        <img src={task.image_path} style={{width:180}} alt="" />
                                       </td>
                                       <td className="px-3 py-2">
                                       {task.name}
                                       </td>
                                       <td className="px-3 py-2">
                                        <span className={"px-2 py-1 rounded " +
                                            TASK_STATUS_CLASS_MAP[task.status]
                                         }>
                                            <span className="text-white">
                                        {TASK_STATUS_TEXT_MAP[task.status]}
                                        </span>
                                        </span>
                                       </td>
                                       <td className="px-3 py-2 text-nowrap">
                                       {task.created_at}
                                       </td>
                                       <td className="px-3 py-2 text-nowrap">
                                       {task.due_date}
                                       </td>
                                       <td className="px-3 py-2">
                                       {task.createdBy.name}
                                       </td>
                                       <td className="px-3 py-2">
                                       <Link href={route('task.edit', task.id)}
                                        className="font-medium text-blue-600
                                        dark:text-blue-500 hover:underline mx-1"
                                        >
                                        Edit
                                       </Link>
                                       <Link href={route('task.destroy', task.id)}
                                        className="font-medium text-red-600
                                        dark:text-red-500 hover:underline mx-1"
                                        >
                                        Delete
                                       </Link>
                                       {/* <Link href={route('task.edit', task.id)}
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
                            <Pagination links={tasks.meta.links} />
                            </div>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    )
}