import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";

import TableHeading from "@/Components/TableHeading";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants.jsx";
import { Link, router } from '@inertiajs/react';

export default function TaskTable({ tasks, success, queryParams = null, hideProjectColumn = false }) {
    queryParams = queryParams || {}

    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value
        } else {
            delete queryParams[name]
        }
        router.get(route('task.index'), queryParams)
    }

    const onKeyPress = (name, e) => {
        if (e.key !== 'Enter') return;

        searchFieldChanged(name, e.target.value);
    }

    const sortChanged = (name) => {

        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === 'asc') {
                queryParams.sort_direction = 'desc'
            }
            else {
                queryParams.sort_direction = 'asc'
            }
        }
        else {
            queryParams.sort_field = name;
            queryParams.sort_direction = 'asc';
        }
        router.get(route('task.index'), queryParams)
    };

    const deleteTask = (task) => {
        if (!window.confirm("You are about to delete this task, are you sure?")) {
            return;
        }
        router.delete(route("task.destroy", task.id))

        // href={route("project.destroy", project.id)}; 
    };

    return (
        <>
            {success && (
                <div className="bg-emerald-500 py-2 px-4 text-white rounded">
                    <div className="text-center"> {success} **demo picture upload disabled**</div>
                </div>
            )}
            <div className="overflow-auto">
                <table className="w-full text-sm text-left rtl:text-right
                            text-gray-500 dark:text-gray-400" >
                    <thead className="text-xs text-gray-700 uppercase
                                bg-gray-50 dark:bg-gray-500" >
                        <tr className="text-nowrap">
                            <TableHeading
                                name="id"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                ID
                            </TableHeading>
                            <th
                                className="px-2 py-3">
                                Image
                            </th>
                            {!hideProjectColumn && (
                                <th
                                    className="px-2 py-3">
                                    Project Name
                                </th>
                            )}
                            <TableHeading
                                name="name"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Task
                            </TableHeading>
                            <TableHeading
                                name="status"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Status
                            </TableHeading>
                            <TableHeading
                                name="create_date"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Create Date
                            </TableHeading>
                            <TableHeading
                                name="due_date"
                                sort_field={queryParams.sort_field}
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
                            {!hideProjectColumn &&
                                <td className="px-3 py-2">
                                    {/* task name */}
                                </td>
                            }
                            <td className="px-3 py-2">
                                {/* Name */}
                                <TextInput className="w-full"
                                    defaultValue={queryParams.name}
                                    placeholder="Task Name"
                                    onBlur={e => searchFieldChanged('name', e.target.value)}
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
                                    <img src={task.image_path} style={{ width: 180 }} alt="" />
                                </td>
                                {!hideProjectColumn &&
                                    <td className="px-3 py-2">
                                        {task.project.name}
                                    </td>
                                }
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
                                <td className="px-3 py-2 text-nowrap">
                                    <Link href={route('task.edit', task.id)}
                                        className="font-medium text-blue-600
                                        dark:text-blue-500 hover:underline mx-1"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={(e) => deleteTask(task)}
                                        className="font-medium text-red-600
                                        dark:text-red-500 hover:underline mx-1"
                                    >
                                        Delete
                                    </button>
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
        </>
    )
}